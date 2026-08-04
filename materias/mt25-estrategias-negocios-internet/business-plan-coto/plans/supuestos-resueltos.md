---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
tipo: anexo de supuestos resueltos — consolidado para tp-plan-writer
fecha: 2026-08-03
motivo: >
  El documento final (`entregable/business-plan-coto.md`, §12) dejaba 5
  gaps como preguntas abiertas para la ronda de Q&A. La persona a cargo
  del TP pidió resolverlos con una estimación concreta del equipo,
  marcada como supuesto (nunca como hecho), para poder avanzar sin dejar
  rangos ni discrepancias sin resolver. Este archivo consolida las 5
  decisiones y ya está reflejado en `plan-problema-contexto-oportunidad.md`,
  `plan-captura-de-valor.md`, `plan-ejecucion.md` y `plan-financials.md`.
uso: >
  Este archivo es la fuente que debe usar tp-plan-writer para armar un
  anexo de supuestos en el documento final, reemplazando la lista de
  preguntas abiertas de §12 por esta lista de decisiones con su
  razonamiento. Ninguna de estas cifras es un hecho confirmado por COTO
  — todas siguen siendo supuestos del equipo, ahora con un punto de
  trabajo único en vez de un rango o una pregunta sin resolver.
---

# Supuestos resueltos — business-plan-coto (MT25)

Cada uno de los 5 puntos de abajo estaba señalado como pregunta abierta o
rango sin resolver en los 5 planes y en el documento final. Se resuelven
acá con una cifra puntual y su razonamiento, para que el entregable no
dependa de un rango ni de una discrepancia sin reconciliar en ningún
lugar. **Ninguna de estas cifras tiene el mismo estatus que un dato
citado de una fuente primaria** — son decisiones de trabajo del equipo,
marcadas como tales, para poder avanzar con el modelo.

---

## 1. Cantidad de sucursales de COTO

**Cifra adoptada: 153 sucursales, en todo el entregable (era la base
mayoritaria; se elimina el uso residual de "+120" en
`plan-problema-contexto-oportunidad.md`, §1.2).**

**Fuente parcial**: sí, indirecta. `market-sizing-billeteras-argentina.md`
(sección 2.3) reporta tres cifras distintas encontradas en research:

| Cifra | Origen | Naturaleza |
|---|---|---|
| **153** | Suma explícita por zona de la propia página de COTO (coto.com.ar/sucursales): CABA 91, Zona Norte 18, Zona Sur 14, Zona Oeste 15, Costa Atlántica 5, Santa Fe 7, Entre Ríos 1, Neuquén 1, Mendoza 1 | Único de los tres con metodología trazable — se puede reconstruir el cálculo paso a paso desde la fuente |
| 242 | Total mostrado por la extracción automática de la misma página de COTO, sin conciliar con la suma por zona | Sin metodología visible — no se sabe si incluye formatos adicionales (exprés, mayorista, otro conteo), es un total "de vidriera" sin desglose que lo sostenga |
| +120 (o 220 según otra fuente no oficial) | Citado sueltamente en notas de prensa (La Nación, Infobae) sobre las alianzas comerciales con Mercado Pago y MODO — nunca se usa como un censo, solo como piso ("+120 sucursales") | No es un conteo — es una cifra mínima mencionada al pasar en una nota sobre otro tema |

**Razonamiento de la elección**: 153 es la única cifra con metodología
verificable (suma de un desglose público, explícito, por zona). 242 no
concilia con ese desglose y no tiene metodología propia visible — no se
descarta por ser "la más alta", se descarta porque no se puede reconstruir
de dónde sale. El "+120" de la prensa nunca pretendió ser un conteo
completo: es una cifra de piso usada al pasar en coberturas sobre
alianzas de pago, no sobre la red de sucursales en sí — no es una fuente
alternativa comparable a las otras dos, es una cifra de naturaleza
distinta (piso, no censo).

**Impacto en el entregable**: esta cifra es la base del roadmap de
rollout (`plan-ejecucion.md`) y de la cobertura de sucursales atada al
SOM (`plan-problema-contexto-oportunidad.md`, §3.3) — con 153 fija en los
tres planes que dependen de ella, la cobertura 59%/90%/100% de los años
1/2/3 queda consistente en todo el documento.

---

## 2. Fracción de GMV genuinamente incremental

**Cifra adoptada: 20% del GMV capturado cada año (extremo conservador del
rango 20-30% considerado originalmente).**

