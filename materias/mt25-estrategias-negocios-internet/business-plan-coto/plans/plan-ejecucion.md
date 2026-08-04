---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
checklist_item: "Plan de ejecución (principales actividades e hitos: piloto,
  roll-out, etc.)"
research_usado:
  - market-sizing-billeteras-argentina.md (distribución de sucursales de
    COTO por zona, sección 2.3)
  - competidores-billeteras-argentina.md (ventana de interoperabilidad QR
    BCRA, que habilita el QR propio sin negociación previa con un
    esquema cerrado)
depende_de:
  - plan-problema-contexto-oportunidad.md (la cobertura de sucursales y
    el % de SAM capturado por año tienen que coincidir con el SOM)
  - plan-captura-de-valor.md (por qué no se puede prometer desplazamiento
    total de MP/MODO — determina la curva de adopción conservadora)
  - plan-financials.md (los hitos de este plan alimentan el cronograma de
    inversión/costos)
---

# Plan de ejecución: actividades e hitos

## 0. Principio de coherencia con el market sizing

La cobertura de sucursales y el ritmo de adopción de este plan **tienen
que llegar exactamente al SOM** definido en
`plan-problema-contexto-oportunidad.md` (sección 3.3) — no son dos
números independientes. Se usa la misma base de 153 sucursales — **cifra
definitiva adoptada por el equipo para todo el entregable** (suma por
zona de la propia página de COTO; se descartaron 242, total de la misma
página sin conciliar con la suma por zona, y el "+120" citado sueltamente
en prensa sobre las alianzas MP/MODO, que es un piso no exhaustivo, no un
conteo — razonamiento completo en `plans/supuestos-resueltos.md`) y la
misma distribución geográfica:

| Zona | Sucursales (fuente: coto.com.ar, vía research) |
|---|---|
| Capital Federal (CABA) | 91 |
| Zona Norte | 18 |
| Zona Sur | 14 |
| Zona Oeste | 15 |
| Costa Atlántica | 5 |
| Santa Fe | 7 |
| Entre Ríos | 1 |
| Neuquén | 1 |
| Mendoza | 1 |
| **Total** | **153** |

## 1. Fase 0 — Piloto (meses 0-6)

**Objetivo**: validar el mecanismo de producto (pago QR propio +
personalización de beneficios, ver `plan-creacion-de-valor.md`) y la
integración técnica, antes de comprometer inversión de rollout completo.

- **Alcance**: subconjunto de 15-20 sucursales dentro de CABA (de las 91
  totales de la zona) — se elige CABA por ser la zona de mayor
  concentración de sucursales, lo que simplifica logística de soporte
  presencial durante el piloto. **Supuesto del equipo**: no hay research
  que indique cuáles sucursales puntuales convendría elegir (ej. por
  tráfico) — la selección real debería priorizar sucursales con mayor
  tráfico si COTO comparte ese dato internamente.
- **Cohorte de usuarios inicial**: clientes ya activos en Coto Digital
  (el canal e-commerce propio, con base de clientes digitalmente
  familiarizados con COTO según fuente propia de la empresa citada en
  `market-sizing-billeteras-argentina.md`, 2.3) — reduce el costo de
  adquisición del piloto al arrancar con una base que ya confía en el
  canal digital de COTO, en lugar de reclutar usuarios nuevos desde cero.
- **Actividades**:
  - Definición final del partner de infraestructura de pagos (PSP/BaaS —
    decisión de build vs. partner, ver `plan-financials.md`).
  - Emisión de QR propio interoperable, cumpliendo el estándar BCRA de
    Transferencias 3.0 (ya vigente, no requiere gestión regulatoria
    adicional para operar como QR aceptado — `competidores-billeteras-argentina.md`,
    sección 0).
  - Integración con el sistema de fidelización/CRM existente de COTO (si
    existe) y con el catálogo de Coto Digital.
  - Definición de reglas de beneficio personalizadas (ver
    `plan-creacion-de-valor.md`, sección 3).
- **Hito de salida del piloto**: tasa de activación y de repetición de uso
  de la cohorte piloto dentro de un umbral mínimo definido por el equipo
  antes de escalar (no hay benchmark citado para fijar ese umbral — queda
  como decisión a definir con el equipo, no un número inventado acá).

## 2. Fase 1 — Roll-out CABA completo (meses 6-12, cierre de Año 1)

