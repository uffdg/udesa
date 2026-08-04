---
name: how-to-structure-pitch
description: Cómo estructurar una presentación/pitch final con disclosure progresivo y (si corresponde) reparto entre integrantes del equipo. El formato exacto (minutado, audiencia) sale de la consigna de cada entregable, no es fijo entre TPs.
trigger: Cuando tp-presentation-designer arma o actualiza el guion de la presentación final de cualquier entregable en materias/.
---

# Cómo estructurar el pitch final

**Primero confirmá el formato real** en
`consignas/<materia-slug>-<entregable-slug>.md`: minutado, audiencia
(CFO/CEO/CMO, directorio, profesor, panel), si es individual o grupal. No
asumas que todos los TPs de este repo comparten el mismo formato — cada
consigna lo dice.

Ejemplo de referencia (TP de fidelización de COTO): defensa tipo role play
"frente al directorio de la compañía", en grupo de 4-6 personas — sin
minutado ni roles de audiencia confirmados literalmente en el programa
oficial, así que conviene chequear el enunciado real antes de fijar tiempos.

## Estructura general con disclosure progresivo (adaptar al minutado real)

1. **Contexto y oportunidad** (breve, no es el foco): industria,
   desafío/oportunidad de mercado, por qué el caso necesita esto ahora.
2. **Propuesta de solución**: explicada como experiencia concreta para el
   cliente/usuario del caso, no como lista de features.
3. **Por qué ahora / ROI** (si la consigna lo pide): el caso de negocio,
   con el número de retorno esperado y el riesgo principal nombrado — esto
   es lo que una audiencia financiera más va a recordar.
4. **Plan de implementación y adopción**: fases, qué necesita la
   organización del caso para que esto funcione.
5. **Cierre**: una frase que conecte todo con el objetivo de negocio.

## Variante: pitch de venta de una idea de negocio a inversores

Cuando la consigna es del tipo "vendé tu idea de negocio a inversores"
(no una propuesta de transformación digital para una organización
existente), usar en cambio esta estructura — es la plantilla oficial
observada en MT25 Estrategias de Negocios en Internet, pero aplica a
cualquier TP con ese mismo formato de pitch:

1. Nombre de la empresa
2. Equipo (foto, nombre, background de cada integrante)
3. Propósito de la empresa (1-2 oraciones)
4. Problema (qué problema resuelve, cómo lo resuelve hoy el cliente y
   con qué fricciones)
5. Solución (propuesta de valor, cómo resuelve el problema anterior, qué
   la hace única o defendible)
6. Producto (prototipo/screenshots, funcionalidades principales, roadmap
   del primer año)
7. Modelo de negocio (pricing, LTV de cliente promedio, modelo de
   adquisición y retención — ver también `how-to-identify-moats-network-effects`
   para monetización y network effects)
8. Tamaño de mercado (TAM/SAM/SOM — ver skill `how-to-size-market-tam-sam-som`)
9. Por qué ahora (historia de la categoría, tendencias que habilitan la
   oportunidad)
10. Competencia (competidores, similitudes/diferencias, fortalezas y
    debilidades)
11. Información adicional (lo que el equipo considere relevante y no
    entre en las anteriores)
12. Cierre / preguntas

Esta plantilla resuelve en simultáneo varios criterios de evaluación
típicos de este formato (problema/contexto/tamaño de oportunidad,
creación de valor, captura de valor, plan de ejecución, financials) — no
agregar slides fuera de esta estructura salvo que la consigna real lo
pida explícitamente.

Fuente de la plantilla y dos ejemplos resueltos (de otras empresas, no
material de ningún entregable de este repo — solo referencia de formato
y disclosure progresivo, nunca de contenido/cifras):
`materias/mt25-estrategias-negocios-internet/business-plan-coto/research/fuentes/`
(`Trabajo Final_ [Nombre de la empresa] (4).pptx.pdf`, `anana.pdf` — fintech
de ahorro "save now, buy later" — y `Pitch Cuota Q - Estrategias de
negocios en Internet.pdf` — SaaS B2B de cobro de cuotas para clubes/ONGs).

## Reglas

- Si la consigna pide que todos los integrantes presenten, repartir el
  guion por sección, no por diapositiva suelta.
- Si la consigna pide justificar ROI, ese número y el riesgo van temprano o
  con peso propio, no como nota al pie al final.
- Nada en el guion puede afirmar un dato que no esté en el documento final
  del entregable con su fuente — el guion no inventa contenido nuevo, solo
  lo prioriza y lo hace hablado.
- Guardá el guion en `entregable/presentacion/guion.md` dentro de la
  carpeta del entregable activo, con el minutado real y quién presenta cada
  parte (si aplica).
- Si hay tokens/componentes definidos en `design-system/`, usalos para la
  consistencia visual de las slides.

## Si el artefacto final de la presentación es un `.pptx`

Regla dura, no una sugerencia: se construye con
`design-system/components/pptx_kit.py`, siguiendo el patrón documentado en
`design-system/components/pptx-pitch-deck.md` — **nunca** con
`python-pptx` puro armando textboxes/shapes sueltos desde cero. Ese patrón
está extraído 1:1 de
`materias/mt10-innovacion-tecnologica/fidelizacion-coto/entregable/
presentacion/plataforma-fidelizacion-coto.pptx` (la fuente canónica: kicker
+ headline, callouts de cifra grande, chips/step-strip, tablas armadas por
shapes, footer de marca + sección + página, roadmap con flechas, slide de
título/cierre) y aplica a cualquier `.pptx` nuevo de cualquier
materia/entregable de este repo, no solo a mt10. Ver
`materias/mt25-estrategias-negocios-internet/business-plan-coto/entregable/
presentacion/build-pptx.py` como segundo ejemplo real de uso del kit,
además del propio mt10.
