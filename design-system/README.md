# design-system/

Recurso compartido de estilo visual para cualquier presentación o entregable
de la maestría — no pertenece a una materia en particular, se convoca desde
cualquiera.

- `tokens/` — valores concretos extraídos directamente del CSS real de
  awwwards.com (no de su temario/curso): tipografía, color, spacing, radios,
  motion. Ver `tokens/tokens.md` (lectura humana + qué adoptamos) y
  `tokens/tokens.css` (valores listos para usar).
- `components/` — patrones de componente: `button.md` (extraído de
  awwwards.com) y `nav-presentacion.md` (patrón propio de navegación para
  decks HTML tipo landing, con barra de progreso, nav por bloques,
  step-strip para sub-secciones y controles prev/next).
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

## Estado actual

Primera pasada hecha: paleta, tipografía (Inter Tight), escala de peso,
radios, spacing y el patrón de botón, todo extraído del CSS público de
awwwards.com el 2026-07-28. Falta: decidir qué queda tal cual y qué se
adapta (ver la tabla al final de `tokens/tokens.md`), y sumar más patrones
de componente (cards, navegación) si hace falta más adelante.
