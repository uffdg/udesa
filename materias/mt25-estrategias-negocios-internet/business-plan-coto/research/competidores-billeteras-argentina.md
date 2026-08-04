---
tema: Mercado Pago, MODO y Cuenta DNI — competidores/benchmarks directos de
  una eventual billetera virtual de COTO
fecha_de_consulta: 2026-08-03
tipo_de_fuente: fuentes públicas (sitios oficiales, prensa especializada en
  fintech/retail argentino, comunicados de MercadoLibre a inversores, Google
  Play/App Store, notas de BCRA). No hay reportes propios de BCRA/CAME con
  datos de penetración descargados en este research — se citan notas de
  prensa que a su vez citan a esos organismos, marcado como tal en cada caso.
alcance: posicionamiento general, funcionalidades (pagos, transferencias,
  inversión, tarjeta prepaga, cashback/puntos, crédito, QR interoperable),
  comunicación/distribución, y comparación explícita contra la idea de
  negocio de wallet COTO (público de supermercado con alta frecuencia de
  compra) tal como la describe la consigna
  (`consignas/mt25-business-plan-coto.md`) — no contra un plan de solución
  ya diseñado, porque `plans/` de este entregable todavía no tiene una
  propuesta.
nota_independencia: este archivo es research propio de
  materias/mt25-estrategias-negocios-internet/business-plan-coto/ — no
  reutiliza ni copia el research de
  materias/mt10-innovacion-tecnologica/fidelizacion-coto/, aunque el tema de
  fondo (billetera COTO) se solape entre los dos TPs.
---

# Mercado Pago, MODO y Cuenta DNI — research de competidores

## 0. Contexto de mercado que aplica a los tres (para no repetirlo en cada
sección)

- El **BCRA impuso la interoperabilidad de pagos con QR** vía el esquema
  "Transferencias 3.0": desde el 30/4/2024 (tras sucesivas postergaciones),
  cualquier billetera o app bancaria puede leer el QR de cualquier comercio y
  pagar con transferencia, y desde el 1/5/2024 también con tarjeta de
  crédito/prepaga vía QR. Mercado Pago se resistió activamente a esto
  (bloqueaba pagos con tarjetas cargadas en otras billeteras) y debió ceder
  por la Comunicación "A8032" del BCRA. Fuente: Infobae, "A partir de mayo,
  el Banco Central obligará a Mercado Pago a aceptar pagos QR con tarjeta
  desde otras billeteras" (11/4/2024) e Infobae, "Pagos QR con tarjeta:
  Mercado Pago cedió al pedido de los bancos..." (29/5/2024) —
  https://www.infobae.com/economia/2024/04/11/a-partir-de-mayo-el-banco-central-obligara-a-mercado-pago-a-aceptar-pagos-qr-con-tarjeta-desde-otras-billeteras/
  y
  https://www.infobae.com/economia/2024/05/29/pagos-qr-con-tarjeta-mercado-pago-cedio-al-pedido-de-los-bancos-y-no-cobrara-comision-por-el-uso-de-su-red/
  — consultado 2026-08-03. Este dato es relevante para el pitch de COTO: el
  QR interoperable baja la barrera técnica de que un comercio (o una wallet
  nueva) dependa de una sola red de pagos.
- Nota de BCRA (comunicado oficial): "El BCRA dio otro paso hacia la
  interoperabilidad total de los pagos con QR" —
  https://www.bcra.gob.ar/noticias/el-bcra-dio-otro-paso-hacia-la-interoperabilidad-total-de-los-pagos-con-qr/
  — consultado 2026-08-03 (fecha de publicación de la nota no confirmada en
  el resumen obtenido; queda como fuente primaria a revisar si se necesita
  precisión regulatoria en el documento final).
- **Dato de concentración de mercado desactualizado, no usar sin
  advertencia**: varias notas de 2020-2021 (ej. Latam Fintech Hub/iProUP,
  15/6/2020, y Punto Convergente/UCA, dic. 2021, citando COELSA y Red Link)
  afirman que "entre el 80% y 90% de los movimientos" se concentraban en
  4 wallets (Mercado Pago, Ualá, Cuenta DNI, ValePEI). **Estos números
  tienen 5-6 años y son de la etapa inicial del mercado** (Mercado Pago
  tenía ~3,4-5,4M de usuarios en ese momento, hoy tiene decenas de
  millones) — se citan acá solo para dejar constancia de que se
  descartaron como dato de research vigente, no para usarlos en el pitch
  como cifra actual. **No confirmado** un dato de concentración de mercado
  2025-2026 equivalente y bien fechado — punto pendiente si el pitch
  necesita ese dato específico.
- **Uso combinado banco + fintech**: "más del 70% de los usuarios combina
  servicios bancarios y fintech" y "el 75% de las transferencias inmediatas
  ya involucra cuentas virtuales", según nota de prensa que cita informes
  del BCRA de mayo 2026 (fuente: resumen de búsqueda sobre notas de Ambito/
  El Cronista de BCRA, sin artículo único verificado con WebFetch completo
  — **marcar como dato a re-verificar con la fuente primaria del BCRA antes
  de citarlo en el documento final**, consultado 2026-08-03).

## 1. Mercado Pago

### 1.1 Posicionamiento