- **Alcance**: 91 sucursales de CABA (100% de la zona) → **59% de la red
  total de COTO** (91/153).
- **Coincide con**: Año 1 del SOM en `plan-problema-contexto-oportunidad.md`
  — 5% del SAM capturado. La brecha entre 59% de cobertura física y solo
  5% de captura de GMV es intencional y coherente con
  `plan-captura-de-valor.md`: la cobertura de sucursales crece más rápido
  que la adopción real del cliente, porque migrar un hábito de pago
  instalado (MP/MODO) toma tiempo y no hay exclusividad posible.
- **Actividades**: campaña de comunicación en punto de venta, incentivos
  de lanzamiento (cashback de bienvenida — presupuesto en
  `plan-financials.md`), monitoreo de métricas pre-liquidez del framework
  de moats (`plan-captura-de-valor.md`): activación, conversión a uso
  recurrente, retención — no todavía métricas de flywheel/crecimiento
  orgánico, que llegan en fases posteriores.

## 3. Fase 2 — Roll-out Gran Buenos Aires (meses 12-24, Año 2)

- **Alcance**: + Zona Norte (18) + Zona Sur (14) + Zona Oeste (15) = 47
  sucursales adicionales → cobertura acumulada de **138/153 ≈ 90%** de la
  red.
- **Coincide con**: Año 2 del SOM — 15% del SAM capturado.
- **Actividades**: ajuste de reglas de personalización con datos reales
  del Año 1 (no supuestos iniciales), expansión del equipo de
  atención/soporte, primeras métricas de flywheel (¿está bajando el CAC
  vía boca a boca/referidos, según el framework de moats, sección 4 de
  `plan-captura-de-valor.md`?).

## 4. Fase 3 — Roll-out nacional (meses 24-36, Año 3)

- **Alcance**: + Costa Atlántica (5) + Santa Fe (7) + Entre Ríos (1) +
  Neuquén (1) + Mendoza (1) = 15 sucursales restantes → **153/153 = 100%**
  de la red.
- **Coincide con**: Año 3 del SOM — 25% del SAM capturado (techo asumido
  del horizonte de 3 años, dado que no hay exclusividad frente a MP/MODO).
- **Actividades**: consolidación, evaluación de la línea de ingreso
  secundaria de retail media (`plan-captura-de-valor.md`, sección 6) una
  vez que la base de usuarios activos es suficiente para ser atractiva
  para proveedores/CPG — no se lanza retail media en fases tempranas
  porque una base chica de usuarios no genera escala suficiente para
  vendérsela a un proveedor.

## 5. Hitos resumen (para el guion de pitch)

| Hito | Momento | Métrica de éxito |
|---|---|---|
| Cierre de piloto | Mes 6 | Tasa de activación/repetición de la cohorte piloto sobre umbral definido por el equipo |
| Fin Año 1 (Fase 1) | Mes 12 | 59% de sucursales cubiertas, 5% del SAM capturado |
| Fin Año 2 (Fase 2) | Mes 24 | 90% de sucursales cubiertas, 15% del SAM capturado |
| Fin Año 3 (Fase 3) | Mes 36 | 100% de sucursales cubiertas, 25% del SAM capturado, evaluación de lanzamiento de retail media |

## 6. Riesgos de ejecución nombrados explícitamente

- **Riesgo de adopción**: si la cohorte piloto (Coto Digital) no es
  representativa del cliente promedio de sucursal física, la tasa de
  activación del piloto podría sobreestimar la adopción real en Fase 1-2
  — riesgo nombrado, no cuantificado (no hay dato para hacerlo).
- **Riesgo de dependencia del partner de pagos**: la decisión de no
  construir infraestructura bancaria propia (ver `plan-captura-de-valor.md`,
  sección 7) reduce el costo y tiempo de lanzamiento, pero crea
  dependencia de un tercero (PSP/BaaS) para la Fase 0 en adelante — si ese
  partner cambia condiciones, el cronograma completo se ve afectado.
- **Riesgo regulatorio**: bajo pero no nulo — el estándar de
  interoperabilidad QR del BCRA es favorable hoy (habilita el QR propio
  sin fricción), pero cualquier cambio regulatorio futuro en el
  tratamiento de billeteras no bancarias podría afectar el cronograma —
  no hay research específico sobre probabilidad de cambios regulatorios,
  se nombra como riesgo cualitativo.
