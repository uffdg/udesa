# design-system/

Recurso compartido de estilo visual para cualquier presentación o entregable
de la maestría — no pertenece a una materia en particular, se convoca desde
cualquiera.

- `tokens/` — valores concretos extraídos directamente del CSS real de
  awwwards.com (no de su temario/curso): tipografía, color, spacing, radios,
  motion. Ver `tokens/tokens.md` (lectura humana + qué adoptamos) y
  `tokens/tokens.css` (valores listos para usar).
- `components/` — patrones de componente:
  - `button.md` — extraído de awwwards.com.
  - `nav-presentacion.md` — navegación para decks HTML tipo landing, con
    barra de progreso, nav por bloques, step-strip para sub-secciones y
    controles prev/next.
  - `card-gap.md` — card para señalar contenido no resuelto/placeholder
    (ej. "Equipo" sin integrantes reales todavía).
  - `pptx-pitch-deck.md` + `pptx_kit.py` — patrón editorial completo para
    presentaciones en formato **.pptx** (kicker+headline, stat callouts,
    chips, tablas por shapes, footer de marca, roadmap con flechas, slide
    de título/cierre), extraído de
    `materias/mt10-innovacion-tecnologica/fidelizacion-coto/entregable/
    presentacion/plataforma-fidelizacion-coto.pptx` — la fuente canónica
    de cómo se ve un `.pptx` en este repo. `pptx_kit.py` es el módulo
    Python importable con los helpers ya implementados.
- `references/` — vacío por ahora. Guardar acá screenshots o notas propias
  si querés ampliar la referencia visual más allá de lo que da el CSS
  público (layout, motion real, composición de página que no se ve en el
  markup).

## Cómo se usa desde un TP

Cuando `tp-presentation-designer` arma el guion de una presentación
(`entregable/presentacion/`), puede consultar `design-system/tokens/` y
`design-system/components/` para mantener consistencia visual entre
entregables de distintas materias — pero el contenido de cada presentación
sigue siendo específico de su propio TP.

**Si el entregable de la presentación es un archivo `.pptx`** (no HTML), la
regla es dura, no una sugerencia: el `build-pptx.py` de ese entregable
**importa `design-system/components/pptx_kit.py`** y sigue el patrón
documentado en `pptx-pitch-deck.md` — nunca arma shapes/textboxes sueltos
desde cero con `python-pptx` puro. Esto aplica a cualquier `.pptx` nuevo de
cualquier materia, no solo a los dos entregables que ya lo usan
(`mt10-innovacion-tecnologica/fidelizacion-coto` y
`mt25-estrategias-negocios-internet/business-plan-coto`).

## Estado actual

Primera pasada hecha: paleta, tipografía (Inter Tight), escala de peso,
radios, spacing y el patrón de botón, todo extraído del CSS público de
awwwards.com el 2026-07-28. Segunda pasada (2026-08-04): patrón editorial
completo de `.pptx` (`pptx-pitch-deck.md` + `pptx_kit.py`) extraído de
las 17 slides de `plataforma-fidelizacion-coto.pptx` (mt10) y aplicado a
`business-plan-coto.pptx` (mt25) — ver ambos componentes para el detalle.
Falta: decidir qué del resto de tokens de awwwards queda tal cual y qué se
adapta (ver la tabla al final de `tokens/tokens.md`).
