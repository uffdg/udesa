---
entregable: mt10-innovacion-tecnologica/fidelizacion-coto
checklist_item: "Segmentación de clientes y acciones en tiempo real sobre la información (deseable con IA)."
research_usado:
  - coto-procesos-y-casos-de-uso-agenticos.md
  - coto-modelo-economico-unit-economics.md
  - coto-arquitectura-y-costos-ia-cloud.md
  - coto-modelo-financiero-roi.md (diseño RFM del plan de incrementalidad)
  - coto-datos-gobernanza-regulatorio.md
  - marco-teorico-omnicanalidad-crm-analytics.md (límites de la IA, sección 9)
---

# Segmentación de clientes y acciones en tiempo real

## 1. Base de segmentación: RFM, no un modelo nuevo desde cero

El propio dossier ya usa segmentación **RFM** (Recencia, Frecuencia,
Monto) como base para el diseño del plan de medición de incrementalidad
(`coto-modelo-financiero-roi.md`: "filtrado por segmento RFM sobre la base
de socios Comunidad COTO"). Este plan adopta RFM como la capa de
segmentación única de la plataforma — no propone un modelo de
segmentación adicional o competidor, para evitar exactamente el problema
que señala McKinsey de "juntar datos sin pregunta de negocio clara"
(`marco-teorico-omnicanalidad-crm-analytics.md`, sección 8, punto 1).

Esta misma capa de segmentación es la que alimenta a **CU-05** (campañas,
`plan-plataforma-demanda-campanas.md`) y a los tres casos de uso de este
plan — es una única fuente de verdad de segmento por cliente, consumida en
dos velocidades distintas (asíncrono para campañas, tiempo real para lo
que sigue acá).

**Restricción de partida, no un detalle menor**: la calidad de cualquier
segmentación depende de qué fracción de transacciones tiene cliente
identificado. Con 35%-45% de transacciones presenciales sin DNI/carnet, el
segmento RFM de un cliente que compra mayoritariamente en salón sin
identificarse va a estar sistemáticamente subestimado en frecuencia y
monto real. Esto no es un defecto del modelo de segmentación, es un
defecto de la captura de datos que lo alimenta — y es la razón de negocio
por la que CU-01 (abajo) importa tanto: cada vez que el agente logra que
un cliente use TCI o consigne su DNI, mejora la calidad del propio dato de
segmentación a futuro.

## 2. Los tres casos de uso de tiempo real

### 2.1. CU-01 — Asistente de Promociones y Medio de Pago

- **Nivel de autonomía**: Nivel 2 (Recomendación) — sugiere, el cliente
  decide.
- **Latencia requerida**: <800 ms (la más exigente de los tres — es
  interacción en caja, no puede introducir demora perceptible).
- **Qué decide el agente**: la combinación óptima de tarjeta, día y
  descuento disponible para esa transacción puntual, en tiempo real.
- **Qué problema resuelve**: proceso #4 del inventario (selección de medio
  de pago en caja, 12M transacciones/mes, **5% de tasa de error de medio no
  óptimo** — el cliente paga con un medio que le genera menos beneficio del
  disponible).
- **Qué dato necesita**: contexto de la transacción en curso, perfil del
  cliente si está identificado, catálogo de promociones vigentes, medios
  de pago habilitados para ese cliente (si tiene TCI).
- **Doble función de negocio**: además de optimizar la transacción
  puntual, es el punto de contacto con mayor volumen (12M/mes) para nudgear
  la migración hacia TCI — la palanca de mayor confianza del árbol de valor
  de ROI (ver `plan-roi.md`).

### 2.2. CU-02 — Planificador de Canasta por Presupuesto

- **Nivel de autonomía**: Nivel 3 (Ejecución aprobada) — el cliente
  confirma la canasta ajustada antes de que se aplique.
- **Latencia requerida**: <2.000 ms.
- **Usuario**: cliente de Coto Digital/App.
- **Qué decide el agente**: sustituye SKUs o ajusta cantidades para no
  exceder un presupuesto límite que el cliente define.
- **Qué problema resuelve**: incrementa el volumen de pedidos completados
  sin abandono en el armado de lista (proceso #3, 800K listas/mes, 15-25
  min de armado hoy).
- **Qué dato necesita**: catálogo de precios en tiempo real, historial de
  compra del cliente (para sugerir sustitutos coherentes con su patrón de
  consumo), presupuesto declarado por el cliente.

