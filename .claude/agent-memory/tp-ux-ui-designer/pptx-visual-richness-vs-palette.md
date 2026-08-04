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
