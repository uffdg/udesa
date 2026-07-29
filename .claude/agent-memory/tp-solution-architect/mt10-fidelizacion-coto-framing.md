---
name: mt10-fidelizacion-coto-framing
description: Decisiones de framing y diseño grandes tomadas para la Fase Design del TP de fidelización COTO — para no contradecirlas en sesiones futuras (revisión, redacción, slides).
metadata:
  type: project
---

Aplica a: **mt10-innovacion-tecnologica/fidelizacion-coto**

# Decisiones de diseño — Fase Design (2026-07-28)

## 1. Framing adoptado: "plataforma agéntica" como eje central, no como agregado

Se adoptó el framing del dossier de negocio: la IA (los 6 casos de uso
agénticos CU-01 a CU-06) es el mecanismo central que conecta campañas,
atención al cliente, redes sociales/omnicanalidad y segmentación — todos
corriendo sobre **una única plataforma de datos unificada**, no seis
integraciones de IA independientes ni un CRM tradicional con IA "al
costado". Cada uno de los 7 planes de `plans/` referencia esta misma
plataforma y estos mismos casos de uso; no se duplica infraestructura de
segmentación, datos o guardrails entre planes.

**Por qué**: el problema de negocio más concreto y medible que encontró el
research (35%-45% de pérdida de trazabilidad de cliente en transacciones
presenciales) es, en sí mismo, un problema de datos no unificados — la
plataforma agéntica es la respuesta natural a ese problema específico, no
una moda tecnológica superpuesta.

## 2. Mapeo fijo de casos de uso a secciones del checklist (no reabrir sin razón)

- **CU-05** → `plan-plataforma-demanda-campanas.md` (gestión de campañas).
- **CU-04, CU-06** → `plan-atencion-cliente.md` (esquema de atención al
  cliente), cruzados contra la matriz Presencial/Telefónico/Digital ×
  Humano/No Humano de la cátedra.
- **CU-01, CU-02, CU-03** → `plan-segmentacion-tiempo-real.md`
  (segmentación y acciones en tiempo real).
- Ninguno de los 6 casos de uso del dossier cubre redes sociales — ese
  componente se resolvió extendiendo **CU-01 y CU-04 como interfaz
  adicional** (WhatsApp conversacional) más un componente nuevo de triage
  (Nivel 1-2) para comentarios/DMs, no como agentes nuevos independientes.
- CU-01 aparece también mencionado (sin duplicar su diseño) en
  `plan-plataforma-demanda-campanas.md` como complemento de CU-05 — mismo
  agente, dos momentos del ciclo Machear→Relacionar→Nutrir.

## 3. Regla dura de ROI acordada con el research: NO liderar con el número optimista

`plan-roi.md` sigue al pie de la letra la "Lectura crítica" ya escrita en
`research/coto-modelo-financiero-roi.md`: no se lidera el pitch con VAN
$5,24M / ROI 1.505,7%. Se lidera con el análisis de sensibilidad
(mostrando que incluso el escenario más adverso mantiene VAN positivo), se
separan explícitamente las palancas que dependen de comportamiento del
cliente (más inciertas) de las que dependen de decisión operativa interna
(migración a TCI — la más sólida), y el plan de des-arriesgamiento (3
experimentos: PoC latencia POS-Cloud, piloto WhatsApp 5.000 socios,
benchmarking de caché) se presenta como fase 0 del proyecto, parte central
del pitch, no como anexo técnico.

**Riesgo principal nombrado explícitamente**: adopción (caída de MAU),
porque depende de un padrón de Comunidad COTO marcado [SV] (supuesto
pendiente de validación) en `research/coto-dimension-negocio.md`. No se
nombra el riesgo técnico o de costo de IA como principal — la propia
sensibilidad del dossier los marca "Bajo" impacto.

## 4. Componente sin research fuerte: redes sociales/omnicanalidad

`plan-redes-sociales-omnicanalidad.md` es honesto sobre no tener datos
propios de COTO para dimensionar una palanca de valor independiente en el
ROI — su valor está incluido de forma conservadora dentro de la palanca #4
del árbol de 7 palancas (automatización de atención al cliente), no como
palanca #8 nueva. Si en el futuro aparece research nuevo con datos propios
de este componente (volumen de reclamos por redes, confirmación de
integración CRM↔redes), reabrir `plan-roi.md` para evaluar si amerita
palanca propia.

## 5. Nombre "COTO Wallet"

La consigna usa "COTO Wallet" como caso de referencia, pero
`research/competidores.md` confirma que no existe evidencia pública de un
producto con ese nombre — se trata como nombre de trabajo del propio TP,
no como producto real de COTO. Ningún plan de `plans/` afirma que "COTO
Wallet" ya existe; se refieren a "la plataforma" o "la propuesta".
