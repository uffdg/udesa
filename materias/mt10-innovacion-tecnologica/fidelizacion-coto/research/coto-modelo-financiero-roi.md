---
fuente: Dossier Negocio e Infraestructura COTO.pdf (Fases 10, 11, 12 y 13 — Árbol de Valor y Beneficios Económicos, Modelo Financiero de ROI/VAN/Payback, Métricas, Plan de Medición de Incrementalidad)
advertencia: los totales de este archivo (VAN, TIR, ROI, beneficio anual) resultan de encadenar múltiples supuestos [EC]/[SV] multiplicativos. Se preservan tal cual los calculó el dossier, pero NO se deben presentar en el documento final del TP como certeza — ver la sección "Lectura crítica" al final de este archivo.
---

# Modelo financiero: árbol de valor, ROI, VAN y payback

## Árbol de 7 palancas de beneficio económico anual (escenario base)

| # | Palanca | Métrica base (sin sistema) | Uplift esperado | Beneficio anual estimado (USD) | Confianza |
|---|---|---|---|---|---|
| 1 | Incremento en frecuencia de compra | 2,2 compras/mes | +4,5% frecuencia | $850.000 | Medio [PX] |
| 2 | Aumento del ticket promedio (cross-sell) | $42.000 ARS | +3,2% tamaño de canasta | $620.000 | Medio [PX] |
| 3 | Reducción de comisiones de pago (TCI routing) | 45% tarjeta de crédito externa | +5,0% migración a TCI | $480.000 | Alto [EC] |
| 4 | Automatización de atención al cliente | $3,50 USD/reclamo | 65% autoservicio con IA | $136.500 | Muy Alto [DM] |
| 5 | Reducción de cancelaciones en e-commerce | 12% descarte de sustitutos | −35% cancelaciones | $210.000 | Medio [PX] |
| 6 | Optimización del costo promocional | 100% descuento masivo | +6,0% eficiencia de promo | $450.000 | Bajo [SV] |
| 7 | Monetización de Retail Media agéntico | Cero ads conversacionales | Impresiones patrocinadas | $180.000 | Bajo [SV] |
| | **BENEFICIO ECONÓMICO ANUAL TOTAL** | | | **$2.926.500 USD** | |

Se aplicó un factor de solapamiento del 15% entre las palancas 1 y 2 para
evitar doble conteo entre frecuencia y ticket.

**Nota de confianza**: de las 7 palancas, solo la #4 está marcada "Muy Alto
[DM]"; la #3 es "Alto [EC]"; el resto son Medio o directamente **Bajo [SV]**
(#6 y #7 — casi un tercio del beneficio anual total depende de supuestos sin
validar).

## Fórmulas financieras utilizadas

1. **Ingresos y márgenes incrementales**: `Ingresos_Inc = Clientes_impactados × Frecuencia × Ticket × Uplift` ; `Margen_Inc = Ingresos_Inc × Margen_Contribucion`
2. **VAN**: `VAN = Σ(Beneficio_Neto_t / (1+r)^t) − CAPEX_0`, con `r = 12,0%` (WACC estimado, escenario base)
3. **ROI**: `ROI = (Σ Beneficio_Neto_t − CAPEX_0) / CAPEX_0 × 100`
4. **Punto de equilibrio en usuarios**: `MAU_eq = OPEX_Fijo_mensual / Contribucion_Neta_por_MAU`

## Supuestos financieros por escenario

| Variable | Conservador | Base | Optimista |
|---|---|---|---|
| Tasa de adopción (MAU/Comunidad COTO) | 10,0% | 18,0% | 28,0% |
| Uplift de frecuencia de compra | +2,0% | +4,5% | +7,0% |
| Uplift de ticket promedio | +1,5% | +3,2% | +5,0% |
| Margen de contribución promedio COTO | 18,0% | 21,5% | 24,0% |
| Autoservicio en reclamos (atención) | 40,0% | 65,0% | 80,0% |
| Costo por 1M tokens (promedio ponderado) | $2,50 USD | $1,80 USD | $1,20 USD |
| Tasa de descuento anual (WACC) | 16,0% | 12,0% | 10,0% |
| Tipo de cambio de referencia | 1.600 ARS | 1.350 ARS | 1.200 ARS |

## Calculadora financiera a 36 meses — escenario base (USD)

