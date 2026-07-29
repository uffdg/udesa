---
fuente: Dossier Negocio e Infraestructura COTO.pdf (Fases 6, 7, 8 y 9 — Modelo Paramétrico de Demanda, Componentes Técnicos y Arquitectura de Referencia, Costos de IA e Infraestructura Cloud, Costos de Implementación)
nota: precios de modelos LLM y de servicios cloud son los que el dossier declara vigentes a 2026 — no se re-verificaron en esta sesión contra las páginas oficiales de precios.
---

# Arquitectura, volumetría y costos de IA/cloud

## Modelo paramétrico de volumetría (fórmulas)

1. `DAU = MAU × f_diaria`
2. `N_int (interacciones mensuales) = MAU × Sesiones_usuario × Interacciones_sesion`
3. `Tokens_mes = N_int × (T_entrada + T_salida)`
4. `Calls_herramientas = N_int × c_promedio`
5. `RPS_pico = (N_int × Factor_concentracion) / (Dias_mes × Horas_operativas × 3600)`

## Tres escenarios de volumetría

| Métrica | Piloto | Intermedio | Escala COTO |
|---|---|---|---|
| Clientes registrados totales | 100.000 | 1.500.000 | 5.000.000 |
| MAU | 15.000 | 350.000 | 1.800.000 |
| DAU | 1.200 | 35.000 | 240.000 |
| Sesiones mensuales/MAU | 3,0 | 4,5 | 6,0 |
| Interacciones/sesión | 4,0 | 5,0 | 6,0 |
| Interacciones mensuales totales | 180.000 | 7.875.000 | 64.800.000 |
| Tokens entrada/interacción (prom.) | 800 | 1.200 | 1.500 |
| Tokens salida/interacción (prom.) | 150 | 200 | 250 |
| % caché de contexto | 40,0% | 65,0% | 80,0% |
| Llamadas a herramientas (APIs)/mes | 360.000 | 15.750.000 | 129.600.000 |
| Consultas a base vectorial (RAG)/mes | 90.000 | 3.937.500 | 32.400.000 |
| Pico de solicitudes por segundo (RPS) | 0,5 | 18,2 | 149,0 |
| Almacenamiento transaccional/mes | 12 GB | 280 GB | 2.100 GB |
| Almacenamiento vectorial (embeddings) | 5 GB | 35 GB | 150 GB |

Supuesto base: adopción del 15% (Piloto) al 36% (Escala) de la base
registrada de Comunidad COTO — **hereda la incertidumbre [SV] del padrón de
Comunidad COTO** ya señalada en `coto-dimension-negocio.md`.

## Arquitectura de referencia (componentes funcionales)

Topología: interfaces de cliente (App móvil, Web, WhatsApp) → API Gateway con
reglas WAF → orquestador de agentes (runtime tipo Bedrock AgentCore o
LangGraph) → interactúa con bases vectoriales RAG, inferencia LLM, y bus de
integración con POS/ERP/CRM de COTO → todo bajo guardrails y observabilidad.

| Componente | Función | Alternativas evaluadas por el dossier |
|---|---|---|
| Frontend Channel Broker | Interfaz cliente/empleado | App React Native, Flutter, SDK WhatsApp Business |
| API Gateway & WAF | Seguridad, rate limiting, ruteo | AWS API Gateway + WAF, Cloudflare Enterprise |
| Identity & Authentication | Gestión de identidades | Auth0, AWS Cognito, Keycloak Self-Hosted |
| Agente Orquestador | Estado, memoria, tools | AWS Bedrock AgentCore, LangGraph Cloud, Semantic Kernel |
| Modelos LLM (razonamiento) | Generación de respuestas/decisiones | OpenAI GPT-5/4.1, Anthropic Claude 3.5/Sonnet, Qwen3 |
| Modelos LLM especializados | Tareas simples (clasificación, OCR) | GPT-4o mini, GPT-4.1 Nano, Llama 3.3 70B Managed |
| Engine de Embeddings | Vectorización de SKUs/manuales | OpenAI text-embedding-3-small, Amazon Titan Embeddings |
| Base de Datos Vectorial | Búsqueda semántica RAG | AWS OpenSearch Serverless, Pinecone, Qdrant |
| Base Datos Transaccional | Sesiones y cupones | Amazon Aurora PostgreSQL Serverless v2, MongoDB Atlas |
| Caché de Altas Prestaciones | Contexto temporal | Amazon ElastiCache for Redis, Redis Enterprise Cloud |
| Event Streaming & Colas | Desacople de eventos de caja | Amazon MSK, AWS SQS + SNS |
| Integraciones POS Middleware | Puente seguro con cajas | Microservicios en Kubernetes (EKS), VPC PrivateLink |
| Observabilidad de IA & Guardrails | Filtrado de alucinaciones, auditoría | Arize Phoenix, LangSmith, AWS Bedrock Guardrails |

