---
name: pptx-notes-keynote-invalid-format
description: Bug real de python-pptx — agregar notas del orador (slide.notes_slide) genera un .pptx que PowerPoint abre bien pero que Keynote rechaza por completo como "formato inválido", porque python-pptx nunca escribe <p:notesMasterIdLst> en presentation.xml. Fix y protocolo de verificación.
metadata:
  type: reference
---

Aplica a: **cualquier** entregable con `design-system/` que use
`design-system/components/pptx_kit.py` y llame a `add_speaker_notes()` en
alguna slide — no es específico de un TP. Detectado y diagnosticado en
`mt25-estrategias-negocios-internet/business-plan-coto` (2026-08-04), pero
el bug vive en `python-pptx` mismo (verificado en 1.0.2), así que va a
reaparecer en cualquier otro `build-pptx.py` que agregue notas del orador
con este kit si no se usa `k.save_deck()`.

## El bug

Al implementar `add_speaker_notes(slide, text)` (wrapper de
`slide.notes_slide.notes_text_frame.text = text`) para mover contenido de
proceso interno del equipo fuera de la slide visible (ver
`pptx-callout-buffer-overlap.md` para el contexto de esa decisión), el
`.pptx` resultante se guardó sin problema con `prs.save()` y **abría bien
en PowerPoint**, pero Keynote lo rechazaba al 100% con:

> "business-plan-coto.pptx can't be imported. The file format is invalid."

No era un rechazo de una slide puntual — Keynote ni siquiera abría el
archivo. Esto invalidó momentáneamente el protocolo de verificación visual
(export a PNG con Keynote vía AppleScript) que se usa en este repo para
confirmar layouts — un intento de `export theDoc to ... as slide images`
sobre un archivo que Keynote no puede importar **cuelga el AppleEvent
indefinidamente** (el diálogo modal "can't be imported" que tira Keynote
nunca lo dismissea un proceso headless), hasta el timeout configurado.
Si se ve un `osascript`/Monitor colgado esperando un export de Keynote sin
avanzar, esta es la primera hipótesis a probar — matar el proceso y no
seguir subiendo el timeout a ciegas.

## Causa raíz (confirmada a nivel de código fuente, no solo por síntoma)

`pptx/parts/presentation.py`, propiedad `notes_master_part` (líneas ~65-76
en python-pptx 1.0.2): al acceder a `slide.notes_slide` por primera vez,
python-pptx crea el part `ppt/notesMasters/notesMaster1.xml` y agrega la
relationship correspondiente en `presentation.xml.rels`
(`self.relate_to(notes_master_part, RT.NOTES_MASTER)`), pero **nunca
agrega el elemento `<p:notesMasterIdLst>` a `presentation.xml`**.
PowerPoint tolera la omisión (aparentemente infiere el notesMaster por
tipo de relationship); el importador de Keynote valida el schema OOXML de
forma más estricta y rechaza el paquete entero si ese elemento falta —
aunque el part y la relationship sí estén presentes y sean válidos.

Confirmado empíricamente, no solo por lectura de código: un `.pptx`
mínimo de una sola slide con `slide.notes_slide.notes_text_frame.text =
"..."` fue rechazado por Keynote con el mismo error exacto; el mismo
archivo mínimo sin esa línea abrió sin problema. Diff de estructura de
paquete entre `business-plan-coto.pptx` (roto) y
`plataforma-fidelizacion-coto.pptx` de mt10 (que abre bien, sin notas) —
la única diferencia real son los parts de notas.

## El fix — `k.save_deck()`, no `prs.save()` directo

Agregado a `pptx_kit.py`:

```python
from pptx.oxml.ns import qn
from pptx.opc.constants import RELATIONSHIP_TYPE as RT
from lxml import etree

def _fix_notes_master_id_lst(prs):
    presentation_elm = prs.part._element
    if presentation_elm.find(qn("p:notesMasterIdLst")) is not None:
        return  # ya presente (o una versión futura de python-pptx lo arregló)
    notes_master_rId = next(
        (rId for rId, rel in prs.part.rels.items() if rel.reltype == RT.NOTES_MASTER),
        None,
    )
    if notes_master_rId is None:
        return  # el deck no usa notas, nada que arreglar
    lst = etree.SubElement(presentation_elm, qn("p:notesMasterIdLst"))
    nid = etree.SubElement(lst, qn("p:notesMasterId"))
    nid.set(qn("r:id"), notes_master_rId)
    presentation_elm.find(qn("p:sldMasterIdLst")).addnext(lst)

def save_deck(prs, path):
    _fix_notes_master_id_lst(prs)
    prs.save(path)
```

`build-pptx.py` cambia su línea final de `prs.save(out)` a
`k.save_deck(prs, out)`. La función es no-op si el deck no usa notas o si
una versión futura de python-pptx ya lo arregla, así que no tiene costo
usarla siempre — **regla dura para cualquier `build-pptx.py` nuevo con
este kit: nunca `prs.save()` directo, siempre `k.save_deck()`**, exactamente
igual que la regla existente de nunca armar shapes sueltos con python-pptx
puro (ver `pptx-pitch-deck.md`).

## Cómo verificar sin depender de que Keynote esté disponible

No hace falta abrir Keynote para confirmar el fix puntual — alcanza con
desempaquetar el `.pptx` (es un zip) y comprobar el XML:

```bash
unzip -q archivo.pptx -d /tmp/check
grep -o "<p:notesMasterIdLst.*</p:notesMasterIdLst>" /tmp/check/ppt/presentation.xml
```

Si aparece el elemento con un `r:id` que matchea una relationship
`notesMaster` en `ppt/_rels/presentation.xml.rels`, el archivo está bien
formado para este chequeo puntual. La verificación visual con Keynote
(export a PNG) sigue siendo necesaria para confirmar layout/overlap — este
grep solo confirma que el archivo **abre**, no que se vea bien.

## Alcance de la lección

Cualquier pieza nueva que se agregue a `pptx_kit.py` en el futuro y que
toque parts/relationships de bajo nivel de OOXML (no solo shapes/texto en
una slide, que es lo que hace el 100% del resto del kit) corre el mismo
riesgo: python-pptx expone una API de alto nivel que genera XML válido
para PowerPoint pero no necesariamente válido contra el parser más
estricto de Keynote. La lección no es "python-pptx tiene bugs" en
abstracto — es que **cualquier feature nueva de python-pptx que se use por
primera vez en este repo debería probarse abriéndola en Keynote antes de
darla por buena**, no asumir que porque el objeto Python se construyó sin
excepción, el archivo resultante es válido en todos los lectores.
