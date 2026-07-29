---
name: awwwards-tokens
fuente: https://www.awwwards.com/academy/course/innovative-web-design-in-figma-a-step-by-step-process
metodo: lectura directa del CSS público servido por el sitio (bloques <style> del HTML), no interpretación visual ni contenido del curso
fecha_extraccion: 2026-07-28
---

# Design tokens — extraídos del sitio de Awwwards

Esto **no** es el temario del curso — es el sistema de diseño real que usa
awwwards.com, sacado de las variables CSS (`:root { --x: ... }`) que el sitio
manda al navegador. Los valores están en `tokens.css`, listos para usar; acá
la lectura de qué significan y qué vale la pena adoptar para nuestras
presentaciones.

## Tipografía

- **Fuente única**: "Inter Tight" — variable font autohospedada (pesos
  100 a 900 en un solo archivo), más "Inter" (Google Fonts) como
  complemento. Para nuestras presentaciones alcanza con Inter Tight sola.
- **Escala de peso** — dato interesante: lo que ellos llaman "bold" es
  semibold (600), no 700. Reservan 700/800 ("extrabold"/"black") para
  títulos grandes de impacto. Da una jerarquía más sutil que saltar directo
  a negrita.
  - light 300 · normal 400 · medium 500 · bold 600 · extrabold 700 · black 800
- **Escala de tamaño** — chica para un sitio de diseño: el texto "primario"
  (body) es de solo **14px**, con 11/18/22px para small/medium/large. Usan
  `clamp()` para que los títulos escalen fluido entre breakpoints en vez de
  saltos discretos — vale la pena copiar esa técnica para slides
  responsive.

## Color

- **Base**: texto en `#222` (no negro puro), fondo general `#F8F8F8` (gris
  cálido, no blanco puro). Esta sutileza (ni blanco/negro puros) es gran
  parte de por qué el sitio se ve "premium" en vez de plano.
- **Acento único de acción**: `#FA5D29` (naranja-coral) — lo usan para CTA
  primario Y para estados de error, unificado en una sola variable. Acento
  secundario `#49B3FC` (celeste).
- **Modo oscuro**: invierte a texto `#eee` sobre fondo `#121212` (no negro
  puro tampoco del otro lado).
- **Taxonomía de contenido por color**: tienen 6 familias de color (cada una
  con 3 tonos: base/medio/claro) para categorizar tipos de contenido del
  sitio — Connect (naranja), Inspire (verde menta), Awards (violeta), Read
  (oliva/dorado), Learn (amarillo), Jobs (celeste). No la copiamos literal,
  pero es un patrón reusable: **podríamos usar algo así para color-codear
  tipos de entregable** (TP de negocio vs. de tecnología vs. de diseño, por
  ejemplo) en vez de inventar una paleta nueva de cero.

## Spacing / grid

- Contenedor muy ancho (`--innerWidth: 1816px`) — es un sitio showcase de
  imágenes grandes, probablemente más ancho de lo que necesitamos para
  slides. Gutter de `20px`, header de `71px`.
- Padding interno de secciones (`--pad-inner`) baja de `52px` en desktop
  grande a `40px → 24px → 16px` en breakpoints menores — buena referencia
  de escala de espaciado responsive.

## Radios

Escala simple de 3 pasos: `4px` (small) · `8px` (normal) · `16px` (large,
baja a `8px` en contextos chicos). Los botones usan `8px`, o `72px` (pill)
en su variante redondeada completa.

## Botón (único componente con CSS completo extraído)

Altura fija `48px`, padding horizontal `24px`, fondo = color primario,
texto blanco, transición `.3s` en color/fondo/borde al hover. Ver
`design-system/components/button.md`.

## Motion

Casi todo el sitio usa la misma transición default: `all .3s`. Buena regla
simple para nuestras propias slides/prototipos: una sola velocidad de
transición en todo, no varias.

## Breakpoints

Mobile-first con 3 quiebres: `768px` · `1270px` · `1600px`.

## Qué adoptamos tal cual vs. qué es solo referencia

| Elemento | Adoptar para nuestro design-system |
|---|---|
| Inter Tight como tipografía única | Sí — es gratuita, autohospedable, y da la escala de peso completa |
| Escala de peso (600=bold, no 700) | Sí — jerarquía más sutil |
| Texto no negro puro / fondo no blanco puro | Sí — barato de aplicar, mucho impacto visual |
| Acento único naranja-coral | A discutir — puede no encajar con el tono de una presentación de negocios/CFO; evaluar un acento propio |
| Radios 4/8/16px | Sí — escala simple y usable |
| Transición única `.3s` | Sí |
| Taxonomía de color por categoría (6 familias) | Como *patrón*, no los colores exactos — útil si queremos diferenciar tipos de materia/entregable visualmente |
| Contenedor de 1816px / grid de showcase | No — pensado para galería de imágenes, no para slides |
