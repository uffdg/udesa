---
name: tokens-drift-prototipo-react
description: Dónde suele aparecer drift real cuando un prototipo React/Tailwind convive con decks HTML que ya usan design-system/tokens/tokens.css, y cómo lo prueba una auditoría rápida.
metadata:
  type: reference
---

Aplica a: cualquier entregable con `design-system/` que combine decks HTML
(landing navegable, patrón `nav-presentacion.md`) con un prototipo
funcional aparte (React, Vue, lo que sea) que declara su propia paleta
Tailwind `@theme` "inspirada en" los mismos tokens en vez de copiarlos
literales. Caso real: `prototipo-wallet-coto/` (React+Vite+Tailwind v4) al
lado de `materias/mt10-.../presentacion.html` y
`materias/mt25-.../presentacion.html` (auditoría 2026-08).

## Qué encontrar, en orden de probabilidad

1. **Fuente nunca cargada de verdad.** El `@theme`/CSS declara
   `--font-sans: "Inter Tight", ...` pero si el `index.html` del prototipo
   no tiene el `<link>` de Google Fonts (el mismo `<link
   href="https://fonts.googleapis.com/css2?family=Inter+Tight:...">` que
   ya está en el `<head>` de cada `presentacion.html`), el navegador nunca
   descarga la fuente y cae a system-ui — la paleta puede estar perfecta y
   la tipografía igual queda distinta. Revisar esto primero, es rápido y
   se nota en cualquier screenshot side-by-side.
2. **Neutro "ink" reinterpretado con tinte de marca.** Es común que alguien
   arme `--color-ink` a mano con un tinte violeta/azul (ej. `#1f1a2e` en
   vez de `#222`) pensando que "combina más" con el acento — pero el token
   real (`--color-primary: #222` en `tokens.css`) es deliberadamente
   neutro ("no negro puro", no un negro coloreado). Verificar el hex exacto,
   no solo que "se vea oscuro y neutro".
3. **Radio de card por defecto de Tailwind, no el del design-system.**
   Los decks HTML usan `--rounded-normal` (8px) para *cards* reales
   (`.card`, `.card-accent-light`, etc.) y reservan `--rounded-large`
   (16px) para chips/pills chicos (nav links, step-chips) donde 16px
   redondea completamente por la altura baja del elemento. Un prototipo
   que define `--radius-card: 1rem` (16px) para sus cards está copiando el
   valor equivocado de la escala — confirmar contra el uso real en el CSS
   del deck, no contra la lista de tokens sola (la lista no dice para qué
   se usa cada radio).
4. **Tint pálido derivado dos veces, con valores distintos.** Si dos
   artefactos necesitan un tono pálido del acento para cards/badges y
   ninguno existe en `tokens.css` (el token no lo define), cada uno
   probablemente lo derivó a mano por separado — y quedan valores
   distintos aunque visualmente casi idénticos (ej. `#ece7fa` vs
   `#ede9fb`). Buscar el primer lugar donde se derivó (comentario tipo
   "derivado: tint claro de...") y propagar ese valor exacto al resto.
5. **Un botón "primario" roto del patrón pill establecido.** Si el resto
   de los CTAs primarios de la app usan `rounded-full` (pill, matching
   `--button-rounded-full` de `button.md`), un formulario agregado después
   con `rounded-md`/`rounded-lg` en su submit button es casi siempre un
   descuido de quien lo escribió sin mirar los otros botones, no una
   decisión — grepear todos los `<button` del prototipo y comparar el
   radio usado en cada uno es más confiable que revisar archivo por
   archivo.

## Qué NO es drift (no tocar)

- Un layout de grid fijo (ej. sidebar+main+panel con anchos en px, sin
  breakpoints) que rompe en mobile es un bug de **responsive/estructura**,
  no de tokens — no se corrige en una auditoría de design-system aunque se
  detecte en el mismo paso (screenshot mobile roto). Señalarlo aparte, no
  mezclarlo con los fixes de color/tipografía/radio.
- Colores semánticos (éxito/warning) que el prototipo define pero los
  decks HTML no usan todavía no son drift — no hay nada con qué
  compararlos. Solo hay drift si *ambos* artefactos definen el mismo rol
  semántico con valores distintos.
