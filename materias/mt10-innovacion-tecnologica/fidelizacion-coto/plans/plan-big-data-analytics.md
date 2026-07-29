---
entregable: mt10-innovacion-tecnologica/fidelizacion-coto
checklist_item: "Técnicas de Big Data - Data Analytics."
research_usado:
  - coto-arquitectura-y-costos-ia-cloud.md
  - coto-datos-gobernanza-regulatorio.md
  - coto-sintesis-gaps-y-data-request.md
  - coto-modelo-economico-unit-economics.md
  - coto-ecosistema-actores.md
  - marco-teorico-omnicanalidad-crm-analytics.md (8 principios McKinsey, sección 8)
  - coto-modelo-financiero-roi.md (plan de medición de incrementalidad, reutilizado como "loop" del principio 5)
---

# Técnicas de Big Data / Data Analytics

## 0. Problema / Oportunidad

**Problema concreto**: los datos de COTO están fragmentados en sistemas que
no se integran entre sí. El mapa de actores del dossier marca
explícitamente a "Sistemas / Data COTO" con la fricción de **"sistemas
legacy heredados, dificultad de integración en tiempo real"**
(`coto-ecosistema-actores.md`) — el POS presencial, Coto Digital, el core
bancario de TCI, el WMS de stock y el CRM de Comunidad COTO operan hoy como
silos separados. Esto es la causa técnica de fondo detrás del problema de
negocio central del TP: el 35%-45% de trazabilidad perdida no es solo una
cuestión de que el cliente no consigna su DNI, es que incluso el dato que
sí se captura en un sistema no está cruzado en tiempo real con los demás.

**Oportunidad concreta**: una plataforma de datos unificada que cruce esas
fuentes (principio 4 de McKinsey, desarrollado abajo) es lo que hace
posible que los otros seis casos de uso agénticos del TP compartan una
única fuente de verdad de cliente, en vez de ser seis integraciones
aisladas cada una con su propio riesgo de inconsistencia.

Por eso este plan no propone un caso de uso agéntico adicional — propone la
infraestructura, gobernanza y disciplina de datos que sostiene a los seis
casos de uso ya propuestos en el resto del TP.

Este plan es la base técnica y de gobernanza que sostiene los cuatro planes
anteriores (demanda/campañas, atención al cliente, redes sociales,
segmentación tiempo real) — ninguno de esos casos de uso agénticos funciona
sin la plataforma de datos unificada que se describe acá. Se organiza
siguiendo los **8 principios de McKinsey para que Big Data genere valor
real** (`marco-teorico-omnicanalidad-crm-analytics.md`, sección 8), aplicado
punto por punto al caso COTO — no como checklist genérico, sino mostrando
dónde este proyecto específico cumple o corre riesgo de fallar cada
principio.

## 1. Los 8 principios aplicados a COTO

### Principio 1 — Hacer las preguntas correctas

La pregunta de negocio de este proyecto **no es** "¿qué patrones muestra
el Big Data de COTO?" — es concreta y medible: **"¿cómo recuperamos
trazabilidad de cliente en el 35%-45% de transacciones presenciales que
hoy la pierden, y qué hacemos con ese dato una vez recuperado?"**
(`coto-modelo-economico-unit-economics.md`). Cada componente de IA de este
TP (CU-01 a CU-06) se diseñó para responder a esa pregunta o a una
derivada directa de ella (reducir costo de atención, subir redención de
campañas) — no se propone ningún caso de uso "porque la tecnología lo
permite".

### Principio 2 — Pensar en chico y en grande a la vez

Los 3 escenarios de volumetría del dossier (**Piloto → Intermedio →
Escala**, `coto-arquitectura-y-costos-ia-cloud.md`) son la aplicación
literal de este principio: no se propone lanzar los 6 casos de uso a escala
completa desde el día uno.

| Escenario | MAU | Interacciones/mes | Costo IA+Cloud mensual |
|---|---|---|---|
| Piloto | 15.000 | 180.000 | $1.712 USD |
| Intermedio | 350.000 | 7.875.000 | $12.958 USD |
| Escala COTO | 1.800.000 | 64.800.000 | $83.577 USD |

