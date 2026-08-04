---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
checklist_item: "Financials (modelo financiero de alto nivel)"
research_usado:
  - market-sizing-billeteras-argentina.md (no hay datos financieros
    públicos de COTO — confirmado como gap explícito, sección 2.3)
supuestos_resueltos: plans/supuestos-resueltos.md (cifras puntuales de
  trabajo del equipo para los 5 supuestos de mayor impacto de este
  modelo — sucursales, fracción de GMV incremental, financiamiento de
  reintegros MP/MODO, CAPEX, margen bruto retail)
skill_aplicada: how-to-build-roi-case (estructura de inversión vs. retorno,
  supuestos explícitos, riesgo nombrado)
depende_de:
  - plan-problema-contexto-oportunidad.md (SOM en GMV, sección 3.3)
  - plan-captura-de-valor.md (modelo de monetización: frecuencia/margen
    retail + retail media secundario, no take rate de marketplace)
  - plan-ejecucion.md (cronograma de fases que determina el ritmo de
    inversión)
---

# Modelo financiero de alto nivel

## 0. Advertencia metodológica (leer antes que los números)

`market-sizing-billeteras-argentina.md` confirma explícitamente que **no
existe ningún dato financiero público de COTO** (ni facturación actual,
ni margen, ni costo operativo). Todo lo que sigue es, por construcción,
una cadena de supuestos del equipo con lógica explicada — no cifras
encontradas. Cada número tiene su razonamiento al lado y está marcado como
supuesto. El objetivo de este documento no es una proyección financiera
precisa, es mostrar una **estructura defendible** frente a preguntas de un
panel inversor, siguiendo `how-to-build-roi-case`.

**Nota sobre moneda**: los componentes de inversión en tecnología se
expresan en USD (moneda de referencia habitual para desarrollo de
software/fintech e integraciones con proveedores internacionales de
pagos), mientras que el GMV y el impacto en ventas se expresan en ARS
(coherente con `plan-problema-contexto-oportunidad.md`, que está
enteramente en pesos). **No se fuerza una conversión USD/ARS** porque no
hay un tipo de cambio de fuente citada dentro de este research — mezclar
monedas sin aclarar debilitaría el caso frente a la audiencia (regla
explícita de `how-to-size-market-tam-sam-som`). El equipo debe definir el
tipo de cambio de referencia al cerrar el modelo financiero final, no
este plan.

**Nota**: los 5 supuestos de mayor impacto en este modelo (sucursales,
fracción de GMV incremental, financiamiento de reintegros MP/MODO, CAPEX,
margen bruto retail) ya están resueltos como cifras puntuales de trabajo
del equipo — el detalle completo del razonamiento de cada uno está
consolidado en `plans/supuestos-resueltos.md`. Este plan ya refleja esas
decisiones.

## 1. Inversión estimada por componente (CAPEX inicial, USD, punto de trabajo)

**Decisión de trabajo del equipo (ver `plans/supuestos-resueltos.md`)**:
se fija un punto único por componente, en vez de un rango, tomando el
punto medio del rango de orden de magnitud original — no hay una razón
direccional (conservador/agresivo) para inclinarse hacia un extremo en
una estimación de costo de infraestructura sin cotizar, a diferencia de
la fracción de GMV incremental (sección 3.1), donde sí hay una razón
explícita para ser conservador.

| Componente | Punto de trabajo (USD) | Lógica del supuesto |
|---|---|---|
| Plataforma (app + backend + QR propio) | 550.000 | Punto medio del rango original (400.000–700.000). Decisión de diseño: partnership con un proveedor de PSP/BaaS existente en vez de construir infraestructura bancaria propia (ver `plan-captura-de-valor.md`, sección 7 — COTO no busca licencia bancaria como Ualá). Esto reduce el desarrollo a la capa de producto/UX/integración, no a construir rieles de pago desde cero. **No cotizado con un proveedor real** — reemplazar en cuanto el equipo tenga presupuesto de un proveedor concreto. |
| Integración con sistemas existentes de COTO (POS, CRM/fidelización si existe, catálogo de Coto Digital) | 200.000 | Punto medio del rango original (150.000–250.000). Se integra infraestructura ya existente, no se reemplaza — apalanca el activo de Coto Digital citado en `plan-creacion-de-valor.md`. Supuesto del equipo sin cotización real. |
| Compliance/KYC-AML | 150.000 | Punto medio del rango original (100.000–200.000). Costo bajo porque se opera vía partner PSP/BaaS (que ya tiene su propio marco regulatorio) en lugar de licencia propia. **Si el equipo decidiera en el futuro perseguir una licencia bancaria propia** (camino Ualá), este costo sería sustancialmente mayor y el timeline mucho más largo — no se cuantifica ese escenario alternativo acá, queda explícitamente fuera de alcance de este plan. |
| **Total CAPEX inicial (Fase 0-1)** | **900.000** | Suma de los tres puntos anteriores — sigue siendo un punto de trabajo, no una cotización real; reemplazar en cuanto el equipo tenga al menos una cotización de un proveedor de PSP/BaaS. |