### 2.3. CU-03 — Asistente de Sustituciones en E-commerce

- **Nivel de autonomía**: Nivel 3 (Ejecución aprobada), pero el usuario
  target es interno (**picker de tienda/Operaciones**), no el cliente
  final directamente.
- **Latencia requerida**: <500 ms (la más exigente de los seis casos de
  uso del dossier completo).
- **Qué decide el agente**: el producto de reemplazo con mayor
  probabilidad de aceptación cuando falta stock de un ítem pedido online.
- **Qué problema resuelve**: proceso #5 (gestión de sustitutos, 150K
  pedidos/mes, **12% de tasa de rechazo de sustituto** hoy) — reduce
  cancelaciones de pedidos online en ~25% según el dossier.
- **Qué dato necesita**: historial de compra del cliente (para inferir
  preferencia real, no solo similitud de categoría), stock en tiempo real
  por sucursal (dato marcado "Interna, 90% de calidad — estimación
  física" en el inventario de datos, `coto-datos-gobernanza-regulatorio.md`
  — el eslabón más débil de esta cadena).

## 3. Requisitos de arquitectura para "tiempo real" (no es solo un modelo, es infraestructura)

Los tres casos de uso comparten un requisito no trivial: latencia
sub-segundo sobre datos que cambian constantemente (stock, promociones
vigentes, contexto de transacción). Según la arquitectura de referencia
(`coto-arquitectura-y-costos-ia-cloud.md`):

- **Event Streaming & Colas** (Amazon MSK / SQS+SNS) para desacoplar
  eventos de caja del procesamiento del agente sin bloquear el checkout.
- **Caché de Redis** para contexto temporal — imprescindible para cumplir
  el umbral de <800ms de CU-01 y <500ms de CU-03.
- **Middleware de integración POS** — señalado como una de las 5
  integraciones técnicas con mayor incertidumbre del proyecto completo
  (`coto-sintesis-gaps-y-data-request.md`): la latencia POS-Cloud real no
  está medida, solo asumida. Es la razón por la que el primero de los 3
  experimentos recomendados en el plan de des-arriesgamiento
  (`plan-roi.md`) es justamente un PoC de esa latencia, antes de comprometer
  CAPEX a CU-01/CU-03 en producción.

Esto conecta directo con `plan-big-data-analytics.md`: la segmentación en
tiempo real no es solo "un modelo de IA", es un modelo corriendo sobre una
arquitectura de datos con SLA de latencia estrictos — sin esa
infraestructura, el modelo puede ser correcto y aun así ser inútil en
producción.

## 4. Gobernanza aplicada a segmentación (no solo a atención al cliente o campañas)

- **Ley 25.326**: el perfilamiento para segmentación RFM requiere el mismo
  consentimiento explícito del cliente que se menciona en
  `plan-plataforma-demanda-campanas.md` — no es un consentimiento
  distinto, es el mismo consentimiento cubriendo un uso adicional del dato.
- **PCI DSS / normas BCRA (aplica a CU-01)**: el dato "medios de pago
  habilitados para ese cliente (si tiene TCI)" que necesita CU-01 sale del
  Core bancario/TCI, marcado "Crítica (PCI)" en
  `coto-datos-gobernanza-regulatorio.md`. El agente no debe procesar ni
  almacenar PAN/CVV — solo un flag tokenizado de elegibilidad TCI, siguiendo
  el mismo estándar de tokenización PCI DSS y las normas BCRA para PSP que
  ya aplica `plan-atencion-cliente.md` para CU-06. Es el mismo dominio de
  dato crítico, así que la misma gobernanza rige acá.
- **Explicabilidad (límite McKinsey #3)**: por qué un cliente cae en un
  segmento y no otro debe ser auditable, en particular porque el segmento
  determina qué promoción ve (CU-01) — si dos clientes con comportamiento
  similar reciben ofertas sistemáticamente distintas sin explicación
  trazable, hay riesgo de percepción de trato desigual.
- **Sesgo (límite McKinsey #5)**: si el dato histórico de quién recibió
  qué oferta está sesgado (ej. clientes de sucursales con mejor conectividad
  identificados con más frecuencia), el modelo de segmentación puede
  amplificar esa desigualdad en vez de corregirla — mitigación: auditar la
  distribución de ofertas por segmento socioeconómico/geográfico de
  sucursal periódicamente, no asumir que el modelo es neutral por defecto.