Mercado Pago es el brazo fintech de MercadoLibre (MELI), la plataforma de
e-commerce dominante de la región. Se posiciona como billetera/banco digital
de uso masivo, con el respaldo del ecosistema de e-commerce y logística de
MercadoLibre. No se pudo acceder al contenido completo de mercadopago.com.ar
vía fetch automatizado (error HTTP 403) — el posicionamiento oficial en este
research se reconstruye a partir de prensa especializada y comunicados a
inversores de MELI, no del sitio propio. **Gap**: falta lectura directa del
copy institucional del sitio oficial.

### 1.2 Escala (usuarios)

- **83 millones de usuarios activos mensuales (MAU) a nivel regional**
  (Argentina + Brasil + México), +29% interanual, según el reporte de
  resultados del primer trimestre 2026 de MercadoLibre (publicado
  ~mayo 2026). Esta cifra **no es específica de Argentina** — es la suma
  regional. Fuente: comunicado de resultados Q1 2026 de MELI, citado por
  Bloomberg Línea, "Por qué el foco fintech de MercadoLibre será clave como
  ventaja competitiva, según analistas" —
  https://www.bloomberglinea.com/latinoamerica/argentina/por-que-el-foco-fintech-de-mercadolibre-sera-clave-como-ventaja-competitiva-segun-analistas/
  — consultado 2026-08-03.
- Otros datos del mismo trimestre (regional, no solo Argentina): activos
  bajo gestión +77% interanual (~USD 20 mil millones); cartera de crédito
  +87% interanual (USD 14,6 mil millones); cartera de tarjetas de crédito
  +104% interanual (USD 6,6 mil millones), con 2,7 millones de tarjetas
  emitidas en el trimestre; 4,6 mil millones de transacciones (+39%); +43
  millones de usuarios usando productos de inversión (regional). Misma
  fuente.
- **Usuarios específicos de Argentina**: no hay cifra oficial publicada por
  la empresa. Una nota de mercado estima "**+25 millones de usuarios
  activos en Argentina**", aclarando explícitamente que "la compañía no
  publica cifras oficiales" para el desagregado por país — **se marca como
  estimación de mercado, no como hecho confirmado por MELI**. Fuente:
  síntesis de búsqueda sobre notas de iProUP/Ámbito, consultado 2026-08-03
  (no se pudo aislar un único artículo con fecha exacta para esta cifra
  puntual — **gap**: confirmar con una nota específica antes de citarla en
  el documento final).
- Google Play (app "Mercado Pago: cuenta digital", paquete
  `com.mercadopago.wallet`): **+100.000.000 de descargas**, rating
  **~4,8-4,9/5 sobre ~13 millones de reseñas** (cifra regional, no
  desagregada por país; Google Play no permite filtrar por Argentina).
  Fuente: síntesis de datos de Google Play Store, consultado 2026-08-03 —
  no se pudo confirmar con fetch directo de la ficha de la app (la página
  de Google Play devolvió contenido truncado al intento de fetch
  automatizado); **dato a reconfirmar visitando la ficha manualmente si se
  necesita precisión para el pitch**.

### 1.3 Funcionalidades

- **Pagos y QR**: pago con QR propio en comercios físicos y online desde
  2015 (app), tarjeta prepaga desde 2014. Fuente: síntesis de búsqueda
  sobre historia de producto de Mercado Pago, consultado 2026-08-03 (fecha
  de fuente original no confirmada — **no confirmado** con fuente primaria
  única).
- **QR interoperable**: obligado por el BCRA a aceptar pagos QR con
  tarjetas de otras billeteras desde el 1/5/2024, después de resistirse
  activamente (ver sección 0). No es una funcionalidad que Mercado Pago
  haya ofrecido por decisión propia, sino por mandato regulatorio.
- **Transferencias**: CVU propio, transferencias a contactos, a CBU/CVU.
- **Inversión**: cuenta remunerada con rendimiento diario vía Fondo Común de
  Inversión (money market) administrado por Industrial Asset Management
  SGFCISA — sin plazo mínimo, rescate inmediato, tasa variable diaria según
  rendimiento de los últimos 30 días. También lanzó (según nota de Infobae,
  27/2/2025) una **cuenta remunerada en dólares con rendimiento diario**.
  Fuente: iProfesional, "Rendimiento de Mercado Pago: el monto que abona
  por dejar dinero en cuenta" e Infobae, "Mercado Pago lanzó una cuenta
  remunerada en dólares..." (27/2/2025) —
  https://www.infobae.com/economia/2025/02/27/mercado-pago-lanzo-una-cuenta-remunerada-en-dolares-y-se-sumo-a-una-tendencia-que-se-expande-entre-bancos-y-fintech/
  — consultado 2026-08-03.
- **Tarjeta prepaga y de crédito**: tarjeta de débito Mastercard prepaga sin
  costo, y tarjeta de crédito propia sin anualidad con hasta 18 cuotas sin
  interés en Mercado Libre y comercios adheridos. Fuente: síntesis de
  búsqueda sobre producto Mercado Pago, consultado 2026-08-03.