## 2. Costos operativos (OPEX, recurrente, por fase)

| Componente | Lógica del supuesto |
|---|---|
| Equipo (producto, ingeniería, atención al cliente, marketing/CRM) | Equipo inicial estimado de 8-12 personas para la Fase 0-1 (1-2 producto, 2-3 ingeniería mobile/backend, 1 datos/analítica para la personalización de `plan-creacion-de-valor.md`, 1-2 atención al cliente, 1-2 marketing/CRM) — **conteo de headcount por lógica de alcance de producto, sin costo salarial estimado** (variaría mucho según seniority/mercado, no se inventa una cifra sin base). Escala con cada fase de `plan-ejecucion.md`. |
| Incentivos de lanzamiento y migración (cashback de bienvenida, campaña por fase) | Necesario para competir contra la fricción cero de MODO (ya "adentro" del banco, ver `plan-captura-de-valor.md`) y contra los reintegros ya activos de MP (10-25%) y MODO (20-30%) citados en `competidores-billeteras-argentina.md`. **Supuesto de referencia**: presupuesto equivalente a 3-5% del GMV objetivo de cada fase (ver sección 3) destinado a incentivos de adopción — porcentaje elegido por analogía de orden de magnitud con los reintegros de la competencia, no por un benchmark propio de costo de adquisición citado. |
| Procesamiento de pagos (fee del partner PSP/BaaS) | Costo variable por transacción procesada — no cuantificado con una tasa específica porque depende de la negociación real con el partner elegido (no existe todavía) — se nombra como línea de costo obligatoria a incluir en el modelo final, no se inventa una tasa. |

## 3. Proyección de ingresos — traducción de GMV a impacto en resultados

**Punto metodológico central, para no cometer el error más común de un
pitch de wallet**: el GMV que pasa por la wallet (sección 3.3 de
`plan-problema-contexto-oportunidad.md`) **no es ingreso incremental por
sí mismo** — es, en su mayor parte, el mismo gasto que el cliente ya hacía
en COTO, migrado de otro riel de pago (MP/MODO) al propio. Presentar el
GMV como si fuera "ingreso nuevo" sería el tipo de número que un panel
inversor de esta materia (que ya vio el caso Ualá y su ecosistema
financiero real) descartaría de inmediato.

Se traduce el GMV en tres líneas de impacto, coherentes con las 4
palancas de `plan-captura-de-valor.md` (sección 6):

### 3.1 Margen retail sobre spend genuinamente incremental (palanca: frecuencia + basket size)

- **Supuesto de trabajo del equipo, resuelto con un punto — ver
  `plans/supuestos-resueltos.md`**: no todo el GMV migrado es "nuevo" —
  parte es simplemente el mismo gasto cambiando de riel de pago (sin
  impacto en resultados más allá de recuperar visibilidad de datos). El
  equipo fija **20% del GMV capturado cada año** como spend genuinamente
  incremental — el extremo conservador del rango 20-30% considerado
  originalmente, sin benchmark citado. Se elige el extremo bajo, no el
  punto medio, porque `plan-captura-de-valor.md` (sección 4) confirma que
  el multi-tenanting con MP/MODO es la amenaza central del caso: es más
  probable que gran parte del GMV que migra a la wallet sea simple cambio
  de riel de pago (hábito ya instalado) que frecuencia/basket
  genuinamente nuevos. Sesgar el supuesto hacia el extremo conservador
  evita presentarle a un panel inversor un caso financiero optimista
  construido sobre el eslabón menos sólido del modelo (principio de
  `how-to-build-roi-case`).
- Sobre ese spend incremental se aplica un margen bruto retail. **No hay
  dato de margen de COTO ni de ningún supermercado argentino específico
  en el research de este entregable** — el equipo fija **22%** como punto
  de trabajo, dentro del orden de magnitud públicamente conocido para
  márgenes brutos de supermercado (distinto del margen neto del sector,
  que suele ser de un dígito bajo). **Sin fuente citada específica para
  Argentina o COTO dentro de este research: es 100% un supuesto del
  equipo basado en conocimiento general de la industria, no un dato
  encontrado** — sigue siendo el punto de mayor incertidumbre de todo
  este documento. Reemplazar en cuanto haya dato real de COTO.

**Resultado con los puntos fijados** (GMV de
`plan-problema-contexto-oportunidad.md`, sección 3.3):

| Año | GMV vía wallet | Spend incremental (20%) | Margen retail incremental (22% s/incremental) |
|---|---|---|---|
| 1 | ≈ARS 22.900M | ≈ARS 4.580M | ≈ARS 1.008M/año |
| 2 | ≈ARS 68.750M | ≈ARS 13.750M | ≈ARS 3.025M/año |
| 3 | ≈ARS 114.600M | ≈ARS 22.920M | ≈ARS 5.042M/año |

Estas cifras encadenan dos supuestos del equipo (fracción incremental +
margen bruto) sobre un tercer supuesto ya encadenado (el propio GMV del
SOM) — no se presentan como proyección precisa, sino como el punto de
trabajo consistente que el equipo necesita para poder avanzar, con la
incertidumbre de cada eslabón explícita en su origen.

