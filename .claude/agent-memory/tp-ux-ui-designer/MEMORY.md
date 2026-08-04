# Memoria de tp-ux-ui-designer

Índice de memorias. Cada archivo tiene frontmatter `name`, `description`,
`metadata.type` (user/feedback/project/reference).

- `responsive-regla-dura.md` — Aplica a: cualquier entregable con
  design-system/. Por qué el responsive es obligatorio siempre (no
  opcional), con el bug real de `presentacion.html` que lo motivó y el
  patrón de corrección a reusar.
- `tokens-drift-prototipo-react.md` — Aplica a: cualquier entregable con
  design-system/ que combine decks HTML con un prototipo React/Tailwind
  aparte. Dónde aparece drift real de tokens en la práctica (fuente nunca
  cargada, ink reinterpretado, radio de card equivocado, tint pálido
  derivado dos veces con valores distintos, botón primario roto del patrón
  pill) vs. qué no es drift (layout no responsive es bug de estructura,
  no de tokens). Caso real: `prototipo-wallet-coto/` (auditoría 2026-08).
- `tokens-drift-pptx-generation.md` — Aplica a: cualquier entregable con
  design-system/ que genere un .pptx con python-pptx (`build-pptx.py`).
  Colores "a mano" que se ven parecidos al acento pero no coinciden hex
  exacto con el pptx/HTML hermano, y el gap de fuente: python-pptx nunca
  hereda Inter/Inter Tight del CSS, cae en Calibri si no se setea
  `r.font.name` en cada run. Caso real: `build-pptx.py` de
  mt25-business-plan-coto vs. el pptx de mt10 (auditoría 2026-08-04).
- `pptx-visual-richness-vs-palette.md` — Aplica a: cualquier entregable con
  design-system/ que genere o compare un .pptx. Igualar tokens (color/
  fuente) no resuelve una diferencia real de riqueza visual/layout —
  métrica objetiva (conteo de `AUTO_SHAPE`/slide) para detectarla, por qué
  la solución es un kit compartido (`pptx_kit.py` +
  `pptx-pitch-deck.md`) y no shapes sueltos por archivo, y un bug real de
  unidades (`Length` vs. float) a no repetir si se extiende el kit. Caso
  real: unificación mt10/mt25 (2026-08-04).

- `pptx-kicker-stepstrip-overlap.md` — Aplica a:
  `mt10-innovacion-tecnologica/fidelizacion-coto` (patrón "LA PROPUESTA ·
  N DE 5"). Bug real: kicker y step-strip de chips con el mismo `top`
  exacto en el XML → texto superpuesto. Fix quirúrgico con python-pptx
  (mover solo el `top` de los chips), verificado con export a PNG en
  Keynote antes/después (2026-08-04).
- `pptx-callout-buffer-overlap.md` — Aplica a:
  `mt25-estrategias-negocios-internet/business-plan-coto` (y a cualquier
  entregable con `pptx_kit.py` que use el patrón bullets →
  `roadmap_arrows` → `callout_box`). Bug real: buffer insuficiente entre
  un bloque de altura estimada (`bullets_height()`) y el siguiente
  elemento, más un `callout_box` con `top` fijo hardcodeado justo después
  de un roadmap de altura variable → overlap visual real. Fix: buffers más
  generosos + posicionar el callout dinámicamente contra el valor de
  retorno del helper anterior (nunca un número hardcodeado). Incluye
  también el patrón `add_speaker_notes()` para mover contenido de proceso
  interno del equipo a las notas del orador en vez de un `callout_box`
  visible (2026-08-04).
- `pptx-notes-keynote-invalid-format.md` — Aplica a: **cualquier**
  entregable con `design-system/` que use `pptx_kit.py` y llame a
  `add_speaker_notes()`. Bug real de python-pptx (verificado en 1.0.2):
  agregar notas del orador nunca escribe `<p:notesMasterIdLst>` en
  `presentation.xml` → PowerPoint abre el archivo igual, Keynote lo
  rechaza entero como "formato inválido" (y cuelga cualquier export
  headless vía AppleScript que se le intente hacer, hasta timeout). Fix:
  `k.save_deck(prs, path)` en vez de `prs.save()` directo — siempre, no
  solo cuando el deck usa notas. Incluye cómo verificar el fix sin abrir
  Keynote (grep sobre el XML desempaquetado) (2026-08-04).

⚠️ Este repo tiene varios TPs de varias materias en `materias/`. Cada
memoria que se agregue acá tiene que indicar en su primera línea a qué
`materia-slug/entregable-slug` corresponde, o marcarse explícitamente como
"Aplica a: cualquier entregable con design-system/" si es un patrón general
de interacción, para no mezclar decisiones de un TP con las de otro.
