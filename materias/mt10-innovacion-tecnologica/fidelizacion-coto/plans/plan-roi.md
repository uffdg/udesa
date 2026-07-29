---
entregable: mt10-innovacion-tecnologica/fidelizacion-coto
checklist_item: "ROI: ¿por qué es necesario hacerlo? ¿por qué ahora?"
research_usado:
  - coto-modelo-financiero-roi.md (incluye la "Lectura crítica" ya escrita en el propio research — este plan la sigue al pie de la letra)
  - coto-arquitectura-y-costos-ia-cloud.md (CAPEX y OPEX por escenario)
  - coto-sintesis-gaps-y-data-request.md (3 experimentos de des-arriesgamiento)
  - coto-modelo-economico-unit-economics.md (fórmula de margen, Tarjeta TCI)
  - competidores.md (ventana competitiva)
  - coto-dimension-negocio.md (salvedad [SV] sobre padrón de Comunidad COTO)
skill_aplicada: how-to-build-roi-case
regla_dura: "NO liderar con VAN $5,24M / ROI 1.505,7% — presentar el rango
  completo y el plan de des-arriesgamiento como parte del pitch, siguiendo
  la Lectura crítica ya escrita en coto-modelo-financiero-roi.md."
---

# Caso de ROI: por qué hacerlo, por qué ahora

## 0. Cómo se estructura este caso (y qué NO va a liderar el pitch)

Siguiendo la "Lectura crítica" que el propio research ya deja escrita en
`coto-modelo-financiero-roi.md`, este plan se aparta deliberadamente del
resultado más vistoso del modelo financiero del dossier (VAN $5,24M USD,
ROI 1.505,7% a 36 meses). Esa cifra es real dentro del modelo, pero:

1. Depende de un escenario "base" que ya asume 18% de adopción sobre un
   padrón de Comunidad COTO que es, a su vez, un supuesto **[SV]** sin
   validar (`coto-dimension-negocio.md`).
2. Casi un tercio del beneficio anual proyectado (palancas #6 y #7 del
   árbol de valor) está marcado **[SV] — Bajo** confianza.
3. Un CFO real va a desconfiar de un ROI de cuatro dígitos más rápido que
   confiar en él — presentarlo como número de apertura debilita el caso,
   no lo fortalece.

Por eso este plan lidera con el **rango de escenarios y el análisis de
sensibilidad**, no con el número optimista, y trata el **plan de
des-arriesgamiento** (sección 5) como parte central del pitch, no como
nota al pie — tal como indica explícitamente la lectura crítica del
research.

## 1. Por qué es necesario hacerlo (el caso base)

### 1.1. Costo de no hacerlo

- **35%-45% de las transacciones presenciales pierden trazabilidad de
  cliente** hoy, todos los días que la inversión no se hace
  (`coto-modelo-economico-unit-economics.md`). Cada mes de demora es un
  mes más de datos de cliente que se generan y se pierden sin capturar,
  sobre 12M transacciones/mes.
- **COTO es el único de los dos líderes de market share sin wallet digital
  propia.** Carrefour (21% share) ya lanzó Cuenta Digital Mi Carrefour (set.
  2025, 43% TNA, objetivo de mover 20% de sus ventas a la wallet) y Cencosud
  (17% share) opera CencoPay desde 2023 con 2% de cashback diario
  (`competidores.md`). Mientras tanto, COTO depende de un tercero (Mercado
  Pago) para pagos digitales en caja — no captura esa capa de dato ni de
  margen financiero.
- **Fuga de margen recurrente a terceros**: 45% de las ventas se paga con
  tarjeta de crédito de terceros (adquirencia 1,2%-1,8% + IVA) — cada punto
  de esa masa que no migra a TCI es comisión que sale del grupo económico
  cada mes, indefinidamente, con o sin proyecto.

### 1.2. Beneficio esperado

El árbol de 7 palancas del dossier (`coto-modelo-financiero-roi.md`)
identifica dónde específicamente se genera valor. Se presenta acá
ordenado por **confianza del dato**, no por magnitud — siguiendo el punto 2
de la lectura crítica: separar lo que depende de que el cliente cambie de
comportamiento (más incierto) de lo que depende de una decisión operativa
interna de COTO (más sólido).

| # | Palanca | Confianza | Depende de |
|---|---|---|---|
| 4 | Automatización de atención al cliente (CU-04/CU-06) | **Muy Alto [DM]** | Decisión operativa interna — desplegar el agente y redefinir incentivos de soporte (`plan-big-data-analytics.md`, principio 8) |
| 3 | Migración a Tarjeta TCI (CU-01 nudge de medio de pago) | **Alto [EC]** | Decisión operativa interna — no requiere que el cliente compre más, solo que pague distinto |
| 1 | Incremento en frecuencia de compra | Medio [PX] | Comportamiento del cliente |
| 2 | Aumento del ticket promedio (cross-sell) | Medio [PX] | Comportamiento del cliente |
| 5 | Reducción de cancelaciones en e-commerce (CU-03) | Medio [PX] | Comportamiento del cliente (aceptación de sustitutos) |
| 6 | Optimización del costo promocional (CU-05) | **Bajo [SV]** | Comportamiento del cliente + calidad del modelo de propensión |
| 7 | Monetización de Retail Media agéntico | **Bajo [SV]** | Terceros (proveedores pagando por espacio patrocinado) — ni siquiera depende de COTO o del cliente |

