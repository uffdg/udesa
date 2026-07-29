---
name: how-to-build-roi-case
description: Cómo estructurar un caso de ROI ("¿Por qué es necesario hacerlo? ¿Por qué ahora?") de forma defendible frente a la audiencia real del TP, sin inventar cifras. Aplica a cualquier entregable de la maestría cuya consigna pida justificar la inversión.
trigger: Cuando tp-solution-architect arma o revisa una sección de ROI/justificación de negocio de cualquier entregable en materias/.
---

# Cómo armar el caso de ROI

Cuando la consigna de un entregable pide justificar **por qué hacerlo** y
**por qué ahora**, una audiencia ejecutiva (CFO, directorio, panel) va a
cuestionar cualquier número sin supuesto explícito detrás — la estructura
importa tanto como el resultado. (Ejemplo del TP de fidelización de COTO:
la consigna pide exactamente esto.)

1. **Por qué hacerlo (el caso base)**:
   - Costo de no hacerlo: qué se pierde si la organización del caso no
     invierte en esto (fuga de clientes a competidores más maduros,
     pérdida de datos de primera parte, menor frecuencia de compra, etc.
     — adaptar al caso real).
   - Beneficio esperado: aumento de frecuencia/ticket promedio,
     reducción de costo de adquisición vía canales propios, eficiencia
     de campañas segmentadas vs. masivas.
2. **Por qué ahora**:
   - Ventana competitiva: qué está haciendo o por hacer la competencia
     (usar `research/competidores.md` del entregable activo).
   - Costo de oportunidad de esperar (madurez de datos, ventaja de ser
     early mover).
3. **Supuestos explícitos**: cada número del caso de ROI tiene que decir
   de dónde sale — benchmark citado en `research/`, estimación propia del
   equipo (marcada como tal), o dato público del caso real. Nunca una
   cifra sin origen.
4. **Formato para audiencia ejecutiva**: inversión estimada (por
   componente: plataforma, datos/IA, operación) vs. retorno esperado, en
   un horizonte razonable (ej. 12-24 meses), con el riesgo principal
   nombrado explícitamente — un caso de ROI sin riesgos mencionados suena
   poco creíble.
5. Guardá el resultado en `plans/plan-roi.md` dentro de la carpeta del
   entregable activo (`materias/<materia>/<entregable>/`), referenciando
   las fuentes usadas.