Roadmap de secuenciación propuesto (aplicando principio 2 explícitamente,
no como lista arbitraria): arrancar con **CU-01 y CU-04** en el escenario
Piloto — son los dos casos que el propio research marca como "más
prometedores" por combinar alta frecuencia de uso con reducción inmediata
de costo (`coto-sintesis-gaps-y-data-request.md`) — y recién escalar a
CU-02/03/05/06 en el escenario Intermedio, una vez validada la integración
POS (ver principio 5).

### Principio 3 — No descartar datos "blandos"

Los comentarios/DMs de redes sociales (`plan-redes-sociales-
omnicanalidad.md`, componente 3 — triage) son la única fuente de "voz del
cliente" no transaccional que hoy no se aprovecha en absoluto en COTO. Se
incluyen explícitamente en el dominio de datos de la plataforma, aunque
sea texto libre no estructurado, en vez de descartarlos por no encajar en
el modelo relacional del CRM tradicional.

### Principio 4 — Cruzar fuentes de datos distintas

Este es, en rigor, el corazón de todo el proyecto: la arquitectura de
referencia (`coto-arquitectura-y-costos-ia-cloud.md`) une en un mismo
orquestador de agentes datos que hoy están separados — POS presencial,
navegación de Coto Digital, core bancario de TCI, WMS de stock, y (con la
extensión de `plan-redes-sociales-omnicanalidad.md`) interacción social.
El problema de fondo que motiva todo el TP (35%-45% de pérdida de
trazabilidad) es, literalmente, un problema de fuentes de datos que no se
cruzan — cruzarlas es la propuesta, no un paso técnico secundario.

### Principio 5 — Iterar en loops (observar → orientar → decidir → actuar)

El plan de medición de incrementalidad del dossier (holdout 90/10 +
Diferencia en Diferencias, desarrollado en `plan-roi.md`) es la aplicación
directa de este principio: no se lanza una funcionalidad y se asume que
funcionó, se mide contra un grupo control permanente y se reajusta. Los 3
experimentos de des-arriesgamiento (PoC de latencia POS-Cloud, piloto de
WhatsApp con 5.000 socios, benchmarking de caché de prompts —
`coto-sintesis-gaps-y-data-request.md`) son loops previos al lanzamiento
completo, con el mismo espíritu: observar con evidencia real antes de
comprometer el CAPEX completo a un supuesto.

### Principio 6 — El output tiene que ser usable, no solo matemáticamente correcto

Esto justifica por qué la arquitectura de referencia incluye una capa
completa de **observabilidad y guardrails** (Arize Phoenix, LangSmith, AWS
Bedrock Guardrails — $45 a $9.720 USD/mes según escenario,
`coto-arquitectura-y-costos-ia-cloud.md`), no como costo accesorio sino
como condición para que el equipo de marketing (CU-05) y los gerentes de
sucursal confíen en las recomendaciones del sistema lo suficiente como para
usarlas. Un agente que alucina una promoción una vez pierde la confianza
del equipo que lo opera, no solo del cliente.

### Principio 7 — Armar equipos multidisciplinarios

La estructura de equipo del CAPEX (`coto-arquitectura-y-costos-ia-cloud.md`)
ya sigue este principio: Product Lead + Architect + 3 células (backend/
integración POS, IA y datos, experiencia y calidad) — combina ingeniería,
ciencia de datos, diseño UX y un analista de negocio de loyalty/retail
(0,5 FTE), no es un equipo de "solo data scientists".

### Principio 8 — La adopción ES el entregable (el más crítico para este TP)

McKinsey documenta un caso real: un modelo de recomendación de venta
cruzada en un call center fracasó porque los representantes cerraban el
pop-up de sugerencia — su esquema de comisión premiaba velocidad de
llamada, no venta cruzada. El algoritmo era bueno; el incentivo estaba mal
alineado.

**Cómo se evita ese mismo error en esta propuesta**:

- **CU-04/CU-06 en atención al cliente** (`plan-atencion-cliente.md`): si
  el equipo de Fonocoto sigue siendo medido por volumen de llamadas y no
  por calidad de resolución de los casos escalados por el agente, van a
  tratar los casos escalados como una interrupción, no como una
  oportunidad de resolución de mayor valor. **Mitigación propuesta**:
  rediseñar el KPI del equipo de soporte humano a "tasa de resolución
  correcta de casos escalados" en vez de solo "volumen de llamadas
  atendidas", antes o junto con el despliegue de CU-04/CU-06 — no después.