**Lectura para el pitch**: el caso más sólido frente a un directorio/CFO no
es "vamos a vender más" (palancas 1, 2, 5 — inciertas), es "vamos a dejar
de perder margen que ya generamos" (palanca 3, migración a TCI) y "vamos a
gastar menos en resolver lo que ya pasa" (palanca 4, atención
automatizada). Las palancas 6 y 7 no deberían presentarse con cifra propia
en el pitch — son upside, no el caso base.

## 2. Por qué ahora (la ventana, no la urgencia genérica)

- **Ventana competitiva concreta y con fecha**: Carrefour lanzó su wallet
  hace menos de un año (set. 2025) y todavía está en fase de adquisición
  agresiva de usuarios (objetivo declarado: pasar de 10% a 20% de ventas
  pagadas con la wallet). Cencosud lleva más tiempo (desde 2023) corriendo
  dos mecanismos de fidelización en paralelo. La ventana para que COTO
  entre sin quedar tercero en la categoría "wallet de supermercado" sigue
  abierta, pero se angosta con cada trimestre de demora.
- **Costo de oportunidad de esperar**: cada trimestre sin plataforma de
  datos unificada es un trimestre más de historial de compra fragmentado
  que no se puede reconstruir retroactivamente — el dato perdido en una
  transacción sin identificar no se recupera después.
- **Activo propio ya construido y subutilizado**: TCI ya existe, retiene
  100% del valor dentro del grupo, y Coto Digital ya lidera el e-commerce
  del sector — la inversión no parte de cero, capitaliza infraestructura
  y base de clientes que COTO ya tiene y que la competencia no tiene en la
  misma escala (`coto-dimension-negocio.md`).

## 3. El rango completo (no el número optimista)

| Variable | Conservador | Base | Optimista |
|---|---|---|---|
| Tasa de adopción (MAU/Comunidad COTO) | 10,0% | 18,0% | 28,0% |
| Uplift de frecuencia de compra | +2,0% | +4,5% | +7,0% |
| Uplift de ticket promedio | +1,5% | +3,2% | +5,0% |
| Autoservicio en reclamos | 40,0% | 65,0% | 80,0% |
| WACC | 16,0% | 12,0% | 10,0% |

*(`coto-modelo-financiero-roi.md`)*

## 4. Análisis de sensibilidad — el argumento central del pitch, no el VAN base

En vez de abrir con "VAN $5,24M", el pitch abre con esta tabla, que
muestra **qué tan robusto es el caso ante los supuestos que más
probablemente se muevan**:

| Variación | Impacto en VAN | Impacto en ROI | Riesgo |
|---|---|---|---|
| Caso base | $5.241.800 | 1.505,7% | Referencia |
| Costo IA/Cloud +50% | $4.850.000 | 1.380,0% | **Bajo** — el proyecto es resiliente a sorpresas de costo informático |
| Caída de adopción −50% MAU | $2.150.000 | 620,0% | **Medio** — el riesgo real está en marketing/adopción, no en tecnología |
| Uplift de frecuencia −50% | $3.100.000 | 890,0% | **Medio** — requiere validar la propuesta de valor al cliente |
| Devaluación ARS +50% | $3.650.000 | 1.050,0% | **Alto** — riesgo macroeconómico fuera del control del proyecto |
| Falla en integración POS (retraso 3 meses) | $4.200.000 | 1.200,0% | **Alto** — riesgo de ejecución técnica |

**El mensaje correcto para el directorio no es "el ROI es altísimo"**, es:
*"incluso en el escenario más adverso de todos los que modelamos, el VAN
se mantiene positivo y el ROI arriba de 600%"* — pero con la salvedad
explícita de que esto prueba robustez **dentro del modelo**, no contra la
realidad: los supuestos de base (especialmente adopción y el padrón [SV] de
Comunidad COTO) todavía no están validados con datos internos de COTO.

## 5. Riesgo principal a nombrar explícitamente

Siguiendo la regla de que un caso de ROI sin riesgo nombrado suena poco
creíble: el riesgo principal de este proyecto **no es tecnológico ni de
costo de IA** (la sensibilidad muestra que ambos son "Bajo" impacto) — es
**adopción**: la caída de MAU es la única variable de negocio (no
macroeconómica ni de ejecución técnica) marcada "Medio" o superior, y
depende de una cifra base ([SV], padrón de Comunidad COTO) que todavía no
está confirmada por COTO. Se nombra este riesgo como el central del
proyecto, no los riesgos técnicos que dominan la conversación por defecto.

## 6. Plan de des-arriesgamiento — parte del pitch, no nota al pie

