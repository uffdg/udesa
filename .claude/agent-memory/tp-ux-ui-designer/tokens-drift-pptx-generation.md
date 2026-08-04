---
name: tokens-drift-pptx-generation
description: Aplica a cualquier entregable con design-system/ que genere un .pptx con python-pptx (script tipo build-pptx.py). Dónde aparece drift real de tokens en pptx generados por script vs. un pptx ya existente, y por qué python-pptx nunca hereda fuente/color del CSS del design-system.
metadata:
  type: reference
---

Aplica a: cualquier entregable con `design-system/` que tenga o vaya a tener
un script `build-pptx.py` (python-pptx) para generar la presentación .pptx.
Caso real: `materias/mt25-estrategias-negocios-internet/business-plan-coto/
entregable/presentacion/build-pptx.py` (auditoría 2026-08-04), comparado
contra `materias/mt10-innovacion-tecnologica/fidelizacion-coto/entregable/
presentacion/plataforma-fidelizacion-coto.pptx` (binario ya existente, sin
script — se tomó como fuente de verdad porque sus colores coincidían 1:1
con `presentacion.html` y por lo tanto con los tokens derivados reales).

## Patrón de drift encontrado

Un script que define sus propios `RGBColor(...)` "a mano" para parecerse al
acento del design-system casi nunca coincide con el hex exacto, incluso
cuando la intención es la correcta. En `build-pptx.py` aparecieron tres
casos, todos con la forma "visualmente parecido, hex distinto":

- `BRAND_PALE = RGBColor(0xED, 0xE9, 0xFB)` vs. el real `#ECE7FA`
  (`--color-awards-light`, derivado, ya usado en ambos HTML y en el pptx de
  mt10) — 1-2 puntos de diferencia por canal, invisible a simple vista,
  pero no es el mismo tint.
- `INK = RGBColor(0x1F, 0x1A, 0x2E)` vs. el real `#222222`
  (`--color-primary` de tokens.css) — acá el error es mayor: un ink con
  tinte violeta inventado, no el neutro gris-negro que define el token.
- `MUTED = RGBColor(0x6B, 0x63, 0x75)` vs. el real `#6E6E6E` (`--muted`,
  derivado, mismo patrón que `--color-awards-light`: no está en
  tokens.css pero sí está ya establecido y reusado en HTML + pptx de mt10).

Lección: cuando exista ya un artefacto hermano (otro pptx, un HTML) que use
la misma paleta derivada, ese artefacto es la fuente de verdad para los
hex exactos — no tokens.css solo, porque varios de los colores realmente
usados (`--muted`, `--color-awards-light`) son derivados que no viven en
tokens.css sino que fueron definidos ad-hoc en el primer HTML y después
reusados. Extraer los hex con python-pptx del pptx hermano y compararlos
con `grep -ohE "#[0-9a-fA-F]{6}"` sobre el HTML hermano es más confiable
que "elegir un color que se vea parecido".

## El gap que no es un color equivocado: fuente nunca seteada

`build-pptx.py` no llamaba a `r.font.name = ...` en ningún run. Un
`Presentation()` de python-pptx sin plantilla custom trae el tema default
de PowerPoint, cuyo `major/minor latin font` es **Calibri** — no hay
manera de que un pptx generado así "herede" `Inter Tight`/`Inter` del CSS
del design-system, porque un .pptx no lee `tokens.css` ni tiene concepto
de font-stack con fallback. Cada run de texto necesita `r.font.name`
seteado explícitamente, o cae en Calibri sin ningún error ni warning.

Patrón de corrección: una constante `FONT = "Inter"` (mismo nombre exacto
que ya usa el pptx hermano de mt10 en sus 328 runs — no "Inter Tight",
python-pptx/PowerPoint no resuelve fallback de familia como el navegador)
y agregar `r.font.name = FONT` en cada lugar donde el script llama
`.add_run()` o itera `paragraph.runs` (helpers reusables tipo `header()`,
`bullets()`, `callout()`, `footer()`, y cualquier bloque de slide que cree
runs fuera de esos helpers, incluyendo celdas de tabla vía
`cell.text_frame.paragraphs`).

## Cómo verificar sin abrir PowerPoint

`python-pptx` para releer el .pptx generado y confirmar por script, no a
ojo:

```python
from pptx import Presentation
prs = Presentation(path)
# recorrer shapes -> paragraphs -> runs (y tablas: shape.has_table ->
# table.rows -> cell.text_frame.paragraphs -> runs) e imprimir
# r.font.name, r.font.color.rgb y shape.fill.fore_color.rgb
```

Juntar los valores únicos encontrados (`sort -u` sobre el dump) y
compararlos contra el set esperado es más rápido que revisar slide por
slide, y deja rastro verificable en el resumen del audit.
