# research/

Research crudo que produce `tp-research-analyst` para este entregable:
contexto y tendencias de billeteras virtuales/fintech en Argentina,
competidores directos e indirectos (Mercado Pago, Cuenta DNI, MODO, otras
wallets de retail), market sizing de la oportunidad, y marco teórico de
cátedra de MT25 (network effects, plataformas, modelos de monetización).

Convención de archivos: un `.md` por tema (ej.
`contexto-billeteras-virtuales-argentina.md`, `competidores-wallets.md`,
`market-sizing.md`, `marco-teorico-network-effects.md`). Cada afirmación de
mercado o dato numérico tiene que citar su fuente — no se escribe nada
como hecho sin poder respaldarlo.

Este research es insumo para `tp-solution-architect` y para el documento
de respaldo en `entregable/` — no es el entregable en sí. No se reutiliza
automáticamente el research de `fidelizacion-coto/` aunque el tema se
solape: si un dato con su fuente aplica en los dos TPs, se cita en los dos
lugares por separado.

## Índice actual

- `competidores-billeteras-argentina.md` — Mercado Pago, MODO y Cuenta DNI
  como competidores/benchmarks directos de una eventual wallet COTO:
  posicionamiento, escala (usuarios), funcionalidades (pagos, QR
  interoperable, transferencias, inversión, tarjeta prepaga/crédito,
  cashback/puntos/descuentos, crédito), comunicación/distribución, y
  comparación explícita contra la idea de negocio de wallet COTO —
  incluyendo el hallazgo de que **COTO ya tiene alianzas comerciales
  activas con Mercado Pago (desde ~2020) y con MODO (renovada 2024)** como
  medios de pago aceptados y promocionados en sus sucursales, dato clave
  para el argumento de valor de una wallet propia. Cada dato con fuente y
  fecha de consulta; varios datos (cifra de usuarios de Cuenta DNI,
  alianza COTO-Cuenta DNI, participación de mercado 2025-2026 reconciliada)
  quedan marcados explícitamente como no confirmados o con rango sin
  reconciliar entre fuentes — ver sección 5 del archivo.
- `competidor-uala.md` — Ualá (billetera virtual/neobank regional AR/MX/CO)
  como competidor indirecto: funcionalidades, ecosistema de producto,
  escala, timeline de capital levantado y estrategia regulatoria, según su
  propio deck institucional presentado en UdeSA (fuente autopromocional,
  marcada como tal), comparado explícitamente contra la idea de negocio de
  wallet COTO. Incluye gaps no confirmados y datos marcados como supuesto
  del equipo donde el deck no los respalda.
- `market-sizing-billeteras-argentina.md` — datos públicos citados para el
  criterio "Dimensionamiento de la oportunidad (market sizing)" de la
  consigna: tamaño y crecimiento del mercado de pagos digitales/billeteras
  en Argentina (BCRA Informe de Pagos Minoristas, Global Payments Report
  2026, Kantar, CACE), tamaño del sector retail/supermercados (INDEC
  Encuesta de Supermercados, CAME), y tendencias año a año para el
  argumento de "por qué ahora". Es research crudo citado, no el embudo
  TAM/SAM/SOM final (eso lo arma `tp-solution-architect` en `plans/`).
  Incluye una sección de gaps explícita — en particular, no hay dato
  público confiable de clientes, ticket promedio, frecuencia de compra ni
  facturación actual específicos de COTO, ni una cifra única y verificada
  de cantidad de sucursales.
- `catedra-contexto-tp.md` — programa y objetivos de la materia MT25
  Internet Business Strategy según la Clase 1 (`IBS Clase 1 2026 parte
  1.pdf`), y síntesis citada del caso invitado de Movistar sobre
  transformación digital organizacional (`Evolcuión digital_Programa
  UdeSA_Abr2026_.pdf` — pese al nombre del archivo, es la presentación
  real de Mónica Campetella, no un programa). Útil para el criterio
  "Contexto: tendencias, marco competitivo" de la consigna, como
  vocabulario de cátedra (digitización / digitalización / transformación
  digital) — no como research de mercado de billeteras virtuales.

Fuentes en `fuentes/` revisadas pero descartadas como research de
competidor de este TP (quedan documentadas acá para no repetir el
análisis):
- `_GRIDX Institutional Deck (Apr26)_compressed.pdf` — GridX es un fondo
  de venture capital / company builder de deep biotech y ciencias de la
  vida en LATAM ("life-centered fund"), sin ninguna relación con
  billeteras virtuales, pagos o retail. No es competidor ni benchmark
  relevante para este entregable — no se generó archivo de research.
- `Pitch Cuota Q - Estrategias de negocios en Internet.pdf` — Cuota Q es
  una SaaS B2B de cobro recurrente para clubes y ONGs (gestión de cuotas
  de socios, no crédito ni fintech de consumo). No compite con una wallet
  de retail orientada a clientes de supermercado. Es un pitch real resuelto
  de esta misma cátedra (MT25) — queda como segundo ejemplo de referencia
  para el skill `how-to-structure-pitch` (junto a `anana.pdf`), no como
  research de competidor.
- `UdeSA - MOATS -  042025.pdf` (93 páginas, Clase 4 de MT25 IBS) —
  leído completo. No generó un archivo de research: su contenido
  (tipos de moats, network effects, debilidades, flywheels) se convirtió
  en protocolo reutilizable en la skill
  `.claude/skills/how-to-identify-moats-network-effects/SKILL.md` en vez
  de en research fijo de este TP puntual, porque el framework aplica a
  cualquier entregable de la maestría, no solo a este.
- `2026_04_22 Compilado en UdeSA.pdf` (56 páginas) — leído completo: es
  una única charla de invitado ("Hablemos de IA sin tanto humo", Daniel
  Stilerman/Nivii) sobre el ciclo de hype de IA y adopción
  organizacional. Sí corresponde al programa oficial de MT25 IBS (Clase
  6, "Caso AI Nivii", ver `catedra-contexto-tp.md`), pero su contenido no
  aporta nada específico y citable a "captura de valor" ni al caso COTO
  con el alcance de este research — no se generó archivo de research;
  queda documentado como fuente pendiente si el equipo decide argumentar
  la propuesta de IA de la wallet con este material.