- **Cashback**: devolución de dinero (no puntos/cupones) por compras hechas
  desde la app o con la tarjeta débito Mastercard, condicionado a tener
  suscripción activa a **Meli+** y a comprar en comercios/categorías con
  promoción vigente. A diferencia de puntos, el beneficio se acredita como
  dinero disponible en la cuenta. Fuente: blog oficial de Mercado Pago
  México (equivalente funcional, el mecanismo de cashback es el mismo
  producto regional) — https://www.mercadopago.com.mx/blog/como-funciona-el-cashback-de-mercado-pago
  — consultado 2026-08-03. **Nota**: esta fuente es de la operación
  mexicana; no se confirmó que las condiciones de Meli+ sean idénticas en
  Argentina — marcar como razonablemente extrapolable, no como hecho
  100% confirmado para AR.
- **Crédito**: préstamos personales y cartera de tarjetas de crédito (ver
  cifras de crecimiento en 1.2).

### 1.4 Comunicación / distribución

- **Meli+**: programa de suscripción/lealtad de MercadoLibre (no exclusivo
  de Mercado Pago sino de todo el ecosistema MELI), lanzado en Argentina en
  mayo de 2025 con dos planes (Esencial y Total), cuarto país de la región
  en tenerlo después de Brasil, México y Chile. Beneficios no atados a
  cantidad/frecuencia de compra. Coincide estratégicamente con el Hot Sale
  2025 para impulsar adopción. Fuente: iProUP, "Mercado Libre lanza Meli+,
  su programa de lealtad: cuánto cuesta y qué beneficios ofrece" —
  https://www.iproup.com/economia-digital/55891-que-es-y-cuanto-cuesta-meli-el-servicio-de-suscripcion-de-mercado-libre
  — consultado 2026-08-03.
- **Inversión en Argentina**: MercadoLibre anunció una inversión de
  **USD 3.400 millones en Argentina para 2026** (vs. USD 2.600 millones en
  2025), destinada en parte a expansión logística. No se desagrega
  específicamente cuánto de esa inversión es para Mercado Pago vs. el
  negocio de e-commerce/logística — **no confirmado** el desglose. Fuente:
  síntesis de nota citando comunicado de MELI, consultado 2026-08-03.
- **Alianza directa con COTO (dato crítico para el caso)**: Mercado Pago
  tiene un acuerdo comercial con COTO desde (según las fuentes disponibles)
  agosto de 2020, que habilita pago con QR de Mercado Pago en las +120
  sucursales físicas de COTO, con descuentos promocionales (ej. 10% en la
  primera compra al lanzamiento; reintegros puntuales posteriores, como un
  25% sin tope reportado por Los Andes en una nota sin fecha exacta
  confirmada). Fuente: La Nación, "Supermercados. Coto sella una alianza
  con Mercado Pago para incorporar los pagos QR" —
  https://www.lanacion.com.ar/economia/supermercados-coto-sella-alianza-mercado-pago-incorporar-nid2414252/
  — consultado 2026-08-03 (fecha de publicación exacta de la nota de La
  Nación no confirmada en el fetch — el hallazgo ubica el anuncio original
  alrededor de agosto de 2020, con cobertura posterior de iProUP e
  iProfesional). **Esto significa que COTO ya es cliente/socio comercial de
  Mercado Pago como medio de pago aceptado en tienda**, no un competidor
  aislado — punto clave para el diseño de la solución.

### 1.5 Comparación explícita contra la idea de negocio de wallet COTO

| Dimensión | Mercado Pago | Wallet COTO (idea de negocio, sin diseño aún) |
|---|---|---|
| Público objetivo | Masivo, cualquier persona con smartphone en la región (AR/BR/MX), no ligado a un retailer. | Clientela de supermercado COTO — base más chica, concentrada en Argentina, con relación de compra recurrente ya existente. |
| Relación con el cliente | Producto financiero + comercial que nace del ecosistema MercadoLibre (e-commerce, no supermercado físico). | Producto derivado de una relación de consumo físico (compra de supermercado) — canal adicional sobre una relación ya existente, no el motivo primario. |
| Escala | Decenas de millones de usuarios en Argentina (estimación de mercado, no oficial), 83M MAU regionales, capital de una empresa que cotiza en Nasdaq. | Sin escala propia — desarrollo nuevo de una empresa de retail. |
| Alcance de producto | Ecosistema financiero amplio: pagos, transferencias, cuenta remunerada en pesos y dólares, tarjeta prepaga y de crédito, crédito personal, cashback vía Meli+. | No confirmado — **supuesto del equipo**: alcance más acotado (pagos, posiblemente cashback/puntos ligados a compra, posiblemente crédito de consumo), no un ecosistema financiero completo, dado que COTO no tiene licencia bancaria ni track record fintech (confirmar si aplica también a este TP, no asumido de MT10). |
| Relación directa con COTO hoy | **Ya es medio de pago aceptado en las sucursales físicas de COTO desde ~2020**, con promociones activas. | N/A — la wallet propuesta competiría por el mismo checkout donde Mercado Pago ya está integrado. |
| Barrera de entrada que ya tiene | Efecto de red del ecosistema MercadoLibre (compradores y vendedores), volumen de datos transaccionales de e-commerce + pagos, capital de mercado público. | No tiene ninguna de esas barreras. Lo que sí tendría y Mercado Pago no tiene de forma nativa: relación de compra recurrente específica de supermercado y datos de consumo de góndola — **supuesto del equipo**, a validar en diseño de solución. |

