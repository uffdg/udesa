---
fuente: Dossier Negocio e Infraestructura COTO.pdf (Fases 15, 17, 18 y 19 — Plan de Medición ext., Data Request Priorizado, Supuestos y Limitaciones Metodológicas, Cierre: Síntesis Estratégica y Siguientes Pasos)
---

# Síntesis, gaps y data request priorizado

## Supuestos y limitaciones metodológicas explícitas del dossier

- Se asume caché de contexto (RAG) con hit rate >60%; si no se logra, el
  consumo de tokens podría escalar hasta 250% por encima del presupuesto.
- Las cifras se normalizaron a USD para evitar la distorsión inflacionaria
  sobre hardware/licenciamiento, asumiendo una trayectoria deflacionaria
  continuada del precio por token (histórico: −40% a −60% anual).
- Se asume que el parque de cajas de sucursal puede conectarse vía APIs
  modernas sin sustituir el hardware POS existente.

## Data request priorizado (lo que le falta pedir a COTO antes de un diseño definitivo)

**P1 — Imprescindible**

| Dato solicitado | Para qué se necesita | Proxy actual usado en el dossier |
|---|---|---|
| Padrón activo de Comunidad COTO | Determina el universo real de usuarios alcanzables | Rango estimado 3,5M–5,0M de socios |
| Distribución de venta por categoría y margen | Margen de contribución real por canasta | Margen promedio sectorial 21,5% |
| Mix transaccional de medios de pago en caja | Costo de adquirencia real y oportunidad de TCI | Datos consolidados INDEC (45% crédito, 23,9% débito) |

**P2 — Importante**

| Dato solicitado | Para qué se necesita | Proxy actual usado |
|---|---|---|
| Volumen de reclamos en call center y chat | Cuantifica el beneficio de automatizar atención | Proxy de 0,5% de reclamos sobre el total de tickets |
| Tasa de descarte/sustitución en Coto Digital | ROI del agente de sustitutos para pickers | Benchmark e-commerce retail (12% tasa de descarte) |
| Cuestionario de infraestructura POS de sucursales | Esfuerzo real de integración técnica | Asunción de middleware API REST/gRPC intermedio |

**P3 — Deseable**

| Dato solicitado | Para qué se necesita | Proxy actual usado |
|---|---|---|
| Contratos de aportes de trade marketing | Factibilidad de financiar la plataforma vía Retail Media | Supuesto conservador de monetización por patrocinio |
| Métricas de Tarjeta TCI (emisión y morosidad) | Capacidad financiera de expandir crédito propio vía app | Benchmark de tarjetas de crédito no bancarias |

## Síntesis estratégica del dossier (qué sabemos / qué estimamos / qué no podemos calcular)

**Qué sabemos con evidencia** (fuentes primarias/oficiales): COTO lidera el
mercado con 22,3% de share; red de 120+ sucursales, 1 CD, 3 frigoríficos;
Coto Digital lidera e-commerce con 50% más de volumen de pedidos que su
perseguidor; 45% de las ventas del sector se paga con tarjeta de crédito;
precios de API de LLMs entre $0,10 y $2,50 USD por millón de tokens de
entrada.

**Qué podemos estimar por proxy**: penetración de Coto Digital 4,5%–6,0% de
la facturación; ticket promedio presencial ~$42.000 ARS; margen bruto
comercial ~21,5%; costo de inferencia agéntica promedio ~$0,0009 USD por
interacción con ruteo inteligente de modelos.

**Qué NO podemos calcular sin datos internos**: volumen y morosidad real de
resúmenes de Tarjeta TCI; margen de contribución exacto por categoría de SKU;
presupuesto anual de promociones 100% financiadas por COTO; costo real por
ticket de soporte; padrón de socios activos de Comunidad COTO.

### Las 5 variables con mayor impacto sobre el ROI (según el dossier)

1. Uplift de frecuencia de compra (+1,5% ya amortiza todo el CAPEX).
2. Migración de medios de pago a Tarjeta TCI (mayor liquidez neta directa).
3. Tasa de adopción de la solución (MAU) — define la base de amplificación.
4. Costo por token y hit rate de caché — controla el OPEX técnico.
5. Tasa de autoservicio en reclamos posventa — libera costo operativo directo.

### Los 5 componentes que concentran el costo de infraestructura

1. Inferencia en modelos LLM flagship (65% del costo variable informático).
2. Base de datos vectorial (piso mínimo $350 USD/mes por redundancia Multi-AZ).
3. Transferencia de datos/NAT Gateway en São Paulo (tarifas 100% más caras que EE.UU.).
4. Ambientes no productivos (Dev/QA/Staging) — 30% del cómputo cloud acumulado.
5. Observabilidad y guardrails de IA.

### Las 5 integraciones técnicas con mayor incertidumbre

1. Middleware de terminales POS en cajas (latencia <800ms requerida).
2. Core bancario de Tarjeta TCI (autenticación, disponible, historial).
3. WMS y terminales de pickers en Coto Digital (sustitutos recomendados).
4. Base de CRM/padrón de Comunidad COTO (sincronización bidireccional).
5. Motor de precios y catálogo ERP SAP (coherencia de precios expuestos).

### Casos de uso agénticos: prometedores vs. de alto riesgo

- **Más prometedores** (mayor retorno directo): CU-01 (Asistente de
  Promociones/Medio de Pago) y CU-04 (Resolutor de Reclamos Nivel 4) —
  combinan alta frecuencia de uso con reducción inmediata de costos.
- **Baja viabilidad / alto riesgo**: aprobación 100% autónoma de crédito o
  aumento de límite en Tarjeta TCI (Nivel 5 — riesgo de incobrabilidad y
  sanción regulatoria BCRA); automatización agéntica de reposición física en
  góndola (depende de infraestructura robótica de alto costo, no solo de
  software).

## Experimentos recomendados para reemplazar supuestos por evidencia (antes de comprometerse a los números del ROI)

1. **PoC de latencia POS-Cloud**: medir tiempos de respuesta reales de una
   API agéntica en AWS São Paulo consultada desde un terminal POS.
2. **Piloto de promociones conversacionales en WhatsApp**: medir tasa de
   conversión e incremento de ticket sobre una muestra de 5.000 socios de
   Comunidad COTO.
3. **Test de benchmarking de caché de prompts**: medir el % real de
   reutilización de contexto en consultas RAG sobre el maestro de SKUs, para
   validar la estructura de costos de IA antes de comprometerse a ella.

## Lectura para el TP

Esta sección es, en la práctica, el mejor material para la parte de "riesgos
y próximos pasos" del plan de implementación: en vez de presentar el modelo
financiero como si estuviera cerrado, el TP puede mostrar explícitamente que
la propuesta incluye un plan concreto para des-arriesgar los supuestos más
grandes (los 3 experimentos de arriba) antes de comprometer el CAPEX
completo — eso suele leerse mejor frente a una audiencia ejecutiva que un
número de ROI sin matices.
