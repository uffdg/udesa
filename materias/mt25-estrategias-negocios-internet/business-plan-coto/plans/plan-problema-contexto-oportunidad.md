---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
checklist_item: "Definición del problema, contexto y tamaño de la oportunidad
  (contexto/tendencias, problema concreto, market sizing)"
research_usado:
  - market-sizing-billeteras-argentina.md (BCRA, Global Payments Report
    2026, Kantar, CACE, INDEC, CAME, datos propios COTO)
  - competidores-billeteras-argentina.md (alianzas activas COTO-MP y
    COTO-MODO, dato crítico del problema)
  - competidor-uala.md (contexto competitivo indirecto)
  - catedra-contexto-tp.md (framework digitización/digitalización/
    transformación digital, caso Movistar)
skill_aplicada: how-to-size-market-tam-sam-som
---

# Problema, contexto y tamaño de la oportunidad

## 1. Contexto: tendencias y marco competitivo

### 1.1 El "por qué ahora" — tendencia de mercado, no moda

Cuatro fuentes independientes (regulador, consultora de pagos, cámara de
e-commerce, estadística oficial de supermercados) apuntan en la misma
dirección al mismo tiempo:

- **BCRA** (Informe de Pagos Minoristas, jul-ago 2025): pagos con QR
  interoperable +45,8% interanual en cantidad; transferencias inmediatas
  +21% interanual, 76,1% ya originadas/destinadas en cuentas no bancarias
  (CVU); uso agregado de billeteras digitales +73% interanual; tarjeta de
  débito **cayendo** 16,8% interanual — no es solo crecimiento nuevo, es
  sustitución activa del medio de pago tradicional
  (`market-sizing-billeteras-argentina.md`, sección 1.1).
- **Global Payments Report 2026**: billeteras digitales pasaron de 34% a
  43% del valor pagado en comercio físico en Argentina **en un solo año**
  (2024→2025), con proyección a 48% para 2030; en e-commerce, de 50% a
  55% (proyección 70% para 2030). 84% de los argentinos usa QR para pagar
  con el celular — el porcentaje más alto de América Latina (sección 1.2).
- **Kantar**: 91% de los argentinos usa al menos un medio de pago no
  efectivo (sección 1.3).
- **CACE**: e-commerce argentino 2025 facturó $34.033.238 millones
  (+55% interanual), con "Alimentos, bebidas y artículos de limpieza"
  como la segunda categoría de mayor facturación del e-commerce
  argentino — directamente relevante al caso de una wallet de
  supermercado (sección 3).
- **INDEC** (Encuesta de Supermercados): "otros medios" de pago
  (categoría que incluye billeteras virtuales) ya representaba **11,1%**
  de las ventas de supermercados en noviembre de 2024 — el mix de pago
  del propio sector ya está migrando, sin que exista todavía una wallet
  propia de COTO (sección 2.1).

**Lectura para el pitch**: esto no es una apuesta especulativa sobre una
tecnología emergente — es una sustitución de medio de pago ya en curso,
medible y consistente entre reguladores, consultoras de la industria y
estadística oficial, con el propio sector supermercadista ya mostrando
tracción de billeteras dentro de su mix de pago.

### 1.2 Marco de cátedra: por qué esto es transformación digital y no solo digitalización

Siguiendo el framework de la Clase 1 de MT25 (caso Movistar,
`catedra-contexto-tp.md`), hay una distinción explícita entre
**digitización** (pasar de análogo a digital), **digitalización de
procesos** (mejorar procesos existentes con tecnología) y
**transformación digital** (construir nuevos modelos de negocio, no solo
mejorar los existentes).

COTO **ya hizo la digitalización** de la aceptación de pagos: acepta QR
de Mercado Pago desde ~2020 y de MODO (renovado 2024) en sus 153
sucursales (`competidores-billeteras-argentina.md`, secciones 1.4 y 2.5,
menciona "+120" como piso citado sueltamente en notas de prensa sobre
esas alianzas puntuales — no es un conteo exhaustivo, es una cifra
mínima). **Decisión de trabajo del equipo, ver `plans/supuestos-resueltos.md`**:
se usa 153 en todo el documento, la misma base que el market sizing de la
sección 3, por ser la única cifra con metodología trazable (suma
explícita por zona de la propia página de COTO). El "+120" de la prensa
no la contradice — es un piso no exhaustivo, no una fuente alternativa de
conteo. Eso es digitalizar un proceso existente (cobrar), no transformar el
modelo de negocio. Una wallet propia, en cambio, encaja en la definición
de transformación digital del propio material de cátedra: no es "aceptar
un medio de pago más", es construir una **relación de datos y
fidelización propia** que hoy no existe — el tipo de movida que el caso
Movistar describe como "ninguna iniciativa digital se emprende si no está
estrechamente vinculada a la generación de valor". (Nota: las cifras del
caso Movistar —NPS, resolución en primer contacto— son de otra industria
y no se usan como benchmark cuantitativo, solo como marco conceptual,
según ya advierte `catedra-contexto-tp.md`.)

