---
tema: Market sizing — billetera virtual para COTO en Argentina
fecha_de_consulta: 2026-08-03
alcance: Datos públicos citados para dimensionar la oportunidad (criterio
  "Dimensionamiento de la oportunidad / market sizing" de la consigna
  `consignas/mt25-business-plan-coto.md`). Este documento es research crudo
  citado — NO arma el embudo TAM/SAM/SOM final (eso es trabajo de
  `tp-solution-architect` en `plans/`, cruzando estos datos con supuestos
  propios del equipo, marcados como tales, siguiendo
  `.claude/skills/how-to-size-market-tam-sam-som/SKILL.md`).
nota_de_independencia: Este research es propio de este entregable
  (`mt25-estrategias-negocios-internet/business-plan-coto/`) y no reutiliza
  automáticamente nada de `materias/mt10-innovacion-tecnologica/
  fidelizacion-coto/`, aunque el tema (COTO) se solape — TP distinto e
  independiente.
---

# Market sizing — billetera virtual COTO (research)

## Cómo leer este documento

Cada bloque cita su fuente (link + fecha de publicación y/o de consulta).
Donde la cifra es autoreportada por una empresa sobre sí misma (ej. COTO,
Mercado Pago) se marca explícitamente como tal — no es un dato verificado
por un tercero. Donde no encontré una cifra pública confiable, lo marco
como **GAP** en vez de estimarlo — la estimación, si hace falta, es trabajo
de `tp-solution-architect` y debe quedar marcada como supuesto del equipo.

---

## 1. Tamaño del mercado de pagos digitales / billeteras virtuales en Argentina

### 1.1 BCRA — Informe de Pagos Minoristas (fuente primaria regulatoria)

