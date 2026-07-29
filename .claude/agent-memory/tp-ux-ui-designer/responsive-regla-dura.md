---
name: responsive-regla-dura
description: Por qué el responsive es obligatorio siempre, no opcional — origen del bug real que lo motivó
metadata:
  type: feedback
---

Aplica a: cualquier entregable con `design-system/` (patrón general, no
específico de un TP).

## Qué pasó

En `mt10-innovacion-tecnologica/fidelizacion-coto`, la primera versión de
`presentacion.html` (landing de la presentación) se armó con `.slide {
height: 100vh; overflow: hidden; }` — funcionaba bien en desktop porque el
contenido entraba en una pantalla grande, pero en mobile (viewport angosto
y bajo) el contenido de las slides más densas (tablas, tarjetas apiladas,
timeline de 4 fases) no entraba en 100vh y **se recortaba silenciosamente**,
sin scroll ni aviso. El usuario tuvo que pedir explícitamente "ajustá la
vista responsive" para que se corrigiera — no se había contemplado desde el
diseño inicial.

## Por qué importa

Recortar contenido sin avisar es peor que "verse distinto" — el usuario que
abre la landing en el celular ni se entera de que le falta información. Y
como el pedido original nunca mencionó mobile explícitamente, quedó como
deuda técnica invisible hasta que alguien lo notó a mano.

## Cómo se corrigió (patrón a reusar)

- `min-height: 100dvh` (con fallback `100vh`) en vez de `height: 100vh` +
  `overflow: hidden` — el contenido puede crecer más allá de una pantalla
  si hace falta, en vez de recortarse.
- `scroll-snap-type: y proximity` en vez de `mandatory` — para que el snap
  entre secciones no pelee con el scroll interno de una sección que creció
  más alta que el viewport.
- Breakpoint dedicado a mobile angosto (no solo uno intermedio tipo
  tablet), con layouts de fila (timelines, grids) convertidos a columna
  explícitamente, no dejados a un `flex-wrap` genérico.
- Tablas: `overflow-x: auto` en el contenedor + `min-width` en la tabla,
  para que aparezca scroll horizontal en vez de comprimir columnas.

## Cómo aplicarlo

Esta memoria es la razón detrás de la sección "Responsive — regla dura, no
opcional" en `.claude/agents/tp-ux-ui-designer.md`. No es una preferencia
estética — es la lección concreta de que "responsive" no puede ser un paso
opcional pedido aparte, tiene que estar en la primera pasada de cualquier
entrega de este agente.
