---
entregable: mt10-innovacion-tecnologica/fidelizacion-coto
checklist_item: "Interacción con clientes a través de redes sociales, omnicanalidad (deseable con IA)."
research_usado:
  - coto-redes-sociales-omnicanalidad.md (research principal — el dossier de negocio no cubre este tema)
  - marco-teorico-omnicanalidad-crm-analytics.md (progresión de madurez, framework Winterberry, 3 pilares Recognition/Engagement/Orchestration)
  - coto-procesos-y-casos-de-uso-agenticos.md (CU-01, CU-04 — reutilizados como interfaz adicional, no como agentes nuevos)
  - competidores.md (contexto de wallets, no de redes)
nota: este es el componente con menos research de base del TP. Donde el
  research no alcanza para una afirmación de hecho, se marca explícitamente
  como propuesta especulativa o recomendación condicionada a validar datos.
---

# Interacción por redes sociales y omnicanalidad

## 0. Problema / Oportunidad

**Problema concreto**: las redes sociales de COTO están desconectadas del
resto del ecosistema de datos y de atención. Con la evidencia pública
disponible, COTO se ubica en **"Multichannel"** (varios canales activos en
paralelo) y no en **"Omnichannel"** en la escala de madurez de la cátedra
(`marco-teorico-omnicanalidad-crm-analytics.md`, sección 2): no hay
evidencia de que la interacción social alimente el perfil de Comunidad
COTO/TCI, y los reclamos iniciados en redes (confirmado en X,
`coto-redes-sociales-omnicanalidad.md`) se derivan sistemáticamente al 0800
telefónico en vez de resolverse en el canal de origen — el cliente tiene
que repetir su reclamo en otro canal.

**Oportunidad concreta, acotada al research disponible**: no hay datos
públicos de volumen de reclamos por redes ni confirmación de un equipo de
"social care" (ver sección 4), así que la oportunidad que este plan
sostiene es modesta y específica — reducir la fricción de "cambiar de
canal para que te atiendan" reutilizando los agentes ya diseñados en
`plan-plataforma-demanda-campanas.md` y `plan-atencion-cliente.md` como
interfaz adicional, no una oportunidad de negocio nueva de gran escala
todavía no sostenida por el dato.

Por eso el resto de este plan no propone agentes nuevos para redes
sociales ni una cifra de valor propia — propone cerrar ese loop de datos y
extender los agentes existentes al canal social, condicionado a validar
los tres datos faltantes de la sección 4.

## 1. Diagnóstico honesto: dónde está COTO en la escala de madurez omnicanal

La cátedra define una progresión de 4 niveles: **Single Channel →
Multichannel → Crosschannel → Omnichannel**
(`marco-teorico-omnicanalidad-crm-analytics.md`, sección 2). Con la
evidencia pública disponible, el diagnóstico de COTO en lo que hace a
redes sociales es:

- **Presencia**: fuerte y multiplataforma — Instagram (@coto_ar, ~808K-810K
  seguidores), Facebook (@coto, ~1,1M "me gusta"), X (@Coto_Ar), TikTok
  (@coto_arg, ~1,4M seguidores no verificado), Threads. Esto ya es
  **Multichannel**: varios canales activos en paralelo.
- **Lo que falta para Crosschannel/Omnichannel**: no hay evidencia pública
  de que la interacción social (seguir, comentar, reclamar por DM) alimente
  el perfil de Comunidad COTO/TCI, ni de que un reclamo iniciado en redes
  se resuelva o quede registrado en el mismo canal — hoy se deriva
  sistemáticamente al 0800 telefónico. Esto es la definición exacta de lo
  que la cátedra marca como **NO-omnicanal**: "una empresa puede tener
  buenas campañas en redes... pero si no hay coherencia e interoperación
  entre ellos, NO es una experiencia omnicanal"
  (`marco-teorico-omnicanalidad-crm-analytics.md`, sección 2).
- Aplicando el framework de 3 pilares (Recognition/Engagement/Orchestration,
  Winterberry Group): COTO tiene **Engagement** (contenido, presencia,
  volumen de audiencia) pero no hay evidencia de **Recognition** (reconocer
  al mismo cliente en redes y en Comunidad COTO/TCI) ni de **Orchestration**
  (coordinar esa experiencia con datos e infraestructura compartida). El
  research de la cátedra ya anticipa que esto es lo normal, no una falla
  exclusiva de COTO: solo 8,9% de +100 marketers encuestados logra
  reconocer consistentemente al mismo cliente en todos sus canales.

**Advertencia explícita de honestidad metodológica**: el research de
`coto-redes-sociales-omnicanalidad.md` marca este hallazgo como "basado en
ausencia de evidencia pública, no como hecho confirmado de que no existe
integración" — es posible que COTO tenga integración interna (CRM, tracking
UTM) no visible desde afuera. Este plan trata el diagnóstico como el
escenario más probable, pero recomienda confirmarlo como parte del data
request (ver sección 4) antes de comprometer inversión en este componente.

## 2. Qué rol cumplen hoy las redes sociales en COTO (confirmado)

Vidriera de marca + canal de push de ofertas (contenido editorial,
promociones, alertas de seguridad al consumidor) con derivación cruzada
hacia un canal de WhatsApp de difusión unidireccional (no chatbot). No hay
evidencia de catálogo transaccional dentro de las redes ni de resolución de
reclamos en el mismo hilo/DM. Este patrón no es exclusivo de COTO: Carrefour
Argentina muestra el mismo comportamiento de derivación a un centro
telefónico dedicado en vez de resolver en X. Jumbo/Cencosud sí menciona
atención automática de WhatsApp 24/7, pero sin confirmación pública de que
sea conversacional con IA.