**Implicación para el pitch (no es diseño de solución, es lectura de
research)**: cualquier wallet de COTO no entra a un mercado "vacío" en su
propio local — hoy ya convive en el checkout de COTO con Mercado Pago (y
con MODO, ver sección 2) como medios de pago aceptados. El argumento de
valor de una wallet propia no puede ser solo "aceptar pagos digitales" (eso
ya lo resuelven ambos), tiene que ser algo que ni Mercado Pago ni MODO
ofrecen hoy de forma nativa: personalización/beneficios atados
específicamente al historial de compra de supermercado del cliente.

### 1.6 Gaps de research no cubiertos (Mercado Pago)

- Sitio oficial mercadopago.com.ar no accesible por fetch automatizado
  (403) — el posicionamiento institucional propio no se leyó de primera
  mano.
- No hay cifra oficial y específica de usuarios de Mercado Pago solo en
  Argentina (solo estimaciones de mercado y la cifra regional de 83M MAU).
- No se confirmó el desglose de inversión 2026 de MELI en Argentina
  específicamente para Mercado Pago.
- No se confirmó con fuente primaria si el mecanismo exacto de cashback vía
  Meli+ (documentado con fuente mexicana) es idéntico en Argentina.

## 2. MODO

### 2.1 Posicionamiento

MODO es la billetera digital creada por una red de bancos argentinos
(privados y públicos) —desarrollada por la empresa **Play Digital S.A.**—
para competir con Mercado Pago y el mundo fintech, integrándose **dentro**
de las apps de los bancos participantes (y también como app propia
"MODO: Conectá tu dinero"). Su propuesta de valor institucional, según su
sitio oficial, se organiza alrededor del concepto "adentro" (de la app del
banco): "pagar más fácil, seguro" y acceso a promos bancarias. Fuente:
modo.com.ar, consultado 2026-08-03 vía fetch.

**Modelo técnico distintivo**: a diferencia de Mercado Pago o Cuenta DNI
(que operan sobre una cuenta/CVU propios), MODO funciona como **agregador
de pagos que refleja el saldo de las cuentas bancarias de cada usuario**,
no como una billetera con fondos propios independientes del banco. Fuente:
documento académico de la Universidad Torcuato Di Tella sobre el ecosistema
de billeteras virtuales argentino (vía resumen de fetch, no se pudo acceder
al PDF completo por error 403 en el segundo intento) — consultado
2026-08-03. **Nota de fuente**: este dato proviene de un fetch parcial de
un repositorio académico; queda marcado para reconfirmar con el PDF
completo si el equipo necesita citarlo textualmente en el documento final.

### 2.2 Bancos participantes

Red de **~30 instituciones**, incluyendo bancos privados (Santander,
Galicia, BBVA, Macro, HSBC, Comafi, Itaú, Supervielle, Credicoop,
Hipotecario, ICBC, Piano, Banco de Córdoba, Patagonia, Banco de Corrientes,
Mariva, Bica, Dino, Banco del Sol, Roela, BST) y bancos públicos (Banco
Nación, Banco Ciudad; Banco Provincia no participa de MODO — opera su
propia billetera, Cuenta DNI, ver sección 0 y 3), más bancos provinciales
del Grupo Petersen (Santa Fe, Santa Cruz, San Juan, Entre Ríos). Fuente:
documento UTDT citado arriba (fecha del documento no confirmada más allá de
que describe el lanzamiento, ~2020) — **dato de composición de bancos puede
haber cambiado desde entonces, no reverificado con una lista 2025-2026** —
marcar como "válido al momento del lanzamiento, no confirmado como
vigente hoy".

### 2.3 Escala (usuarios y comercios)

- **17 millones de usuarios** en Argentina y **800.000 comercios
  adheridos**, con datos de cierre de 2024. Fuente: BBVA Argentina
  (innovación), "MODO cuadriplicó la cantidad de pagos online en 2024",
  publicado 22/1/2025 —
  https://www.bbva.com/es/ar/innovacion/modo-cuadriplico-la-cantidad-de-pagos-online-en-2024/
  — consultado 2026-08-03. Es una fuente de uno de los bancos socios de
  MODO (BBVA), no un medio independiente — se marca como fuente interesada,
  aunque BBVA no es el operador de MODO (Play Digital sí lo es).
- Pagos online en 2024: **4x respecto a 2023**. Transferencias a números de
  celular: **30 millones**, el doble que en 2023. Diciembre 2024: **+2.400
  promociones ofrecidas**, 3x más que diciembre 2023. Misma fuente.
- Nota más antigua (Ámbito, sin fecha exacta confirmada en el resumen
  obtenido) reportaba **2 millones de usuarios** en una etapa temprana —
  queda como referencia de crecimiento (2M → 17M), no como cifra vigente.

### 2.4 Funcionalidades

- **Pagos y QR**: pago por QR o contactless en comercios físicos, tiendas
  online y transporte público. Fuente: descripción de la app "MODO:
  Conectá tu dinero" en Google Play (`com.playdigital.modo`), consultado
  2026-08-03.
- **QR interoperable**: MODO fue explícitamente uno de los actores que
  impulsó (junto con los bancos) el reclamo al BCRA para forzar a Mercado
  Pago a aceptar QR con tarjetas de otras billeteras (ver sección 0). Una
  nota de Infobae (30/4/2024) aclara que, previo a la resolución del BCRA,
  el mecanismo de bloqueo de Mercado Pago "deja afuera a Modo... también
  se ven afectadas otras billeteras bancarias de uso masivo como Cuenta DNI
  o BNA+" — es decir, MODO fue perjudicado por la falta de interoperabilidad
  antes de la resolución regulatoria, no beneficiario de ella.
