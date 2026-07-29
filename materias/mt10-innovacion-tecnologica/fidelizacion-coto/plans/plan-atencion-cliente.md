---
entregable: mt10-innovacion-tecnologica/fidelizacion-coto
checklist_item: "Esquema de atención al cliente (deseable con IA)."
research_usado:
  - coto-procesos-y-casos-de-uso-agenticos.md
  - coto-datos-gobernanza-regulatorio.md
  - coto-redes-sociales-omnicanalidad.md
  - coto-sintesis-gaps-y-data-request.md
  - marco-teorico-omnicanalidad-crm-analytics.md (matriz Presencial/Telefónico/Digital × Humano/No Humano, sección 5)
  - coto-modelo-financiero-roi.md (palanca #4 del árbol de valor)
---

# Esquema de atención al cliente

## 0. Problema / Oportunidad

**Problema concreto**: resolver un reclamo posventa hoy es lento y caro. El
proceso #6 del inventario (`coto-procesos-y-casos-de-uso-agenticos.md`) —
60K casos/mes — toma **8-15 minutos y $3,50 USD por ticket**, con **6% de
tasa de resolución diferida** (el caso no se resuelve en el primer
contacto). No es solo un problema de costo operativo: cada reclamo mal
resuelto o demorado es una interacción negativa sobre la relación que el
resto de este TP busca fortalecer.

**Oportunidad concreta**: automatizar la resolución de los casos rutinarios
(dentro de tope y con score de confianza alto) baja el costo por ticket de
$3,50 a **$0,40 USD** — y el árbol de valor del caso de ROI lo marca como
la palanca de **mayor confianza de todo el modelo financiero**
(`coto-modelo-financiero-roi.md`), justamente porque depende de una
decisión operativa interna de COTO, no de que el cliente cambie de
comportamiento.

El resto de este plan diseña primero dónde está hoy esa brecha (matriz de
canales) y después cómo cerrarla con IA sin exceder el riesgo aceptable
sobre dinero del cliente.

## 1. Método: matriz de canales de la cátedra

La cátedra pide relevar **todos los canales reales** de atención antes de
proponer mejoras, cruzando dos ejes: Presencial/Telefónico/Digital ×
Atención Humana/No Humana (`marco-teorico-omnicanalidad-crm-analytics.md`,
sección 5). Se arma esa matriz con lo que el research confirma sobre COTO
hoy, y recién después se ubica dónde entra IA — no al revés.

## 2. Matriz de cobertura actual (estado confirmado por research)

| | **Humano** | **No Humano** |
|---|---|---|
| **Presencial** | Personal de sucursal, cajeros (`coto-ecosistema-actores.md`: "Operaciones/Cajas") | **No confirmado** — no hay evidencia pública de autoservicio/kiosco en sucursal en el research disponible |
| **Telefónico** | 0800-888-4848 (Fonocoto) — confirmado como canal de derivación desde redes sociales (`coto-redes-sociales-omnicanalidad.md`) | **No confirmado** — no hay evidencia pública de IVR o bot de voz |
| **Digital** | **No confirmado** — no hay evidencia de atención humana por DM/chat en Coto Digital o redes | **Débil/ausente** — WhatsApp es solo "Channels" de difusión unidireccional (no chatbot conversacional); no se encontró evidencia de asistente conversacional en Coto Digital ni en redes sociales |

**Lectura de la matriz**: la celda con más cobertura confirmada es
Presencial+Humano (el modelo tradicional de sucursal). La celda
estructuralmente más débil es **Digital, en ambos ejes** — no hay atención
humana por canal digital confirmada, y la única automatización digital
existente (WhatsApp Channels) es unidireccional, no conversacional. Esto es
consistente con lo que ya señala `coto-redes-sociales-omnicanalidad.md`:
las redes derivan todo al 0800 en vez de resolver en el canal de origen.

Esta matriz —no un caso de uso aislado— es el punto de partida real: la
propuesta de IA de este plan apunta específicamente a llenar la celda
Digital+No Humano, que hoy está vacía, y a aliviar la presión sobre
Telefónico+Humano.

## 3. Propuesta de IA: CU-04 (núcleo) + CU-06 (canal financiero)

### 3.1. CU-04 — Resolutor de Reclamos Posventa y Devoluciones

- **Dónde cae en la matriz**: Digital + No Humano, con escalamiento a
  Digital+Humano o Telefónico+Humano cuando corresponda (ver 3.3).
- **Qué problema resuelve**: proceso actual de resolución de reclamos
  posventa (60K casos/mes) toma 8-15 min y **$3,50 USD por ticket**, con
  6% de tasa de resolución diferida. *(`coto-procesos-y-casos-de-uso-agenticos.md`,
  proceso #6)*
- **Nivel de autonomía**: Nivel 4 (Ejecución autónoma limitada) **solo
  hasta $15.000 ARS** de tope — el agente emite cupones de reembolso o
  reposición directa por faltantes/daños dentro de ese umbral. Por encima
  del tope, o si el score de confianza del caso es dudoso, escala a un
  humano (Digital+Humano o Telefónico+Humano según disponibilidad).
- **Valor esperado**: reduce el costo por ticket de soporte de $3,50 a
  $0,40 USD; el árbol de valor del ROI lo marca como la palanca de **mayor
  confianza de todo el modelo financiero (Muy Alto [DM])**, con 65% de
  autoservicio esperado en el escenario base (`coto-modelo-financiero-roi.md`).
- **Qué dato necesita**: historial de compra del cliente (para verificar
  legitimidad del reclamo — el mismo problema de trazabilidad del 35-45%
  aplica acá: un cliente no identificado en su compra original no puede
  acceder a autoservicio de reclamo sobre esa compra), catálogo de precios
  vigente, reglas de reembolso, y un score de riesgo/fraude para decidir
  cuándo escalar.
- **Por qué Nivel 4 y no Nivel 5**: el dossier marca explícitamente como
  "baja viabilidad/alto riesgo" cualquier automatización 100% autónoma
  sobre dinero del cliente sin tope — el límite de $15.000 ARS y el
  escalamiento por score dudoso son, en sí mismos, parte del diseño, no un
  detalle de implementación.

### 3.2. CU-06 — Asistente Conversacional Tarjeta TCI

- **Dónde cae en la matriz**: Digital + No Humano, específico del canal
  financiero (separado de CU-04 porque toca datos PCI/BCRA, no solo
  reclamos de compra).
- **Qué problema resuelve**: consultas de disponible, refinanciación de
  resúmenes y recordatorios de vencimiento — hoy absorbidas por el proceso
  #7 (autenticación y cobro en TCI, 500K resúmenes/mes, 3-5 min y $0,90 USD
  cada uno).
- **Nivel de autonomía**: Nivel 2 (Recomendación) — **informa y recuerda,
  no aprueba crédito ni modifica límites**. El propio research de gaps
  marca explícitamente la aprobación autónoma de crédito/aumento de límite
  como "baja viabilidad/alto riesgo" por riesgo de incobrabilidad y sanción
  regulatoria BCRA (`coto-sintesis-gaps-y-data-request.md`) — este plan
  respeta ese límite y no lo propone.
- **Requiere autenticación 2FA robusta** — riesgo operativo "Alto" según el
  dossier, justamente por tocar datos financieros críticos.
- **Qué dato necesita**: core bancario de TCI (saldo, historial, fechas de
  vencimiento) — uno de los 5 puntos de integración técnica con mayor
  incertidumbre señalados en `coto-sintesis-gaps-y-data-request.md`, por lo
  que este componente debería ir después de un PoC de integración, no en
  la primera ola de implementación.

### 3.3. Regla de escalamiento (cómo conecta Digital+No Humano con el resto de la matriz)

1. Cliente interactúa con CU-04/CU-06 en canal digital (app, o WhatsApp si
   se implementa la extensión conversacional propuesta en
   `plan-redes-sociales-omnicanalidad.md`).
2. Si el caso está dentro de umbral y score de confianza alto → resolución
   autónoma (Nivel 4 para CU-04, Nivel 2 para CU-06 siempre reporta a
   humano para acciones de crédito).
3. Si excede umbral, score dudoso, o el cliente lo pide explícitamente →
   escala a Telefónico+Humano (0800 existente) o, si se define un canal de
   chat humano, a Digital+Humano.
4. El caso escalado **debe llegar al humano con el contexto ya recopilado
   por el agente** (no se le repite la consulta desde cero al cliente) —
   esto es un requisito de diseño, no un detalle: si el humano recibe el
   caso sin contexto, la automatización solo trasladó el trabajo, no lo
   redujo.

## 4. Gobernanza (por qué no es opcional acá)

- **PCI DSS**: CU-06 no debe procesar ni almacenar PAN/CVV directamente —
  tokenización estándar sobre el core bancario de TCI
  (`coto-datos-gobernanza-regulatorio.md`).
- **Normas BCRA para PSP**: aplican a cualquier integración con TCI,
  incluida la seguridad operacional del asistente conversacional.
- **Ley 24.240**: los guardrails de CU-04 deben evitar que el agente
  prometa una reposición o reembolso que la política real de COTO no
  respalda (alucinación = publicidad/promesa engañosa).

## 5. Advertencia de adopción (desarrollado en profundidad en `plan-big-data-analytics.md`)

Desplegar CU-04/CU-06 sin revisar los incentivos del equipo humano de
soporte que recibe los casos escalados repite el riesgo que McKinsey
documenta en el caso del call center: un algoritmo de recomendación de
venta cruzada fracasó porque el esquema de comisión de los representantes
premiaba velocidad de llamada, no la interacción con la sugerencia del
sistema (`marco-teorico-omnicanalidad-crm-analytics.md`, sección 8, punto
8). Si el equipo de Fonocoto sigue siendo medido por volumen de llamadas
resueltas y no por calidad de resolución de los casos escalados por el
agente, es esperable que el escalamiento se maneje mal aunque la
tecnología funcione bien. Este punto se desarrolla como parte de la
propuesta de Big Data/adopción, no se repite acá en detalle.
