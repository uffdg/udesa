---
name: pptx-stat-card-narrow-width-wrap-overlap
description: Bug real en design-system/components/pptx_kit.py — stat_card() envolvía el número grande (word_wrap=True heredado de textbox()) cuando la card era angosta (≤~2.8in) y el big_text tenía varios caracteres (ej. "34%→43%"), haciendo que la segunda línea del número se superpusiera visualmente con el label de abajo. Fix aplicado (word_wrap=False en esa textbox) + protocolo de cuándo stat_card necesita menos ancho de fuente que stat_callout para el mismo texto.
metadata:
  type: reference
---

Aplica a: cualquier `build-pptx.py` de cualquier entregable que use
`design-system/components/pptx_kit.py` y llame a `stat_card()` con un
`big_text` largo (ej. un rango tipo "34%→43%", no solo "84%") dentro de
una card angosta (fila de 3-4 mini-stats, no una card ancha de una sola
cifra dominante).

## El bug (encontrado 2026-08-04, segunda pasada de riqueza visual sobre
`materias/mt25-estrategias-negocios-internet/business-plan-coto/entregable/presentacion/business-plan-coto.pptx`)

Al convertir la fila de 4 mini-stats de la slide "Por qué ahora" de
`stat_callout` (tipografía suelta, sin card) a `stat_card` (rounded-rect
blanca detrás, ver `pptx-visual-richness-vs-palette.md` para el motivo de
ese cambio), el segundo stat ("34%→43%", `big_size=30`, card
`width=2.75in`) apareció con el número partido en dos líneas ("34%→43" /
"%") y la segunda línea pisando el texto del label de abajo — exactamente
el síntoma de overlap que motivó la regla dura de este agente.

**Causa raíz**: `stat_card` reserva `inset_w = width - 0.65` para el
padding interno (0.35in a cada lado) — con `width=2.75`, el número grande
solo tiene **2.10in** de ancho útil, no los 2.75in que tendría un
`stat_callout` con el mismo `width` (que usa el ancho completo, sin
inset). La textbox del número en `stat_card` heredaba `word_wrap=True` de
`textbox()` (el default), así que un texto que no entra en una línea a
ese tamaño se parte en dos en vez de desbordar horizontalmente — y la
segunda línea cae exactamente sobre el label, que está a una distancia
fija (`top + 0.88`) pensada para un número de una sola línea.

**Por qué no se vio en los otros dos usos existentes de `stat_card`** (slide
"Tamaño de mercado", cards de 5.75in; slide "Modelo financiero", card de
5.6in): con esas cards anchas, el inset (`width - 0.65`) sigue siendo
generoso incluso para textos largos tipo "≈ ARS 24,8 billones/año" a
22pt — el bug es específico de filas de mini-stats angostas (3-4 cards en
el ancho de una slide) combinadas con un `big_text` de varios caracteres
(un rango con flecha, no un porcentaje corto de 2-3 dígitos).

## El fix — dos capas, no una sola

1. **Defensivo en el kit** (`pptx_kit.py`, función `stat_card`): la
   textbox del número grande ahora se crea con `word_wrap=False`. Si un
   número no entra en el ancho de la card, en el peor caso se recorta
   contra el borde de la card (o la desborda ligeramente hacia afuera)
   en vez de invadir la línea del label de abajo — mismo criterio que
   "mejor un overflow visible y raro que un overlap que hace el texto
   ilegible".
2. **En el `build-pptx.py` que dispara el caso**: bajar `big_size` para
   esa fila de mini-stats (de 30 a 24) — el tamaño que en un
   `stat_callout` de `width=2.75` (ancho completo) se veía bien, en un
   `stat_card` del mismo `width` necesita ser más chico porque el ancho
   útil real es ~0.75in menor. Regla práctica: si se migra un
   `stat_callout` a `stat_card` manteniendo el mismo `width`, achicar
   `big_size` en un ~15-25% si el `big_text` tiene más de ~5-6
   caracteres (porcentajes cortos como "84%" no necesitan el ajuste).

## Verificación

Export a PNG con Keynote (mismo protocolo que el resto de este repo) tras
el fix — el número "34%→43%" quedó en una sola línea, sin pisar el label.
Se revisaron también las otras 3 cards de la misma fila y las otras dos
slides que usan `stat_card` (sin el bug, como se esperaba dado el análisis
de causa raíz) para confirmar que el `word_wrap=False` nuevo no rompió
nada — los `big_text` de esas cards son cortos o las cards son anchas, así
que nunca se acercaban al límite de ancho.

## Alcance de la lección

Cualquier pieza nueva de `pptx_kit.py` que reciba texto de longitud
variable dentro de un contenedor con padding interno fijo (no solo
`stat_card`) debería preguntarse explícitamente "¿qué pasa si el texto es
más largo de lo que vi en el caso que estoy probando ahora?" — el mismo
patrón de bug (funciona con el dato de prueba, se rompe con el próximo
dato real) ya apareció antes con `bullets_height()` siendo una estimación
en vez de una medición real (ver `pptx-callout-buffer-overlap.md`). Acá la
superficie distinta es el ancho de un textbox de una sola línea con
`word_wrap=True` por default, no la altura de un bloque de texto
multilínea — mismo principio, buffer/comportamiento defensivo en vez de
asumir que el caso actual es representativo de todos los usos futuros.
