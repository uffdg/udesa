# entregable/presentacion/

Guion y materiales del pitch, a cargo de `tp-presentation-designer` a
partir del documento en `entregable/`. Formato: **15 minutos de pitch +
10 minutos de preguntas y respuestas** (ver `consignas/mt25-business-plan-coto.md`
— no hay audiencia/role-play específico confirmado en la consigna oficial,
a diferencia de MT10).

- `guion.md` — minutado del pitch, reparto sugerido, y preguntas de riesgo
  esperables en los 10 minutos de Q&A con respuesta corta preparada.
- `guion.docx` — mismo contenido de `guion.md` exportado a Word, para
  compartir con quien no trabaje en markdown. Generado con
  `pandoc guion.md -o guion.docx --from=markdown+yaml_metadata_block --to=docx --standalone --table-of-contents --toc-depth=2 --reference-doc=../../../../../design-system/components/docx-reference.docx`
  seguido de `python3 ../../../../../design-system/components/docx_kit.py guion.docx`
  (pinta header oscuro + bandas de las tablas directo en cada celda, ver
  por qué en `docx-guion.md`). Nunca se edita a mano en Word/Pages — si
  cambia `guion.md`, se repite el pipeline completo. Aplica los mismos
  tokens que el `.pptx`/`.html` (headings en `BRAND` `#502BD8`, blockquote
  con filete de acento, tabla con header oscuro) vía
  `design-system/components/docx-reference.docx`, documentado en
  `design-system/components/docx-guion.md`. Fuente: Arial (no Inter —
  decisión explícita distinta a la del `.pptx`, ver esa misma doc, porque
  este archivo puede abrirse en una máquina fuera de nuestro control).
- `presentacion.html` — las 12 secciones de la plantilla de pitch a
  inversores (Nombre, Equipo, Propósito, Problema, Solución, Producto con
  su roadmap de ejecución, Modelo de negocio, Tamaño de mercado, Por qué
  ahora, Competencia, Modelo financiero, Cierre) más un Anexo navegable de
  supuestos clave, maquetadas como landing navegable (no solo scroll
  pasivo): nav superior fija por bloque, barra de progreso, step-strip para
  sub-secciones (Problema, Producto, Modelo de negocio, Mercado,
  Financiero), controles prev/next y navegación por teclado. Patrón
  documentado en `design-system/components/nav-presentacion.md`. Tokens
  reales de `design-system/tokens/tokens.css` embebidos literalmente (mismo
  acento `--color-awards` que usa la presentación de mt10, por consistencia
  visual entre los dos TPs que comparten la idea de negocio). Introduce un
  componente nuevo, `.card-gap` (documentado en
  `design-system/components/card-gap.md`), para señalar visualmente
  secciones sin datos reales todavía (ej. Equipo) o advertencias
  metodológicas que hay que decir antes de un número (ej. Mercado,
  Financiero). Contenido 1:1 desde `guion.md` y la sección final de
  `entregable/business-plan-coto.md` — ningún dato nuevo.

- `business-plan-coto.pptx` — las 13 slides (12 de la plantilla oficial +
  Anexo de supuestos) en formato PowerPoint/Google Slides, mismo
  contenido 1:1 que `presentacion.html` y `guion.md`. Generado con
  `build-pptx.py` (`python3 build-pptx.py`, requiere `python-pptx`) — si
  cambia el guion, se regenera el pptx con ese script en vez de editarlo
  a mano slide por slide. `build-pptx.py` importa
  `design-system/components/pptx_kit.py` y replica el mismo lenguaje
  visual que `plataforma-fidelizacion-coto.pptx` (mt10) — stat callouts de
  cifra grande (TAM/SAM, CAPEX, métricas de "por qué ahora"), chips para
  la tabla de competencia, tablas armadas por shapes, footer de marca y
  roadmap con flechas para el rollout de 3 años — documentado en
  `design-system/components/pptx-pitch-deck.md`. No arma shapes/textboxes
  sueltos con `python-pptx` puro.

Los tres formatos (HTML, pptx, guion) tienen el mismo contenido, sacado
1:1 de `entregable/business-plan-coto.md` — ninguno agrega datos que no
estén ya ahí.

**Fuente del `.pptx` — requiere `Inter`/`Inter Tight` instalados
localmente.** `business-plan-coto.pptx` setea la tipografía como "Inter"
en cada run de texto, pero la fuente **no está embebida en el archivo**
(decisión explícita, ver `design-system/components/pptx-pitch-deck.md` —
embeber fuentes en `.pptx` requiere generar un contenedor EOT/Micro Type
Express, no la obfuscación simple que usa `.docx`, y no hay forma
confiable de producir/verificar eso en este repo). Si se abre en una
máquina sin la fuente instalada, PowerPoint/Keynote sustituyen por un
fallback (tipo Times/Georgia) que además puede generar wrapping de texto
distinto al pensado. Antes de presentar desde una máquina nueva, instalar:

- Inter Tight (variable): https://github.com/google/fonts/raw/main/ofl/intertight/InterTight%5Bwght%5D.ttf
- Inter (variable): https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf

- **Prototipo funcional**: `prototipo-wallet-coto/` (raíz del repo) —
  demo compartida con `mt10-fidelizacion-coto`, wallet con datos sideados
  y vistas de member/manager. No vive acá porque también lo usa el otro
  TP; ver su README para cómo correrlo.
