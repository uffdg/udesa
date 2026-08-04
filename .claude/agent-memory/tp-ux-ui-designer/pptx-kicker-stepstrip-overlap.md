---
name: pptx-kicker-stepstrip-overlap
description: Bug real de overlap entre el kicker "SECCIÓN · N DE M" y el step-strip de chips en slides de pptx generadas con el patrón "LA PROPUESTA" — causa y fix aplicado.
metadata:
  type: reference
---

Aplica a: `mt10-innovacion-tecnologica/fidelizacion-coto` (y a cualquier
otro entregable que reuse el patrón "LA PROPUESTA · N DE 5" documentado en
`design-system/components/pptx-pitch-deck.md`).

## El bug (encontrado 2026-08-04, auditoría visual real con Keynote)

En `plataforma-fidelizacion-coto.pptx`, slides 4-8 (el step-strip "LA
PROPUESTA"), el textbox del kicker (`TextBox 7`, "LA PROPUESTA · N DE 5")
y las 5 `Rounded Rectangle` del step-strip (chips "En caja", "Reclamo
posventa", etc.) tenían **el mismo `top` exacto: `457200` EMU (0.5in)**.
El kicker se agrega después en el árbol de shapes (mayor `shape_id`), por
lo que queda arriba en z-order y su texto se renderiza literalmente
encima/mezclado con el chip activo — ilegible en Keynote/PowerPoint.

No es un problema de autofit ni de fuente: los `xfrm/off` de ambos grupos
de shapes tenían el mismo valor de Y copiado/pegado.

## El fix aplicado

Con `python-pptx`, se movió el `top` de los 5 `Rounded Rectangle` (chips)
de cada slide afectada de `Inches(0.5)` a `Inches(0.86)` — nada más se
tocó (ni el kicker, ni el título, ni texto, ni colores). Con la fuente del
kicker en 13pt/118% line spacing, el texto real ocupa ~0.21in desde el
top del box (0.5in), así que a 0.86in el chip empieza ya limpio del
kicker; y como el título de la slide arranca en `top=1.35in` y el chip
mide `0.42in` de alto, el chip termina en `1.28in` — deja ~0.07in de aire
antes del título. Verificado exportando a PNG con Keynote antes/después.

## Para reusar este patrón en otro entregable

Si se genera una slide nueva con kicker + step-strip: el kicker va en
`top≈0.5in`, el step-strip (chips) va en `top≈0.86in` — nunca el mismo
`top` para los dos. No asumir que autofit de PowerPoint/Keynote va a
"acomodar" el overlap solo — el `cy` guardado en el XML no siempre
refleja el alto real del texto renderizado.
