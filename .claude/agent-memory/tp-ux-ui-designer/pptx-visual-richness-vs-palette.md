---
name: pptx-visual-richness-vs-palette
description: Aplica a cualquier entregable con design-system/ que genere o compare .pptx. "Unificar estilo" entre dos .pptx puede igualar colores/tipografía y dejar una diferencia real de riqueza visual sin resolver — layout/shape-richness es un eje aparte del eje de tokens (color/fuente), y hay que auditarlo con su propia métrica.
metadata:
  type: reference
---

Aplica a: cualquier entregable con `design-system/` que tenga o compare un
`.pptx`. Sigue directo a `tokens-drift-pptx-generation.md` (esa memoria es
sobre el eje de *tokens* — color/fuente; esta es sobre el eje de
*layout/riqueza visual*, que quedó sin resolver después de esa primera
pasada).

## El problema real

Una pasada de "unificación de estilo" entre
`materias/mt10-innovacion-tecnologica/fidelizacion-coto/entregable/
presentacion/plataforma-fidelizacion-coto.pptx` (17 slides, referencia) y
`materias/mt25-estrategias-negocios-internet/business-plan-coto/
entregable/presentacion/business-plan-coto.pptx` (13 slides) igualó colores
y tipografía (ver memoria hermana) pero la persona a cargo del repo siguió
viendo "mucha diferencia" entre ambos — con razón: mt10 tiene diseño
editorial real (callouts de cifra grande, chips/badges, tablas armadas
shape-por-shape, footer de marca consistente, step-strip) y mt25 era
"kicker + título + bullets en un textbox", visualmente plano aunque los
colores coincidieran exactamente.

**Lección**: cuando compares dos `.pptx` para "unificarlos", el chequeo de
tokens (colores hex, nombre de fuente) no alcanza — hay que auditar
también la variedad de *tipos de shape* y la densidad de composición por
slide. Métrica simple y verificable por script: contar `AUTO_SHAPE` por
slide con `python-pptx` (`Counter(str(shp.shape_type) for shp in
slide.shapes)`). mt10 tenía ~7.2 `AUTO_SHAPE`/slide contra ~1.5/slide del
mt25 original — ese ratio es la evidencia objetiva de "plano" que no se ve
mirando solo la paleta.

## La solución no es "agregar más shapes a mano" en un solo archivo

Se extrajo el patrón completo (kicker+headline, stat-callout grande,
stat-card, chip/chip-strip/chip-card, tabla comparativa por shapes,
callout note/risk, step-cards, roadmap con flechas, slide de título/cierre,
footer de marca) a un módulo compartido reusable:
`design-system/components/pptx_kit.py`, documentado pieza por pieza en
`design-system/components/pptx-pitch-deck.md`. Cualquier `build-pptx.py`
nuevo importa el kit en vez de reinventar textboxes sueltos — mismo
principio que ya aplica a componentes HTML del design-system, extendido a
`.pptx`.

## Bug real al escribir el kit — no mezclar `Length` (EMU) y floats

Al escribir `pptx_kit.py`, la primera versión mezcló convención de
unidades: algunas funciones (`_shape`, `comparison_table`, etc.) esperaban
floats-en-pulgadas y los envolvían con `Inches(...)` adentro, pero varios
parámetros default apuntaban a constantes ya envueltas
(`MARGIN_L = Inches(0.6)`, un objeto `Length`/`Emu`, que es subclase de
`int`). El resultado: `Inches(left)` donde `left` ya era un `Length` volvía
a multiplicar por 914400, generando una posición ~500.000 pulgadas fuera
de canvas — sin ningún error de python-pptx (no valida rango), el bug es
silencioso y solo se ve al abrir el archivo o al revisar posiciones por
script.

**Patrón de verificación que lo agarró**: después de armar cualquier
función nueva del kit (o de un `build-pptx.py` que lo usa), releer el
`.pptx` generado con `python-pptx` y verificar que
`shape.left/914400, shape.top/914400, shape.width/914400,
shape.height/914400` caen dentro de `[0, ancho_slide]` / `[0,
alto_slide]` para **todos** los shapes de **todas** las slides — no solo
mirar el resultado final abierto en PowerPoint. Este chequeo debería
correrse siempre después de tocar `pptx_kit.py`, no solo la primera vez.

**Decisión de diseño resultante**: la convención final del kit es "TODA
coordenada/tamaño en la API pública es un float en pulgadas, nunca un
`Length` ya envuelto" — documentado explícito en el docstring del módulo.
Si se agrega una función nueva al kit, seguir esa convención o vuelve a
aparecer el mismo bug.

## Segunda pasada (2026-08-04) — el kit no garantiza densidad, hay que usarlo a fondo

Un primer `build-pptx.py` que ya importaba `pptx_kit.py` correctamente
seguía viéndose "plano" en varias slides (usuario: "el documento pptx
sigue mal", sin overlap real pendiente) — 3.85 `AUTO_SHAPE`/slide contra
7.18/slide de mt10. **Tener el kit disponible no alcanza si varias slides
solo llaman `kicker_headline` + un bloque de bullets + un `callout_box`**
— exactamente el patrón plano original, solo que ahora con las piezas
correctas disponibles y sin usarlas. Se identificaron 6 de 13 slides en
ese estado (Equipo, Propósito, El problema, Solución, Modelo de negocio,
Por qué ahora, Modelo financiero) y se corrigieron reusando piezas ya
existentes del kit con datos que **ya estaban en el mismo documento o en
la misma slide** (nunca contenido nuevo):

- Un número que ya estaba en un bullet (ej. "20-30%" de reintegro MODO,
  slide "El problema") promovido a `stat_callout` al lado de los bullets
  — mismo patrón de mt10 (número + bullets), no un bullet más.
- Sub-bullets de 1-2 líneas cada uno promovidos a `chip_card` (slide
  "Solución": los 2 diferenciadores; slide "Modelo de negocio": los 3
  pilares de defensibilidad como `chip_strip` corto, confinado al ancho
  de su propia columna para no arriesgar overlap con la columna vecina).
- `stat_callout` sueltos en fila (4 mini-stats sin card, mucho espacio
  vacío debajo) convertidos a `stat_card` con la misma cifra/label — ver
  `pptx-stat-card-narrow-width-wrap-overlap.md` para un bug real que este
  cambio destapó.
- Una frase que ya estaba en el documento fuente pero no en la slide (la
  apertura de §9 "Cuatro fuentes independientes...") agregada como
  `callout_box(kind="note")` — la regla "no inventar contenido" permite
  traer texto del documento fuente aunque no estuviera ya en esa slide
  puntual, siempre que no sea nuevo respecto al documento.
- Un desglose que ya estaba en una tabla del documento (CAPEX por
  componente, §11.1) pero nunca se había volcado a la slide, agregado
  como `bullet_items` dentro de un `stat_card` existente.
- Una placeholder de una sola línea de texto (slide "Equipo", gap de
  contenido real, no inventable) rediseñada como `chip_card` + una
  segunda `callout_box` con la misma disclosure que ya estaba en el
  documento — se mejora el tratamiento visual de un gap señalado sin
  inventar los datos que faltan.

Resultado verificado: 5.23 `AUTO_SHAPE`/slide (de 3.85), 0 shapes fuera de
canvas, 0 overlaps nuevos confirmado por export a PNG con Keynote de las
13 slides. **Lección**: la métrica de conteo de shapes sirve para
detectar el problema, pero corregirlo requiere revisar slide por slide
qué pieza del kit correspondía a ese contenido puntual — no hay un fix
automático de "correr un script que aumente el conteo".