## 3. Propuesta

### 3.1. Fundamento omnicanal, no "sumar otro canal"

La cátedra advierte explícitamente contra el "bias toward bigness" — creer
que omnicanalidad exige reemplazar toda la plataforma
(`marco-teorico-omnicanalidad-crm-analytics.md`, sección 6). Por eso esta
propuesta **no crea agentes nuevos para redes sociales**: extiende como
interfaz adicional los mismos agentes ya diseñados en
`plan-plataforma-demanda-campanas.md` y `plan-atencion-cliente.md` (CU-01,
CU-04), consistente con el principio de la cátedra "Omnicanal + IA = 1
fuente de datos" (`marco-teorico-omnicanalidad-crm-analytics.md`, sección
2).

### 3.2. Componente 1 — Cerrar el loop de datos entre redes y Comunidad COTO (fundacional, sin IA)

- **Qué se propone**: vincular la interacción social (clic desde bio/post,
  ingreso vía canal de WhatsApp) al perfil de Comunidad COTO mediante
  tracking de UTM y, opcionalmente, un login social en el alta de Comunidad
  COTO (sección 2.1 de `plan-plataforma-demanda-campanas.md`).
- **Por qué no lleva IA**: esto es infraestructura de datos, no de
  decisión — es la base sin la cual cualquier componente de IA en redes
  sociales carecería de contexto de cliente para personalizar nada. Es la
  misma lógica de la pérdida de trazabilidad presencial aplicada a redes.
- **Marca explícita de propuesta especulativa**: no hay research que
  confirme si esta integración ya existe internamente en COTO. Se
  recomienda como **primer paso de validación** (ver sección 4), no como
  hecho a implementar sin más.

### 3.3. Componente 2 — Extender CU-01/CU-04 a WhatsApp Business conversacional (con IA)

- **Qué se propone**: migrar el "WhatsApp Promos y Descuentos" existente
  (hoy un Channel de difusión unidireccional) a WhatsApp Business API con
  capacidad conversacional, como interfaz adicional del mismo orquestador
  que ya sirve a CU-01 (Asistente de Promociones y Medio de Pago,
  `plan-segmentacion-tiempo-real.md`) y CU-04 (Resolutor de Reclamos,
  `plan-atencion-cliente.md`) — no un agente nuevo, mismo backend/RAG.
- **Qué problema resuelve**: hoy el cliente que interactúa por WhatsApp
  solo puede recibir mensajes, no puede preguntar "¿qué promoción tengo
  hoy si pago con TCI?" ni iniciar un reclamo — tiene que cambiar de canal.
  Esto es exactamente el tipo de fricción entre canales que el framework de
  Winterberry identifica como la principal brecha entre ambición y
  capacidad real de las empresas.
- **Qué dato necesita**: el mismo dato que ya requieren CU-01 y CU-04
  (perfil de cliente si está identificado, catálogo de promociones vigente,
  reglas de reembolso) — no agrega una fuente de dato nueva, solo un canal
  de acceso nuevo a la plataforma de datos existente.
- **Nivel de autonomía**: hereda el de CU-01 (Nivel 2) y CU-04 (Nivel 4
  hasta $15.000 ARS) — no se propone un nivel de autonomía distinto por
  el solo hecho de ser un canal nuevo.

### 3.4. Componente 3 — Triage de redes sociales (con IA, Nivel 1-2)

- **Qué se propone**: un clasificador liviano (Nivel 1, recomendación) que
  lea comentarios/DMs en Instagram, Facebook y X, y los clasifique en:
  (a) resoluble dentro del alcance de CU-04 → ofrece resolución en el mismo
  canal o deriva a WhatsApp conversacional (3.3); (b) requiere atención
  humana → deriva al equipo de social care con el contexto ya extraído (no
  se le hace repetir el reclamo al 0800 desde cero); (c) alerta de
  seguridad/fraude → prioriza escalamiento inmediato (patrón ya observado
  en la cuenta de X de COTO).
- **Qué problema resuelve**: hoy el patrón confirmado es "toda consulta se
  deriva al 0800" — este componente no reemplaza esa derivación, la hace
  más inteligente y evita que el cliente tenga que re-explicar el problema
  en otro canal.
- **Coherencia con el marco de "datos blandos"**: sigue el principio
  McKinsey de no descartar comentarios/texto libre de redes sociales solo
  por no ser data estructurada (`marco-teorico-omnicanalidad-crm-analytics.md`,
  sección 8, punto 3) — es la única señal de "voz del cliente" no
  transaccional que hoy no se está aprovechando en absoluto.

## 4. Lo que falta validar antes de comprometer inversión acá

Este componente es, de los siete de este TP, el que más depende de datos
que hoy no están confirmados públicamente. Antes de dimensionar costo/ROI
específico de esta sección, se necesita (alineado con
`coto-sintesis-gaps-y-data-request.md`, extendido a este tema):

1. Confirmar si existe o no integración interna entre redes sociales y el
   CRM de Comunidad COTO (el gap más importante señalado por el propio
   research).
2. Volumen real de reclamos/consultas por redes sociales (no hay proxy
   disponible ni siquiera estimado, a diferencia del resto de los procesos
   del dossier).
3. Si existe o no un equipo de "social care" hoy (no confirmado en ninguna
   dirección).

Sin estos tres datos, cualquier cifra de ahorro o de uplift para este
componente específico sería inventada — por eso este plan no incluye una
palanca de valor propia para redes sociales en `plan-roi.md`; el valor de
este componente está incluido de forma conservadora dentro de la palanca
#4 (automatización de atención al cliente) del árbol de 7 palancas, no
como una palanca adicional.
