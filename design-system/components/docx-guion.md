---
name: docx-guion
fuente: materias/mt25-estrategias-negocios-internet/business-plan-coto/entregable/presentacion/guion.md
método: pandoc --reference-doc + post-procesado de tablas con python-docx,
  verificado visualmente exportando a PDF desde Pages (macOS) el 2026-08-04
implementación: design-system/components/docx-reference.docx (plantilla de
  estilos) + design-system/components/docx_kit.py (post-procesado de tablas)
---

# Guion/documento `.docx` — patrón editorial

Cualquier `.docx` nuevo en este repo (guion de presentación, documento
exportado a Word por pedido de la cátedra) aplica los tokens reales del
design-system de la misma forma que ya hacen el `.pptx`
(`pptx_kit.py` / `pptx-pitch-deck.md`) y el `.html`
(`tokens.css`) — nunca un `pandoc archivo.md -o archivo.docx` a secas, que
cae en el template default de pandoc (fuente serif, sin color, tablas sin
estilo — así se veía `guion.docx` antes de esta pasada).

## Por qué dos piezas (plantilla + script) y no solo `--reference-doc`

Un `.docx` no soporta CSS: los estilos de texto (headings, blockquote,
código inline, tabla) viven en `word/styles.xml` dentro del propio
archivo, y pandoc los copia de un "reference doc" con
`--reference-doc=plantilla.docx`. Eso alcanza para todo el texto —
headings, blockquotes, código — pero **no alcanza para las tablas**: el
color de fondo del header oscuro y las bandas alternadas de fila se
definen en el estilo de tabla vía `w:tblStylePr type="firstRow"` /
`type="band1Horz"` (conditional formatting de OOXML), y **Pages de macOS
no las aplica al importar un `.docx` ajeno** — se verificó abriendo el
archivo real: respeta los bordes y el peso de fuente del header, pero
ignora el fill oscuro y el color de fuente blanco, y no pinta las bandas
(ver captura de verificación en el historial de esta tarea, 2026-08-04).
Word sí las respeta — pero no había forma de confirmarlo en este entorno
(no hay Word ni LibreOffice instalados, solo Pages), así que en vez de
apostar a que "en Word se va a ver bien" sin poder verificarlo, se aplica
el shading **directo en cada celda** con `docx_kit.py` después de
`pandoc` — formato que ningún lector de `.docx` puede ignorar porque no
depende de resolver un estilo, está en la celda misma.

## Pipeline completo

```bash
# 1. generar el .docx con la plantilla de estilos
pandoc guion.md -o guion.docx --from=markdown+yaml_metadata_block \
  --to=docx --standalone --table-of-contents --toc-depth=2 \
  --reference-doc=<ruta-relativa-a>/design-system/components/docx-reference.docx

# 2. post-procesar las tablas (header oscuro + bandas, directo en celdas)
python3 <ruta-relativa-a>/design-system/components/docx_kit.py guion.docx
```

Nunca se edita `guion.docx` a mano en Word/Pages — si cambia `guion.md`,
se repite el pipeline completo. `docx_kit.py` es idempotente sobre
tablas (vuelve a pintar header/bandas, no acumula shading viejo — saca
cualquier `<w:shd>` previo antes de escribir el nuevo), así que correrlo
dos veces sobre el mismo archivo no rompe nada.

## `docx-reference.docx` — qué estilos define y con qué valores