Antes de comprometer el CAPEX completo ($469.425 USD) a los supuestos de la
sección 3, se proponen 3 experimentos concretos
(`coto-sintesis-gaps-y-data-request.md`), presentados como **fase 0** del
proyecto, no como investigación paralela:

1. **PoC de latencia POS-Cloud**: mide si una API agéntica en AWS São
   Paulo responde dentro del umbral <800ms que requiere CU-01 desde un
   terminal POS real — de esto depende directamente el riesgo "Alto"
   marcado en la sensibilidad como "falla en integración POS".
2. **Piloto de promociones conversacionales en WhatsApp**: mide tasa de
   conversión e incremento de ticket real sobre una muestra de 5.000
   socios — reemplaza el supuesto de "uplift de frecuencia/ticket" (hoy
   Medio [PX], proxy de empresas comparables) por un dato propio de COTO
   antes de proyectar el escenario base a toda la base de clientes.
3. **Test de benchmarking de caché de prompts**: mide el % real de
   reutilización de contexto en RAG sobre el maestro de SKUs — valida (o
   corrige) el supuesto de costo de IA de la sección 4 antes de
   comprometerse a la estructura de costos por escenario
   (`plan-big-data-analytics.md`).

### 6.1. Plan de medición de incrementalidad (cómo se sabe si funcionó)

- **Diseño**: 90% Grupo Test (expuesto a funcionalidades agénticas) / 10%
  Grupo Control Permanente (experiencia tradicional), filtrado por
  segmento RFM.
- **Fórmula de Diferencia en Diferencias**: `Uplift_Neto = (Venta_T,post −
  Venta_T,pre) − (Venta_C,post − Venta_C,pre)`.
- **Aislamiento de promociones concurrentes**: contrastar test/control que
  paguen con el mismo medio en la misma sucursal, para descontar el efecto
  de campañas bancarias generales (ej. 30% Banco Nación) que no son mérito
  del proyecto.
- **Control de canibalización de canales**: verificar que el crecimiento
  de Coto Digital no sea solo migración de compras que el cliente ya hacía
  en salón — solo cuenta como incremental el valor neto agregado al share
  of wallet total del cliente.

Este plan de medición responde la pregunta que cualquier CFO va a hacer
("¿cómo vamos a saber si esto funcionó de verdad?") y se presenta junto con
los 3 experimentos, no después del pitch de ROI ni como anexo técnico.

## 7. Fasing del CAPEX (mitigación de riesgo por diseño, no solo por argumento)

En vez de un desembolso único de $469.425 USD, la estructura de escenarios
del dossier (Piloto → Intermedio → Escala,
`coto-arquitectura-y-costos-ia-cloud.md`) permite escalonar la inversión:
arrancar en Piloto ($1.712 USD/mes de OPEX técnico) con CU-01 y CU-04 (los
dos casos de uso de mayor confianza, ver `plan-big-data-analytics.md`
principio 2), validar con el plan de medición de incrementalidad de la
sección 6.1, y recién ahí escalar el resto de los casos de uso y el CAPEX
completo del equipo. El payback proyectado del escenario base es Mes 9 —
si los primeros meses de Piloto no muestran señal de uplift real vía DiD,
el proyecto se puede frenar antes de comprometer el resto del CAPEX.

## 8. Resumen para la audiencia (formato ejecutivo)

| | Inversión | Retorno esperado (rango) | Riesgo principal |
|---|---|---|---|
| CAPEX inicial (equipo, 6 meses) | $469.425 USD | — | Ejecución técnica (integración POS) |
| OPEX técnico (IA+Cloud), según escala | $1.712–$83.577 USD/mes | — | Costo IA — sensibilidad "Bajo" |
| Retorno a 36 meses, escenario base y su peor caso de sensibilidad | — | VAN entre $2,15M y $5,24M USD; ROI entre ~620% y ~1.506% | **Adopción** — depende de un padrón de Comunidad COTO [SV] sin validar |

**Aclaración importante sobre esta tabla**: el rango de arriba NO es el VAN
calculado para los escenarios Conservador/Base/Optimista de la sección 3 —
el research (`coto-modelo-financiero-roi.md`) solo definió los *supuestos*
de entrada de esos tres escenarios, sin calcular su VAN/ROI resultante. El
piso de $2,15M corresponde, en cambio, a un stress test univariable sobre
el escenario base (caída de adopción del 50% en los MAU, manteniendo el
resto de las variables en "base") — es el peor caso *dentro* del análisis de
sensibilidad, no el resultado del escenario "Conservador" completo. Son dos
ejercicios distintos y no directamente comparables; no corresponde
presentarlos como si fueran el mismo cálculo.

Payback proyectado: Mes 9 en escenario base, Mes 14 en el escenario más
adverso de la sensibilidad (caída de adopción). Ambos casos mantienen VAN
positivo, pero ambos también dependen de supuestos que la fase 0 (sección
6) está diseñada para confirmar o corregir antes de escalar.