### 1.3 Marco competitivo: COTO no entra a un mercado vacío en su propio local

Este es el hallazgo más importante del research de competidores y define
todo el resto del pitch: **COTO ya tiene alianzas comerciales activas y
vigentes con Mercado Pago y con MODO como medios de pago aceptados y
promocionados dentro de sus propias sucursales.**

- **Mercado Pago**: alianza desde ~agosto 2020, QR habilitado en las
  sucursales COTO, con descuentos promocionales puntuales (10% en el
  lanzamiento, reintegros posteriores) (`competidores-billeteras-argentina.md`,
  1.4).
- **MODO**: alianza renovada en mayo 2024 ("MODO Tuesday" u homóloga),
  reintegros de 20-30% con tope $10.000-25.000 por banco, acumulable con
  ofertas regulares de COTO. Según BBVA (22/1/2025), las alianzas de MODO
  con Coto y Día **duplicaron el volumen de MODO en supermercados** en
  2024 (`competidores-billeteras-argentina.md`, 2.5).
- **Cuenta DNI**: no hay alianza específica confirmada con COTO (gap
  explícito en el research), pero sus descuentos por rubro
  ("supermercados" como categoría genérica) razonablemente aplican en
  cualquier sucursal COTO adherida al sistema.
- **Ualá**: competidor indirecto — no tiene oferta ligada a retail físico,
  pero compite por el mismo bolsillo del cliente (pago, inversión,
  crédito) (`competidor-uala.md`).

**Consecuencia directa para el argumento de valor**: el pitch no puede
apoyarse en "aceptar pagos digitales", porque eso ya lo resuelven MP y
MODO hoy mismo, dentro del propio checkout de COTO. Tiene que apoyarse en
algo que ni MP ni MODO ofrecen de forma nativa (ver sección 2).

## 2. El problema concreto que resuelve una wallet propia de COTO

No es "los clientes no pueden pagar digital" (ya pueden, vía MP/MODO). El
problema es lo que **COTO pierde** por procesar ese pago digital a través
de wallets de terceros en lugar de una propia:

1. **Datos de primera parte incompletos**: cuando un cliente paga con QR
   de MP o MODO, el flujo de pago corre por infraestructura ajena. COTO
   puede seguir capturando el detalle de ítems vía su propio POS/tarjeta
   de fidelización si existe, pero **no controla ni es dueño del vínculo
   pago↔identidad↔comportamiento** que la wallet del tercero sí construye
   sobre ese mismo cliente para su propio negocio (scoring, personalización,
   cross-sell de MP/MODO/los bancos). Cada transacción alimenta el activo
   de datos de un competidor de facto, no el de COTO.
2. **Fidelización cedida a terceros**: los mecanismos de beneficio que hoy
   ve el cliente en la caja de COTO (reintegro de MP, promo semanal de
   MODO) están diseñados, calendarizados y de marca de un tercero — el
   cliente asocia el beneficio a "Mercado Pago" o "MODO", no a COTO,
   aunque el gasto ocurra en un local COTO. COTO financia (al menos en
   parte — ver salvedad abajo) la construcción de lealtad hacia la marca
   de otro.