## Comparativa de precios de modelos LLM (USD / 1M tokens, según el dossier)

| Proveedor | Modelo | Entrada estándar | Entrada con caché | Salida | Uso ideal en COTO |
|---|---|---|---|---|---|
| OpenAI | GPT-5 | $1,25 | $0,125 | $10,00 | Orquestación compleja, casos de alto valor |
| OpenAI | GPT-4.1 | $2,00 | $0,500 | $8,00 | Producción general, estructuración JSON |
| OpenAI | GPT-4o mini | $0,15 | $0,075 | $0,60 | Clasificación rápida, ruteo de intenciones |
| OpenAI | GPT-4.1 Nano | $0,10 | $0,025 | $0,40 | Extracción masiva de datos, micro-prompts |
| Anthropic | Claude 3.5 Sonnet | $3,00 (launch $2,00) | $0,300 | $15,00 (launch $10,00) | Razonamiento conversacional, redacción |
| Google | Gemini 2.5 Pro | $1,25 | $0,312 | $10,00 | Análisis de tickets largos/documentos |
| Google | Gemini 2.5 Flash | $0,30 | $0,075 | $2,50 | Procesamiento multimodal (imágenes de tickets) |
| AWS (Bedrock) | Qwen3-32B | $0,15 | N/A | $0,60 | Inferencia regional alojada en São Paulo |

## Costo mensual de IA por escenario (USD)

| Componente | Piloto | Intermedio | Escala COTO |
|---|---|---|---|
| Modelos principales (GPT-5/Sonnet, 30% del volumen) | $243,00 | $8.032,50 | $65.610,00 |
| Modelos ligeros (GPT-4o mini/Nano, 70% del volumen) | $17,55 | $620,15 | $5.113,80 |
| Ahorro por caché de contexto | −$54,00 | −$2.850,00 | −$26.244,00 |
| Embeddings (SKUs/RAG) | $5,40 | $94,50 | $777,60 |
| Observabilidad y guardrails | $45,00 | $1.181,25 | $9.720,00 |
| **TOTAL costo IA mensual** | **$256,95** | **$7.078,40** | **$54.977,40** |
| Costo de IA por MAU | $0,017 | $0,020 | $0,030 |
| Costo de IA por 1.000 conversaciones | $1,427 | $0,898 | $0,848 |

## Costo mensual de infraestructura cloud (AWS São Paulo, USD)

