---
name: tp-workflow
description: Esqueleto de trabajo para cualquier sección no trivial de cualquier TP/entregable de la maestría en este repo — Research → Design → Review → Write → Slides. Cargar siempre que se arranque o retome una sección de un plan de negocios, research o presentación.
trigger: Al empezar, retomar o cerrar cualquier sección de research, diseño, documento final o presentación de cualquier entregable en materias/.
---

# Workflow de los TPs de la maestría

Este repo puede tener varios TPs de varias materias a la vez, cada uno en
`materias/<materia-slug>/<entregable-slug>/`. Antes de cualquier otra cosa,
identificá **sobre cuál entregable se está trabajando** — si no está claro
por el pedido, preguntá o revisá `materias/README.md`.

Todo trabajo no trivial dentro de un entregable sigue este esqueleto:

**Research → Design → Review → Write → Slides**

1. **Research** (`tp-research-analyst`): se investiga y se deja citado en
   `research/` del entregable activo. No se avanza a diseño sin esto.
2. **Design** (`tp-solution-architect`): se propone la solución para esa
   sección, basada en el research, y se guarda en `plans/` del mismo
   entregable.
3. **Review** (`tp-solution-architect`, modo revisión): se chequea el plan
   contra el research real y el checklist obligatorio de
   `consignas/<materia-slug>-<entregable-slug>.md`. Se puede saltear en
   secciones triviales o ya validadas con el profesor/ayudante, pero es el
   default.
4. **Write** (`tp-plan-writer`): se redacta la sección en `entregable/` del
   mismo entregable, con trazabilidad a las fuentes de `research/`.
5. **Slides** (`tp-presentation-designer`): cuando la sección está madura,
   se traduce al guion de la presentación — consultando `design-system/` si
   hay tokens/componentes ya definidos.

`tp-orchestrator` es quien coordina estas fases — para trabajo que involucra
más de un paso, invocalo a él en vez de saltar directo a redactar o diseñar.

## Qué agente/skill usar para qué

| Necesito... | Usar |
|---|---|
| Investigar mercado, competidores, benchmarks, marcos teóricos de cátedra | `tp-research-analyst` |
| Diseñar un componente de la solución o el ROI | `tp-solution-architect` |
| Revisar un plan ya escrito | `tp-solution-architect` (modo revisión) |
| Redactar una sección del documento final | `tp-plan-writer` |
| Armar o actualizar el guion de la presentación | `tp-presentation-designer` |
| Coordinar varias fases de una sección nueva | `tp-orchestrator` |
| Protocolo para investigar un competidor puntual | skill `how-to-research-competitor` |
| Armar el caso de ROI | skill `how-to-build-roi-case` |
| Estructurar el pitch/presentación final | skill `how-to-structure-pitch` |

## Reglas duras

- Nunca se afirma un dato de mercado o una cifra sin fuente citada en
  `research/` del entregable correspondiente. Si no hay fuente confiable, se
  marca como supuesto del equipo, nunca como hecho.
- Nunca se redacta una sección del documento final sin research y plan
  correspondientes ya existentes.
- Nunca se mezcla contenido de un entregable con el de otro, aunque el tema
  se parezca — cada `materias/<materia>/<entregable>/` es independiente.
- Nunca se hace `git push` sin confirmación explícita de la persona que está
  usando el repo.
- Nunca se usa `git add -A` ni se saltean hooks al commitear.
- Antes de dar una sección por terminada, se chequea contra el checklist
  obligatorio de la consigna de ESE entregable puntual.