| Período | CAPEX | Beneficios brutos | OPEX técnico (IA+Cloud) | OPEX mantenimiento | Beneficio neto | Flujo acumulado |
|---|---|---|---|---|---|---|
| Mes 0 (Dev) | −$469.425 | $0 | $0 | $0 | −$469.425 | −$469.425 |
| Mes 1–6 | $0 | $350.000 | −$60.000 | −$96.000 | $194.000 | −$275.425 |
| Mes 7–12 | $0 | $1.113.250 | −$120.000 | −$96.000 | $897.250 | $621.825 |
| Año 2 (13–24) | $0 | $3.450.000 | −$340.000 | −$201.600 | $2.908.400 | $3.530.225 |
| Año 3 (25–36) | $0 | $4.200.000 | −$450.000 | −$211.680 | $3.538.320 | $7.068.545 |
| **TOTALES** | **−$469.425** | **$9.113.250** | **−$970.000** | **−$605.280** | **$7.068.545** | — |

## Resultados del análisis (escenario base)

- **VAN (NPV)**: $5.241.800 USD
- **TIR (IRR)**: 114,5%
- **Payback**: Mes 9 de operación comercial (3 meses post-lanzamiento)
- **ROI acumulado a 36 meses**: 1.505,7%
- **Punto de equilibrio**: 112.000 MAU

## Análisis de sensibilidad multivariable

| Variación de variable crítica | Impacto en VAN | Impacto en ROI | Impacto en payback | Evaluación de riesgo |
|---|---|---|---|---|
| Base standalone | $5.241.800 | 1.505,7% | Mes 9 | Caso de referencia |
| Aumento de costo IA/Cloud (+50%) | $4.850.000 | 1.380,0% | Mes 10 | Bajo (resiliente a costos informáticos) |
| Caída de adopción (−50% MAU) | $2.150.000 | 620,0% | Mes 14 | **Medio** (dependiente del marketing/adopción) |
| Reducción del uplift de frecuencia (−50%) | $3.100.000 | 890,0% | Mes 12 | **Medio** (requiere validar propuesta de valor) |
| Devaluación masiva del ARS (+50% FX) | $3.650.000 | 1.050,0% | Mes 11 | **Alto** (riesgo macroeconómico de ingresos) |
| Falla en integración POS (retraso 3 meses) | $4.200.000 | 1.200,0% | Mes 12 | **Alto** (riesgo de ejecución técnica) |

**Lectura clave**: incluso en el escenario más adverso del análisis de
sensibilidad, el VAN se mantiene positivo y el ROI arriba de 600% — pero esto
es una propiedad matemática del modelo (el CAPEX es chico frente a los
beneficios proyectados), no una garantía de que los supuestos de base sean
correctos. La sensibilidad prueba robustez *dentro del modelo*, no *contra la
realidad*.

## Plan de medición de incrementalidad (para no atribuir falsamente ventas preexistentes)

- **Diseño experimental**: filtrado por segmento RFM sobre la base de socios
  Comunidad COTO, desdoblamiento aleatorio 90% Grupo Test (expuesto a
  funcionalidades agénticas) / 10% Grupo Control Permanente (experiencia
  tradicional).
- **Diferencia en Diferencias (DiD)**: `Uplift_Neto = (Venta_T,post − Venta_T,pre) − (Venta_C,post − Venta_C,pre)`.
- **Aislamiento de promociones concurrentes**: contrastar usuarios test/control
  que paguen con el mismo medio en la misma sucursal, para descontar el
  efecto de campañas bancarias generales (ej. 30% Banco Nación).
- **Control de canibalización de canales**: verificar si el crecimiento de
  Coto Digital viene de migración de compras que el mismo cliente ya hacía en
  salón — solo cuenta como incremental el valor neto agregado al *share of
  wallet* total del consumidor.

Este diseño experimental (holdout group + DiD) es, en sí mismo, un argumento
fuerte para la sección de ROI del TP: muestra que la propuesta contempla CÓMO
se va a demostrar el retorno real, no solo cuánto se espera que sea.

## Lectura crítica para el documento final del TP

1. **No presentar el ROI de 1.505,7% ni el VAN de $5,24M como el número
   central del pitch.** Son el resultado de un escenario "base" que ya asume
   18% de adopción sobre un padrón de socios que es, a su vez, un supuesto
   [SV] (ver `coto-dimension-negocio.md`). Presentar en cambio el rango
   completo (conservador–base–optimista) y liderar con el análisis de
   sensibilidad.
2. **Separar claramente qué palancas dependen de comportamiento del cliente
   (1, 2, 5 — inciertas) de las que dependen de una decisión operativa
   interna (3 — migración a TCI, la de mayor confianza).** El caso más sólido
   frente a un CFO es el que menos depende de que el cliente cambie de
   comportamiento.
3. **Usar el plan de medición de incrementalidad (holdout + DiD) como parte
   del pitch, no como nota al pie** — es lo que responde "cómo vamos a saber
   si esto funcionó de verdad", pregunta que cualquier CFO va a hacer.
