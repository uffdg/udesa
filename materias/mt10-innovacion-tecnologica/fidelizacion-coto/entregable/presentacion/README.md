# entregable/presentacion/

Guion y materiales de la presentación final, a cargo de
`tp-presentation-designer` a partir del documento en `entregable/`. Formato
confirmado: 10 minutos, ante CFO/CEO/CMO (ver
`consignas/mt10-fidelizacion-coto.md`).

- `guion.md` — minutado por sección, reparto sugerido, y preguntas de riesgo
  de la defensa oral con respuesta corta preparada.
- `guion.docx` — mismo contenido de `guion.md` exportado a Word, para
  compartir con quien no trabaje en markdown. Generado con
  `pandoc guion.md -o guion.docx --from=markdown+yaml_metadata_block --to=docx --standalone --table-of-contents --toc-depth=2 --reference-doc=../../../../../design-system/components/docx-reference.docx`
  seguido de `python3 ../../../../../design-system/components/docx_kit.py guion.docx`
  (pinta header oscuro + bandas de las tablas directo en cada celda, ver
  por qué en `docx-guion.md`). Nunca se edita a mano en Word/Pages — si
  cambia `guion.md`, se repite el pipeline completo. Aplica los mismos
  tokens que el `.pptx`/`.html` vía
  `design-system/components/docx-reference.docx`, documentado en
  `design-system/components/docx-guion.md`. Fuente: Arial (no Inter —
  decisión explícita distinta a la del `.pptx`, porque este archivo puede
  abrirse en una máquina fuera de nuestro control).
- `presentacion.html` — las 17 slides maquetadas como landing navegable
  (no solo scroll pasivo): nav superior fija por bloque temático, barra de
  progreso, step-strip para sub-secciones (recorrido de cliente, pasos del
  ROI), controles prev/next y navegación por teclado. Patrón documentado en
  `design-system/components/nav-presentacion.md`. Tokens reales de
  `design-system/tokens/tokens.css` embebidos literalmente (mismo acento
  --color-awards elegido para reemplazar al naranja, documentado en el propio
  archivo). Publicado en GitHub Pages.
- `plataforma-fidelizacion-coto.pptx` — la misma estructura de 17 slides en
  formato PowerPoint/Google Slides, para editar o presentar. Al abrirlo en
  Google Slides se convierte automático a formato nativo. **Es la fuente
  canónica del patrón editorial de `.pptx` de todo el repo** — documentado
  en `design-system/components/pptx-pitch-deck.md` e implementado como kit
  reusable en `design-system/components/pptx_kit.py`; cualquier `.pptx`
  nuevo de otra materia/entregable replica esta estructura, no la
  reinventa. No editar este archivo a mano — es la referencia.

Los tres formatos (docx, HTML y pptx) tienen el mismo contenido, sacado
1:1 del guion — ninguno agrega datos que no estén ya en
`entregable/plan-de-negocios.md`.

**Fuente del `.pptx` — requiere `Inter` instalado localmente.**
`plataforma-fidelizacion-coto.pptx` usa "Inter" en sus ~328 runs de texto,
pero la fuente **no está embebida en el archivo** (mismo trade-off
documentado en `design-system/components/pptx-pitch-deck.md`: embeber
fuentes en `.pptx` requiere un contenedor EOT/Micro Type Express, no la
obfuscación simple de `.docx`, y no hay forma confiable de producirlo/
verificarlo en este repo — se decidió documentar el requisito en vez de
arriesgar corromper el archivo de referencia). Si se abre en una máquina
sin la fuente instalada, PowerPoint/Keynote sustituyen por un fallback
(tipo Times/Georgia). Antes de presentar desde una máquina nueva, instalar:

- Inter (variable): https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz,wght%5D.ttf

- **Prototipo funcional**: `prototipo-wallet-coto/` (raíz del repo) —
  demo compartida con `mt25-business-plan-coto`, wallet con datos
  sideados y vistas de member/manager (segmentación RFM, campañas CU-05,
  pago con beneficio auto-aplicado tipo CU-01). No vive acá porque
  también lo usa el otro TP; ver su README para cómo correrlo.