- **Transferencias**: envío y solicitud de dinero a contactos o números de
  celular, sin necesidad de CBU.
- **Tarjetas**: permite cargar y pagar con tarjetas de débito y crédito de
  los bancos participantes (no emite tarjeta propia — a diferencia de
  Mercado Pago y Cuenta DNI, que sí tienen tarjeta propia).
- **Inversión**: **no se encontró funcionalidad de inversión propia de
  MODO** (plazo fijo, FCI) en ninguna fuente consultada — consistente con
  su modelo de agregador que refleja las cuentas bancarias: la inversión,
  si existe, ocurre en la app del banco, no dentro de MODO. **No
  confirmado como ausencia definitiva** (no se pudo revisar el 100% del
  sitio oficial ni la ficha completa de la app), pero no hay evidencia
  positiva de que la tenga.
- **Crédito**: no se encontró funcionalidad de crédito propia de MODO (el
  crédito, si existe, es del banco emisor de la tarjeta cargada en MODO,
  no de MODO como entidad). **No confirmado** como ausencia definitiva, por
  la misma razón que el punto anterior.
- **Cashback/puntos/promos**: MODO no ofrece cashback propio uniforme, sino
  que agrega y comunica las **promociones de los bancos participantes**
  ("descuentos de bancos, tarjetas y comercios" según su propia app store
  listing) — el beneficio depende de qué banco/tarjeta usa cada usuario,
  no de un programa único de MODO. Fuente: Google Play, listing de la app,
  consultado 2026-08-03.
- **MODO+**: lanzamiento (según BBVA, cierre 2024) de una sección para
  compra de productos digitales, gaming y suscripciones — expansión de
  catálogo, no de servicios financieros.

### 2.5 Comunicación / distribución

- Distribución híbrida: integrado dentro de las apps de ~30 bancos (el
  usuario activa MODO desde su banca móvil habitual) + app propia
  independiente "MODO: Conectá tu dinero" en las tiendas de aplicaciones.
  Rating en Apple App Store: **4,8/5 sobre ~1.300 reseñas** (cifra de
  App Store, no de Google Play, y no desagregada por país). Fuente:
  búsqueda sobre ficha de Apple App Store de MODO, consultado 2026-08-03 —
  **no confirmado** con fetch directo (la página de Play Store no cargó
  contenido completo en el intento automatizado).
- Comunicación centrada en promociones semanales/mensuales por comercio,
  coordinadas con los bancos socios y con retailers (ver alianza con COTO
  abajo).
- **Alianza directa con COTO (dato crítico para el caso)**: Coto renovó en
  mayo de 2024 una alianza con MODO ("MODO Tuesday Promo" o similar,
  también reportada como promo de los viernes según la fuente) con **20-30%
  de reintegro** en compras pagadas con QR de MODO en las +120 sucursales
  físicas de Coto, con tope de **$10.000-25.000 por banco** (las cifras
  varían levemente entre fuentes/fechas — el tope y el día de la promo
  cambian con cada campaña, no es un valor fijo), acumulable con las ofertas
  regulares de Coto en ~20.000-50.000 productos según la campaña puntual.
  Fuente: Infobae, "La cadena Coto celebró su nueva alianza con Modo y
  volvieron los 'súper descuentos'" (31/5/2024) —
  https://www.infobae.com/economia/networking/2024/05/31/la-cadena-coto-celebro-su-nueva-alianza-con-modo-y-volvieron-los-super-descuentos/
  — consultado 2026-08-03. También reportado en BBVA (22/1/2025, ver 2.3)
  que en 2024 "alianzas con supermercados Coto y Día" **duplicaron el
  volumen de MODO en supermercados**. **Esto confirma, igual que con
  Mercado Pago, que COTO ya tiene una relación comercial activa y
  recurrente con MODO** como medio de pago promocionado en sus sucursales,
  no es un competidor externo a la relación COTO-cliente sino un socio de
  pago ya integrado.

### 2.6 Comparación explícita contra la idea de negocio de wallet COTO

| Dimensión | MODO | Wallet COTO (idea de negocio, sin diseño aún) |
|---|---|---|
| Público objetivo | Clientes de ~30 bancos argentinos —prácticamente cualquier persona bancarizada en Argentina—, no ligado a un retailer. | Clientela de supermercado COTO — base más chica, con relación de compra recurrente. |
| Modelo técnico | Agregador que refleja cuentas bancarias existentes — no custodia fondos propios ni emite tarjeta propia. | No confirmado — depende del diseño de solución; podría optar por un modelo similar (agregador) o por una cuenta/CVU propio, cada uno con implicancias regulatorias distintas — **fuera del alcance de este research**. |
| Escala | 17M usuarios, 800K comercios (AR, cierre 2024). | Sin escala propia. |
| Alcance de producto | Pagos, QR, transferencias, agregación de promos bancarias, MODO+ (contenido digital). Sin inversión ni crédito propios (no confirmado como ausencia definitiva, ver 2.4). | No confirmado — supuesto del equipo, alcance a definir en diseño de solución. |
| Relación directa con COTO hoy | **Ya es medio de pago promocionado en sucursales físicas de COTO desde 2024** (renovación), con reintegros semanales/mensuales activos. | N/A — la wallet propuesta competiría por el mismo checkout donde MODO ya está integrado y ya duplicó su volumen en supermercados como Coto y Día. |
| Barrera de entrada que ya tiene | Respaldo de ~30 bancos (deep pockets colectivo), interoperabilidad nativa con el sistema bancario tradicional, sin necesidad de convencer al usuario de abrir una cuenta nueva (usa la que ya tiene). | No tiene esa barrera. Ventaja potencial: relación de compra recurrente y datos de consumo específicos de supermercado — supuesto del equipo, a validar. |