| Componente | Piloto | Intermedio | Escala COTO |
|---|---|---|---|
| Cómputo (EKS/Fargate) | $180,00 | $1.250,00 | $6.800,00 |
| API Gateway & WAF | $35,00 | $420,00 | $3.150,00 |
| Base vectorial (OpenSearch Serverless) | $350,00 | $700,00 | $2.800,00 |
| Base transaccional (Aurora PostgreSQL) | $145,00 | $680,00 | $3.400,00 |
| Caché (ElastiCache Redis) | $65,00 | $320,00 | $1.450,00 |
| Event streaming & colas | $45,00 | $380,00 | $2.200,00 |
| NAT Gateway & Data Transfer | $130,00 | $450,00 | $2.400,00 |
| Almacenamiento (S3 + Glacier) | $25,00 | $180,00 | $1.100,00 |
| Monitoreo & logs | $80,00 | $550,00 | $3.200,00 |
| Ambientes no productivos (Dev/QA/Staging) | $400,00 | $950,00 | $2.100,00 |
| **TOTAL costo cloud mensual** | **$1.455,00** | **$5.880,00** | **$28.600,00** |
| **TOTAL OPERATIVO (IA + Cloud) mensual** | **$1.711,95** | **$12.958,40** | **$83.577,40** |

## Inversión inicial (CAPEX, equipo del proyecto, 6 meses)

Equipo bajo un Product Lead + Tech Lead/Architect, con 3 células: backend e
integración POS, IA y datos, experiencia y calidad.

| Rol | Cantidad | Dedicación | Duración | Costo total |
|---|---|---|---|---|
| Product Manager / Lead | 1,0 | 100% | 6 meses | $39.000 |
| Architect / Lead Technical | 1,0 | 100% | 6 meses | $48.000 |
| AI/LLM Specialist Engineer | 2,0 | 100% | 6 meses | $90.000 |
| Data Engineer | 1,5 | 100% | 6 meses | $54.000 |
| Backend Engineer (Senior) | 2,0 | 100% | 6 meses | $66.000 |
| Mobile/Frontend Engineer | 2,0 | 100% | 5 meses | $50.000 |
| UX/UI Product Designer | 1,0 | 100% | 4 meses | $18.000 |
| QA / Red Teaming Specialist | 1,0 | 100% | 4 meses | $16.000 |
| DevOps / FinOps Engineer | 1,0 | 50% | 6 meses | $18.000 |
| Data Engineer | 1,5 | 100% | 6 meses | $54.000 |
| Loyalty & Retail Business Analyst | 1,0 | 50% | 4 meses | $9.000 |
| Servicios Legales & Compliance | 0,5 | 25% | 3 meses | $3.750 |
| **Subtotal recursos humanos (12,5 FTE)** | | | | **$411.750** |
| Auditoría de Seguridad & Pentest | — | Servicio | 1 mes | $15.000 |
| Contingencia operativa (10%) | — | — | — | $42.675 |
| **TOTAL CAPEX inversión inicial** | | | | **$469.425 USD** |

## Costos de mantenimiento a 36 meses (post-lanzamiento, USD)

| Concepto | Año 1 | Año 2 | Año 3 |
|---|---|---|---|
| OPEX técnico (Cloud + IA) a escala | $600.000 | $1.002.928 | $1.250.000 |
| Equipo estable de soporte y evolución | $192.000 | $201.600 | $211.680 |
| Licencias software B2B | $36.000 | $42.000 | $48.000 |
| Actualización base de conocimiento | $18.000 | $20.000 | $22.000 |
| Supervisión humana y escalaciones (CS) | $45.000 | $65.000 | $85.000 |
| Auditoría anual de seguridad & IA | $15.000 | $16.000 | $17.000 |
| **TOTAL OPEX recurrente anual** | **$906.000** | **$1.347.528** | **$1.633.680** |

## Nota metodológica del propio dossier (a preservar)

- Se asume un uso intensivo de prompt engineering + RAG con **hit rate de
  caché de contexto superior al 60%**; si no se alcanza, el consumo de
  tokens podría escalar hasta un **250% por encima de lo presupuestado**.
- Se asume una trayectoria deflacionaria continuada del precio por token
  (reducciones históricas de 40%–60% anual), lo que compensaría el
  crecimiento de usuarios.
- Se asume que el parque de cajas de sucursal puede conectarse vía APIs
  modernas sin sustitución integral del hardware POS existente.

Estas tres son asunciones explícitas del dossier, no hechos — si el TP se
apoya en esta arquitectura de costos, conviene repetir esta salvedad.
