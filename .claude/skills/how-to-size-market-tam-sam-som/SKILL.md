---
name: how-to-size-market-tam-sam-som
description: Cómo dimensionar el tamaño de una oportunidad de negocio (TAM/SAM/SOM, top-down/bottom-up) sin inventar cifras. Aplica a cualquier entregable de la maestría cuya consigna pida "market sizing" o dimensionar la oportunidad.
trigger: Cuando tp-research-analyst o tp-solution-architect necesitan dimensionar el tamaño de mercado de una idea de negocio en cualquier entregable de materias/.
---

# Cómo dimensionar una oportunidad de mercado (TAM/SAM/SOM)

Cuando la consigna pide "dimensionar la oportunidad" o "market sizing"
(ejemplo: MT25 Estrategias de Negocios en Internet, criterio "Definición
del problema, contexto y tamaño de la oportunidad"), una audiencia
inversora va a cuestionar cualquier número sin metodología explícita
detrás — cómo se llegó al número importa tanto como el número en sí.

## El framework: TAM / SAM / SOM

- **TAM (Total Addressable Market)**: el mercado completo si la solución
  capturara el 100% de la demanda posible — normalmente el tamaño de la
  industria/categoría entera en la región relevante.
- **SAM (Serviceable Available Market)**: la porción de ese TAM que el
  modelo de negocio específico puede efectivamente servir — filtrado por
  geografía, segmento de cliente, o tipo de producto comparable (ej.
  "mercado de wallets/BNPL" dentro del e-commerce total).
- **SOM (Serviceable Obtainable Market)**: la porción realista que la
  empresa puede capturar en un horizonte de tiempo dado, dada su
  capacidad de ejecución, competencia y estrategia de entrada.

Cada capa tiene que ser sensiblemente más chica que la anterior, y la
consigna espera ver el embudo completo (no solo el número final).

## Dos formas de calcular, no una sola

1. **Top-down**: partir de un estudio o reporte de mercado ya publicado
   (industria, Banco Mundial, cámaras sectoriales, consultoras) y aplicar
   un % de participación estimado. Rápido, pero depende de la calidad y
   actualidad de la fuente externa.
2. **Bottom-up**: partir de unidades reales (número de clientes
   potenciales × ticket promedio × frecuencia, o número de locales ×
   penetración esperada) y construir el número desde abajo. Más
   defendible frente a preguntas de la audiencia porque cada supuesto es
   auditable.

Cuando sea posible, mostrar ambos y que converjan (o explicar por qué no
convergen) es más creíble que un solo número sin contraste.

## Reglas

- **Cada cifra necesita fuente o supuesto explícito marcado como tal**
  (ver hard rule del repo en `CLAUDE.md`): reporte citado (link + fecha),
  dato del caso real (dossier, research propio), o estimación del equipo
  explícitamente etiquetada como supuesto — nunca un número sin origen.
- No mezclar monedas/regiones sin aclarar (ej. USD vs. moneda local,
  Argentina vs. LatAm) — la audiencia detecta esto rápido y resta
  credibilidad a todo el resto del pitch.
- El SOM tiene que conectar con el plan de ejecución (hitos, roll-out) —
  si el SOM asume cierta cobertura o velocidad de adopción, esos números
  tienen que coincidir con los del criterio "Plan de ejecución".
- Ejemplo de referencia (pitch ajeno, no reusable como dato de nuestro
  caso — solo como modelo de presentación): un pitch de una fintech de
  ahorro en LatAm mostró TAM = e-commerce total de los 6 mercados
  principales, SAM = mercado de soluciones "save now, buy later"
  comparables, SOM = estimación propia de participación alcanzable — los
  tres círculos concéntricos con la fuente de cada capa aclarada al pie.
- Guardá el resultado dentro de `plans/` (o `research/` si es solo el
  dato de mercado, antes del diseño de la solución) del entregable activo
  — según cuál sea la convención de ese TP puntual.