Construido a partir de `pandoc --print-default-data-file reference.docx`
(la plantilla en blanco que trae pandoc), editando `word/styles.xml` y
`word/theme/theme1.xml` con un script (no a mano en Pages — ver "Cómo se
construyó" abajo). Valores calcados de `pptx_kit.py`
(`design-system/components/pptx-pitch-deck.md`): `BRAND` `#502BD8`, `INK`
`#222222`, `MUTED` `#6E6E6E`, `BG_LIGHT` `#F8F8F8`, `BORDER` `#EDEDED`,
`WHITE` `#FFFFFF`.

| Estilo | Uso | Valores |
|---|---|---|
| `Normal` | Cuerpo de texto | Arial 11pt, color `INK`, interlineado 1.2, 8pt después de párrafo |
| `Heading 1` | Título de documento / secciones de primer nivel (`# ...`) | Arial 24pt bold, color `BRAND`, filete inferior 0.75pt `BORDER` |
| `Heading 2` | Subsecciones numeradas (`## 1. Nombre de la empresa...`) | Arial 15pt bold, color `INK`, barra de acento a la izquierda 3pt `BRAND` (mismo lenguaje que la barrita de acento de `slide_titulo` en el pptx) |
| `Heading 3` | Disponible, no usado en `guion.md` hoy | Arial 10pt bold, `BRAND`, versalitas + tracking — equivalente al kicker mayúscula del pptx, para si aparece un tercer nivel |
| `Block Text` (blockquote, `> texto`) | Frase ancla citada textual, aclaración del guion | Arial itálica, color `MUTED`, filete izquierdo 2pt `BRAND` — equivalente docx del `callout_box` del pptx |
| `Verbatim Char` (código inline, `` `texto` ``) | Referencias a archivo/sección (ej. `` `entregable/business-plan-coto.md` ``) | Courier New, color `BRAND`, fondo `BG_LIGHT` |
| `Hyperlink` | Links | color `BRAND`, subrayado |
| `Table` (estilo base de cualquier tabla) | Bordes hairline 0.5pt `BORDER` en toda la grilla + celdas con más aire (`tblCellMar`) — el header oscuro y las bandas los pinta `docx_kit.py` directo en la celda, no este estilo (ver arriba) |
| `TOC Heading` | Encabezado del índice generado por `--table-of-contents` | Hereda de `Heading 1` (antes tenía su propio color desteñido del template default) |

## Fuente — Arial, decisión distinta a la del `.pptx`

El `.pptx` (`pptx-pitch-deck.md`) declara `Inter`/`Inter Tight` sin
embeber y documenta que hay que instalarlas — ahí el equipo controla la
máquina desde la que se presenta. Acá se optó **al revés**: `guion.docx`
puede terminar abierto por el/la profesor/a en cualquier máquina fuera de
nuestro control, así que en vez de pedir instalar una fuente para que se
vea bien, se usa **Arial** directamente en la plantilla — está en
cualquier instalación de Word/Pages en Mac o Windows sin pedir nada, y su
proporción (x-height alto, grotesca) es razonablemente cercana a Inter
en términos de cuánto texto entra por línea. La identidad visual del
documento se sostiene con el color `BRAND` en headings + la jerarquía de
peso/tamaño (H1 > H2 > body), no con la tipografía exacta — ese es el
mismo principio que ya aplica `tokens.md` ("texto no negro puro / fondo
no blanco puro" pesa más que la fuente exacta).

Se evaluó embeber la fuente (`.docx` sí soporta esto nativamente, vía
obfuscación XOR de los primeros 32 bytes del TTF contra un GUID — a
diferencia de `.pptx`, que necesita un contenedor EOT/Micro Type Express
que este repo no puede generar con confianza) pero implementar y
validar ese algoritmo sin poder abrirlo en Word real en este entorno
(solo Pages) es más riesgo de corromper el archivo que beneficio frente a
la alternativa simple de usar Arial. Documentado acá como la misma clase
de decisión de riesgo/beneficio que la fuente del `.pptx`, no una
solución de peor esfuerzo.

## Cómo se construyó `docx-reference.docx` (para cuando haya que retocarla)

No se editó a mano en Pages — el archivo real se construye con
`design-system/components/build-docx-reference.py` (`python3
build-docx-reference.py`, requiere `pandoc` en el PATH), que genera su
propia base con `pandoc --print-default-data-file reference.docx` y
reescribe los bloques `<w:style w:styleId="...">` de `word/styles.xml`
(Normal, Heading1-3, BlockText, VerbatimChar, Hyperlink, TOCHeading,
Table) más el `fontScheme`/`clrScheme` de `word/theme/theme1.xml`, con
los valores de la tabla de arriba, y sobreescribe
`docx-reference.docx` en el mismo directorio. Motivo: un `.docx` no
tiene forma de editarse por texto plano con precisión a mano de forma
repetible (es XML dentro de un zip, con namespaces y estilos con
herencia `basedOn` encadenada) y editar en Pages es lento e imposible de
scriptear de forma confiable para 9 estilos con valores exactos en hex.
Si hace falta tocar un valor (ej. cambiar el tamaño de `Heading 2`), se
edita la constante correspondiente en `build-docx-reference.py` y se
vuelve a correr — no se edita `docx-reference.docx` directo.

## `docx_kit.py` — qué hace y por qué no está en la plantilla

`style_tables(doc_path)` abre el `.docx` ya generado con python-docx,
recorre cada `table.rows`: la fila 0 (siempre el header — pandoc marca
`w:tblHeader="on"` en la primera fila de cualquier tabla pipe/grid de
markdown) se pinta con `shd fill=INK` + texto blanco bold; el resto
alterna `shd fill=BG_LIGHT` cada dos filas. No usa `python-docx` de alto
nivel para el shading (no tiene API pública para `w:shd`) — usa
`docx.oxml.OxmlElement` directo, mismo patrón de "bajar a XML crudo
cuando la librería no expone algo" que `pptx_kit.py` usa para notas del
orador. Se ejecuta **después** de pandoc, no antes, porque necesita
tablas ya generadas para iterarlas — no puede vivir en la plantilla de
referencia (esa solo define estilos, no contenido).

## Verificación visual — cómo confirmar que un `.docx` nuevo se ve bien acá

No hay Word ni LibreOffice instalados en este entorno — la verificación
real se hizo así (más confiable que `qlmanage`, que renderiza el `.docx`
con un motor propio de macOS que a veces ni siquiera aplica los bordes de
tabla del estilo, aunque Pages sí):

```applescript
tell application "Pages"
    set theDoc to open (POSIX file "/ruta/absoluta/archivo.docx")
    delay 2
    export theDoc to file "/tmp/preview.pdf" as PDF
    close theDoc saving no
end tell
```

seguido de `pdftoppm -png -r 130 archivo.pdf pagina` (Homebrew `poppler`)
para poder mirar cada página como imagen. `qlmanage -t` sirve solo para
un chequeo rapidísimo de la portada, no para confiar en el resultado de
tablas — en esta misma tarea mostró la tabla completamente sin estilo
(cero bordes, cero shading) mientras que Pages, abriendo el mismo
archivo, si la respetaba correctamente.

## Qué NO hace este patrón

No inventa una jerarquía de estilos nueva por documento — cualquier
`guion.md`/documento nuevo de cualquier entregable reusa
`docx-reference.docx` + `docx_kit.py` tal cual están, mismo criterio que
"no se reinventa el patrón desde cero en cada entregable" de
`pptx-pitch-deck.md`. Si un documento nuevo necesita un estilo que no
está acá (ej. una lista numerada con tratamiento particular), se extiende
la plantilla y se documenta acá, no se resuelve con formato manual sobre
el `.docx` de salida.