Fuente: BCRA, "Informe de Pagos Minoristas", publicación mensual.
Consultado vía [bcra.gob.ar/publicaciones/informe-de-pagos-minoristas-julio-de-2025](https://www.bcra.gob.ar/publicaciones/informe-de-pagos-minoristas-julio-de-2025/)
(fecha de consulta: 2026-08-03; nota: el contenido extraído de esa URL
corresponde a datos con fecha de referencia agosto de 2025 — el BCRA
actualiza estas páginas y el rótulo de la URL no siempre coincide con el
período de los datos mostrados; para el documento final conviene re-
verificar contra el PDF mensual específico en
[bcra.gob.ar/publicaciones](https://www.bcra.gob.ar/publicaciones/) antes
de citar en el pitch).

Cifras (período de referencia: julio–agosto 2025 según la página):

- **78 billeteras digitales interoperables** registradas ante el BCRA, y
  **51 aceptadores de pagos con transferencia (PCT)** registrados.
- **192 PSPCP** (Proveedores de Servicios de Pago que ofrecen Cuentas de
  Pago — el universo regulatorio de "billeteras") inscriptos en el
  registro del BCRA (dato de junio de 2025).
- Cuentas de pago: sobre un total de **62,3 millones de cuentas**, **14,3
  millones tuvieron saldo** en junio de 2025, por un total de $626.600
  millones.
- Transferencias inmediatas "push": 647,7 millones de operaciones por
  $68,1 billones — **+21% interanual en cantidad, +17% en monto**. 76,1%
  de esas transferencias tuvieron origen/destino en una Cuenta Virtual
  Uniforme (CVU), es decir, en un proveedor no bancario.
- Pagos con QR interoperable: 71,4 millones de operaciones por $1,39
  billones — **+45,8% interanual en cantidad, +57,1% en monto**. El
  97,9% de los pagos con transferencia se inician vía QR. De los clientes
  que pagan así, 55,5% lo hace desde una cuenta bancaria y 44,5% desde una
  cuenta de pago (billetera no bancaria).
- Uso de billeteras digitales: **+73% de crecimiento interanual** (dato
  agregado de uso, según la página consultada).
- Tarjetas de débito: 187,7 millones de transacciones por $4,9 billones —
  **caída del 16,8% en cantidad y 13,7% en monto interanual** (billeteras
  y transferencias le están ganando terreno).

Fuente cruzada (misma serie, otro medio): Infobae, ["El efectivo pierde
terreno: las billeteras y transferencias se consolidan en el sistema de
pagos minoristas"](https://www.infobae.com/economia/2025/09/29/el-efectivo-pierde-terreno-las-billeteras-y-transferencias-se-consolidan-en-el-sistema-de-pagos-minoristas/)
(29/09/2025), que resume el mismo informe BCRA de julio 2025: confirma
las 78 billeteras interoperables y la tendencia de caída del efectivo.

### 1.2 Global Payments Report 2026 (Global Payments / ex-Worldpay) — tendencia de adopción de wallets

Fuente: *Global Payments Report 2026*, citado por:
- Infobae, ["Para 2030 más de la mitad de los pagos a comercios se hará
  con billeteras y transferencias, sin usar tarjetas"](https://www.infobae.com/economia/2026/05/14/para-2030-mas-de-la-mitad-de-los-pagos-a-comercios-se-hara-con-billeteras-y-transferencias-sin-usar-tarjetas/)
  (14/05/2026, consultado 2026-08-03).
- Forbes Argentina, ["Cambio de hábito masivo: 55% del e-commerce
  argentino ya se paga con billeteras digitales"](https://www.forbesargentina.com/negocios/cambio-habito-masivo-55-e-commerce-argentino-ya-paga-billeteras-digitales-n90789)
  (consultado 2026-08-03).

Es un **reporte de consultora/proveedor de pagos** (Global Payments, tras
la adquisición de Worldpay), no un organismo público — se cita como tal,
no como estadística oficial.

Datos clave (Argentina):

| Medio de pago | Comercio físico (POS) 2024 | POS 2025 | Proyección POS 2030 | E-commerce 2024 | E-commerce 2025 | Proyección e-commerce 2030 |
|---|---|---|---|---|---|---|
| Billeteras digitales | 34% | **43%** | 48% | 50% | **55%** | 70% |
| Transferencias cuenta a cuenta | — | 10% | 16% | — | 15% | 21% |
| Efectivo | — | 17% | — | — | — | — |

- El 84% de los encuestados en Argentina dice usar códigos QR para pagar
  con el celular en comercios — "el porcentaje más alto de América
  Latina" según el reporte.
- Este es el dato más directo disponible para el criterio "por qué ahora"
  de la consigna: la adopción de wallets en pagos presenciales (que es el
  caso de uso de una wallet de supermercado) pasó de 34% a 43% del valor
  transaccionado **en un solo año** (2024→2025).

### 1.3 Kantar — hábitos de pago

Citado en Forbes Argentina (mismo artículo que 1.2) y en [MDZ
Online](https://www.mdzol.com/tendencias/billeteras-virtuales-cuando-ayudan-ahorrar-y-cuando-empujan-gastar-n1524869)
(consultado 2026-08-03): según una encuesta de Kantar, **91% de los
argentinos usa al menos un medio de pago que no es efectivo** (débito,
crédito o billetera virtual). No se pudo acceder al reporte primario de
Kantar con la metodología completa — la cifra queda citada vía prensa, no
verificada contra el documento original de Kantar.

### 1.4 Jugadores — cifras autoreportadas por las propias wallets

**Mercado Pago (Mercado Libre)** — resultados anuales 2025, [LA
NACIÓN](https://www.lanacion.com.ar/economia/negocios/mercado-libre-reporto-ingresos-por-us28900-millones-en-2025-y-un-fuerte-salto-en-su-unidad-fintech-nid24022026/)
(24/02/2026) y otras notas de la misma cobertura de balance:
- **~78 millones de usuarios activos mensuales** (+27% interanual) — cifra
  **consolidada Brasil + México + Argentina**, no desagregada por país en
  las fuentes de prensa revisadas. **GAP: no se encontró la cifra
  específica de usuarios activos de Mercado Pago solo en Argentina** en
  fuentes públicas de acceso abierto en esta ronda de research.
- USD 83.700 millones de volumen total de pagos procesado (TPV, 2025,
  +42% interanual) — también consolidado regional.
- En Argentina específicamente: ítems vendidos +36% interanual, GMV en
  moneda constante +42% interanual (dato de e-commerce, no de wallet en
  sí).

**Cuenta DNI** (billetera del Banco Provincia / GBA) — [iProfesional,
vía X/Twitter](https://x.com/iProfesional/status/1952513223413944460) y
[Ámbito](https://www.ambito.com/economia/cuenta-dni-eleva-el-limite-diario-enviar-dinero-cual-es-el-nuevo-monto-octubre-2025-n6201669)
(consultado 2026-08-03): **más de 10 millones de clientes**, posicionada
junto a Mercado Pago y Ualá como "las billeteras virtuales más utilizadas
en Argentina" en 2025. Relevante como benchmark porque, igual que una
eventual wallet COTO, nació ligada a un actor no-fintech puro (el Estado
de la Provincia de Buenos Aires) y hoy ofrece beneficios/reintegros en
supermercados y comercios de cercanía.

**Ualá** — ya cubierto en detalle en `research/competidor-uala.md` de
este mismo entregable (7,5M clientes en Argentina, deck institucional
propio, abril 2026) — no se duplica acá, ver ese archivo para el detalle.

**MODO** (billetera interoperable de la banca privada): mencionada en
varias notas de prensa (Perfil, El Cronista) como una de las wallets con
mayor presencia en supermercados vía beneficios/reintegros, pero **GAP: no
se encontró una cifra pública de usuarios activos o volumen de MODO en
esta ronda de research** — las notas revisadas hablan de promociones
puntuales, no de escala.

---

## 2. Tamaño del mercado de retail / supermercados en Argentina

### 2.1 INDEC — Encuesta de Supermercados (fuente primaria oficial)

Fuente: INDEC, "Encuesta de Supermercados", informes mensuales, serie
ISSN 2545-6636. PDFs oficiales en
[indec.gob.ar/uploads/informesdeprensa/](https://www.indec.gob.ar/uploads/informesdeprensa/)
(consultado 2026-08-03; nota metodológica: los PDF de INDEC no pudieron
extraerse completos con la herramienta de fetch disponible en esta ronda
—devuelven contenido binario— así que las cifras de esta sección
provienen de la búsqueda web sobre esos mismos informes, citando el
informe específico de cada mes; **recomendado volver a verificar contra
el PDF original antes de citar en el pitch final**).

Ventas totales del sector supermercadista a precios corrientes, por mes
(2025), y variación interanual:

| Mes 2025 | Ventas totales (precios corrientes) | Variación interanual |
|---|---|---|
| Abril | $1.975.885,8 millones | +48,0% |
| Julio | $2.059.013,6 millones | +29,6% |
| Agosto | $2.107.204,4 millones | +26,3% |
| Septiembre | $1.962.363,0 millones | +23,8% |
| Noviembre | $2.211.327,2 millones | +21,2% |

- Acumulado enero–septiembre 2025 vs. mismo período 2024: **+2,7%** (dato
  en términos reales/constantes, según nota que resume el informe de
  septiembre).
- **GAP**: no se encontró en esta ronda un total anual consolidado
  2025 en un solo documento — INDEC publica mes a mes, no un acumulado
  anual único. Sumar los 12 meses a precios corrientes para un TAM anual
  del sector requeriría revisar los 12 informes mensuales — no lo hice
  yo mismo para no introducir un cálculo propio no verificado; queda como
  tarea puntual si `tp-solution-architect` necesita el número exacto.

**Medios de pago dentro de la venta de supermercados** (dato clave para
el bottom-up de la wallet COTO, porque muestra cuánto del gasto en
supermercado ya se paga sin efectivo/tarjeta tradicional):

| Medio de pago | Nov. 2024 | Ago. 2025 | Ene. 2026 |
|---|---|---|---|
| Tarjeta de crédito | 47,5% | 45,1% | 43,1% |
| Tarjeta de débito | 25,1% | 26,0% | 25,0% |
| Efectivo | 16,3% | 15,5% | — |
| Otros medios (incl. billeteras virtuales) | 11,1% | — | — |

Fuentes de la tabla: resumen de los informes INDEC citado por [El
Litoral](https://www.ellitoral.com/economia/indec-encuesta-mensual-supermercados-precios-demanda-stocks-ventas-tipo-medio-pago-debito-credito_0_wxwimrpOd3.html),
[Canal 12 Misiones](https://www.canal12misiones.com/noticias-de-misiones/economia/ventas-supermercado-indec)
y [Mendoza Post](https://www.mendozapost.com/economia/indec-supermercados-datos-agosto-2025/)
(consultado 2026-08-03). El desglose "otros medios" de noviembre 2024 es
el único dato encontrado que aísla explícitamente billeteras virtuales
dentro del mix de pago de supermercados — **11,1%** — útil como piso de
referencia (no específico de COTO) para argumentar cuánto del gasto en
supermercado ya migró a wallets antes de que exista una wallet propia de
COTO.

### 2.2 CAME — Índice de Ventas Minoristas (retail pyme, contexto)

Fuente: CAME (Confederación Argentina de la Mediana Empresa),
["Índice de Ventas Minoristas"](https://www.redcame.org.ar/estadisticas-pyme/78/ndice-de-ventas-minoristas)
(consultado 2026-08-03), y cobertura de [Infobae](https://www.infobae.com/economia/2026/03/20/consumo-con-senales-mixtas-cayeron-las-ventas-en-supermercados-pero-crecieron-en-mayoristas-al-inicio-de-2026/)
y [Ámbito](https://www.ambito.com/economia/las-ventas-minoristas-cerraron-el-2025-una-suba-del-25-n6232903).

- Relevamiento mensual sobre 1.212 comercios minoristas pyme del país.
- Ventas minoristas pyme 2025: **+2,5%** interanual acumulado (tras una
  caída del año previo).
- Supermercados dentro de esa medición: **+2%** acumulado 2025 (tras una
  caída del 11% en 2024).
- Nota: este índice mide **comercio minorista pyme en general**, no es
  específico de cadenas grandes como COTO — se cita como contexto de
  tendencia de consumo, no como tamaño de mercado de supermercados.

### 2.3 COTO — datos propios de la empresa

**GAP importante y explícito**: no se encontró, en esta ronda de
research pública, ningún dato oficial y reciente (2025/2026) de COTO
sobre número de clientes, ticket promedio, frecuencia de compra o
facturación anual actual. COTO es una empresa de capital privado/familiar
que no publica balances públicos como una empresa cotizante. Lo que sí
se encontró, con calidad de fuente dispar:

- **Sucursales**: la propia página de COTO
  ([coto.com.ar/sucursales/index.asp](https://www.coto.com.ar/sucursales/index.asp),
  consultado 2026-08-03) lista sucursales agrupadas por zona (Capital
  Federal 91, Zona Norte 18, Zona Sur 14, Zona Oeste 15, Costa Atlántica
  5, Santa Fe 7, Entre Ríos 1, Neuquén 1, Mendoza 1). **La suma de ese
  desglose da ~153, pero la extracción automática de la página reportó un
  total de 242 sucursales — hay una inconsistencia no resuelta entre el
  desglose y el total mostrado.** Otra fuente no oficial (La Izquierda
  Diario, sin fecha clara) menciona "220 bocas de expendio". **No se pudo
  confirmar una cifra única y confiable de cantidad de sucursales de COTO
  en esta ronda — recomendado verificar manualmente contra la página
  oficial antes de usar este número en el pitch.**
- **Posición de mercado**: fuentes de prensa (ej. Comercio y Justicia,
  sobre la operación Cencosud–Carrefour) ubican a COTO como una de las
  tres cadenas más grandes de supermercados de Argentina junto a
  Carrefour y Cencosud, y la describen como la principal cadena de
  capitales nacionales. Un análisis de mercado (FAECYS/SEYE, informe de
  cadenas de supermercados febrero 2025 —
  [faecys.org.ar](https://www.faecys.org.ar/faecys/wp-content/uploads/2025/03/SEYE-INFORME-CADENAS-DE-SUPERMERCADOS-Febrero-2025.pdf),
  el PDF no pudo extraerse con la herramienta disponible, **queda
  pendiente de revisión manual**) es la fuente sectorial más específica
  encontrada, pero no se pudo leer su contenido en esta ronda. Otra
  búsqueda agregada (sin PDF) situó a las 6 principales cadenas
  controlando el 80% de las ventas del sector, y a las 3 más grandes
  (Carrefour, Cencosud, COTO) cerca del 50% conjunto — **cifra de
  agregador de búsqueda, no verificada contra el informe FAECYS original,
  se cita con esa salvedad**.
- **Empleados**: COTO figura como el mayor empleador privado de Argentina
  con **18.975 empleados en relación de dependencia** a enero de 2025,
  según un informe (fuente exacta no verificable más allá del resumen de
  búsqueda — **queda como dato a confirmar**, probablemente derivado de un
  ranking sectorial tipo FAECYS/SEYE o de un medio especializado en RRHH).
- **Facturación**: cifras encontradas son viejas y no comparables ($53.000
  millones sin año claro; $76.500 millones "al año 2019", puesto 35 del
  ranking de mayores empresas del país) — **no sirven para un cálculo de
  2025/2026, se marcan como obsoletas, no se usan**.
- **Coto Digital (canal e-commerce propio)**: según la propia página
  institucional de Coto Digital
  ([coto.com.ar](https://www.coto.com.ar/coto-digital/index.asp), fuente
  autopromocional, consultado 2026-08-03): "más de 17 años liderando el
  mercado de eCommerce de alimentos y bebidas en Argentina", "20% más de
  visitas por mes y 50% más de pedidos que su seguidor inmediato", "tasa
  de conversión 30% más alta que la media mundial del eCommerce de
  Alimentos y Bebidas", "+30 mil artículos" en catálogo online. Todas
  estas cifras son autoreportadas por COTO sobre sí misma, sin
  metodología ni fuente externa — se citan como "lo que COTO dice de
  COTO", igual que se hizo con Ualá en `competidor-uala.md`.

**Conclusión de esta subsección para quien diseñe el bottom-up**: no hay
número público confiable de clientes activos, ticket promedio o
frecuencia de compra específicos de COTO. Cualquier bottom-up
(clientes COTO × ticket × frecuencia) que arme `tp-solution-architect`
va a tener que partir de un supuesto propio del equipo (ej. estimar
clientes COTO a partir de población del área de cobertura geográfica de
sus sucursales, o a partir de la cuota de mercado agregada del sector),
marcado explícitamente como supuesto — no como dato COTO confirmado.

---

## 3. Tendencias relevantes para "por qué ahora"

Resumen de series de tiempo encontradas (detalle de fuente en las
secciones 1 y 2 de arriba, no se repite acá):

- **Pagos con billetera en comercio físico**: 34% → 43% del valor
  transaccionado en Argentina, 2024 → 2025 (Global Payments Report 2026,
  vía Infobae/Forbes Argentina). Proyección a 48% para 2030.
- **Pagos con billetera en e-commerce**: 50% → 55% del valor, 2024 → 2025
  (misma fuente). Proyección a 70% para 2030.
- **QR interoperable (BCRA)**: pagos +45,8% en cantidad y +57,1% en monto
  interanual (informe BCRA, dato 2025).
- **Transferencias inmediatas "push" (BCRA)**: +21% en cantidad, +17% en
  monto interanual; 76,1% ya se origina/destina en cuentas no bancarias
  (CVU).
- **Uso agregado de billeteras digitales (BCRA)**: +73% interanual (dato
  agregado de uso, mismo informe).
- **Caída de tarjeta de débito (BCRA)**: -16,8% en cantidad interanual —
  evidencia de sustitución hacia wallets/transferencias, no solo
  crecimiento nuevo.
- **E-commerce total Argentina (CACE)**: facturación 2025 $34.033.238
  millones, +55% interanual; 25,1 millones de compradores (+1,34 millones
  nuevos en el año); "Alimentos, bebidas y artículos de limpieza" es la
  **segunda categoría** con mayor facturación del e-commerce argentino
  (después de pasajes y turismo) — dato directamente relevante para el
  caso de una wallet de supermercado.
- **Medios de pago del e-commerce (CACE 2025)**: tarjeta de crédito lidera
  con 67%; el informe no desglosa el % específico de billeteras
  electrónicas dentro del e-commerce total en el resumen consultado —
  **GAP parcial**, se recomienda revisar el estudio completo de CACE si
  hace falta ese dato exacto.
- **Medios de pago dentro de supermercados (INDEC)**: "otros medios"
  (incluye billeteras) pasó a representar 11,1% de las ventas de
  supermercado en noviembre 2024 — no hay serie de tiempo completa de
  este desglose específico en esta ronda de research (**GAP**: sería
  valioso conseguir varios meses de esta métrica puntual para mostrar
  tendencia, no solo un punto).
- **Kantar**: 91% de los argentinos usa al menos un medio de pago no
  efectivo; 84% usa QR para pagar con el celular — el porcentaje más alto
  de la región según Global Payments Report 2026.

**Lectura conjunta para el "por qué ahora"**: todas las fuentes
independientes consultadas (BCRA regulador, Global Payments/consultora de
pagos, CACE cámara de e-commerce, INDEC estadística oficial de
supermercados) apuntan en la misma dirección — la sustitución de efectivo
y tarjeta de débito por billeteras/transferencias en Argentina está
ocurriendo *ahora*, con crecimiento de dos dígitos año a año tanto en
comercio físico como online, y el propio informe de supermercados de
INDEC ya capta una porción de billeteras virtuales dentro de la venta de
supermercado. Esto sostiene el argumento de timing, pero no reemplaza la
necesidad de un dato específico de COTO (que no existe públicamente, ver
sección 2.3) para el bottom-up.

---

## 4. Resumen de gaps (no inventar, dejar para `tp-solution-architect` como supuesto marcado)

1. Usuarios activos de Mercado Pago **específicos de Argentina** (solo hay
   cifra consolidada regional Brasil+México+Argentina).
2. Usuarios/volumen de **MODO** en Argentina.
3. Cifra única y confiable de **sucursales de COTO** (inconsistencia entre
   242 total reportado y ~153 de la suma por zona en la página oficial;
   220 según otra fuente no oficial).
4. **Cantidad de clientes, ticket promedio y frecuencia de compra
   específicos de COTO** — no hay ningún dato público confiable
   encontrado. Es el gap más importante para el bottom-up del pitch.
5. **Facturación actual (2025/2026) de COTO** — solo hay cifras viejas
   (2019 o sin año claro), no comparables al resto del research.
6. Contenido completo del informe **FAECYS/SEYE "Cadenas de
   Supermercados" (febrero 2025)** — el PDF no se pudo extraer con la
   herramienta disponible en esta ronda; probablemente sea la fuente
   sectorial más específica sobre el ranking de cadenas (incluida COTO) y
   vale la pena reintentar su lectura manualmente.
7. **Total anual consolidado 2025 de ventas de supermercados (INDEC)** —
   solo hay cifras mes a mes; sumar los 12 meses requeriría revisar cada
   informe mensual, no se hizo en esta ronda para no introducir un cálculo
   propio no verificado como si fuera un dato encontrado.
8. **% específico de billeteras electrónicas dentro del mix de pago del
   e-commerce argentino (CACE)** — el resumen consultado solo da el dato
   agregado de tarjeta de crédito (67%).
