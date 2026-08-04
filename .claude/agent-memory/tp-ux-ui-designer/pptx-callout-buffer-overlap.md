---
name: pptx-callout-buffer-overlap
description: Bug real de overlap entre un callout_box de riesgo hardcodeado (top fijo) y un roadmap_arrows de altura variable en pptx_kit.py, más el patrón de mover contenido de proceso interno del equipo a notas del orador en vez de un callout_box visible.
metadata:
  type: reference
---

Aplica a: `mt25-estrategias-negocios-internet/business-plan-coto` (y a
cualquier otro entregable que use `design-system/components/pptx_kit.py`
con el patrón bullets → `roadmap_arrows` → `callout_box`, o que tenga
callouts con texto de proceso interno del equipo mezclado con disclosures
para audiencia).

## El bug (reportado por el usuario 2026-08-04, sobre capturas de
Preview/Keynote de `business-plan-coto.pptx`)

En `build-pptx.py`, la slide "Producto" tenía dos problemas de layout
emparentados, ambos con la misma causa raíz:

1. **Buffer insuficiente entre bloque de altura estimada y el siguiente
   elemento.** `roadmap_top` se calculaba como
   `top + k.bullets_height(bullets, ...) + 0.30` — pero `bullets_height()`
   es explícitamente una **estimación** por ancho de caracter promedio
   (ver su docstring en `pptx_kit.py`), no una medición real de PowerPoint/
   Keynote. Con un buffer de solo 0.30in, cualquier error de estimación
   (wrapping real distinto al calculado, o la fuente cayendo a un fallback
   más ancho si Inter no está instalada — ver
   `tokens-drift-pptx-generation.md`) empuja el roadmap real hacia abajo
   más de lo previsto.
2. **`callout_box` con `top` fijo hardcodeado inmediatamente después de un
   bloque de altura variable.** El callout de riesgo estaba en
   `top=5.85` (constante), calculado a mano asumiendo que el roadmap
   terminaba en `top≈5.70` — un margen de solo ~0.15in. Si el error del
   punto 1 empuja el roadmap real más abajo de lo estimado, ese margen de
   0.15in se come solo y el callout (fondo `ORANGE_PALE`) queda
   visualmente mezclado con la card "Año 1 / Piloto CABA" — exactamente el
   síntoma reportado ("texto lavado/ilegible"). Mismo patrón exacto que
   `pptx-kicker-stepstrip-overlap.md` (mt10): asumir que el layout
   calculado en python-pptx sin abrir el archivo real va a coincidir con
   el render real.

La misma pareja de problemas existía en la slide "Tamaño de mercado" (SAM/
SOM), con `som_roadmap_top` (+0.25 de buffer) y un callout en
`top=6.10` fijo.

## El fix aplicado

Dos cambios, aplicados a **ambas** slides (Producto y Tamaño de mercado):

1. Buffer bullets→roadmap subido de `+0.30`/`+0.25` a `+0.40` — sigue
   siendo un cálculo dinámico vía `k.bullets_height()` (nunca un offset
   fijo que solo sirve para el texto actual), pero con más aire para
   absorber el error de estimación.
2. El `callout_box` de riesgo dejó de tener un `top` fijo: ahora se
   posiciona en `roadmap_bottom + 0.25`/`0.30`, donde `roadmap_bottom` es
   el valor de **retorno** de `k.roadmap_arrows(...)` (`top + card_height`
   — determinístico, no una estimación, porque `card_height` es una
   constante que el propio script controla). Esto elimina estructuralmente
   el riesgo de overlap roadmap↔callout: por construcción, el callout
   nunca puede empezar antes de que el roadmap termine, sin importar
   cuánto se haya corrido `roadmap_top` por el punto 1.

```python
roadmap_top = top + k.bullets_height(bullets, width=k.CONTENT_W, size=13, space_after=5) + 0.40
roadmap_bottom = k.roadmap_arrows(s, [...], top=roadmap_top, card_width=3.85, card_height=1.85)
k.callout_box(s, texto, roadmap_bottom + 0.25, kind="risk")
```

Se verificó que el resultado no quedara pegado al footer (`FOOTER_TOP =
7.12in`): con estos buffers, el callout de Producto termina en `top≈6.95`
(margen ~0.17in al footer) y el de Tamaño de mercado en `top≈6.98` (margen
~0.14in) — comparable al margen que quedó aceptable en el fix de
`pptx-kicker-stepstrip-overlap.md` (~0.07in), sin llegar a ese límite.

**Regla para reusar en cualquier `build-pptx.py` nuevo con este patrón**:
cualquier `callout_box` (o cualquier shape) que vaya inmediatamente después
de un bloque cuya altura se calculó con `bullets_height()` o el retorno de
`roadmap_arrows`/`step_cards`/`comparison_table` **nunca debe llevar un
`top` numérico hardcodeado** — siempre `<valor_retornado_por_el_helper_de_arriba> + buffer`. Los helpers de layout de `pptx_kit.py` que arman bloques
de contenido devuelven su `bottom` real (`top + height`) exactamente para
esto.

## Verificación visual (mismo protocolo que el bug de mt10)

Regenerado con `python3 build-pptx.py`, y exportado a PNG con Keynote vía
AppleScript (`export theDoc to (POSIX file outDir) as slide images`,
necesita `with timeout of 600 seconds` porque el timeout default de
AppleEvent de 120s no alcanza para abrir+convertir+exportar un .pptx de 13
slides) — confirmado visualmente que las slides 2 ("Equipo"), 4 ("El
problema"), 6 ("Producto") y 8 ("Tamaño de mercado") no tienen overlap ni
texto cortado, y que este Mac tiene Inter/Inter Tight instaladas
(`~/Library/Fonts/Inter-Variable.ttf`, `InterTight-Variable.ttf`), por lo
que la verificación visual acá no reproduce el escenario de fallback de
fuente — el buffer extra es la mitigación para esa máquina, no algo
verificado 1:1 en este entorno.

## Patrón separado, mismo entregable: notas del orador vs. `callout_box` visible

No relacionado al overlap, pero tocado en la misma pasada (decisión
explícita del usuario, no inferida): se agregó `k.add_speaker_notes(slide,
texto)` a `pptx_kit.py` (wrapper de
`slide.notes_slide.notes_text_frame.text`) para sacar de la slide visible
texto que suena a **proceso interno del equipo** (gaps del propio
documento, preguntas reservadas para Q&A) sin que compita visualmente con
el argumento central de la slide — documentado con criterio de cuándo usar
cada uno en `pptx-pitch-deck.md` sección "13. Notas del orador". Importante:
esto **no es una regla general de "esconder todo callout incómodo"** — los
`callout_box(kind="risk")` que son disclosures reales requeridos por la
regla dura del repo (no afirmar un dato sin fuente) se quedan visibles;
solo se mueve lo que es literalmente nota de producción del propio equipo,
no información que la audiencia necesite para evaluar el pitch.
