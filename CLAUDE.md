# udesa — Maestría en Gestión de Servicios Tecnológicos y de Telecomunicaciones (Master in Business & Technology, UDESA)

Repo de trabajo para TPs, presentaciones y entregables de varias materias de
la maestría, más un design system compartido para las presentaciones. No es
un repo de código de aplicación — es un repo de investigación + redacción +
presentaciones, con la misma lógica de agentes/skills que se usaría para
software (separar planificar de implementar, documentar cómo se trabaja
acá), adaptada a trabajo académico.

## Hard Rules

- **Nunca afirmar un dato de mercado, cifra o característica de un
  competidor sin fuente citada.** Si no hay fuente confiable, se marca
  explícitamente como supuesto del equipo — nunca como hecho.
- **Nunca redactar una sección del documento final sin research y diseño
  ya hechos** para esa sección (ver flujo en la skill `tp-workflow`).
- **Nunca mezclar contenido de un entregable con el de otro** — cada
  `materias/<materia-slug>/<entregable-slug>/` es independiente, aunque
  compartan agentes, skills y `design-system/`.
- **Nunca hacer `git push` sin confirmación explícita** de la persona que
  está usando el repo.
- Nunca `git add -A`, nunca saltear hooks, nunca commitear directo a `main`
  sin avisar.
- Ninguna sección se da por terminada sin pasar el checklist obligatorio de
  la consigna de ESE entregable puntual (ver `consignas/`).

## Estructura del repo

```
consignas/            — un archivo por entregable con el enunciado/rúbrica
                         tal cual la da la cátedra. Se lee, no se genera.
materias/
  <materia-slug>/
    <entregable-slug>/
      research/        — research citado (tp-research-analyst)
      plans/            — diseño de la solución, revisado (tp-solution-architect)
      entregable/        — documento final + entregable/presentacion/
design-system/         — estilo visual compartido para cualquier presentación
  references/           — fuentes de inspiración/aprendizaje, con notas
  tokens/                — paleta, tipografía, espaciado, grilla (una vez definidos)
  components/            — patrones de slide reutilizables (una vez definidos)
```

Cómo sumar un TP nuevo: crear `consignas/<materia-slug>-<entregable-slug>.md`
con el enunciado, y `materias/<materia-slug>/<entregable-slug>/` con
`research/`, `plans/`, `entregable/` (cada uno con su propio `README.md`
explicando la convención — copiar el patrón de
`materias/mt10-innovacion-tecnologica/fidelizacion-coto/`). Actualizar el
índice en `materias/README.md`.

## Materias activas

- **MT10 Innovación Tecnológica** → `materias/mt10-innovacion-tecnologica/`
  - `fidelizacion-coto/` — plan de negocios de fidelización para COTO. Ver
    `consignas/mt10-fidelizacion-coto.md`.

## Cómo trabajar acá (agentes)

Los agentes son genéricos a cualquier entregable de `materias/` — antes de
actuar, identifican sobre cuál están trabajando (por el pedido, o preguntan
si no está claro).

| Agente | Rol | Nunca hace |
|---|---|---|
| `tp-orchestrator` | Coordina las fases de una sección de cualquier entregable | Investigar, diseñar o redactar directamente |
| `tp-research-analyst` | Investiga mercado, competidores, benchmarks, marcos teóricos de cátedra | Diseñar la solución o redactar el documento |
| `tp-solution-architect` | Diseña la solución y el caso de ROI; revisa planes | Redactar el documento final |
| `tp-plan-writer` | Redacta el documento final en `entregable/` del entregable activo | Investigar o diseñar por su cuenta |
| `tp-presentation-designer` | Arma el guion de la presentación, consultando `design-system/` si aplica | Redactar el plan de negocios en sí |

## Skills

| Skill | Para qué |
|---|---|
| `tp-workflow` | Esqueleto de trabajo (Research → Design → Review → Write → Slides) y tabla de qué usar para qué — cargarla siempre que se arranque una sección de cualquier entregable |
| `how-to-research-competitor` | Protocolo para investigar un competidor o benchmark puntual |
| `how-to-build-roi-case` | Cómo estructurar un caso de ROI sin inventar cifras, cuando la consigna lo pida |
| `how-to-structure-pitch` | Cómo estructurar una presentación final — el minutado/audiencia sale de la consigna de cada entregable, no es fijo |

## Mandatory reading antes de escribir contenido

- Antes de diseñar cualquier componente: leer el research relacionado en
  `research/` del entregable activo.
- Antes de redactar cualquier sección: leer el plan correspondiente en
  `plans/`, ya revisado, del mismo entregable.
- Antes de armar o tocar el guion de la presentación: leer el documento
  final completo de ese entregable, no solo la sección nueva.
- Antes de diseñar o redactar cualquier cosa: leer la consigna real en
  `consignas/<materia-slug>-<entregable-slug>.md` — el checklist obligatorio
  cambia de un TP a otro.

Regla general: **nunca diseñar y redactar en el mismo paso** — la
separación entre `tp-solution-architect` y `tp-plan-writer` existe para que
un dato mal fundado o un componente mal pensado se detecte antes de llegar
al documento final.

## Principios de trabajo

- Rigor sobre creatividad: toda afirmación de mercado o número necesita
  poder rastrearse a una fuente.
- Claridad para la audiencia real de cada entregable (la que diga su
  consigna) — no un informe académico genérico que sirva para cualquiera.
- Nada de relleno: los componentes de IA (u otra herramienta) se proponen
  porque resuelven un problema puntual identificado en el research, no
  porque la consigna los menciona como deseables.
- Cada entregable es independiente — no se asume que el formato, la
  audiencia o el checklist de un TP aplican a otro.
