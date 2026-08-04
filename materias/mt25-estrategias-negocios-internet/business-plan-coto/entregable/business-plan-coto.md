---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
tipo: documento de respaldo escrito del pitch de 15 minutos + 10 de preguntas
estructura: plantilla de 12 puntos para "pitch de venta de idea de negocio a
  inversores" (.claude/skills/how-to-structure-pitch/SKILL.md, variante MT25)
fuente_de_contenido: materias/mt25-estrategias-negocios-internet/business-plan-coto/plans/
  (los 5 planes, ya revisados en plans/review-planes.md, sin bloqueantes) y
  materias/mt25-estrategias-negocios-internet/business-plan-coto/research/
---

# Wallet COTO — Business Plan (respaldo del pitch a inversores)

> **Sobre este documento**: es el respaldo escrito del pitch de 15 minutos
> (+10 de preguntas) que evalúa la consigna, no un informe académico
> tradicional. Sigue la plantilla de 12 puntos para "pitch de venta de idea
> de negocio a inversores" de `how-to-structure-pitch`. Toda cifra de
> mercado o dato de competidor está citado a su fuente en `research/`; todo
> número marcado como **supuesto del equipo** es una construcción propia
> con su lógica explicada al lado, no un dato encontrado — nunca se
> presenta como hecho. El guion hablado de la presentación (con minutado y
> reparto por integrante) es un paso posterior, a cargo de
> `tp-presentation-designer`, y vive en `entregable/presentacion/`.

## Cómo este documento cubre el checklist obligatorio de la consigna

| Criterio de evaluación (`consignas/mt25-business-plan-coto.md`) | Sección(es) de este documento |
|---|---|
| Contexto: tendencias, marco competitivo | §4 Problema, §9 Por qué ahora, §10 Competencia |
| Problema concreto | §4 Problema |
| Dimensionamiento de la oportunidad (market sizing) | §8 Tamaño de mercado |
| Creación de valor para el cliente (cómo genera valor, prototipo, beneficios y costo) | §5 Solución, §6 Producto |
| Captura de valor (monetización, modelo de negocio, network effects, barreras de entrada) | §7 Modelo de negocio |
| Plan de ejecución (actividades e hitos) | §6 Producto (roadmap de rollout) |
| Modelo financiero (alto nivel) | §11 Modelo financiero |

---

## 1. Nombre de la empresa

**Wallet COTO** (nombre de trabajo). No hay research ni diseño de marca/
naming propio en `plans/` — el nombre usado de forma consistente en los 5
planes es descriptivo ("wallet propia de COTO"), no una marca definida.
**Gap señalado, no resuelto acá**: el naming final (¿"COTO Pay", extensión
de línea de "Coto Digital", u otro?) es una decisión de branding que el
equipo debe tomar antes de la presentación; no se inventa un nombre de
fantasía en este documento.

## 2. Equipo

**Gap señalado, no resuelto acá**: no existe en `research/` ni en `plans/`
información sobre la conformación real del equipo (integrantes, background,
foto) — la consigna de este TP, a diferencia de la de MT10, tampoco fija
tamaño de equipo ni roles. Esta sección debe completarse con los datos
reales de los integrantes antes de la entrega; no se inventan nombres ni
backgrounds.

## 3. Propósito de la empresa

Construir la relación directa de pago, datos y fidelización que hoy COTO
**no tiene** con sus propios clientes — porque hoy esa relación la
construyen Mercado Pago y MODO, no COTO, cada vez que un cliente paga
digital en una sucursal COTO.

## 4. Problema

### 4.1 No es un problema de acceso a pago digital

Los clientes de COTO ya pueden pagar digital hoy: COTO tiene **alianzas
comerciales activas y vigentes** con Mercado Pago (QR habilitado desde
~agosto 2020, con descuentos promocionales) y con MODO (alianza renovada
en mayo 2024, reintegros de 20-30% con tope $10.000–25.000 por banco,
acumulables con ofertas de COTO) (`competidores-billeteras-argentina.md`,
secciones 1.4 y 2.5). Según BBVA (22/1/2025), las alianzas de MODO con
Coto y Día **duplicaron el volumen de MODO en supermercados** durante
2024. Cuenta DNI no tiene alianza específica confirmada con COTO, pero sus
descuentos genéricos por rubro razonablemente aplican en cualquier
sucursal adherida.

Bajo el marco de la Clase 1 de MT25 (caso Movistar —
digitización/digitalización/transformación digital), esto es
**digitalización** de un proceso existente (cobrar): COTO ya lo hizo. No
es transformación digital.

### 4.2 El problema real: qué pierde COTO al procesar ese pago vía terceros

1. **Datos de primera parte incompletos**: cuando el cliente paga con QR
   de MP o MODO, el vínculo pago↔identidad↔comportamiento lo construye y
   posee el tercero (para su propio scoring, personalización, cross-sell),
   no COTO.
2. **Fidelización cedida a terceros**: los beneficios que el cliente ve en
   la caja de COTO están diseñados, calendarizados y con la marca de un
   tercero — el cliente asocia el beneficio a "Mercado Pago" o "MODO", no a
   COTO, aunque el gasto ocurra en un local COTO.
3. **Cero control sobre el calendario promocional del propio checkout**:
   las promos de MP y MODO se deciden y timean externamente; COTO no puede
   alinearlas con su propia gestión de categorías, stock o márgenes.
4. **Dependencia de reglas ajenas**: cualquier cambio de términos, tasas o
   requisitos técnicos de MP/MODO/bancos impacta el checkout de COTO sin
   que COTO controle esa decisión.

**Supuesto del equipo, resuelto con una cifra puntual de trabajo (ver Anexo,
punto 3)**: no hay fuente que confirme quién financia hoy los reintegros
de MP (10-25%) y MODO (20-30%) en sucursales COTO. Ante la ausencia de
dato, el equipo adopta como posición de trabajo que **COTO cofinancia
aproximadamente el 60% del costo de esos reintegros**, sobre una tasa
combinada de reintegro de trabajo del 20% — vía un presupuesto de
comarketing negociado con cada wallet. Es el supuesto con menos respaldo
de los cinco del Anexo (ni siquiera hay una fuente indirecta que lo
sostenga) y sigue sin estar confirmado por COTO. Habilita el cálculo de
un ahorro potencial redirigible en §11.3.