3. **Cero control sobre el calendario promocional del checkout**: las
   promos de MP y MODO se deciden y timean externamente (ver "MODO
   Tuesday", calendario mensual de Cuenta DNI) — COTO no puede alinear esa
   promoción con su propia gestión de categorías, stock o márgenes.
4. **Dependencia de reglas ajenas**: cualquier cambio de términos, tasas o
   requisitos técnicos de MP/MODO/bancos impacta el checkout de COTO sin
   que COTO tenga control sobre esa decisión.

**Supuesto de trabajo del equipo, no confirmado por research — ver
`plans/supuestos-resueltos.md` para el detalle completo del razonamiento**:
no existe fuente que confirme quién financia los reintegros de MP
(10-25%) y MODO (20-30%) en sucursales COTO. Ante la ausencia de dato, el
equipo adopta una posición de trabajo: **COTO cofinancia aproximadamente
el 60% del costo de esos reintegros**, vía un presupuesto de comarketing
negociado con MP/MODO. Razonamiento (sin fuente específica para COTO):
(a) COTO exhibe y promociona activamente estas campañas en su propio
calendario de piso, lo que en la práctica comercial de retail
normalmente implica una contrapartida de inversión del comercio, no solo
del banco/wallet; (b) reintegros de esa magnitud (10-30%) sobre el
volumen de transacciones de una cadena grande serían difíciles de
sostener unilateralmente por el banco/wallet sin coparticipación del
retailer — patrón habitual, aunque no verificado puntualmente para COTO,
en acuerdos de trade marketing entre grandes cadenas y redes de pago.
**Sigue siendo un supuesto no confirmado, no un hecho** — se usa para
poder cuantificar un ahorro potencial en `plan-financials.md` (sección
3.2), no se presenta como dato validado con COTO.

**Lo que sí es relativamente sólido, y a favor de COTO**: lo que MP, MODO
y Ualá **no tienen de forma nativa** es la relación de compra recurrente
de supermercado y el detalle de góndola de cada cliente — eso es
`competidores-billeteras-argentina.md` y `competidor-uala.md` lo marcan
explícitamente como ventaja potencial de COTO, aunque también lo marcan
como **supuesto del equipo a validar**, no como hecho confirmado. Este
plan lo mantiene con la misma salvedad.

## 3. Dimensionamiento de la oportunidad (TAM/SAM/SOM)

Siguiendo `.claude/skills/how-to-size-market-tam-sam-som/SKILL.md`. El
research (`market-sizing-billeteras-argentina.md`) deja explícito que
**no existe ningún dato público de clientes, ticket promedio, frecuencia
de compra, sucursales exactas ni facturación actual de COTO** — por lo
tanto, gran parte de este embudo son supuestos propios del equipo,
marcados como tales paso a paso, no datos encontrados. Se prioriza mostrar
la lógica de cada salto sobre la precisión del número final.

### 3.1 TAM — mercado total de supermercados en Argentina (top-down)

- **Fuente de base**: INDEC, Encuesta de Supermercados, ventas totales a
  precios corrientes, 5 meses de 2025 con dato disponible en el research
  (abril $1.975.885,8M; julio $2.059.013,6M; agosto $2.107.204,4M;
  septiembre $1.962.363,0M; noviembre $2.211.327,2M).
- **Supuesto del equipo (anualización)**: INDEC no publica un total anual
  consolidado (confirmado como gap en el research) — se promedian los 5
  meses disponibles ($2.063.158,8M/mes) y se multiplica por 12.
  **Resultado: TAM ≈ ARS 24,8 billones/año** (≈ARS 24,8 × 10¹²).
  **Advertencia explícita**: esta anualización no incluye diciembre (mes
  típicamente pico por aguinaldo/fiestas, lo que probablemente subestima
  el total real) y no ajusta por inflación intra-año (los meses están en
  pesos corrientes de cada mes, no deflactados a un mismo poder
  adquisitivo) — es una cifra direccional, no de precisión contable.

### 3.2 SAM — gasto ya "wallet-ready" dentro de las sucursales de COTO

En vez de definir el SAM como "todo lo que vende COTO" (que sobreestima lo
que una wallet nueva puede realistamente disputar), se define como **la
porción del gasto de COTO que ya se paga hoy con billeteras/medios
digitales** — es decir, el segmento de clientes y de gasto que ya está
listo y dispuesto a pagar con wallet, no el que hay que convertir primero
del efectivo.

Pasos (todos supuestos del equipo, marcados):

1. **Participación de las 3 cadenas más grandes en el TAM**: fuente de
   agregador de búsqueda (no verificada contra el informe FAECYS/SEYE
   original, que no pudo leerse — ver `market-sizing-billeteras-argentina.md`,
   2.3) sitúa a Carrefour + Cencosud + COTO en ~50% del sector. Se usa esa
   cifra con esa salvedad explícita: **no confirmada con fuente primaria**.
   → ~ARS 12,4 billones/año para las 3 cadenas combinadas.
2. **Participación de COTO dentro de ese trío**: no hay dato para
   diferenciar la participación de cada cadena — **supuesto del equipo:
   split parejo (1/3)**, elegido por transparencia metodológica (no hay
   base para asumir que COTO es más grande o más chica que Carrefour o
   Cencosud dentro de este research) → **ventas anuales estimadas de
   COTO ≈ ARS 4,1 billones/año**. Esta es una estimación compuesta de dos
   supuestos encadenados — reemplazar por dato real de COTO en cuanto el
   equipo lo consiga.
3. **Porción ya pagada con wallet/medios digitales**: se aplica el
   11,1% de "otros medios" que INDEC midió a nivel nacional en
   supermercados (nov. 2024) sobre la estimación de ventas de COTO — es
   una extrapolación de un promedio nacional a un caso puntual, marcada
   como tal, no un dato propio de COTO.

   **SAM ≈ ARS 4,1 billones × 11,1% ≈ ARS 458.000 millones/año.**

Este SAM representa el gasto que hoy ya fluye por wallets **de terceros**
(MP, MODO, otras) dentro del propio checkout de COTO — es decir, es
literalmente la cuantificación del problema descripto en la sección 2: es
"dinero que ya eligió pagar digital en COTO" pero no vía COTO.

### 3.3 SOM — captura realista en el horizonte del plan (3 años)

El SOM asume una curva de adopción conservadora, coherente con el
tratamiento de moats de `plan-captura-de-valor.md`: como MP y MODO siguen
aceptados en caja (multi-tenanting, no hay forma de forzar exclusividad),
no es realista asumir que la wallet COTO desplaza la mayoría del SAM en 3
años. Los porcentajes de captura están atados 1 a 1 con la cobertura de
sucursales de `plan-ejecucion.md` (mismo horizonte, misma lógica de
rollout) — **supuesto del equipo, curva de adopción no basada en un
benchmark citado**, sino en la lógica de que cobertura de sucursales
crece más rápido que adopción real (la gente tarda en migrar un hábito de
pago instalado):

| Año | Cobertura de sucursales (ver plan-ejecucion) | % del SAM capturado | GMV vía wallet COTO |
|---|---|---|---|
| 1 | ~59% (CABA, piloto + rollout) | 5% | ≈ARS 22.900 millones/año |
| 2 | ~90% (+ GBA: Zona Norte/Sur/Oeste) | 15% | ≈ARS 68.750 millones/año |
| 3 | 100% (+ resto del país) | 25% | ≈ARS 114.600 millones/año |

**Nota importante para `plan-financials.md`**: este GMV (volumen
transaccionado vía wallet) **no equivale a ingreso incremental para
COTO** — es, en gran parte, el mismo gasto que el cliente ya hacía en
COTO, solo que migrado de otro riel de pago al propio. La traducción de
este GMV a impacto en resultados (margen incremental por frecuencia,
ahorro de subsidio a promos de terceros, ingreso de retail media) se
resuelve en `plan-financials.md`, no acá.

### 3.4 Chequeo de plausibilidad (no es un bottom-up independiente)

El research confirma que no existe ningún dato público de ticket
promedio, frecuencia de compra ni tráfico por sucursal de COTO — por lo
tanto no es posible construir un bottom-up verdaderamente independiente
para contrastar contra el top-down de 3.1-3.2 (el objetivo del skill de
mostrar top-down y bottom-up convergiendo no se puede cumplir con datos
genuinos en este caso, y se dice así explícitamente en vez de forzar un
segundo cálculo con la misma cadena de supuestos).

Como chequeo de orden de magnitud (no como segunda fuente independiente):
con 153 sucursales — **cifra definitiva adoptada por el equipo para todo
el entregable, ver `plans/supuestos-resueltos.md`**: es la suma explícita
por zona de la propia página oficial de COTO (91+18+14+15+5+7+1+1+1=153),
la única de las tres cifras encontradas en el research con metodología
trazable. Se descarta 242 (total mostrado por la misma página, sin
conciliar con la suma por zona) y también el "+120" citado sueltamente en
notas de prensa sobre las alianzas MP/MODO (no es un conteo, es un piso
no exhaustivo) — la estimación de ventas anuales de COTO (ARS 4,1
billones) implicaría un promedio de **~ARS 75 millones/día por
sucursal**. No hay benchmark citado
de facturación diaria de un supermercado grande en Argentina para validar
si ese número es razonable — queda marcado como **verificación pendiente
por el equipo**, no como validación conseguida.

## 4. Gaps que quedan explícitamente abiertos para el equipo

- Cualquier dato real de COTO (clientes, ticket, frecuencia, facturación)
  reemplazaría la cadena de supuestos de la sección 3.2 con un número
  mucho más defendible frente a un panel inversor.

**Gaps resueltos con estimación puntual del equipo (ya no son preguntas
abiertas — ver `plans/supuestos-resueltos.md` para el detalle completo de
cada decisión)**: cantidad de sucursales de COTO (153, secciones 1.2 y
3.4) y quién financia los reintegros de MP/MODO (COTO cofinancia ~60%,
sección 2). Ambos siguen siendo supuestos del equipo, no hechos
confirmados por COTO — pero ya tienen una cifra de trabajo única y
consistente en todo el entregable, en vez de quedar como pregunta sin
resolver.
