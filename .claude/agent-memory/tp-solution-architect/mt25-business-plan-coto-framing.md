---
name: mt25-business-plan-coto-framing
description: Decisiones de diseño grandes tomadas al armar los 5 planes de
  business-plan-coto (MT25) — para no contradecirlas en revisión,
  redacción o slides.
metadata:
  type: project
---

Aplica a: **mt25-estrategias-negocios-internet/business-plan-coto**

# Decisiones de diseño (2026-08-03)

## 1. Framing central: no competir en amplitud financiera, competir en dato de compra

Se descartó explícitamente competir como "banco/neobank más chico" (no
hay licencia bancaria ni track record fintech, a diferencia de Ualá). El
eje de todo el pitch es: la wallet COTO gana porque conoce el historial
de compra real de supermercado del cliente (categorías, frecuencia,
ticket), algo que ni MP ni MODO ni Ualá tienen de forma nativa porque
ninguno ve el detalle de góndola, solo el movimiento de dinero. **Esto es
un supuesto del equipo, marcado explícitamente como tal en los 5 planes**
— no está confirmado en ningún research. No revertir este framing sin
revisar los 5 planes a la vez, porque están enlazados sobre esta premisa.

## 2. El problema NO es "aceptar pagos digitales" — COTO ya lo resuelve vía MP/MODO

Dato crítico de research (`competidores-billeteras-argentina.md`): COTO
ya tiene alianzas activas y vigentes con Mercado Pago (desde ~2020) y
MODO (renovada 2024) como medios de pago aceptados y promocionados en sus
sucursales. El problema que resuelve una wallet propia es lo que COTO
**pierde** por no tener wallet propia (datos de primera parte, marca de
fidelización cedida a terceros, cero control del calendario promocional
del checkout) — no la ausencia de pagos digitales. Cualquier redacción
que presente "aceptar pagos digitales" como el problema central está
desalineada con el research y con los 5 planes.

## 3. Multi-tenanting es la amenaza central, tratada como hecho ya confirmado, no hipótesis

`plan-captura-de-valor.md` concluye que el network effect de la wallet es
débil/indirecto (efecto de datos individual, no colectivo como
Google/Waze) — el moat real es brand + embedding + escala de distribución
física, no network effect. Multi-tenanting (MP/MODO siguen aceptados,
mandato de interoperabilidad QR del BCRA impide exclusividad) es la
amenaza confirmada, no un riesgo teórico. Por eso el pitch **nunca
promete desplazar a MP/MODO** — promete ganar share of wallet
progresivamente. La curva de adopción del SOM (5%→15%→25% en 3 años) y el
plan de ejecución están calibrados sobre esta lógica — no subirlos sin
revisar el argumento de moat.

## 4. Cadena de supuestos del TAM/SAM/SOM — orden exacto, no reordenar sin razón

