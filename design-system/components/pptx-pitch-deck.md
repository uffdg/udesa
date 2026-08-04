---
name: pptx-pitch-deck
fuente: materias/mt10-innovacion-tecnologica/fidelizacion-coto/entregable/presentacion/plataforma-fidelizacion-coto.pptx
método: lectura directa de shapes (posición, tamaño, fill, texto, fuente) con python-pptx sobre las 17 slides completas, el 2026-08-04
implementación: design-system/components/pptx_kit.py
---

# Pitch deck .pptx — patrón editorial

**Fuente canónica: `plataforma-fidelizacion-coto.pptx` (mt10). Cualquier
`.pptx` nuevo en este repo, de cualquier materia/entregable, replica esta
estructura — no solo su paleta.** No se edita ese archivo (es la
referencia), y no se reinventa el patrón desde cero en cada entregable: se
importa `design-system/components/pptx_kit.py`.

Este documento existe porque una primera pasada de "unificación de estilo"
entre dos `.pptx` del repo igualó colores y tipografía pero dejó una
diferencia real de **riqueza visual/layout**: un deck con callouts de
cifra grande, chips, tablas armadas shape-por-shape y footer de marca
consistente (mt10, 122 `AUTO_SHAPE` en 17 slides, ~7.2/slide) contra un
deck de bullets en textbox sueltos (mt25 antes de esta pasada, 20
`AUTO_SHAPE` en 13 slides, ~1.5/slide). La paleta nunca fue el problema —
la ausencia de estos componentes sí.

## Por qué shapes y no `add_table` / bullets nativos de PowerPoint

mt10 no usa `slide.shapes.add_table` en ninguna de sus 17 slides — cada
tabla comparativa está armada con rectángulos + textboxes alineados a una
grilla de columnas. Es más código, pero da control total de tipografía,
spacing y alineación vertical, y mantiene el mismo lenguaje visual (mismos
radios, mismo `INK` de header, mismo `BORDER` hairline) que el resto del
deck — una tabla nativa de PowerPoint no puede heredar eso. Mismo criterio
para las viñetas: nunca bullets nativos (`•` de PowerPoint), siempre un
run de texto con el marcador "—  " en `BRAND` seguido del texto en `INK`.

## Piezas del patrón

Todas están implementadas en `pptx_kit.py`. Medidas en pulgadas (el kit
trabaja con floats, no `Length`/EMU en su API pública).

### 1. Fondo full-bleed (`set_bg`)

Rectángulo `0,0` a `13.333x7.5in` como **shape[0]** de todo slide. `BG_LIGHT`
(`#F8F8F8`) para slides de contenido, `DARK`/`INK` (`#222222`) para título
y cierre. Nunca se deja el blanco puro default de PowerPoint.

### 2. Kicker + headline (`kicker_headline`)