**Fuente**: ninguna — **100% supuesto del equipo**, sin benchmark citado
en el research de este entregable, ni antes ni ahora.

**Razonamiento de por qué 20% y no el punto medio (25%) ni el extremo
alto (30%)**: `plan-captura-de-valor.md` (§4) confirma, con research
citado, que el **multi-tenanting es la amenaza central y ya confirmada**
del caso — MP y MODO siguen aceptados en caja, no hay exclusividad
posible (mandato de interoperabilidad QR del BCRA), y la wallet COTO
compite por share of wallet, no por desplazamiento. Bajo ese marco, es
más probable que una porción grande del GMV que migra a la wallet propia
sea simplemente el mismo gasto cambiando de riel de pago (un hábito ya
instalado) que frecuencia o basket genuinamente nuevos. Elegir el extremo
bajo del rango, en vez del punto medio, es una decisión deliberada de
sesgar el modelo hacia el escenario conservador — coherente con
`how-to-build-roi-case`: no liderar un caso financiero con el supuesto
menos sólido del modelo inflado hacia el extremo optimista, frente a un
panel que ya vio el caso Ualá y va a presionar exactamente sobre este
punto.

**Impacto en el entregable**: en `plan-financials.md` §3.1, este 20% se
usa para calcular el spend genuinamente incremental sobre el GMV del SOM,
que luego se multiplica por el margen bruto retail (punto 5 de este
archivo) para llegar al margen retail incremental por año.

---

## 3. Quién financia hoy los reintegros de MP/MODO en el checkout de COTO

**Posición de trabajo adoptada: COTO cofinancia aproximadamente el 60%
del costo de los reintegros de MP (10-25%) y MODO (20-30%), vía un
presupuesto de comarketing negociado con cada wallet. Tasa de reintegro
combinada de trabajo: 20% (punto entre el rango de MP y el de MODO, sin
desagregar cuánto del GMV pasa hoy por cada wallet).**

**Fuente**: ninguna específica para COTO — **100% supuesto del equipo**.
`competidores-billeteras-argentina.md` confirma que las alianzas existen
y sus tasas de reintegro (secciones 1.4 y 2.5), pero no dice quién las
financia.

**Razonamiento**:
- COTO exhibe y promociona activamente estas campañas en su propio
  calendario de piso (ej. "MODO Tuesday", descuentos de lanzamiento con
  MP) — en la práctica comercial de retail, ese nivel de visibilidad y
  prioridad en el punto de venta normalmente implica una contrapartida de
  inversión del comercio, no solo del banco/wallet. Esto es lectura de
  comportamiento observado (research), no una fuente que lo confirme
  directamente.
- Reintegros de esa magnitud (10-30%) sobre el volumen de transacciones
  de una cadena grande como COTO serían difíciles de sostener
  unilateralmente por el banco/wallet sin coparticipación del retailer —
  es un patrón habitual en acuerdos de trade marketing entre grandes
  cadenas de retail y redes de pago en Argentina, aunque no se encontró
  una fuente que lo confirme puntualmente para el caso COTO-MP/MODO.
- Se eligió 60% (mayoría, no totalidad) como punto medio razonable entre
  "COTO no paga nada" (0%) y "COTO paga todo" (100%) — ninguno de los dos
  extremos es plausible: el hecho de que la promoción lleve la marca de
  MP/MODO y no la de COTO (ver `plan-problema-contexto-oportunidad.md`,
  §2) sugiere que el banco/wallet retiene el control creativo y por lo
  tanto probablemente una parte del financiamiento, pero la escala del
  reintegro sugiere que COTO no lo regala gratis tampoco.

**Esto sigue siendo el supuesto con menos base de los 5** — no hay ni
siquiera una fuente indirecta que lo sostenga, a diferencia de los otros
4 puntos de este archivo, que tienen al menos un anclaje parcial.

**Impacto en el entregable**: habilita el cálculo en `plan-financials.md`
§3.2 — **ahorro potencial redirigible = GMV migrado a la wallet propia
cada año × 20% (tasa de reintegro) × 60% (participación asumida de COTO)
= 12% del GMV migrado cada año**. Con el GMV del SOM (`plan-problema-
contexto-oportunidad.md`, §3.3): ≈ARS 2.748M (Año 1), ≈ARS 8.250M (Año
2), ≈ARS 13.752M (Año 3). Si el equipo confirma con COTO que la
participación real es 0%, esta línea completa desaparece del caso
financiero.

---

## 4. CAPEX inicial

