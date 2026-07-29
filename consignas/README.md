# consignas/

Un archivo por TP/entregable, con el enunciado o rúbrica tal cual la da la
cátedra (o tal cual la pasás vos). Separado a propósito de `materias/` —
acá no se genera contenido, solo se guarda la consigna de referencia.

Convención de nombre: `<materia-slug>-<entregable-slug>.md`, por ejemplo
`mt10-fidelizacion-coto.md`. El mismo slug de `<materia-slug>/<entregable-slug>`
tiene que coincidir con la carpeta correspondiente en `materias/`.

Frontmatter sugerido en cada archivo:

```yaml
---
materia: Nombre completo de la materia
entregable: slug-del-entregable
carpeta_de_trabajo: materias/<materia-slug>/<entregable-slug>/
---
```