**Lo que sí es una ventaja potencial de COTO** (marcado también como
supuesto del equipo, no confirmado en research): ni MP, ni MODO, ni Ualá
tienen visibilidad nativa del detalle de góndola / historial de compra de
supermercado de cada cliente — solo ven el movimiento de dinero. Esa es la
apuesta central de la propuesta de valor (§5).

## 5. Solución

**Decisión de diseño explícita**: la wallet COTO no compite como "banco
digital más chico" — COTO no tiene licencia bancaria ni track record
fintech, y esa pelea ya la tienen ganada Mercado Pago y Ualá. Compite como
**la wallet que mejor conoce el historial de compra real de supermercado
del cliente**, algo que ningún competidor directo ofrece de forma nativa.

| Necesidad del cliente | Qué resuelve la wallet COTO | Por qué MP/MODO/Cuenta DNI no lo resuelven igual |
|---|---|---|
| Pagar rápido y sumar el beneficio sin pasos extra | Un solo flujo: escanear QR propio → pagar → beneficio aplicado automáticamente, sin tarjeta de fidelización aparte | MODO exige elegir banco/tarjeta correcta; MP exige Meli+ activo; Cuenta DNI tiene topes variables por rubro — ninguno integra "acreditar beneficio" en el mismo tap con reglas fijas |
| Beneficios relacionados con lo que realmente compra | Descuentos personalizados según historial real de compra en COTO (categoría, frecuencia, ticket) | Cuenta DNI es % por rubro genérico igual para cualquier cliente; MP depende de la categoría promocionada por Meli+, no del patrón de consumo individual |
| No cargar una tarjeta de fidelización aparte | La fidelización vive dentro del mismo instrumento de pago | Los reintegros de MP/MODO son promociones del medio de pago, con marca del tercero, no un programa propio de COTO |
| Reponer la compra habitual rápido | Integración con Coto Digital (canal e-commerce propio) para recompra desde el historial | Ninguno de los tres competidores tiene integración con el catálogo o historial de compra de un supermercado específico |

**Límite honesto de esta propuesta**: no resuelve por qué un cliente
dejaría de usar MP o MODO — resuelve por qué **sumaría** la wallet COTO
además de esos medios, apostando a que el beneficio personalizado gane
share of wallet con el tiempo. No incluye, en esta fase, inversión,
crédito, cuenta remunerada ni IA generativa: la personalización requiere
segmentación/analítica sobre historial de compra, no un modelo de IA
sofisticado, y no se agrega un componente de IA porque "queda bien" en un
pitch de estrategia de internet.

## 6. Producto

### 6.1 Flujo principal — 5 pantallas núcleo

1. **Onboarding**: alta simplificada vinculada a la tarjeta de
   fidelización de COTO existente si la tiene, más KYC básico vía el
   partner de pagos (no vía licencia bancaria propia). Sin costo de
   apertura.
2. **Home**: saldo/medio de pago, acceso directo a "Pagar en caja",
   historial reciente con detalle de ítems, carrusel de beneficios activos
   calculados sobre ese historial.
3. **Pagar en caja**: QR propio, interoperable bajo el estándar BCRA de
   Transferencias 3.0 (ya vigente — la interoperabilidad regulatoria ya
   bajó la barrera técnica para que un QR nuevo funcione). Un tap: escanea,
   paga, aplica el beneficio y suma puntos.
