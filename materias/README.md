# materias/

Un subcarpeta por materia de la maestría; dentro de cada materia, una
subcarpeta por entregable (TP, presentación, parcial, etc.).

```
materias/<materia-slug>/<entregable-slug>/
  research/        — investigación citada (tp-research-analyst)
  plans/            — diseño de la solución, revisado (tp-solution-architect)
  entregable/        — documento final + entregable/presentacion/ (tp-plan-writer, tp-presentation-designer)
```

La consigna de cada entregable vive aparte, en `consignas/<materia-slug>-<entregable-slug>.md`
— no acá.

## Materias activas

- `mt10-innovacion-tecnologica/` — MT10 Innovación Tecnológica
  - `fidelizacion-coto/` — plan de negocios de fidelización para COTO (ver
    `consignas/mt10-fidelizacion-coto.md`)