**Implicación para el pitch**: MODO es, en cierto sentido, un competidor
más difícil de desplazar que Mercado Pago dentro del checkout de COTO,
porque no depende de que el cliente "elija" una fintech — el cliente ya
tiene el banco, y MODO simplemente lo activa. Si la wallet de COTO quiere
ganar volumen de pago (no solo de fidelización), tiene que competir contra
una fricción de adopción muy baja de MODO (nada nuevo que instalar,
literalmente "está adentro" del banco que ya usás).

### 2.7 Gaps de research no cubiertos (MODO)

- Lista de bancos participantes verificada solo contra una fuente de época
  del lanzamiento (~2020) — no reconfirmada para 2025-2026.
- No se pudo confirmar con el 100% de certeza la ausencia de producto de
  inversión o crédito propio de MODO (ausencia inferida por falta de
  evidencia positiva, no por una declaración explícita "MODO no ofrece
  X").
- No hay cifra de usuarios de MODO específicamente en la zona de
  influencia de COTO (CABA/GBA) — solo el total nacional (17M).
- No se pudo acceder al PDF completo de UTDT sobre el ecosistema de
  billeteras (error 403 en el segundo intento) — el dato del "modelo de
  agregador" se sostiene en un resumen parcial, no en lectura completa del
  documento.

## 3. Cuenta DNI

### 3.1 Posicionamiento

Cuenta DNI es la billetera digital del **Banco de la Provincia de Buenos
Aires** (Banco Provincia, banco público provincial). Nació en 2020 con el
objetivo explícito de bancarizar rápido a la población durante la pandemia
de COVID-19 (fue uno de los canales usados para el pago del IFE). A
diferencia de Mercado Pago (fintech privada de alcance nacional/regional) y
MODO (consorcio de bancos privados + Nación/Ciudad), Cuenta DNI tiene una
base geográfica de origen marcada: la provincia de Buenos Aires. Fuente:
síntesis de búsqueda sobre historia de Cuenta DNI, consultado 2026-08-03.

### 3.2 Escala (usuarios)

Hay **inconsistencia entre fuentes** sobre la cifra exacta de usuarios —
se listan todas con su fecha para que quien redacte el documento final
elija la más reciente y mejor fechada:

- **"Más de 10 millones de usuarios"**, en nota de diciembre 2025 sobre
  descuentos de Cuenta DNI para diciembre. Fuente: Bragado TV, "Banco
  Provincia confirmó los descuentos de Cuenta DNI para diciembre..."
  (2/12/2025) —
  https://www.bragadotv.com.ar/noticias/2025/12/02/22410-banco-provincia-confirmo-los-descuentos-de-cuenta-dni-para-diciembre-varias-rebajas-y-cuotas-sin-interes-para-mas-de-10-millones-de-usuarios
  — consultado 2026-08-03.
- **"Casi 12,5 millones de usuarios"**, en una síntesis de búsqueda sin
  artículo único identificado con fecha exacta — **no confirmado con fuente
  primaria específica**, consultado 2026-08-03.
- **"Más de 8,7 millones de usuarios"**, en otra síntesis de búsqueda sin
  fecha ni artículo único confirmado — **no confirmado con fuente primaria
  específica**, consultado 2026-08-03.
- Distribución geográfica (municipio con más usuarios): La Matanza
  (+640.000), La Plata (~510.000), General Pueyrredón/Mar del Plata
  (~470.000) — fuente de la misma síntesis sin artículo único confirmado,
  **no confirmado con fuente primaria específica**.
- **Comercios adheridos**: ~170.000, según la misma síntesis sin fuente
  primaria confirmada — **no confirmado**.

**Conclusión sobre esta cifra**: se puede afirmar con confianza razonable
que Cuenta DNI está en el orden de **8-12 millones de usuarios**, con la
fuente mejor fechada (Bragado TV, dic. 2025) en "más de 10 millones". Para
el documento final, **se recomienda no citar un número puntual sin volver
a verificar con una nota de 2026** dado el rango encontrado.

### 3.3 Funcionalidades

- **Pagos y QR**: pago en comercios con tarjeta o desde la app vía QR;
  recarga de celular y SUBE. Fuente: síntesis de Google Play/sitio oficial
  Banco Provincia, consultado 2026-08-03.
- **QR interoperable**: Cuenta DNI fue, según iProUP, **la primera
  billetera digital interoperable de Argentina** — comparte el mismo QR que
  las billeteras BNA+ y ValePEI, facilitando transferencias para "más de
  3,6 millones de usuarios" (cifra de la época del anuncio de esa
  interoperabilidad específica entre esas tres billeteras, anterior y
  distinta del mandato general del BCRA de 2024 sobre Mercado Pago — no
  confundir ambos hitos). Fuente: iProUP, "Cuenta DNI, la billetera de
  Banco Provincia, es la primera interoperable de la Argentina" — título
  confirmado, contenido completo del artículo no accesible por fetch
  automatizado (truncado) — **fecha de publicación no confirmada**,
  consultado 2026-08-03.
