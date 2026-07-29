---
name: nav-presentacion
fuente: patrón propio, implementado por primera vez en materias/mt10-innovacion-tecnologica/fidelizacion-coto/entregable/presentacion/presentacion.html
---

# Navegación para presentaciones HTML tipo landing

Patrón para convertir un deck de slides HTML (scroll-snap, una sección por
viewport) en algo navegable de verdad, sin librerías externas. Pensado para
decks largos (10+ secciones) organizados en bloques temáticos con
sub-secciones.

## Piezas del patrón

1. **Barra de progreso** (`.progress-track` / `.progress-fill`): 3px fija
   arriba de todo, se llena según el índice de sección actual / total. No
   compite visualmente con el contenido.
2. **Nav superior fija** (`.topnav`): lista plana de los bloques
   *principales* del deck (no una entrada por sección — agrupar sub-pasos
   bajo un solo link al primero del grupo). Se resalta el link activo según
   en qué sección está el usuario (via `data-group` en cada `<section>` +
   scroll listener con `getBoundingClientRect`). En mobile se vuelve una
   fila horizontal con scroll propio (`overflow-x:auto`) en vez de colapsar
   a hamburguesa — más simple y sigue siendo 100% usable.
3. **Step-strip** (`.step-strip` / `.step-chip`): para navegar entre las
   sub-secciones de un mismo bloque (ej. los 5 pasos del recorrido de
   cliente, o los 4 pasos de un caso de ROI). Mismo componente visual
   reusado en ambos casos — son chips con estado `.active`, cada uno con
   `data-target="<id-de-sección>"`.
4. **Controles prev/next** (`.navbtn-group`): dos botones circulares fijos
   abajo a la derecha, siguiendo el patrón de botón ya definido en
   `button.md` (altura `--button-height: 48px`, radio `--rounded-normal`).
   Se deshabilitan en el primer/último slide.
5. **Teclado**: flechas/PageUp/PageDown avanzan o retroceden una sección;
   Home/End saltan al principio/final. Todo con `scrollIntoView({behavior:
   'smooth'})`, sin dependencias.

## Por qué así

- Sin librerías externas — todo es CSS + ~50 líneas de JS vanilla
  (`getBoundingClientRect` para detectar sección activa, sin
  IntersectionObserver para evitar la complejidad de sus thresholds con
  secciones de `height:100vh` exactas).
- La nav superior muestra *bloques*, no las 17 secciones individuales —
  con 10+ secciones un link por sección se vuelve ilegible; agrupar por
  bloque temático (tal como ya estaban organizados en el guion de la
  presentación) escala mejor.
- El step-strip es el mismo componente para "recorrido de cliente" y para
  "pasos del caso de ROI" — un solo patrón visual para "estoy en el paso N
  de M de este bloque", en vez de inventar uno nuevo por bloque.

## Cuándo reusarlo

Cualquier presentación HTML de otra materia/entregable con más de ~6
secciones y al menos un bloque con sub-pasos. Para decks cortos (5
secciones o menos) probablemente alcanza con el step-strip solo, sin nav
superior — no fuerces las 5 piezas si el deck es chico.
