---
entregable: mt10-innovacion-tecnologica/fidelizacion-coto
checklist_items:
  - "Plataforma de generación de demanda (marketing y ventas)."
  - "Gestión de campañas (deseable con IA)."
research_usado:
  - coto-procesos-y-casos-de-uso-agenticos.md
  - coto-modelo-economico-unit-economics.md
  - coto-ecosistema-actores.md
  - coto-arquitectura-y-costos-ia-cloud.md
  - coto-datos-gobernanza-regulatorio.md
  - competidores.md
  - catedra-contexto-tp.md (ciclo Machear → Relacionar → Nutrir, Cap. 2)
  - marco-teorico-omnicanalidad-crm-analytics.md
framing: "Plataforma agéntica" — ver decisión de framing en
  .claude/agent-memory/tp-solution-architect/mt10-fidelizacion-coto-framing.md
---

# Plataforma de generación de demanda y gestión de campañas

## 0. Problema / Oportunidad

**Problema concreto**: la gestión de campañas hoy es manual, lenta, cara y
de baja relevancia. El proceso #8 del inventario (`coto-procesos-y-casos-
de-uso-agenticos.md`) — segmentación y envío de campañas, ~50 campañas/mes
— toma **4-8 horas y $120 USD por campaña** armada a mano, y produce **20%
de tasa de baja relevancia** (el cliente recibe una oferta que no le
interesa). Es, de los 12 procesos relevados en el dossier, uno de los
marcados con potencial agéntico "Muy Alto". La generación de demanda en sí
(tráfico, awareness) no es el cuello de botella — Coto Digital ya lidera el
e-commerce del sector (`coto-dimension-negocio.md`) — el cuello de botella
está en qué oferta se le arma a cada demanda ya capturada, con la
frecuencia y personalización que un equipo humano no puede sostener a
escala de millones de socios.

**Oportunidad concreta**: el propio dossier estima que un orquestador de
campañas hiper-personalizadas (CU-05) puede subir la tasa de redención de
cupones de **3% a 12%** (`coto-procesos-y-casos-de-uso-agenticos.md`) — sin
requerir un canal nuevo, solo mejor asignación de oferta-segmento sobre la
demanda que ya existe.

Por eso este plan no propone reinventar la captura de demanda (que ya
funciona), sino resolver específicamente la ineficiencia y baja relevancia
del armado de campañas — ese es el problema que el resto de este documento
diseña.

## 1. Marco de diseño

La cátedra propone el ciclo **Machear → Relacionar → Nutrir** como columna
vertebral de CRM/Campaign Management, cruzando Marketing, Ventas y Customer
Service (`catedra-contexto-tp.md`, Cap. 2). Este plan mapea la plataforma de
demanda de COTO sobre ese ciclo, no como tres módulos separados sino como
tres momentos del mismo dato de cliente:

- **Machear**: identificar al cliente correcto en el momento correcto (alta
  de Comunidad COTO, reconocimiento en punto de venta/app).
- **Relacionar**: convertir esa identificación en una oferta relevante
  (campañas segmentadas, promociones dinámicas).
- **Nutrir**: sostener la relación en el tiempo (recompra, prevención de
  churn — desarrollado en `plan-segmentacion-tiempo-real.md`, que retoma
  este ciclo desde el ángulo de acciones en tiempo real).

Esta plataforma **no es un sistema separado de la plataforma de datos
unificada** descripta en `plan-big-data-analytics.md` — es la capa de
marketing/ventas que consume esos datos. La razón por la que esto importa:
sin resolver la pérdida de trazabilidad del 35%-45% de transacciones
presenciales (ver `plan-contexto-organizacion.md` y
`coto-modelo-economico-unit-economics.md`), cualquier campaña —por
sofisticada que sea su motor de IA— solo puede dirigirse a la fracción de
clientes que sí se identificó en la transacción. La plataforma de demanda
depende, por diseño, de la misma plataforma de datos que sostiene
segmentación y atención al cliente.

## 2. Generación de demanda (marketing y ventas) — sin IA en el núcleo, con asistencia de IA en el borde

### 2.1. Componente base: captura de demanda

- **Canal de entrada**: alta de miembro Comunidad COTO — hoy 40K
  solicitudes/mes, con **8,5% de tasa de error por datos inválidos** en el
  proceso actual (3-5 min, $1,20 USD por alta). *(`coto-procesos-y-casos-de-uso-agenticos.md`,
  proceso #1)*
- **Propuesta de IA (asistida, Nivel 1 de autonomía — recomendación, no
  ejecución)**: un asistente de validación de datos en el formulario de
  alta (OCR de DNI, validación de formato en tiempo real) que reduce la
  tasa de error de datos inválidos antes de que el registro entre al CRM.
  - Qué problema resuelve: 8,5% de altas con datos inválidos hoy
    contaminan el CRM desde el origen — cualquier segmentación posterior
    hereda ese ruido.
  - Qué dato necesita: solo el formulario del propio alta (OCR de
    documento) — es el componente de IA con menor dependencia de datos
    externos de todo este plan, por eso se prioriza como "quick win" de
    bajo riesgo (Nivel 1, sin decisión autónoma sobre el cliente).
- **Canales de demanda existentes que alimentan este componente**: Coto
  Digital (líder de e-commerce del sector), redes sociales (awareness —
  desarrollado en `plan-redes-sociales-omnicanalidad.md`), TCI como
  palanca de demanda vía financiamiento (cuotas sin interés).

### 2.2. Por qué no se propone IA "generativa de demanda" de entrada

Siguiendo el límite de McKinsey sobre no sobre-prometer IA
(`marco-teorico-omnicanalidad-crm-analytics.md`, sección 9): la captura de
demanda en sí (tráfico a Coto Digital, awareness de marca) es
mayoritariamente un problema de marketing tradicional (medios pagos,
presencia en redes, beneficio ancla de Comunidad COTO) que ya funciona —
COtO ya lidera el sector en e-commerce. El componente de IA que sí agrega
valor real está del lado de **qué se le ofrece a cada demanda una vez
capturada**, que es gestión de campañas (sección 3).

## 3. Gestión de campañas con IA — CU-05 como núcleo

### 3.1. El problema que resuelve

Proceso actual (#8 del inventario): **segmentación y envío de campañas**
toma 4-8 horas y $120 USD por campaña, con **20% de tasa de baja
relevancia** (el cliente recibe una oferta que no le interesa). Se ejecutan
~50 campañas/mes. *(`coto-procesos-y-casos-de-uso-agenticos.md`)*

Este es, en la práctica, un problema de escala: un equipo de marketing
humano no puede razonablemente personalizar ofertas individuales para una
base de millones de socios con la frecuencia que exige el negocio (ej.
descuentos por día de semana, vencimiento de promociones cofinanciadas por
proveedores). Por eso el dossier lo marca "Muy Alto" potencial agéntico.

### 3.2. Propuesta: CU-05 — Orquestador de Campañas Hiper-Personalizadas

- **Nivel de autonomía**: Nivel 3 (Ejecución aprobada) — el agente genera
  las ofertas dinámicas individuales, pero **un gerente de marketing
  aprueba el lote antes del envío masivo**. No se propone Nivel 4/5 acá: el
  riesgo reputacional de un envío masivo mal calibrado (ej. descuento
  duplicado, oferta a un segmento equivocado) supera el beneficio de quitar
  al humano del loop en esta etapa.
- **Qué decide el agente**: la combinación de oferta, segmento y canal por
  cliente individual, según propensión de compra e inventario disponible.
- **Valor esperado**: sube la tasa de redención de cupones de **3% a 12%**
  (dato del dossier, marcado como estimación del caso de uso, no medición
  real — ver salvedad en `plan-roi.md` sobre este tipo de cifras).
- **Latencia**: asíncrono (no es un caso de tiempo real como CU-01/02/03 en
  `plan-segmentacion-tiempo-real.md`) — la campaña se prepara con
  anticipación, se aprueba, y se dispara en lote o programada.

### 3.3. Qué dato necesita (y de dónde sale)

| Dato requerido | Sistema origen | Disponibilidad hoy |
|---|---|---|
| Historial de compra por cliente | Mainframe/ERP | Solo para transacciones identificadas (55%-65% del total, ver problema de trazabilidad) |
| Segmento RFM / propensión de compra | Motor de segmentación (ver `plan-segmentacion-tiempo-real.md`) | A construir — no confirmado que exista hoy |
| Inventario disponible por SKU/sucursal | WMS / ERP SAP | Confirmado como fuente, calidad 90% (estimación física) |
| Reglas de promociones vigentes y su financiamiento (COTO/proveedor/banco) | Engine de promociones | Confirmado — 3 estructuras financieras distintas (`coto-modelo-economico-unit-economics.md`) |

**Punto crítico de diseño**: el agente tiene que distinguir explícitamente
qué promociones son 100% COTO (erosionan margen propio), cofinanciadas con
proveedores, o 100% de una entidad financiera — porque optimizar "tasa de
redención" sin esa distinción puede maximizar canje de las promociones más
caras para la empresa. Esta restricción de negocio debe estar en las reglas
del orquestador, no delegada al criterio del modelo.

### 3.4. Guardrails y gobernanza (por qué no es "solo un LLM generando ofertas")

- **Ley 24.240 (Defensa del Consumidor)**: el agente no puede alucinar una
  oferta inexistente o una condición de promoción distinta a la vigente —
  requiere guardrails de validación contra el engine de promociones antes
  de cualquier envío (`coto-datos-gobernanza-regulatorio.md`).
- **Ley 25.326 (Protección de Datos Personales)**: el perfilamiento
  comercial para campañas hiper-personalizadas requiere consentimiento
  explícito del socio de Comunidad COTO — este consentimiento debe
  capturarse en el alta (sección 2.1), no asumirse.
- **Explicabilidad (límite McKinsey #3)**: por qué a un cliente le llegó
  una oferta y a otro no debe poder auditarse — relevante tanto por
  confianza del equipo de marketing en la herramienta como por riesgo
  regulatorio de discriminación de precios.

### 3.5. Relación con otros componentes de la plataforma

- CU-05 **no reemplaza** a CU-01 (`plan-segmentacion-tiempo-real.md`): CU-05
  arma la oferta con anticipación y en lote; CU-01 la aplica/recomienda en
  el momento de la transacción. Son el mismo dato de cliente en dos
  momentos distintos del ciclo Machear→Relacionar→Nutrir.
- El motor de segmentación RFM que alimenta a CU-05 es el mismo que
  alimenta a `plan-segmentacion-tiempo-real.md` — no se duplica la
  infraestructura de segmentación entre "campañas" y "tiempo real", es una
  única capa de segmentación con dos consumidores.