- **CU-05 en campañas** (`plan-plataforma-demanda-campanas.md`): el
  gerente de marketing que aprueba el lote de ofertas generadas por el
  agente tiene que tener un incentivo alineado con la calidad de esa
  aprobación (ej. tasa de redención real vs. objetivo), no con la velocidad
  de aprobar y pasar al siguiente lote — de lo contrario la "aprobación
  humana" de Nivel 3 se vuelve un trámite vacío, no un control real.
- **CU-01 en caja** (`plan-segmentacion-tiempo-real.md`): si el personal de
  caja no entiende o desconfía de la recomendación del asistente (ej.
  porque contradice lo que "siempre dijeron" sobre una promoción), puede
  ignorarla frente al cliente — de ahí la necesidad de observabilidad
  (principio 6) y de capacitación explícita al personal de sucursal, no
  solo al equipo técnico.

Este principio es, en la práctica, el argumento más fuerte para que la
propuesta incluya rediseño de incentivos y capacitación como parte del
alcance del proyecto, no como un ítem aparte de "gestión del cambio" que
se resuelve solo.

## 2. Gobernanza de datos (dominio, sensibilidad, marco regulatorio)

| Entidad de datos | Sistema origen | Sensibilidad | Riesgo de privacidad/compliance |
|---|---|---|---|
| Perfil del cliente | CRM Comunidad COTO | Alta (PII) | Ley 25.326 |
| Historial de compras | Mainframe/ERP | Media | Perfilamiento de consumo sensible |
| Maestro de productos (SKUs) | ERP SAP / PIM | Pública | Precios desactualizados en respuesta de IA |
| Promociones y reglas | Engine de promociones | Pública | Publicidad engañosa por alucinación (Ley 24.240) |
| Medios de pago y TCI | Core bancario / TCI | **Crítica (PCI)** | PCI DSS, normas BCRA |
| Stock por sucursal | WMS / Inventarios | Interna | Promesa de entrega sin stock real |

*(`coto-datos-gobernanza-regulatorio.md`)* — esta tabla es la misma que
sostiene, en cada plan funcional, la mención puntual de Ley 25.326, PCI
DSS, normas BCRA y Ley 24.240 donde corresponde (no se repite el marco
regulatorio completo en cada plan, se referencia acá como fuente única).

## 3. Riesgos técnicos de la arquitectura (para no vender la infraestructura como resuelta)

Las 5 integraciones técnicas con mayor incertidumbre, según el propio
dossier (`coto-sintesis-gaps-y-data-request.md`):

1. Middleware de terminales POS en cajas (latencia <800ms requerida por
   CU-01).
2. Core bancario de Tarjeta TCI (autenticación, disponible, historial —
   requerido por CU-06).
3. WMS y terminales de pickers en Coto Digital (requerido por CU-03).
4. Base de CRM/padrón de Comunidad COTO (sincronización bidireccional).
5. Motor de precios y catálogo ERP SAP (coherencia de precios expuestos por
   cualquier agente).

Y las 3 asunciones explícitas que sostienen el modelo de costos
(`coto-arquitectura-y-costos-ia-cloud.md`): hit rate de caché de contexto
>60% (si no se logra, el consumo de tokens puede escalar 250% por encima
del presupuesto), trayectoria deflacionaria del precio por token, y que el
parque de cajas puede conectarse vía APIs modernas sin sustituir hardware
POS. Ninguna de las tres está validada con datos internos de COTO — son
supuestos del dossier, y así se los presenta.

## 4. Relación con el resto de la propuesta

Este plan no introduce casos de uso nuevos — es la capa que hace posible
que CU-01 a CU-06 (distribuidos en `plan-plataforma-demanda-campanas.md`,
`plan-atencion-cliente.md`, `plan-redes-sociales-omnicanalidad.md` y
`plan-segmentacion-tiempo-real.md`) compartan una única fuente de datos de
cliente, en vez de ser seis integraciones aisladas. El caso de ROI de
`plan-roi.md` asume esta arquitectura compartida como base de costos — no
se suman costos de infraestructura por separado para cada caso de uso.