- **Tarjeta prepaga/débito y de crédito**: tarjeta de débito propia
  (retiro de efectivo en cajeros sin tarjeta física, generando órdenes de
  extracción desde la app) y, desde 2025, posibilidad de **cargar tarjetas
  de crédito Visa/Mastercard emitidas por Banco Provincia** para pagar
  desde la app, con beneficios exclusivos por hacerlo (3 cuotas sin interés
  en comercios no alimenticios). Fuente: síntesis de notas de Ámbito/
  El Cronista/iProUP sobre esta funcionalidad (enero-septiembre 2025, varias
  notas mensuales sobre el mismo feature), consultado 2026-08-03.
- **Inversión**: sección "Invertir" dentro de la app con al menos **plazo
  fijo** ("Mis Plazos Fijos", con posibilidad de descargar/compartir el
  comprobante). En 2025 se constituyeron "**más de 400.000 plazos fijos**"
  a través de Cuenta DNI, según síntesis de búsqueda sin artículo único
  confirmado — **no confirmado con fuente primaria específica**. No se
  encontró evidencia de fondos comunes de inversión (FCI) propios dentro de
  Cuenta DNI (a diferencia de Mercado Pago) — **no confirmado como ausencia
  definitiva**, solo ausencia de evidencia positiva.
- **Crédito**: préstamos personales — "**más de 250.000 préstamos
  personales**" gestionados en 2025 según la misma síntesis sin fuente
  primaria confirmada — **no confirmado con fuente primaria específica**.
- **Cashback/puntos**: modelo de **descuentos porcentuales mensuales por
  rubro** (no cashback genérico como Mercado Pago con Meli+), con topes
  semanales/mensuales de reintegro variables por categoría (ej. 35% en
  carnicerías/granjas/pescaderías con tope $7.000 por persona; 20-40% en
  comercios de cercanía/ferias con topes de $4.000-6.000 semanales,
  cifras de la campaña de diciembre 2025). Además, el uso de tarjeta de
  crédito vinculada **acumula puntos canjeables por descuentos, productos y
  viajes** — mecanismo distinto y adicional a los descuentos por rubro.
  Fuente: Bragado TV (2/12/2025, ver 3.2) e iProUP, "Cuenta DNI permite
  ahora sumar la tarjeta de crédito para acceder a nuevos beneficios" —
  consultado 2026-08-03.

### 3.4 Comunicación / distribución

- Comunicación centrada en un **calendario mensual de descuentos por
  rubro**, replicado y viralizado activamente en redes sociales
  (Twitter/X, Facebook, Instagram) por los propios usuarios cada vez que
  se publica la lista mensual — la nota de 0221.com.ar describe esto como
  algo que "revolucionó las redes sociales". Fuente: 0221.com.ar, "El
  importante cambio de la Cuenta DNI de Banco Provincia que revolucionó
  las redes sociales" — consultado 2026-08-03 (fecha de publicación no
  confirmada en el resumen obtenido).
- Cobertura de prensa mensual recurrente (La Nación, Infobae, El Cronista,
  Ámbito, iProUP) republicando la lista de descuentos del mes — nivel de
  cobertura mediática mensual sostenida, comparable en frecuencia a la de
  Mercado Pago, aunque el foco temático es casi exclusivamente
  "descuentos del mes" y no funcionalidades nuevas de producto.
- **No se encontró evidencia de alianza específica y diferenciada con COTO**
  (a diferencia de Mercado Pago y MODO, que sí tienen acuerdos
  documentados de reintegro puntual en sucursales COTO) — es razonable
  asumir que, al ser una billetera con descuentos por rubro genérico
  ("supermercados" como categoría, no un comercio puntual), sus
  descuentos aplican en COTO como en cualquier supermercado adherido, pero
  **no se confirmó con fuente específica** una alianza nombrada
  "COTO + Cuenta DNI" como sí existe para MODO y Mercado Pago. **Gap
  explícito**: buscar si existe una alianza puntual antes de asumir que no
  la hay.

### 3.5 Comparación explícita contra la idea de negocio de wallet COTO