4. **Beneficios**: reglas fijas y visibles por cliente ("porque comprás X
   seguido, tenés Y"), a diferencia del calendario mensual genérico de
   Cuenta DNI o los topes variables de MP/MODO.
5. **Lista de compras / recompra rápida**: integrada con el historial y el
   catálogo de Coto Digital (canal e-commerce propio, con base de clientes
   ya digitalmente familiarizados con COTO — dato autopromocional de la
   propia COTO, sin metodología externa verificable, usado solo para
   justificar la elección de esta cohorte como punto de partida del piloto,
   no como cifra de mercado).

### 6.2 Costo para el cliente

| Tipo de costo | Detalle |
|---|---|
| Monetario | Sin costo de apertura ni mantenimiento (supuesto del equipo, consistente con que MP, MODO y Cuenta DNI son gratuitos hoy) |
| Fricción de adopción | Instalar una app nueva y dar de alta un medio de pago — el costo real más alto es tiempo/atención, no dinero. MODO no tiene este costo porque ya está "adentro" del banco que el cliente usa; es la ventaja competitiva más dura de igualar, no se resuelve solo con UX |
| Datos personales | El cliente cede historial de compra detallado a cambio de personalización — costo de privacidad implícito que hoy también cede, de forma menos visible, a MP/MODO |
| Riesgo de fragmentación | El cliente no necesariamente abandona MP/MODO al sumar la wallet COTO — puede terminar usando una wallet más entre varias (91% de los argentinos usa al menos un medio no efectivo según Kantar, muchos más de uno) |

### 6.3 Roadmap de ejecución (piloto → rollout nacional, 3 años)

La cobertura de sucursales y el ritmo de captura de mercado de este
roadmap están atados 1 a 1 al SOM de §8 — no son dos números
independientes.

| Fase | Horizonte | Alcance de sucursales | Cobertura acumulada | % del SAM capturado |
|---|---|---|---|---|
| **Fase 0 — Piloto** | Meses 0-6 | 15-20 sucursales en CABA (de 91 totales de la zona) | — | — |
| **Fase 1 — Rollout CABA** | Meses 6-12 (cierre Año 1) | 91 sucursales (100% CABA) | 59% de la red (91/153) | 5% |
| **Fase 2 — Rollout GBA** | Meses 12-24 (Año 2) | + Zona Norte (18) + Sur (14) + Oeste (15) = 47 | 90% de la red (138/153) | 15% |
| **Fase 3 — Rollout nacional** | Meses 24-36 (Año 3) | + Costa Atlántica (5), Santa Fe (7), Entre Ríos (1), Neuquén (1), Mendoza (1) = 15 | 100% de la red (153/153) | 25% |

Base de sucursales por zona: coto.com.ar, vía `market-sizing-billeteras-argentina.md`.
**153 es la cifra definitiva adoptada por el equipo para todo el
documento (ver Anexo, punto 1)**: suma explícita por zona de la propia
página de COTO, la única de tres cifras encontradas en el research con
metodología trazable. Se descartan las otras dos: 242 (total mostrado por
la misma página, sin conciliar con la suma por zona) y "+120" (citado
sueltamente en notas de prensa sobre las alianzas MP/MODO — no es un
conteo, es un piso mínimo mencionado al pasar).

**Por qué la cobertura física crece más rápido que la captura de GMV**: no
hay exclusividad posible frente a MP/MODO (ver §7) — migrar un hábito de
pago instalado toma tiempo, aun cuando la sucursal ya esté habilitada.

**Cohorte inicial del piloto**: clientes ya activos en Coto Digital, para
reducir el costo de adquisición arrancando con una base que ya confía en
el canal digital de COTO.

**Hitos de salida por fase**:
- Piloto (mes 6): tasa de activación/repetición de uso de la cohorte
  piloto sobre un umbral mínimo — a definir por el equipo, no hay
  benchmark citado para fijarlo hoy.
- Fin Año 1 (mes 12): 59% de sucursales cubiertas, 5% del SAM capturado.
- Fin Año 2 (mes 24): 90% de sucursales cubiertas, 15% del SAM capturado,
  ajuste de reglas de personalización con datos reales del Año 1, primeras
  métricas de flywheel (¿baja el CAC por boca a boca/referidos?).
- Fin Año 3 (mes 36): 100% de sucursales cubiertas, 25% del SAM capturado,
  evaluación de lanzamiento de retail media (recién viable con base de
  usuarios activos suficiente para ser atractiva a proveedores/CPG).

**Riesgos de ejecución nombrados, no cuantificados por falta de dato**:
riesgo de adopción (si la cohorte del piloto no representa al cliente
promedio de sucursal física), riesgo de dependencia del partner de pagos
(PSP/BaaS, aún no elegido), riesgo regulatorio (bajo hoy, dado el mandato
de interoperabilidad QR del BCRA, pero no nulo a futuro).

## 7. Modelo de negocio

### 7.1 Qué tipo de defensibilidad tiene (y qué tipo no)

Aplicando el framework de moats/network effects de la Clase 4 de MT25:

- **No es un network effect clásico de dos lados** (no conecta compradores
  con vendedores externos — COTO es el único vendedor). No aplica la
  lógica de un marketplace como MercadoLibre o Ualá Bis.
- **Sí hay un network effect de datos, débil y unilateral**: más clientes
  usando la wallet → más historial capturado → mejor personalización →
  mayor retención. A diferencia de Google/Waze, acá el beneficio de "más
  datos" es **individual, no colectivo** — que un cliente use más la
  wallet no mejora la experiencia de otro cliente. Se marca explícitamente
  como moat débil, no como pilar central del argumento.
- **La defensibilidad real se apoya en tres componentes**: **brand** (COTO
  ya tiene una relación de compra física y de confianza — no arranca de
  cero, a diferencia de lo que le costó a Ualá construir su marca: 8 años
  y capital de fondos globales para llegar a 7,5M de clientes en
  Argentina, según `competidor-uala.md`); **embedding** (historial,
  puntos y beneficios personalizados generan costo de cambio creciente —
  cuanto más usa el cliente la wallet, más "pierde" si deja de usarla);
  **escala de distribución física** (153 sucursales y una base de clientes
  que ya visita esas sucursales con frecuencia, ventaja que un entrante
  nuevo no tiene de entrada).

### 7.2 La amenaza que hay que decir en voz alta: multi-tenanting

**Confirmado como hecho, no como riesgo hipotético**: MP y MODO ya son
medios de pago aceptados y activamente promocionados en las sucursales de
COTO hoy. Nada impide que el cliente siga pagando con esos medios en la
misma caja donde exista la wallet COTO — y por el mandato de
interoperabilidad QR del BCRA, COTO tampoco podría forzar exclusividad
aunque quisiera. **La wallet COTO no reemplaza a MP/MODO en el checkout,
compite por una porción del share of wallet del cliente.** Esto es
exactamente lo que refleja la curva de adopción conservadora del SOM en
§8 (5%→15%→25% en 3 años, no una curva de desplazamiento total).

Las otras dos amenazas del framework (negative network effects,
disintermediation) no aplican de forma relevante: no es una red social ni
un marketplace de dos lados.

### 7.3 Mecanismos de monetización — las 4 palancas del framework aplicadas

| Palanca | Aplicación al caso COTO | Peso |
|---|---|---|
| **Frecuencia** | Palanca primaria: la wallet nudgea al cliente a comprar más seguido en COTO en lugar de repartir el gasto entre COTO, Carrefour, Día, etc., vía beneficios personalizados por frecuencia | Alta |
| **Basket size** | Cross-sell vía recomendaciones/recompra dentro de Coto Digital puede subir el ticket promedio — sin dato de elasticidad de COTO para cuantificarlo, se deja cualitativo | Media |
| **Take rate** | No aplica como modelo de marketplace (COTO no cobra comisión a un vendedor externo). El "equivalente" es el margen retail normal de COTO sobre lo que la wallet ayuda a retener/generar | Baja / no aplica como palanca independiente |
| **Ad load** | Retail media: venta de espacios promocionales personalizados a proveedores/CPG dentro de la wallet, apalancando la relación comercial que COTO ya tiene con sus proveedores. Sin cifras de mercado específicas de Argentina — línea secundaria e ilustrativa, no pilar del caso | Baja, complementaria |

**Modelo resultante**: no es comisión/marketplace (a diferencia de Mercado
Pago o Ualá Bis) ni suscripción al cliente final (la wallet es gratuita
para el usuario). Es un modelo de **retención / margen retail
incremental**, con retail media como ingreso complementario desde la Fase
3 — el valor que COTO captura es la recuperación de margen y de relación
de cliente que hoy fluye, al menos en parte, hacia terceros.

### 7.4 Barreras de entrada — con honestidad sobre sus límites

Dos preguntas distintas:

- **Frente a MP/MODO/Ualá en el propio checkout de COTO**: brand +
  embedding + distribución física, sin exclusividad posible
  (multi-tenanting, ver §7.2).
- **Frente a que otro retailer (Carrefour, Cencosud, Día) copie la misma
  idea**: acá no hay una barrera estructural fuerte — cualquier cadena
  grande podría construir una wallet con el mismo mecanismo de
  personalización sobre su propio historial de compra. Lo que compra
  tiempo, no lo compra indefinidamente, es ser **first mover** entre las
  tres cadenas grandes de supermercados de Argentina, más el embedding
  acumulado con el tiempo. A diferencia de Ualá (barrera dura y citada:
  licencia bancaria, 8 años de historial de scoring propio), la wallet
  COTO no tiene ni necesita ese tipo de barrera regulatoria, porque no
  compite como banco — es una decisión de alcance de producto (§5), no una
  barrera de entrada real.

**Conclusión honesta para el pitch**: el moat de esta propuesta es
moderado y basado en tiempo/ejecución (first mover + embedding
acumulado), no en una barrera estructural infranqueable. Si la propuesta
de valor se redujera a "otro medio de pago con descuento" (sin la
personalización de §5), caería en el cuadrante de mayor riesgo del
framework de moats — oferta comoditizada en un contexto hiperlocal — el
mismo que hoy ocupa Cuenta DNI frente a COTO.

## 8. Tamaño de mercado (TAM / SAM / SOM)

**Advertencia metodológica, léase antes que los números**: no existe
ningún dato público de clientes, ticket promedio, frecuencia de compra,
facturación ni sucursales exactas de COTO (confirmado como gap en
`market-sizing-billeteras-argentina.md`). Gran parte de este embudo son
supuestos propios del equipo, marcados paso a paso — se prioriza mostrar
la lógica de cada salto sobre la precisión del número final.

### 8.1 TAM — mercado total de supermercados en Argentina (top-down)

Fuente: INDEC, Encuesta de Supermercados, ventas totales a precios
corrientes, 5 meses de 2025 disponibles en el research (abril
$1.975.885,8M; julio $2.059.013,6M; agosto $2.107.204,4M; septiembre
$1.962.363,0M; noviembre $2.211.327,2M). **Supuesto del equipo**: INDEC no
publica un total anual consolidado; se promedian los 5 meses
($2.063.158,8M/mes) y se multiplica por 12.

**TAM ≈ ARS 24,8 billones/año.** Esta anualización no incluye diciembre
(mes pico por aguinaldo/fiestas, lo que probablemente subestima el total
real) y no ajusta por inflación intra-año — es una cifra direccional, no
de precisión contable.

### 8.2 SAM — gasto ya "wallet-ready" dentro de las sucursales de COTO

Se define como la porción del gasto de COTO que **ya se paga hoy** con
billeteras/medios digitales — el segmento listo para pagar con wallet, no
el que hay que convertir primero del efectivo. Cadena de supuestos
(marcados individualmente, encadenados):

1. Carrefour + Cencosud + COTO ≈ 50% del TAM (fuente de agregador de
   búsqueda, **no verificada** contra el informe FAECYS/SEYE original) →
   ~ARS 12,4 billones/año para las tres cadenas combinadas.
2. Sin dato para diferenciar participación por cadena, **supuesto del
   equipo: split parejo (1/3)** → ventas anuales estimadas de COTO ≈ **ARS
   4,1 billones/año**.
3. Se aplica el 11,1% de "otros medios" que INDEC midió a nivel nacional
   en supermercados (noviembre 2024) sobre esa estimación — extrapolación
   de un promedio nacional a un caso puntual, no un dato propio de COTO.

**SAM ≈ ARS 4,1 billones × 11,1% ≈ ARS 458.000 millones/año.**

Este SAM es, literalmente, la cuantificación del problema de §4: es
"dinero que ya eligió pagar digital en COTO", pero hoy no vía COTO.

### 8.3 SOM — captura realista en 3 años

Curva de adopción conservadora, atada 1 a 1 a la cobertura de sucursales
de §6.3 (mismo horizonte, misma lógica de rollout). **Supuesto del
equipo, no basado en un benchmark citado**: la cobertura de sucursales
crece más rápido que la adopción real, porque migrar un hábito de pago
instalado toma tiempo.

| Año | Cobertura de sucursales | % del SAM capturado | GMV vía wallet COTO |
|---|---|---|---|
| 1 | ~59% (CABA) | 5% | ≈ARS 22.900 millones/año |
| 2 | ~90% (+GBA) | 15% | ≈ARS 68.750 millones/año |
| 3 | 100% (+resto del país) | 25% | ≈ARS 114.600 millones/año |

**Importante**: este GMV (volumen transaccionado vía wallet) **no
equivale a ingreso incremental para COTO** — es, en gran parte, el mismo
gasto que el cliente ya hacía en COTO, migrado de otro riel de pago al
propio. La traducción a impacto en resultados se resuelve en §11.

### 8.4 Chequeo de plausibilidad (no un bottom-up independiente)

No existe dato público de ticket promedio, frecuencia de compra ni
tráfico por sucursal de COTO — no es posible construir un bottom-up
verdaderamente independiente para contrastar contra el top-down anterior,
y se dice así explícitamente en vez de forzar una segunda cuenta con la
misma cadena de supuestos disfrazada de fuente independiente. Como
chequeo de orden de magnitud (no como segunda fuente): con ~153
sucursales, ARS 4,1 billones/año de ventas estimadas implicarían ~ARS 75
millones/día por sucursal — sin benchmark citado para validar si ese
número es razonable. Queda como **verificación pendiente por el equipo**.

## 9. Por qué ahora

Cuatro fuentes independientes (regulador, consultora de pagos, cámara de
e-commerce, estadística oficial de supermercados) apuntan en la misma
dirección al mismo tiempo — esto no es una apuesta sobre una tecnología
emergente, es una sustitución de medio de pago ya en curso y medible:

- **BCRA** (Informe de Pagos Minoristas, jul-ago 2025): pagos con QR
  interoperable +45,8% interanual en cantidad; transferencias inmediatas
  +21% interanual (76,1% ya originadas/destinadas en cuentas no
  bancarias/CVU); uso agregado de billeteras digitales +73% interanual;
  tarjeta de débito **cayendo** 16,8% interanual — sustitución activa del
  medio de pago tradicional, no solo crecimiento nuevo.
- **Global Payments Report 2026**: billeteras digitales pasaron de 34% a
  43% del valor pagado en comercio físico en Argentina en un solo año
  (2024→2025), proyección 48% para 2030; en e-commerce, de 50% a 55%,
  proyección 70% para 2030. 84% de los argentinos usa QR para pagar con el
  celular — el porcentaje más alto de América Latina.
- **Kantar**: 91% de los argentinos usa al menos un medio de pago no
  efectivo.
- **CACE**: e-commerce argentino 2025 facturó $34.033.238 millones (+55%
  interanual); "Alimentos, bebidas y artículos de limpieza" es la segunda
  categoría de mayor facturación del e-commerce argentino.
- **INDEC**: "otros medios" de pago (incluye billeteras) ya representaba
  **11,1%** de las ventas de supermercados en noviembre de 2024 — el
  propio sector ya muestra tracción de billeteras, sin que exista todavía
  una wallet propia de COTO.

## 10. Competencia

| Competidor | Relación con COTO | Fortaleza | Límite frente a la propuesta de wallet COTO |
|---|---|---|---|
| **Mercado Pago** | Alianza activa desde ~agosto 2020, QR habilitado en sucursales COTO, con descuentos promocionales | Ecosistema financiero completo (inversión, crédito, seguros, cuenta remunerada), escala regional | No tiene visibilidad nativa del historial de compra de supermercado del cliente; el beneficio queda asociado a la marca MP, no a COTO |
| **MODO** | Alianza renovada mayo 2024, reintegros 20-30% (tope $10-25k/banco); duplicó su volumen en supermercados en 2024 según BBVA (alianzas con Coto y Día) | Fricción cero: ya está "adentro" del banco que el cliente usa, sin necesidad de instalar nada nuevo | Misma limitación: promoción de marca del tercero, sin personalización por historial de compra específico de COTO |
| **Cuenta DNI** | Sin alianza específica confirmada con COTO (gap del research); descuentos genéricos por rubro que razonablemente aplican en sucursales adheridas | Descuento por rubro, alcance amplio | Mecanismo genérico (mismo % para cualquier cliente de la categoría), sin personalización individual |
| **Ualá** | Competidor indirecto, sin oferta ligada a retail físico | Ecosistema financiero completo, licencia bancaria (1 de 64/50/39 por país), 8 años de historial de scoring, ~7,5M de clientes en Argentina | Compite por el mismo bolsillo del cliente (pago, inversión, crédito), pero no tiene relación con la compra recurrente de supermercado |

**Conclusión**: el pitch no puede apoyarse en "aceptar pagos digitales" —
eso ya lo resuelven MP y MODO hoy, dentro del propio checkout de COTO. La
única cancha donde COTO tiene una ventaja potencial y defendible es el
historial de compra real de supermercado (§5, §7).

## 11. Modelo financiero (alto nivel)

**Advertencia metodológica, léase antes que los números**: no existe
ningún dato financiero público de COTO (facturación, margen, costo
operativo). Todo lo que sigue es, por construcción, una cadena de
supuestos del equipo con su lógica al lado — el objetivo no es una
proyección precisa, es mostrar una **estructura defendible** frente a
preguntas de un panel inversor.

**Nota de moneda**: la inversión en tecnología se expresa en USD (moneda
de referencia habitual para desarrollo de software/fintech e integraciones
con proveedores internacionales de pagos); el GMV y el impacto en ventas
se expresan en ARS (coherente con §8). No se fuerza una conversión
USD/ARS por no existir un tipo de cambio de referencia citado — mezclar
monedas sin aclarar debilitaría el caso frente a la audiencia. El equipo
debe definir el tipo de cambio de referencia al cerrar el modelo
financiero final.

### 11.1 Inversión inicial (CAPEX, USD, punto de trabajo)

**Decisión de trabajo del equipo (ver Anexo, punto 4)**: se fija un punto
único por componente, tomando el punto medio del rango de orden de
magnitud original — no hay razón direccional (conservador/agresivo) para
inclinarse hacia un extremo en una estimación de costo de infraestructura
sin cotizar, a diferencia de la fracción de GMV incremental (§11.3),
donde sí hay una razón explícita para ser conservador.

| Componente | Punto de trabajo (USD) | Lógica |
|---|---|---|
| Plataforma (app + backend + QR propio) | 550.000 | Punto medio del rango original (400.000–700.000). Partnership con un PSP/BaaS existente en vez de construir infraestructura bancaria propia — reduce el desarrollo a la capa de producto/UX/integración. **No cotizado con un proveedor real** |
| Integración con sistemas existentes de COTO (POS, CRM/fidelización, catálogo de Coto Digital) | 200.000 | Punto medio del rango original (150.000–250.000). Se integra infraestructura ya existente, no se reemplaza |
| Compliance / KYC-AML | 150.000 | Punto medio del rango original (100.000–200.000). Costo bajo por operar vía partner PSP/BaaS en lugar de licencia propia. Si el equipo eligiera en el futuro el camino de licencia bancaria propia (como Ualá), este costo sería sustancialmente mayor — no cuantificado, fuera de alcance |
| **Total CAPEX inicial (Fase 0-1)** | **900.000** | Suma de los tres puntos anteriores. Sigue siendo un punto de trabajo, no una cotización real — reemplazar en cuanto el equipo tenga al menos una cotización de un proveedor de PSP/BaaS |

### 11.2 Costos operativos (OPEX, recurrente)

- **Equipo**: 8-12 personas estimadas para Fase 0-1 (1-2 producto, 2-3
  ingeniería mobile/backend, 1 datos/analítica para la personalización, 1-2
  atención al cliente, 1-2 marketing/CRM) — conteo por lógica de alcance de
  producto, **sin costo salarial estimado** (varía demasiado por seniority
  y mercado como para inventarlo). Escala con cada fase de §6.3.
- **Incentivos de lanzamiento y migración**: presupuesto de referencia
  equivalente a 3-5% del GMV objetivo de cada fase — porcentaje elegido
  por analogía de orden de magnitud con los reintegros de la competencia
  (10-25% MP, 20-30% MODO), no un benchmark de costo de adquisición
  propio.
- **Procesamiento de pagos**: fee del partner PSP/BaaS, costo variable por
  transacción — no cuantificado porque depende de una negociación que aún
  no existe. Se nombra como línea obligatoria del modelo final, sin tasa
  inventada.

### 11.3 De GMV a impacto en resultados

**Punto central para no cometer el error más común de un pitch de
wallet**: el GMV de §8.3 **no es ingreso incremental por sí mismo** — es,
en su mayor parte, el mismo gasto que el cliente ya hacía en COTO,
migrado de otro riel de pago. Se traduce en tres líneas:

1. **Margen retail sobre spend genuinamente incremental** (palancas
   frecuencia + basket size): **supuesto del equipo, resuelto con un
   punto — ver Anexo, punto 2**: el equipo fija **20% del GMV capturado
   cada año** como spend genuinamente incremental (no solo migración de
   riel de pago) — el extremo conservador del rango 20-30% considerado
   originalmente, sin benchmark citado. Se elige el extremo bajo, no el
   punto medio, porque el multi-tenanting con MP/MODO (§7.2) es la
   amenaza central del caso: es más probable que gran parte del GMV que
   migra a la wallet sea simple cambio de riel de pago (hábito ya
   instalado) que frecuencia/basket genuinamente nuevos.

   Sobre ese spend incremental se aplica un margen bruto retail de
   supermercado. **El equipo fija 22% como punto de trabajo (ver Anexo,
   punto 5)** — dentro del orden de magnitud públicamente conocido para
   márgenes brutos (no netos) de cadenas de supermercado a nivel
   internacional. **Sin fuente citada específica para Argentina o COTO:
   es 100% un supuesto del equipo** — el punto de mayor incertidumbre de
   todo el documento, junto con el punto 2 de abajo.

   | Año | GMV vía wallet | Spend incremental (20%) | Margen retail incremental (22% s/incremental) |
   |---|---|---|---|
   | 1 | ≈ARS 22.900M | ≈ARS 4.580M | ≈ARS 1.008M/año |
   | 2 | ≈ARS 68.750M | ≈ARS 13.750M | ≈ARS 3.025M/año |
   | 3 | ≈ARS 114.600M | ≈ARS 22.920M | ≈ARS 5.042M/año |

2. **Ahorro por redirección de presupuesto de promos a terceros**: ya no
   es una pregunta abierta (ver Anexo, punto 3) — el equipo asume que
   **COTO cofinancia ~60% del costo de los reintegros de MP/MODO** hoy,
   sobre una **tasa de reintegro combinada de trabajo del 20%** (punto
   entre el rango de MP 10-25% y el de MODO 20-30%, sin desagregar cuánto
   del GMV pasa hoy por cada wallet). **Ahorro potencial redirigible =
   GMV migrado × 20% (tasa de reintegro) × 60% (participación asumida de
   COTO) = 12% del GMV migrado cada año**:

   | Año | GMV vía wallet | Ahorro potencial redirigible (12% del GMV) |
   |---|---|---|
   | 1 | ≈ARS 22.900M | ≈ARS 2.748M/año |
   | 2 | ≈ARS 68.750M | ≈ARS 8.250M/año |
   | 3 | ≈ARS 114.600M | ≈ARS 13.752M/año |

   **Sigue siendo, en su totalidad, un supuesto del equipo** — no hay
   fuente que confirme ni la participación de COTO ni la tasa combinada
   del 20%. Si el equipo confirma con COTO que financia 0%, esta línea
   completa desaparece del caso financiero — es upside condicional, no un
   ahorro garantizado.
3. **Retail media** (palanca ad load, secundaria): habilitado recién desde
   la Fase 3 (§6.3), cuando la base de usuarios activos alcanza escala
   suficiente. **Supuesto ilustrativo**: equivalente a 0,5%-1,5% del GMV
   del Año 3 — inspirado en el patrón general de la industria de retail
   media, sin cifra específica de Argentina o de un caso comparable
   citada. Línea secundaria e ilustrativa, no pilar del caso.

### 11.4 Cómo se presenta el caso

- **No se lidera con un número de VAN/ROI optimista** construido sobre
  esta cadena de supuestos — sería exactamente el error que un panel
  inversor de esta materia (que ya vio el caso Ualá y su ecosistema
  financiero real) descartaría de inmediato. El caso se presenta como
  **rango + lógica de cada supuesto**, no como cifra única.
- **Horizonte**: 3 años, coincidente con el roadmap de §6.3.
- **Riesgo financiero principal, a nombrar en voz alta en el pitch**: la
  fracción de GMV verdaderamente incremental (11.3, punto 1) es el
  supuesto menos sólido de todo el modelo. Si resulta más baja que el 20%
  fijado como punto de trabajo del equipo (ya es el extremo conservador
  del rango original 20-30%, elegido a propósito por el multi-tenanting
  confirmado como amenaza central en §7.2) — es decir, si la wallet solo
  migra el riel de pago sin generar frecuencia/basket incremental real —,
  el caso financiero se debilita sustancialmente aunque el GMV y la
  cobertura de sucursales cumplan el plan. Este riesgo pesa más que el
  riesgo tecnológico o de costo de plataforma, que están acotados por la
  decisión de partnership en vez de banco propio (§11.1).

### 11.5 Qué falta para cerrar este modelo con precisión real

- Facturación, margen bruto real y costo operativo reales de COTO
  (ninguno público hoy). El margen bruto de 22% y la fracción incremental
  de 20% de §11.3 son puntos de trabajo del equipo, no datos de COTO —
  reemplazar en cuanto haya dato real.
- Confirmación real con COTO de si efectivamente cofinancia los
  reintegros de MP/MODO y en qué proporción (el 60% de §11.3, punto 2, es
  un supuesto del equipo, no un dato validado) — de confirmarse 0%, esa
  línea de ahorro desaparece del caso.
- Cotización real de al menos un proveedor de PSP/BaaS, para reemplazar el
  punto de trabajo de USD 900.000 de §11.1 por un número negociado.
- Tipo de cambio de referencia del equipo para unificar USD (inversión) y
  ARS (ingresos) en una sola moneda.

## 12. Cierre — preguntas abiertas para la ronda de Q&A

Estos gaps no son debilidades ocultas del plan — están señalizados de
forma deliberada porque son, probablemente, las preguntas que un panel
inversor va a hacer primero. Cinco de los gaps que originalmente estaban
acá como preguntas sin resolver (sucursales, fracción de GMV incremental,
financiamiento de reintegros MP/MODO, CAPEX, margen bruto retail) ya
tienen una cifra puntual de trabajo — ver el Anexo al final de este
documento para el detalle completo de cada decisión. Quedan, sin embargo,
dos preguntas que **no se resuelven con una decisión de trabajo del
equipo** porque dependen de datos que solo COTO o un proveedor externo
pueden dar — conviene tenerlas presentes para los 10 minutos de
preguntas:

- ¿Cuál es la facturación, margen y costo operativo real de COTO? (ningún
  dato público disponible — determina si el TAM/SAM/SOM de §8 y el modelo
  financiero de §11 se sostienen con precisión; el margen bruto de 22% de
  §11.3 es un punto de trabajo del equipo mientras tanto, ver Anexo,
  punto 5)
- ¿Qué proveedor de PSP/BaaS se elegiría, y a qué costo real? (determina
  si el CAPEX de USD 900.000 de §11.1 — ya un punto de trabajo, no un
  rango, ver Anexo, punto 4 — se sostiene o cambia sustancialmente)

**Mensaje de cierre**: la oportunidad no es "vender más pagos digitales"
— eso ya lo resuelven MP y MODO dentro del propio checkout de COTO. La
oportunidad es que COTO deje de financiar, con su propio piso de venta, la
construcción del activo de datos y fidelización de un competidor de facto
— y empiece a construir el suyo.

## Anexo: supuestos clave del modelo

Cinco cifras de este documento no tienen fuente confirmada por COTO ni
por ningún research citado — son decisiones de trabajo del equipo,
tomadas para poder avanzar con el modelo sin dejar rangos ni preguntas
sin resolver flotando en el documento. Cada una está marcada en su
sección correspondiente con una referencia a este Anexo. **Ninguna de
estas cinco cifras tiene el mismo estatus que un dato citado de una
fuente primaria** — se documentan acá, juntas, para que quede explícito
qué tan sólido (o no) es cada punto de partida del caso.

### 1. Cantidad de sucursales de COTO

**Cifra adoptada: 153 sucursales**, usada de forma consistente en todo el
documento (roadmap de §6.3, market sizing de §8, moat de distribución de
§7.1).

**Respaldo**: parcial. El research (`market-sizing-billeteras-argentina.md`)
encontró tres cifras distintas para las sucursales de COTO: **153**
(suma explícita por zona de la propia página coto.com.ar/sucursales:
CABA 91, Zona Norte 18, Zona Sur 14, Zona Oeste 15, Costa Atlántica 5,
Santa Fe 7, Entre Ríos 1, Neuquén 1, Mendoza 1); **242** (total mostrado
por la extracción automática de la misma página, sin conciliar con la
suma por zona, sin metodología visible); y **"+120"** (citado sueltamente
en notas de prensa sobre las alianzas con Mercado Pago y MODO, nunca
usado como un censo, solo como piso mínimo).

**Razonamiento**: 153 es la única de las tres con metodología verificable
— se puede reconstruir el cálculo paso a paso desde la fuente pública. 242
no concilia con ese desglose y no tiene metodología propia visible; no se
descarta por ser la más alta, se descarta por no poder reconstruirse. El
"+120" de la prensa nunca pretendió ser un conteo completo — es una cifra
de piso mencionada al pasar en coberturas sobre alianzas de pago, de
naturaleza distinta a un censo.

**Nivel de respaldo**: medio-alto — es el único de los cinco supuestos con
un anclaje trazable a una fuente pública, aunque no confirmado
directamente por COTO.

### 2. Fracción de GMV genuinamente incremental

**Cifra adoptada: 20% del GMV capturado cada año** (extremo conservador
del rango 20-30% considerado originalmente), usada en §11.3 para calcular
el margen retail incremental.

**Respaldo**: ninguno — **100% supuesto del equipo**, sin benchmark citado
en el research de este entregable.

**Razonamiento**: §7.2 confirma que el multi-tenanting es la amenaza
central y ya confirmada del caso — MP y MODO siguen aceptados en caja, no
hay exclusividad posible (mandato de interoperabilidad QR del BCRA), y la
wallet COTO compite por share of wallet, no por desplazamiento. Bajo ese
marco, es más probable que una porción grande del GMV que migra a la
wallet propia sea simplemente el mismo gasto cambiando de riel de pago
(un hábito ya instalado) que frecuencia o basket genuinamente nuevos.
Elegir el extremo bajo del rango, en vez del punto medio, es una decisión
deliberada de sesgar el modelo hacia el escenario conservador — frente a
un panel que ya vio el caso Ualá y va a presionar exactamente sobre este
punto.

**Nivel de respaldo**: bajo, pero con lógica de negocio explícita
(multi-tenanting) que justifica el sesgo hacia el extremo conservador del
rango.

### 3. Quién financia hoy los reintegros de MP/MODO en el checkout de COTO

**Posición de trabajo adoptada: COTO cofinancia aproximadamente el 60%**
del costo de los reintegros de MP (10-25%) y MODO (20-30%), vía un
presupuesto de comarketing negociado con cada wallet, sobre una **tasa de
reintegro combinada de trabajo del 20%** (punto entre el rango de MP y el
de MODO, sin desagregar cuánto del GMV pasa hoy por cada wallet). Usada en
§11.3 para calcular un ahorro potencial redirigible de 12% del GMV
migrado cada año.

**Respaldo**: ninguno específico para COTO — **100% supuesto del
equipo**. El research confirma que las alianzas existen y sus tasas de
reintegro, pero no dice quién las financia.

**Razonamiento**: COTO exhibe y promociona activamente estas campañas en
su propio calendario de piso (ej. "MODO Tuesday", descuentos de
lanzamiento con MP) — en la práctica comercial de retail, ese nivel de
visibilidad y prioridad en el punto de venta normalmente implica una
contrapartida de inversión del comercio, no solo del banco/wallet. Además,
reintegros de esa magnitud (10-30%) sobre el volumen de transacciones de
una cadena grande serían difíciles de sostener unilateralmente por el
banco/wallet sin coparticipación del retailer — un patrón habitual en
acuerdos de trade marketing entre grandes cadenas y redes de pago en
Argentina, aunque no se encontró una fuente que lo confirme puntualmente
para el caso COTO-MP/MODO. Se eligió 60% (mayoría, no totalidad) como
punto medio razonable entre "COTO no paga nada" y "COTO paga todo" —
ninguno de los dos extremos es plausible.

**Nivel de respaldo**: el más bajo de los cinco — ni siquiera hay un
anclaje indirecto fuerte que lo sostenga. Si el equipo confirma con COTO
que la participación real es 0%, la línea de ahorro de §11.3 desaparece
por completo del caso financiero.

### 4. CAPEX inicial

**Cifra adoptada: USD 900.000** (punto medio de cada componente del rango
original 650.000–1.150.000): Plataforma USD 550.000, Integración USD
200.000, Compliance/KYC-AML USD 150.000. Usada en §11.1 como el CAPEX de
referencia de Fase 0-1.

**Respaldo**: ninguno — **100% supuesto del equipo**, ningún componente
está cotizado con un proveedor real.

**Razonamiento**: a diferencia del punto 2 (fracción de GMV incremental),
acá no hay una razón direccional para sesgar la estimación hacia el
extremo bajo o el alto — es una estimación de orden de magnitud de costo
de infraestructura sin cotizar, no un supuesto de comportamiento del
cliente donde el research sugiera un sesgo conservador. Ante la ausencia
de una razón para inclinarse hacia un extremo, se toma el punto medio de
cada componente como cifra de trabajo, en vez de dejar el rango o elegir
arbitrariamente un extremo.

**Nivel de respaldo**: bajo, pero sin sesgo direccional razonado (a
diferencia del punto 2) — sigue siendo un punto de trabajo a reemplazar en
cuanto el equipo tenga al menos una cotización real de un proveedor de
PSP/BaaS.

### 5. Margen bruto retail

**Cifra adoptada: 22%**, aplicado sobre el spend genuinamente incremental
(no sobre el GMV total) en §11.3.

**Respaldo**: ninguno específico de Argentina o de COTO — **100% supuesto
del equipo**, basado en conocimiento general de la industria de
supermercados (no en un research citado dentro de este entregable).

**Razonamiento**: es, junto con el punto 3, el supuesto con menor respaldo
del modelo. Se fija 22% porque está dentro del orden de magnitud
públicamente conocido para el margen bruto (no el margen neto) de una
cadena de supermercados — el margen neto del sector suele ser de un
dígito bajo (1-3%), pero el margen bruto (antes de gastos operativos,
alquileres, logística) suele ubicarse en el rango de 20-25% en cadenas de
supermercados a nivel internacional. Esta distinción entre margen bruto y
margen neto es la razón por la que se elige un punto (22%) y no se deja
la formulación ambigua "bajo/medio dígito" que tenía una versión anterior
de este documento.

**Nivel de respaldo**: bajo — el otro punto de mayor incertidumbre de todo
el modelo financiero, junto con el punto 3. Sigue sin haber una fuente
específica para Argentina o COTO dentro del research de este entregable.

### Resumen para uso rápido

| # | Gap | Cifra puntual adoptada | Fuente | Nivel de respaldo |
|---|---|---|---|---|
| 1 | Sucursales COTO | **153** | Parcial (suma verificable de la propia página de COTO) | Medio-alto |
| 2 | Fracción de GMV incremental | **20%** (extremo conservador de 20-30%) | Ninguna — supuesto del equipo | Bajo, pero con lógica de negocio explícita (multi-tenanting) |
| 3 | Financiamiento de reintegros MP/MODO | **COTO cofinancia ~60%**, tasa combinada de reintegro 20% | Ninguna — supuesto del equipo | El más bajo de los cinco |
| 4 | CAPEX inicial | **USD 900.000** (punto medio del rango) | Ninguna — supuesto del equipo | Bajo, sin sesgo direccional razonado |
| 5 | Margen bruto retail | **22%** | Ninguna específica de AR/COTO — conocimiento general de industria | Bajo — junto con el punto 3, el de mayor incertidumbre |

**Nota**: solo el punto 1 tiene un anclaje parcial en una fuente pública
(aunque no confirmado por COTO). Los puntos 2 a 5 son 100% construcciones
del equipo sin ninguna fuente externa. Ninguno de los cinco se presenta
como un hecho verificado en este documento — se marcan como supuestos
explícitos del equipo, consistente con la regla de este TP de nunca
afirmar un dato de mercado o cifra sin fuente citada.
