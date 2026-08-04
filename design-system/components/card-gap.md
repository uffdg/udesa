---
name: card-gap
fuente: patrón propio, implementado por primera vez en
  materias/mt25-estrategias-negocios-internet/business-plan-coto/entregable/presentacion/presentacion.html
---

# Card de gap / placeholder de contenido no resuelto

Tarjeta para señalar, dentro de una presentación o landing, un bloque de
contenido que el documento final ya marcó explícitamente como no resuelto
(ej. "Equipo" sin integrantes reales todavía, o una advertencia metodológica
que hay que decir *antes* de mostrar un número). No es un error de diseño
disimulado — es información real del documento fuente ("esto es un gap"),
mostrada con su propio lenguaje visual en vez de mezclarla con una card de
contenido normal.

## Cuándo usarla

- Una sección de la plantilla de pitch que la consigna exige pero el
  documento final no tiene datos para completar todavía (ej. "Equipo").
- Una advertencia metodológica que el guion pide decir explícita antes de
  un número (ej. "no existe ningún dato público de X, todo lo que sigue es
  supuesto del equipo").

No usarla para riesgos de negocio (eso es `.card-risk-light`, con el color
semántico de riesgo) ni para contenido normal (`.card` / `.card-accent-light`)
— el borde punteado comunica específicamente "placeholder", no "alerta" ni
"dato confirmado".

## CSS

```css
.card-gap {
  background: var(--color-white);
  border: 1.5px dashed var(--muted);
  border-radius: var(--rounded-normal);
  padding: 1.2em 1.6em;
  color: var(--muted);
}
.slide.dark .card-gap { background: transparent; border-color: var(--dark-muted); color: var(--dark-muted); }
```

## Por qué así

- Borde punteado (`dashed`) en vez de sólido: es la convención visual más
  común para "placeholder, todavía no es contenido final" — se diferencia
  a simple vista de cualquier otra card sin necesitar un ícono.
  - Color de borde/texto en `--muted`, no en el acento ni en el color de
  riesgo: no es una alerta de negocio ni un dato destacado, es una nota
  editorial sobre el estado del documento.
- Reusa `--rounded-normal` y el mismo padding que el resto de las cards del
  patrón `nav-presentacion.md`, para no introducir una escala de espaciado
  nueva.

## Cuándo reusarlo

Cualquier entregable con secciones de plantilla obligatoria (ej. "Equipo"
en un pitch a inversores) que el equipo todavía no completó con datos
reales, o con advertencias metodológicas que el guion marca como
"decir primero, antes del número".