| Dimensión | Cuenta DNI | Wallet COTO (idea de negocio, sin diseño aún) |
|---|---|---|
| Público objetivo | Población de la provincia de Buenos Aires (con fuerte concentración en el conurbano — La Matanza, La Plata), clientes de Banco Provincia u otros que se suman por los descuentos. No ligado a un retailer específico, sino a una jurisdicción geográfica. | Clientela de supermercado COTO, sin límite geográfico definido por jurisdicción — depende de dónde tenga sucursales COTO. |
| Origen institucional | Banco público provincial con fines de bancarización + asistencia social (nació con el IFE). | Empresa de retail privada — sin mandato de inclusión financiera, con lógica comercial pura. |
| Escala | Orden de 8-12M de usuarios (rango no reconciliado entre fuentes, ver 3.2), ~170.000 comercios adheridos (no confirmado con fuente primaria). | Sin escala propia. |
| Alcance de producto | Pagos, tarjeta débito y crédito propia, plazo fijo, préstamos personales, descuentos mensuales por rubro con topes. Sin FCI propio confirmado. | No confirmado — supuesto del equipo. |
| Mecanismo de beneficios | Descuento porcentual por rubro con tope, calendario mensual — modelo "cupón" más que "cashback universal" como Mercado Pago. | No confirmado — el mecanismo de beneficios de la wallet COTO es una decisión de diseño de solución, no de este research. |
| Relación directa con COTO hoy | No confirmada una alianza específica (gap explícito, ver 3.4) — a diferencia de Mercado Pago y MODO. | N/A. |
| Barrera de entrada que ya tiene | Respaldo de un banco público provincial (regulatorio y de confianza institucional), asociación de origen con inclusión financiera/asistencia social que le da alcance en segmentos de menores ingresos. | No tiene esa barrera. Ventaja potencial: relación de compra recurrente y datos de consumo — supuesto del equipo, a validar. |

**Implicación para el pitch**: Cuenta DNI es el competidor más parecido en
"lógica de descuentos por categoría con tope" a lo que probablemente
proponga una wallet de fidelización de COTO (más cercano en mecanismo que
Mercado Pago con su cashback vía suscripción Meli+, o que MODO con su
agregación de promos bancarias). Si la wallet COTO usa un mecanismo de
descuentos/cupones similar, la comparación directa con Cuenta DNI —que ya
tiene una categoría "supermercados" en su calendario mensual— es más
relevante que con los otros dos. El gap de no tener confirmada una alianza
puntual COTO-Cuenta DNI (a diferencia de MODO y Mercado Pago) es un dato a
verificar antes de asumir cualquier cosa al respecto.

### 3.6 Gaps de research no cubiertos (Cuenta DNI)

- **Cifra de usuarios no reconciliada entre fuentes** (rango 8,7M-12,5M
  según distintas notas sin fecha exacta confirmada) — el dato mejor
  fechado es "más de 10 millones" (Bragado TV, dic. 2025).
- No se confirmó si Cuenta DNI tiene o no fondos comunes de inversión (FCI)
  propios, más allá de plazo fijo.
- No se confirmó una alianza comercial específica y nombrada entre COTO y
  Cuenta DNI (si existe, cambiaría el análisis de la sección 3.5).
- No se pudo confirmar con fuente primaria completa (por truncamiento de
  fetch) el artículo original de iProUP sobre "primera billetera
  interoperable de Argentina" — el título se confirmó, el contenido
  completo (fecha, detalle técnico) no.
- No hay dato de comercios adheridos ni de préstamos/plazos fijos 2025 con
  fuente primaria confirmada — todos provienen de una síntesis de búsqueda
  sin artículo único identificado.

## 4. Síntesis comparativa (los tres competidores, para uso rápido)

| | Mercado Pago | MODO | Cuenta DNI |
|---|---|---|---|
| Origen | Fintech privada (MercadoLibre) | Consorcio de ~30 bancos privados + Nación/Ciudad | Banco público provincial (Banco Provincia) |
| Escala (Argentina) | ~25M usuarios (estimación de mercado, no oficial); 83M MAU regional | 17M usuarios (cierre 2024) | 8-12M usuarios (rango no reconciliado) |
| Modelo técnico | Cuenta/CVU propio, custodia fondos | Agregador de cuentas bancarias, sin fondos propios | Cuenta/CVU propio, custodia fondos |
| Tarjeta propia | Sí (débito y crédito) | No (usa tarjetas de los bancos cargados) | Sí (débito y, desde 2025, crédito vinculada) |
| Inversión propia | Sí (FCI money market en pesos y USD) | No confirmado (probablemente no, por modelo de agregador) | Plazo fijo confirmado; FCI no confirmado |
| Mecanismo de beneficios | Cashback vía Meli+ (dinero) | Agregación de promos de cada banco | Descuentos % por rubro con tope mensual (cupón) |
| Alianza documentada con COTO | Sí, desde ~2020, QR con descuentos puntuales | Sí, renovada 2024, reintegros semanales, duplicó volumen en supermercados como Coto/Día | No confirmada (gap) |
| QR interoperable | Forzado por BCRA desde mayo 2024 (se resistió) | Impulsor del reclamo de interoperabilidad | Pionera, "primera interoperable" (fecha exacta no confirmada) |

## 5. Gaps generales de research (resumen ejecutivo de lo no confirmado)

- Ningún dato de participación de mercado 2025-2026 bien fechado y
  reconciliado entre los tres competidores (los datos de concentración
  encontrados son de 2020-2021 y quedaron marcados como obsoletos, no
  usables).
- No se accedió al sitio oficial de Mercado Pago (403) ni al PDF completo
  de UTDT sobre MODO (403) — ambos análisis se apoyan en fuentes
  secundarias/prensa, no en fuente primaria directa en esos dos casos
  puntuales.
- Cifra de usuarios de Cuenta DNI sin reconciliar (rango 8,7M-12,5M).
- No confirmada una alianza específica COTO-Cuenta DNI (si existe o no).
- No hay reporte descargado de BCRA/CAME con series de penetración de
  billeteras virtuales — todo lo citado de esos organismos llega vía notas
  de prensa que los mencionan, no vía el documento original.