### 3.2 Ahorro por redirección de presupuesto de promos a terceros (palanca: antes pregunta abierta, ahora supuesto de trabajo)

- **Ya no es una pregunta abierta** (ver
  `plan-problema-contexto-oportunidad.md`, sección 2,
  `plan-captura-de-valor.md`, sección 6, y `plans/supuestos-resueltos.md`):
  el equipo asume que **COTO cofinancia ~60% del costo de los reintegros
  de MP/MODO** hoy, vía un presupuesto de comarketing negociado —
  supuesto sin fuente específica para COTO, con la lógica de mercado
  explicada en `plans/supuestos-resueltos.md`. Se toma además una **tasa
  de reintegro combinada de trabajo del 20%** (punto entre el rango de MP
  10-25% y de MODO 20-30% citado en `competidores-billeteras-argentina.md`,
  sin desagregar cuánto del GMV pasa hoy por cada uno).
- **Ahorro potencial redirigible = GMV migrado a la wallet propia cada
  año × 20% (tasa de reintegro) × 60% (participación asumida de COTO) =
  12% del GMV migrado cada año**:

| Año | GMV vía wallet | Ahorro potencial redirigible (12% del GMV) |
|---|---|---|
| 1 | ≈ARS 22.900M | ≈ARS 2.748M/año |
| 2 | ≈ARS 68.750M | ≈ARS 8.250M/año |
| 3 | ≈ARS 114.600M | ≈ARS 13.752M/año |

- **Advertencia sin cambios respecto a la versión anterior de este
  plan**: esto sigue siendo, en su totalidad, un supuesto del equipo — no
  hay fuente que confirme ni la participación de COTO en el
  financiamiento de los reintegros ni la tasa combinada del 20%. Si el
  equipo confirma con COTO que financia 0% (lo absorbe íntegramente el
  banco/wallet), esta línea completa desaparece del caso financiero — es
  upside condicional, no un ahorro garantizado.

### 3.3 Retail media (palanca: ad load, secundaria)

- Ingreso complementario por venta de espacios promocionales
  personalizados a proveedores/CPG dentro de la wallet, habilitado recién
  desde Fase 3 (`plan-ejecucion.md`, cuando la base de usuarios activos
  alcanza escala suficiente para ser atractiva a un proveedor).
  **Supuesto ilustrativo**: equivalente de 0,5%-1,5% del GMV de Año 3
  — inspirado en el patrón general de la industria de retail media (tema
  explícito del programa de MT25 según `catedra-contexto-tp.md`), **sin
  cifra específica de Argentina o de un caso comparable citada en el
  research** — línea secundaria e ilustrativa, no pilar del caso
  financiero.

## 4. Horizonte y forma de presentar el caso (siguiendo how-to-build-roi-case)

- **No liderar el pitch con un número de VAN/ROI optimista** construido
  sobre esta cadena de supuestos — sería exactamente el error que la
  skill de ROI advierte evitar. El caso se presenta como **rango +
  lógica de cada supuesto**, no como cifra única.
- **Horizonte**: 3 años, coincidente con `plan-ejecucion.md` (Fase 0 a
  Fase 3) — no 12-24 meses, porque el propio rollout de sucursales y la
  curva de adopción conservadora (sección 3.3 de
  `plan-problema-contexto-oportunidad.md`) requieren ese plazo para
  llegar a cobertura nacional.
- **Riesgo principal a nombrar explícitamente en el pitch**: la fracción
  de GMV verdaderamente incremental (sección 3.1) es el supuesto menos
  sólido de todo el modelo — si resulta más baja que el 20% fijado como
  punto de trabajo del equipo (ver `plans/supuestos-resueltos.md`; ya es
  el extremo conservador del rango original 20-30%, elegido a propósito
  por el multi-tenanting confirmado como amenaza central en
  `plan-captura-de-valor.md`), el caso financiero se debilita
  sustancialmente aunque el GMV y la cobertura de sucursales cumplan el
  plan. Este riesgo es más importante que el riesgo tecnológico o de
  costo de plataforma (que están acotados por la decisión de partnership
  en vez de banco propio, sección 1).

## 5. Qué falta para cerrar este modelo con precisión real

- Facturación, margen bruto real y costo operativo reales de COTO
  (ninguno público — gap confirmado en research). El margen bruto de 22%
  y la fracción incremental de 20% de la sección 3.1 son puntos de
  trabajo del equipo, no datos de COTO — reemplazar en cuanto haya dato
  real.
- Confirmación real con COTO de si efectivamente cofinancia los
  reintegros de MP/MODO y en qué proporción (el 60% de la sección 3.2 es
  un supuesto del equipo, no un dato validado) — de confirmarse 0%, la
  línea de ahorro de la sección 3.2 desaparece del caso.
- Cotización real de al menos un proveedor de PSP/BaaS para reemplazar el
  CAPEX puntual de USD 900.000 de la sección 1 (punto medio del rango
  original, no cotizado) por un número negociado.
- Tipo de cambio de referencia del equipo para unificar USD (inversión) y
  ARS (ingresos) en una sola moneda antes del documento final.