**Cifra adoptada: USD 900.000 (punto medio de cada componente del rango
original 650.000–1.150.000): Plataforma USD 550.000, Integración USD
200.000, Compliance/KYC-AML USD 150.000.**

**Fuente**: ninguna — **100% supuesto del equipo**, ningún componente
está cotizado con un proveedor real.

**Razonamiento**: a diferencia del punto 2 (fracción de GMV incremental),
acá no hay una razón direccional para sesgar la estimación hacia el
extremo bajo o el alto — es una estimación de orden de magnitud de costo
de infraestructura sin cotizar, no un supuesto de comportamiento del
cliente donde el research (multi-tenanting) sugiera un sesgo conservador.
Ante la ausencia de una razón para inclinarse hacia un extremo, se toma
el punto medio de cada componente como cifra de trabajo, en vez de dejar
el rango o elegir arbitrariamente un extremo.

**Impacto en el entregable**: `plan-financials.md` §1 usa este número
como el CAPEX de referencia de Fase 0-1. Sigue siendo un punto de trabajo
a reemplazar en cuanto el equipo tenga al menos una cotización real de un
proveedor de PSP/BaaS.

---

## 5. Margen bruto retail

**Cifra adoptada: 22% (aplicado sobre el spend genuinamente incremental,
no sobre el GMV total).**

**Fuente**: ninguna específica de Argentina o de COTO — **100% supuesto
del equipo**, basado en conocimiento general de la industria de
supermercados (no en un research citado dentro de este entregable).

**Razonamiento**: es, junto con el punto 3, el supuesto con menor
respaldo del modelo. Se fija 22% porque está dentro del orden de magnitud
públicamente conocido para el margen bruto (no el margen neto) de una
cadena de supermercados — el margen neto del sector suele ser de un
dígito bajo (1-3%), pero el margen bruto (antes de gastos operativos,
alquileres, logística) suele ubicarse en el rango de 20-25% en cadenas de
supermercados a nivel internacional. Esta distinción entre margen bruto y
margen neto es la razón por la que se elige un punto (22%) y no se deja
la formulación ambigua "bajo/medio dígito" que tenía la versión anterior
de `plan-financials.md` — esa frase mezclaba, sin aclararlo, el orden de
magnitud del margen neto con el del margen bruto que en realidad se está
aplicando. **Sigue sin haber una fuente específica para Argentina o COTO
dentro del research de este entregable** — es el punto de mayor
incertidumbre de todo el modelo financiero, junto con el punto 3.

**Impacto en el entregable**: `plan-financials.md` §3.1 aplica este 22%
sobre el spend genuinamente incremental (GMV × 20%, punto 2 de este
archivo) para llegar al margen retail incremental por año: ≈ARS 1.008M
(Año 1), ≈ARS 3.025M (Año 2), ≈ARS 5.042M (Año 3).

---

## Resumen para uso rápido

| # | Gap | Cifra puntual adoptada | Fuente | Nivel de respaldo |
|---|---|---|---|---|
| 1 | Sucursales COTO | **153** | Parcial (suma verificable de la propia página de COTO) | Medio-alto — metodología trazable, aunque no confirmada por COTO directamente |
| 2 | Fracción de GMV incremental | **20%** (extremo conservador de 20-30%) | Ninguna — supuesto del equipo | Bajo, pero con lógica de negocio explícita (multi-tenanting) |
| 3 | Financiamiento de reintegros MP/MODO | **COTO cofinancia ~60%**, tasa combinada de reintegro 20% | Ninguna — supuesto del equipo | El más bajo de los 5 — ni siquiera hay anclaje indirecto fuerte |
| 4 | CAPEX inicial | **USD 900.000** (punto medio del rango) | Ninguna — supuesto del equipo | Bajo, pero sin sesgo direccional razonado (a diferencia del punto 2) |
| 5 | Margen bruto retail | **22%** | Ninguna específica de AR/COTO — conocimiento general de industria | Bajo — el otro punto de mayor incertidumbre junto con el punto 3 |

**Nota para `tp-plan-writer`**: al redactar el anexo del documento final,
mantener explícita la distinción entre el punto 1 (que tiene un anclaje
parcial en una fuente pública, aunque no confirmado por COTO) y los
puntos 2-5 (que son 100% construcciones del equipo sin ninguna fuente
externa). No presentar ninguno de los 5 como un hecho verificado — la
consigna de este TP y las reglas del repo exigen marcar cualquier cifra
sin fuente confiable como supuesto explícito del equipo, nunca como dato.