- Kicker: `top=0.5in h=0.4in`, 13pt bold `BRAND`, MAYÚSCULA (ej. "EL
  PROBLEMA", "LA PROPUESTA · 1 DE 5").
- Headline: `top=0.85in h=1.15in`, 26-27pt bold `INK` (varía 25-27pt según
  largo del texto en mt10, pero 26 es el default razonable).
- Sin línea divisoria debajo — a diferencia de un patrón HTML típico,
  mt10 nunca separa kicker/headline del cuerpo con un rule.
- Devuelve el `top` sugerido para el cuerpo (default 2.30in, pero varía
  2.10-2.50in en mt10 según densidad de contenido del slide — pasalo
  explícito si el body es denso).

### 3. Slide de título (`slide_titulo`)

Fondo `DARK`. Barrita de acento `0.5x0.06in` en `BRAND` (`top=2.55in`).
Título 42pt bold blanco (`top=2.75in`). Subtítulo 18pt `ON_DARK_SUBTLE`
(`top=3.75in`). Meta-línea 13pt `ON_DARK_TINT` (`top=5.40in`, ej. "MT10 —
Innovación Tecnológica · Presentación a CFO/CEO/CMO · 10 minutos").
Créditos 10.5pt `ON_DARK_FAINT`, la línea más tenue del deck (`top=6.90in`).

### 4. Stat callout (`stat_callout`)

La cifra "suelta" que domina un slide — ej. `35—45%`, `<800 ms`,
`3% → 12%`. Número gigante (52-80pt bold, `BRAND` o `ORANGE` si es un
costo/urgencia) en `left=0.6 top=2.35 w=5.6in`, label chico (14.5-17pt
`MUTED`) inmediatamente debajo. Sin card ni fondo — es tipografía pura
como elemento gráfico. Bajar `big_size` (ej. 28-34pt) y `width` para usarlo
en fila de 3-4 mini-stats (ver slide "Por qué ahora" en el ejemplo de
mt25).

### 5. Stat card (`stat_card`)

Variante "en caja": rounded-rect blanca (`radius≈0.06`, ver
`card.adjustments[0]`) con cifra grande (28pt bold `BRAND`) + label (13pt
`MUTED`) + lista opcional de `bullets_dash` adentro. Usarla junto a un
`stat_callout` cuando el número necesita contexto/soporte narrativo al
lado (mt10 slide 2: `35—45%` suelto a la izquierda + card `12.000.000`
con 3 bullets a la derecha).

### 6. Chip / badge (`chip`, `chip_strip`, `chip_card`)

Rounded-rect chico, radio completo (`adjustments[0]=0.5`, cápsula). Activo:
fill `BRAND`, texto blanco bold. Inactivo: fill `BORDER` (`#EDEDED`), texto
`MUTED`.

- `chip_strip`: fila de chips, uno activo — es el **step-strip** de mt10
  ("EN CAJA · RECLAMO POSVENTA · CAMPAÑAS · COTO DIGITAL · REDES", con el
  kicker del slide diciendo "LA PROPUESTA · N DE 5"). Mismo componente que
  `nav-presentacion.md` documenta para HTML — acá es su equivalente pptx.
- `chip_card`: composición nueva (no estaba literal en mt10, pero es la
  combinación natural de `stat_card` + `chip`) para comparar N ítems con
  etiqueta corta cada uno cuando una tabla quedaría demasiado angosta para
  el texto de cada celda (ej. 4 competidores con 1-2 oraciones cada uno).

### 7. Callout box (`callout_box`)

Rounded-rect pale con texto itálico 12.5pt `INK`. Dos variantes, **nunca
amarillo** (mt10 no tiene ese color en su paleta de callouts):
- `kind="note"`: fondo `BRAND_PALE` — aclaración metodológica neutra (ej.
  "no le asignamos un número de retorno propio a este componente...").
- `kind="risk"`: fondo `ORANGE_PALE` — riesgo, gap abierto, límite honesto
  (ej. "no hay fuente que confirme quién financia hoy los reintegros...").

### 8. Tabla comparativa por shapes (`comparison_table`)

Header rounded-rect `INK` + rectángulo fino `INK` debajo para "cuadrar" la
esquina redondeada contra la primera fila. Filas alternando blanco/`BG_LIGHT`,
separadas por un hairline `BORDER` (`h=0.01in`). Texto de celda 12-13.5pt
`INK`, headers 13pt bold blanco. `highlight_row` pinta una fila en
`BRAND_PALE` con la segunda columna en bold (patrón "Caso base" destacado
en la tabla de sensibilidad del caso de ROI).

### 9. Step cards (`step_cards`)

3 (o N) tarjetas blancas iguales, cada una con círculo numerado (`0.55in`,
fill `BRAND`, número blanco bold 20pt) + título 16pt bold `INK` + descripción
12.5pt `MUTED`. Patrón "Fase 0" de mt10 (3 experimentos de bajo costo). Usar
para pasos/hitos sin flujo secuencial estricto — si hay flujo con
antes/después, usar `roadmap_arrows`.

### 10. Roadmap arrows (`roadmap_arrows`)

N tarjetas de fase conectadas por flechas (`RIGHT_ARROW`, fill `BRAND`).
La fase activa (`active_index`) se pinta `BRAND` sólido con texto blanco/
`ON_DARK_CALLOUT_BODY`; el resto queda blanca con texto `INK`/`MUTED`.
Patrón "Tres fases con gates de decisión" de mt10 (Fase 0 → 1 → 2 → 3).
Reusable para cualquier roadmap temporal de 2 a 5 pasos (ver roadmap de 3
años de Producto y SOM año-a-año en el ejemplo de mt25).

### 11. Footer de marca (`footer_marca`)

Bottom-left: `"MARCA  ·  Sección"`, 9pt `MUTED` (o `ON_DARK_FAINT` sobre
fondo oscuro), `top=7.12in`. Bottom-right: número de página, mismo estilo,
`left=12.30in`. En **todos** los slides sin excepción — es la firma visual
de que el deck es un documento único, no slides sueltas.

### 12. Slide de cierre (`slide_cierre`)

Fondo `DARK`. Quote grande 32pt bold blanca (`top=1.70in`). Subtexto
opcional 16pt `ON_DARK_SUBTLE`. Callout final en rounded-rect `DARK_PURPLE`
(`top=5.00in h=1.55in`) con kicker 13pt bold `ON_DARK_CALLOUT_KICKER` +
texto 14pt blanco — el "ask" o cierre de la presentación (en mt10: "LO QUE
PEDIMOS HOY" + autorizar la Fase 0). Si el entregable no tiene un ask
explícito con fuente (ej. un pitch a inversores sin pedido de aprobación
puntual), no inventar uno — usar ese espacio para la transición real del
guion (ej. hacia Q&A), nunca para una cifra o pedido no sourced.

### 13. Notas del orador (`add_speaker_notes`)

`slide.notes_slide.notes_text_frame.text = texto` (wrapped en
`k.add_speaker_notes(slide, texto)`). No es una pieza visual — es el panel
de notas del `.pptx`, invisible en la slide y al proyectar en modo
presentación estándar.

**Criterio de qué va en notas vs. qué queda en un `callout_box` visible**
(decisión de mt25-business-plan-coto, 2026-08, reusable en cualquier
entregable con este kit):

- Notas del orador: contenido de **proceso interno del equipo** — gaps
  pendientes del propio documento ("no tenemos nombres reales todavía"),
  preguntas explícitamente reservadas para Q&A que no aportan al argumento
  central de la slide en curso. No es información que la audiencia
  necesite leer en pantalla; es una acotación que el presentador puede
  decir o no según cómo vaya la charla.
- `callout_box` visible: cualquier disclosure requerido por la regla dura
  del repo de no afirmar un dato sin fuente (`kind="risk"` para riesgo/gap/
  supuesto sin fuente, `kind="note"` para aclaración metodológica) cuando
  ese disclosure es parte del argumento que la audiencia necesita ver para
  evaluar el pitch con criterio — no se "esconde" un supuesto en notas
  solo porque es incómodo. La prueba práctica: si el texto empieza con un
  framing tipo "dicho en voz alta" o es la tesis central de la slide, se
  queda visible; si sueña a nota de producción del propio equipo, va a
  notas.

**Regla dura si se usa `add_speaker_notes` en cualquier slide del deck:
guardar siempre con `k.save_deck(prs, path)`, nunca `prs.save(path)`
directo.** Bug real de python-pptx (verificado en 1.0.2): agregar notas
del orador crea el part `notesMaster` y su relationship, pero nunca
escribe `<p:notesMasterIdLst>` en `presentation.xml` — PowerPoint tolera
la omisión, **Keynote rechaza el `.pptx` entero como "formato inválido"**
al intentar abrirlo (no solo la slide con notas). `save_deck` agrega ese
elemento faltante antes de guardar; es no-op si el deck no tiene notas, así
que no tiene costo usarlo siempre como único punto de guardado. Ver
`.claude/agent-memory/tp-ux-ui-designer/pptx-notes-keynote-invalid-format.md`
para el diagnóstico completo y cómo verificar sin depender de Keynote.

## Fuente — Inter/Inter Tight, requiere instalación local (decisión explícita)

`pptx_kit.py` setea `FONT = "Inter"` en cada `_run(...)` (todo el texto del
deck), pero **un `.pptx` no embebe ni resuelve fallback de familia
tipográfica como un navegador con Google Fonts** — si la fuente no está
instalada en la máquina que abre el archivo, PowerPoint/Keynote sustituyen
por otra (en la práctica, algo tipo Times/Georgia), y ese fallback puede
además tener métricas de caracter más anchas, lo que empuja wrapping extra
y puede generar overlaps de texto en layouts ajustados.

**Decisión: no se embebió la fuente en el `.pptx` — se documenta acá el
requisito de tenerla instalada.** Se evaluó embeber `Inter`/`Inter Tight`
directamente en el archivo (así se ve igual en cualquier máquina sin
depender de instalación previa), pero a diferencia de `.docx` — donde
Word embebe la fuente con una obfuscación simple (XOR de los primeros 32
bytes del TTF/OTF contra un GUID, ver ECMA-376 Parte 4 §2.8.1) — la
especificación de Microsoft para `.pptx`
([MS-OE376] §15.2.12) dice explícitamente que **PowerPoint no usa ese
mecanismo**: guarda la fuente como EOT (Embedded OpenType) o Micro Type
Express, un contenedor binario propio que hay que generar correctamente
(checksums, tablas, compresión), no un TTF con bytes XOR-eados. No hay
librería confiable disponible en este repo (`fontTools` no trae encoder
EOT/MTX) para producirlo con confianza, y no hay forma de validar el
resultado contra PowerPoint real en este entorno (solo Keynote, que no
necesariamente valida lo mismo que Microsoft). Hand-rollear ese formato
binario sin poder verificarlo contra PowerPoint real es más riesgo de
corromper el archivo que beneficio — se optó por la alternativa explícita
en vez de una "solución" no verificable.

**Qué hacer en cualquier máquina que abra estos `.pptx`** (la del
profesor, otra notebook del equipo): instalar `Inter` e `Inter Tight`
antes de abrir el archivo, si se quiere ver con la tipografía real del
design-system en vez del fallback:

- Inter Tight (variable): https://github.com/google/fonts/raw/main/ofl/intertight/InterTight%5Bwght%5D.ttf
- Inter (variable): https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf

Es el mismo trade-off que aceptaría cualquier plantilla corporativa de
PowerPoint con tipografía custom no estándar — no es una solución de
peor calidad, es una decisión de riesgo/beneficio explícita, documentada
acá y en el `README.md` de `entregable/presentacion/` de cada entregable
que use este kit.

## Colores — no aproximar a mano

Ver `pptx_kit.py` para los valores `RGBColor` exactos. Resumen: `BRAND`
`#502BD8` (acento primario), `BRAND_PALE` `#ECE7FA`, `INK` `#222222`,
`MUTED` `#6E6E6E`, `BG_LIGHT` `#F8F8F8`, `BORDER` `#EDEDED`, `ORANGE`
`#FA5D29` (costo/riesgo/urgencia — **no** `#B8940A`/amarillo, eso no
existe en mt10), `ORANGE_PALE` `#FDE6DA`, `DARK_PURPLE` `#332A52` (callout
de cierre), más 4 tintes de texto sobre fondo oscuro (`ON_DARK_SUBTLE`,
`ON_DARK_FAINT`, `ON_DARK_TINT`, `ON_DARK_CALLOUT_KICKER`/`_BODY`).

## Cuándo usar cada pieza — heurística rápida

| Si el contenido es... | Usar |
|---|---|
| Una cifra que domina el mensaje del slide | `stat_callout` |
| Una cifra con 2-3 puntos de contexto al lado | `stat_card` |
| Sub-secciones de un mismo bloque temático (navegación "paso N de M") | `chip_strip` |
| N ítems cortos con etiqueta + 1-2 oraciones cada uno | `chip_card` (si no entra en tabla) o filas de `comparison_table` |
| Datos tabulares con 3+ columnas | `comparison_table` |
| Aclaración metodológica / supuesto marcado como tal | `callout_box(kind="note")` |
| Riesgo, gap, límite honesto | `callout_box(kind="risk")` |
| 3-5 hitos/experimentos sin orden estricto | `step_cards` |
| Fases con antes/después temporal (roadmap) | `roadmap_arrows` |

## Cuándo NO forzar el patrón

No todo slide necesita las 10 piezas. mt10 mezcla con criterio: slides de
solo bullets + callout existen (ej. "Redes sociales y WhatsApp"), y no
todo texto se convierte en `stat_callout` porque sí — solo la cifra que
realmente es el mensaje central del slide. Forzar un `chip_strip` en un
deck de 5 slides sin sub-secciones, o partir un roadmap de 2 fases en
cards cuando una oración alcanza, es sobre-diseño. Ver la misma regla en
`nav-presentacion.md` ("no fuerces las 5 piezas si el deck es chico").

## Ejemplo de referencia de uso del kit

`materias/mt25-estrategias-negocios-internet/business-plan-coto/entregable/presentacion/build-pptx.py`
reconstruye un deck de 13 slides (plantilla de pitch a inversores) contra
este mismo kit — útil como segundo ejemplo real además de mt10 al armar un
`build-pptx.py` nuevo.