TAM = sector supermercados AR anualizado (INDEC, 5 meses promediados ×12,
~ARS 24,8 billones/año) → top-3 cadenas ~50% (cifra no verificada,
agregador de búsqueda) → COTO 1/3 de ese trío (split parejo, sin base
real para diferenciar) → SAM = 11,1% de eso (proxy INDEC nov-2024 "otros
medios" aplicado a COTO) ≈ ARS 458.000 millones/año → SOM = 5%/15%/25%
de ese SAM en años 1/2/3, atado a cobertura de sucursales (59%/90%/100%
de ~153 sucursales). **Cada eslabón está marcado como supuesto propio
compuesto** — si el equipo consigue un dato real de COTO (clientes,
facturación, sucursales), reemplaza el eslabón correspondiente, no toda
la cadena.

## 5. Conteo de sucursales de COTO: se usa 153 en TODO el entregable (resuelto 2026-08-03)

**Actualización (2026-08-03): ya no es una inconsistencia sin resolver.**
El equipo fijó **153** (suma trazable por zona: CABA 91, Zona Norte 18,
Zona Sur 14, Zona Oeste 15, Costa Atlántica 5, Santa Fe 7, Entre Ríos 1,
Neuquén 1, Mendoza 1) como cifra única en **los 4 planes** que la
mencionan (problema/oportunidad, captura de valor, ejecución, financials)
— incluido el uso residual de "+120" que quedaba en
`plan-problema-contexto-oportunidad.md` §1.2, ya corregido a 153. Se
descartaron 242 (total de la misma página de COTO sin conciliar con la
suma por zona) y "+120"/220 (cifras de piso citadas sueltamente en
prensa sobre alianzas MP/MODO, no censos). Razonamiento completo en
`materias/mt25-estrategias-negocios-internet/business-plan-coto/plans/supuestos-resueltos.md`.
Si el equipo confirma la cifra real con COTO, actualizar los 4 planes a
la vez (el rollout por fases y el % de cobertura por año dependen de esta
base).

## 6. Modelo de monetización: NO es take rate de marketplace

Se descartó explícitamente un modelo de comisión tipo Mercado Pago/Ualá
Bis (COTO no intermedia entre terceros, es el único vendedor). El modelo
es retención/margen retail incremental (palanca de frecuencia como
primaria, basket size secundaria) + retail media como ingreso
complementario recién desde Fase 3 del rollout. `plan-financials.md`
traduce el GMV que pasa por la wallet a impacto real en resultados
aplicando un supuesto explícito de "fracción de GMV genuinamente
incremental" (20-30%, ilustrativo, sin benchmark) — nunca presentar el
GMV total como si fuera ingreso nuevo, ese es el error que
`how-to-build-roi-case` y este framing buscan evitar activamente.

## 7. Financiamiento de reintegros MP/MODO: resuelto con supuesto de trabajo (2026-08-03)

**Actualización (2026-08-03): ya no es una pregunta abierta sin
cuantificar.** Quién financia hoy los reintegros de MP (10-25%) y MODO
(20-30%) en sucursales COTO sigue sin estar confirmado en ningún
research — pero el equipo adoptó una posición de trabajo explícita: **COTO
cofinancia ~60%** vía comarketing negociado, con una tasa de reintegro
combinada de trabajo del 20%. Esto habilita un cálculo de ahorro
potencial en `plan-financials.md` §3.2 (≈12% del GMV migrado cada año:
≈ARS 2.748M/8.250M/13.752M en años 1/2/3) que antes decía "no
cuantificado". **Es el supuesto con menos respaldo de los 5 resueltos el
2026-08-03** — ni siquiera hay anclaje indirecto fuerte, a diferencia de
la cifra de sucursales (punto 5). Razonamiento completo en
`materias/mt25-estrategias-negocios-internet/business-plan-coto/plans/supuestos-resueltos.md`.
Si el equipo confirma el dato real con COTO, reabrir
`plan-problema-contexto-oportunidad.md`, `plan-captura-de-valor.md` y
`plan-financials.md` a la vez.

## 9. Otros 3 gaps del cierre del documento final, resueltos el 2026-08-03

Además de sucursales (punto 5) y financiamiento de reintegros (punto 7),
se resolvieron con cifra puntual: **fracción de GMV incremental → 20%**
(extremo conservador del rango 20-30% original, elegido por el
multi-tenanting confirmado en el punto 3 de esta memoria — no el punto
medio); **CAPEX → USD 900.000** (punto medio del rango original, sin
sesgo direccional porque no aplica la misma lógica de conservadurismo que
al GMV incremental); **margen bruto retail → 22%** (conocimiento general
de industria, sin fuente específica de Argentina/COTO — junto con el
punto 7, el supuesto con menos respaldo de los 5). Las 5 decisiones,
completas con su razonamiento, están consolidadas en
`materias/mt25-estrategias-negocios-internet/business-plan-coto/plans/supuestos-resueltos.md`
— ese archivo es la fuente que debe usar `tp-plan-writer` para el anexo
de supuestos del documento final, reemplazando la lista de preguntas
abiertas de §12.

## 8. No hay componente de IA en el alcance base del producto

`plan-creacion-de-valor.md` deja explícito que la personalización descripta
(ofertas por historial de compra) requiere analítica/reglas, no
necesariamente IA generativa — se decidió no forzar un componente de IA
"porque queda bien" en una materia de estrategia de internet que no lo
pide en el checklist (a diferencia del TP de MT10, que sí tiene IA como eje
central — no mezclar el framing de ese TP con este, son entregables
independientes aunque el tema de fondo se solape).
