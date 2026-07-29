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
