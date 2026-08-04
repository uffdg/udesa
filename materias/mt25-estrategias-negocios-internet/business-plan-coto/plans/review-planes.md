---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
tipo: revisión de planes (modo revisión de tp-solution-architect)
fecha: 2026-08-03
planes_revisados:
  - plan-problema-contexto-oportunidad.md
  - plan-creacion-de-valor.md
  - plan-captura-de-valor.md
  - plan-ejecucion.md
  - plan-financials.md
contra:
  - consignas/mt25-business-plan-coto.md (checklist obligatorio)
  - research/ completo (4 archivos)
  - .claude/agent-memory/tp-solution-architect/mt25-business-plan-coto-framing.md
  - .claude/skills/how-to-size-market-tam-sam-som/SKILL.md
  - .claude/skills/how-to-identify-moats-network-effects/SKILL.md
  - .claude/skills/how-to-build-roi-case/SKILL.md
---

# Revisión de los 5 planes — business-plan-coto (MT25)

## Corrección ya aplicada durante esta revisión

Se encontró y corrigió una inconsistencia numérica trivial (no requería
rediseño, cae dentro de "referencia rota / dato fácil de corregir con una
nota"):

- **"+150 sucursales"** aparecía en `plan-problema-contexto-oportunidad.md`
  (sección 1.2) y en `plan-captura-de-valor.md` (sección 3, moat de Scale)
  sin coincidir con ninguna de las dos cifras que sí tienen fuente en este
  entregable: **120** (research `competidores-billeteras-argentina.md`,
  secciones 1.4 y 2.5 — la cifra que esos dos párrafos citaban
  explícitamente pero no usaban) o **153** (la cifra adoptada por decisión
  de memoria, sección 5, para problema/oportunidad, ejecución y
  financials). Corregido: `plan-problema-contexto-oportunidad.md` ahora
  usa 120 (coincide con la fuente que cita) con una aclaración de que es
  distinta de la base de 153 del market sizing; `plan-captura-de-valor.md`
  ahora usa 153 con referencia a `plan-ejecucion.md`. No se tocó ningún
  otro contenido de esos dos planes.

## 1. `plan-problema-contexto-oportunidad.md`

**Veredicto: OK para pasar a redacción**, con la corrección ya aplicada.

- Cobertura de checklist: contexto/tendencias (sección 1.1, 4 fuentes
  independientes cruzadas — BCRA, Global Payments Report 2026, Kantar,
  CACE, INDEC), problema concreto (sección 2, apoyado en el dato crítico
  de alianzas activas COTO-MP/COTO-MODO), market sizing (sección 3, TAM/
  SAM/SOM). Los tres sub-ítems del checklist están cubiertos.
- Sourcing: cada cifra de mercado tiene fuente citada del research, y cada
  eslabón de la cadena TAM→SAM→SOM está marcado explícitamente como
  supuesto propio, en el orden exacto que fija la memoria (sección 4).
  No se encontraron cifras "coladas" sin marcar, más allá del error ya
  corregido.
- Aplicación real de la skill de market sizing: sigue el framework top-
  down/bottom-up de `how-to-size-market-tam-sam-som` correctamente,
  incluyendo el punto más honesto del skill — cuando no se puede construir
  un bottom-up independiente por falta de datos de COTO, el plan lo dice
  explícitamente en vez de forzar un segundo cálculo con la misma cadena
  de supuestos disfrazada de fuente independiente (sección 3.4). Esto es
  justo lo que pide la skill ("explicar por qué no convergen" en vez de
  inventar una convergencia).
- Coherencia: el SOM (5%/15%/25% del SAM en 3 años, atado a 59%/90%/100%
  de cobertura de sucursales) coincide exactamente con los hitos de
  `plan-ejecucion.md` — verificado número por número.

## 2. `plan-creacion-de-valor.md`

**Veredicto: OK para pasar a redacción.**

- Cobertura de checklist: cómo genera valor (tabla de la sección 2,
  contrastada explícitamente contra el mecanismo de cada competidor),
  prototipo/flujo (sección 3, 5 pantallas núcleo), beneficios y costo para
  el cliente (sección 4, con costos monetarios, de fricción, de datos y de
  fragmentación nombrados). Los cuatro sub-ítems están cubiertos.
- Sourcing: las comparaciones contra MP/MODO/Cuenta DNI están ancladas en
  `competidores-billeteras-argentina.md`. La única cifra semi-suave es
  "Coto Digital, 17 años, +30 mil artículos" (sección 2, fila 4) — el plan
  la marca como "según fuente propia de COTO", lo cual es una marca
  aceptable pero más débil que el research original, que la etiqueta
  explícitamente como "autopromocional, sin metodología ni fuente
  externa". No bloquea el paso a redacción, pero si `tp-plan-writer` cita
  esa cifra en el documento final debería preservar la salvedad completa
  del research, no solo "según COTO".
- Coherencia con moats: la propuesta de valor (personalización sobre
  historial de compra, beneficios acumulados) es exactamente el mecanismo
  que `plan-captura-de-valor.md` usa para argumentar el moat de
  *embedding* — no hay contradicción, hay dependencia explícita y
  correcta entre ambos planes.
- Aplicación del principio "IA solo si resuelve un problema puntual": el
  plan explícitamente descarta IA generativa en el alcance base (sección
  5) y explica que la personalización requiere analítica/reglas, no IA —
  coincide con la decisión de memoria (punto 8) y con la regla del repo de
  no forzar IA "porque queda bien".

## 3. `plan-captura-de-valor.md`

**Veredicto: OK para pasar a redacción**, con la corrección ya aplicada.

- Cobertura de checklist: mecanismos de monetización (sección 6, las 4
  palancas del framework aplicadas una por una al caso), modelo de
  negocio (retención/margen retail, no take rate — sección 6),
  network effects (sección 2) y barreras de entrada (secciones 4 y 7).
  Los cuatro sub-ítems están cubiertos.
- Aplicación real (no genérica) de `how-to-identify-moats-network-effects`:
  esta es la aplicación más rigurosa de los 5 planes. Descarta los falsos
  moats del framework antes de argumentar nada (sección 1), identifica
  correctamente que no hay un network effect de 2 lados clásico y explica
  la diferencia estructural con Google/Waze en vez de forzar la analogía
  (sección 2), aplica el vector de durabilidad completo (Network Effects +
  Scale + Brand + Embedding, sección 3), corre la checklist de las 3
  amenazas contra el caso real y concluye que multi-tenanting es la
  amenaza central ya confirmada como hecho — no como hipótesis (sección
  4, coincide con la decisión de memoria punto 3), ubica el caso en la
  Marketplace Matrix con la salvedad explícita de que aplica solo
  parcialmente (sección 5), y aplica las 4 palancas de monetización sin
  inventarle a la cátedra un catálogo que no tiene (sección 6, respeta la
  regla explícita de la skill). Es honesto en la sección 7 sobre que el
  moat frente a otros retailers es "moderado, basado en tiempo/ejecución"
  y no una barrera estructural — coherente con el espíritu del framework
  de no sobrevender.
- Coherencia: el modelo de monetización coincide exactamente con
  `plan-financials.md` (mismas 3 líneas: margen sobre spend incremental,
  ahorro-pregunta abierta, retail media desde Fase 3). El SOM/curva de
  adopción conservadora que usa como justificación (sección 4) coincide
  con `plan-problema-contexto-oportunidad.md`.

## 4. `plan-ejecucion.md`

**Veredicto: OK para pasar a redacción.**

- Cobertura de checklist: actividades e hitos, piloto y roll-out cubiertos
  con el detalle que pide la consigna (Fase 0 piloto meses 0-6, Fase 1-3
  roll-out hasta mes 36), con hito de salida de cada fase y una tabla
  resumen (sección 5) lista para pitch.
- Coherencia: es el plan mejor anclado en consistencia cruzada de todo el
  entregable — la sección 0 declara explícitamente que la cobertura de
  sucursales "tiene que llegar exactamente al SOM" de
  `plan-problema-contexto-oportunidad.md`, y efectivamente los tres pares
  de números (59%/5%, 90%/15%, 100%/25%) coinciden exactamente entre
  ambos planes. Usa la base de 153 sucursales con el mismo desglose por
  zona que `market-sizing-billeteras-argentina.md` (91+18+14+15+5+7+1+1+1
  = 153, verificado suma).
- Riesgos de ejecución (sección 6) están nombrados sin cuantificar donde
  no hay dato para cuantificar (adopción, dependencia de partner,
  regulatorio) — consistente con la regla dura de no inventar cifras.

## 5. `plan-financials.md`

**Veredicto: OK para pasar a redacción**, con la salvedad ya señalada por
el arquitecto anterior (no es un hallazgo nuevo, es una verificación de
que está bien señalizado).

- Cobertura de checklist: modelo financiero de alto nivel — CAPEX (sección
  1), OPEX (sección 2), traducción de GMV a impacto en resultados (sección
  3), horizonte y forma de presentación (sección 4). Cubre lo que pide el
  checklist ("modelo financiero, alto nivel").
- Verificación puntual pedida: la cadena de 3-4 supuestos compuestos (CAPEX
  sin cotizar, fracción de GMV incremental 20-30% sin benchmark, margen
  retail sin dato de COTO, retail media 0,5-1,5% sin cifra citada) **está
  correctamente señalizada como supuesto en cada línea**, no presentada
  como hecho en ningún punto. La sección 0 (advertencia metodológica) y la
  sección 4 (riesgo principal nombrado explícitamente: la fracción de GMV
  incremental es "el supuesto menos sólido de todo el modelo") cumplen
  exactamente lo que pide `how-to-build-roi-case` — no hay VAN/ROI
  optimista disfrazado de proyección, y el riesgo financiero central está
  nombrado en vez de escondido en una nota al pie.
- Coherencia: el modelo de negocio (frecuencia + basket size, no take
  rate, retail media secundaria desde Fase 3) coincide exactamente con
  `plan-captura-de-valor.md`. El horizonte de 3 años coincide con
  `plan-ejecucion.md`. El GMV de partida (sección 3) es el mismo que el
  SOM de `plan-problema-contexto-oportunidad.md`, con la advertencia
  correcta y explícita de que GMV ≠ ingreso incremental (evita el error
  más común de un pitch de wallet, nombrado así en el propio plan).
- Nota de moneda (USD para CAPEX, ARS para GMV, sin forzar conversión) es
  metodológicamente correcta y está justificada en vez de mezclada sin
  aviso — cumple la regla de `how-to-size-market-tam-sam-som` sobre no
  mezclar monedas sin aclarar.
- Único punto pendiente, ya identificado por el propio plan y no un
  hallazgo nuevo de esta revisión: la sección 5 ("qué falta para cerrar
  este modelo con precisión real") deja explícito que nada de esto se
  puede volver una cifra precisa sin datos reales de COTO. Esto es
  correcto tal como está — el riesgo es de negocio (dependencia de
  supuestos), no de calidad del plan.

## 6. Checklist obligatorio de la consigna — cobertura ítem por ítem

| Ítem del checklist (`consignas/mt25-business-plan-coto.md`) | Cubierto en | Estado |
|---|---|---|
| Contexto: tendencias, marco competitivo | `plan-problema-contexto-oportunidad.md` §1 | Cubierto |
| Problema concreto | `plan-problema-contexto-oportunidad.md` §2 | Cubierto |
| Dimensionamiento de la oportunidad (market sizing) | `plan-problema-contexto-oportunidad.md` §3 | Cubierto |
| Cómo la solución genera valor para el cliente | `plan-creacion-de-valor.md` §2 | Cubierto |
| Prototipos, beneficios y costo para el cliente | `plan-creacion-de-valor.md` §3-4 | Cubierto |
| Mecanismos de monetización, modelo de negocio | `plan-captura-de-valor.md` §6 | Cubierto |
| Network effects, barreras de entrada | `plan-captura-de-valor.md` §2-5, §7 | Cubierto |
| Principales actividades e hitos (pilotos, roll out) | `plan-ejecucion.md` | Cubierto |
| Modelo financiero (alto nivel) | `plan-financials.md` | Cubierto |
| Presentación efectiva (calidad del pitch) | — | Fuera de alcance de `plans/` — depende de `tp-presentation-designer`, no de diseño de solución. No es un vacío de los planes. |

Todos los ítems de contenido del checklist que corresponden a diseño de
solución están cubiertos por al menos un plan. El único ítem no cubierto
por `plans/` (calidad del pitch en sí) no le corresponde a esta fase.

## 7. Veredicto global

**Los 5 planes están listos para que `tp-plan-writer` redacte el
documento final**, sujeto a la corrección numérica ya aplicada en esta
revisión (las "+150 sucursales" corregidas a 120/153 según corresponda en
cada plan).

Hallazgos principales de esta revisión:

1. **La cadena de supuestos de `plan-financials.md` está correctamente
   señalizada como tal en cada línea** — no hay ninguna cifra financiera
   presentada como hecho. La verificación puntual pedida al arrancar esta
   revisión se confirma: es una tensión de negocio real y honesta, no un
   defecto de diseño.
2. **La coherencia entre planes es alta y verificable número por
   número**: el SOM de market sizing coincide exactamente con los hitos
   de `plan-ejecucion.md` (59%/5%, 90%/15%, 100%/25%), y el modelo de
   monetización de `plan-captura-de-valor.md` coincide exactamente con la
   estructura de ingresos de `plan-financials.md`. No hay contradicciones
   entre el framework de moats y la propuesta de valor.
3. **Aplicación genuina de las dos skills verificadas** (no versión
   genérica de manual): `plan-captura-de-valor.md` corre la checklist real
   de falsos moats, las 3 amenazas y las 4 palancas del material de
   cátedra de MOATS; `plan-problema-contexto-oportunidad.md` sigue el
   framework TAM/SAM/SOM y es honesto cuando no puede construir un
   bottom-up independiente por falta de dato.
4. **Único hallazgo corregido**: inconsistencia numérica de sucursales
   ("+150" sin fuente) en dos planes, ya resuelta durante esta revisión.

No queda ningún bloqueante para pasar a redacción del documento final ni
al guion de la presentación.
