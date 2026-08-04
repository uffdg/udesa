---
name: how-to-identify-moats-network-effects
description: Protocolo para identificar y argumentar moats, network effects, mecanismos de monetización y barreras de entrada de una idea de negocio concreta, anclado en los frameworks reales de la clase de MOATS de la maestría — no una explicación genérica de manual.
trigger: Cuando tp-solution-architect (o quien esté diseñando la solución) necesita argumentar la "captura de valor" — moats, network effects, monetización, barreras de entrada — de cualquier entregable de la maestría cuya consigna lo pida.
---

# Cómo identificar y argumentar moats y network effects

Fuente principal: `UdeSA - MOATS - 042025.pdf` — Clase 4 de MT25 Internet
Business Strategy (IBS), "MOATS / Evolución Modelos de Negocio" (prof.
María Zavalski). Bibliografía interna del material: Pat Dorsey (*The
Little Book That Builds Wealth*), Hamilton Helmer (*7 Powers*), Michael
Mauboussin (*Measuring the Moat*), James Currier & NFX Team (*The
Network Effects Bible*, nfx.com), breadcrumb.vc, Jim Collins (*Good to
Great*), W. Brian Arthur (*Increasing Returns and the New World of
Business*, HBR 1996). Cuando la consigna de un entregable pide
argumentar "cómo la empresa captura parte del valor generado" y "network
effects/barreras de entrada" (ejemplo: MT25 business-plan-coto, criterio
"Captura de valor"), una audiencia de directorio/inversores va a
cuestionar cualquier moat que suene a "somos los mejores" — hace falta un
framework, no una afirmación.

## 1. Qué es un moat y cómo se identifica en un modelo concreto

El material arranca descartando **falsos moats** — cosas que un equipo
suele presentar como ventaja competitiva pero que no son estructuralmente
defendibles: un **producto** mejor (copiable), buena **ejecución** (no es
defendible per se), tener **cuota de mercado** (consecuencia, no causa de
un moat), o un buen **management** (no es estructural). Antes de escribir
"nuestro moat es X" en un plan, chequear que X no caiga en esta lista.

La pregunta que reemplaza a "¿tenemos una ventaja hoy?" es: **¿qué le
impide a un competidor bien financiado replicar esto en 2-3 años?** El
material lo enmarca con el concepto de **durabilidad**: `Durability =
Network Effects + Economies of Scale + Brand + Embedding`, con el dato
citado de NfX de que, en las tech companies analizadas, el 96% del valor
de mercado se crea *después* del año 10 — la ventaja inicial importa
menos que la durabilidad de la ventaja. Estos cuatro componentes se
pueden **combinar entre sí** para mejorar la defensibilidad total (ej.
network effect + marca + switching cost por embedding).

## 2. Network effects: el moat por excelencia en tech

El material dedica la mayor parte del desarrollo a network effects, con
esta idea explícita como punto de partida: **"Network effects are about
retention and defensibility. Viral effects are about getting new users
to use your product"** — no confundir viralidad (adquisición) con network
effect (retención/defensibilidad), son cosas distintas.

### Tipos de network effects (Network Effects Map, NfX)

El material clasifica los network effects en capas, de más simple a más
compleja, combinables entre sí y con otros moats (brand, embedding,
scale):

- **Direct (directos)** — todos los nodos son iguales, descriptos por la
  Ley de Metcalfe (`V=n²`, vs. Sarnoff `V=n` y Reed `V=2ⁿ`). Subtipos:
  - *Physical*: nodos físicos, fácil de embeber y escalar, tienden a
    monopolio/servicios nacionalizados (trenes, teléfono, electricidad,
    banda ancha).
  - *Protocol*: estándar declarado, adopción masiva post-masa-crítica
    (VHS, Ethernet).
  - *Personal Utility*: identidad real del usuario ligada a una función
    crítica real (Slack, Messenger, SMS, Skype, Discord).
  - *Personal*: extensión de relaciones reales, difícil de abandonar,
    reputación e identidad en juego (Instagram, Snap).
- **2-Sided (dos lados)** — dos clases de usuarios que se benefician
  mutuamente:
  - *Marketplace típico* (eBay, Craigslist, Etsy, Airbnb, Fiverr,
    MercadoLibre): más compradores → más gasto → más vendedores → mayor
    inventario → más compradores (loop de efectos directos e
    indirectos). Muy defendible, pero **vulnerable a multi-tenanting**.
  - *Platform*: el lado de oferta construye productos que **solo
    existen** en la plataforma (iOS, Roblox, Obsidian, tiendas de GPTs).
  - *Asymptotic Marketplace*: el valor tiene techo con el uso de la red
    (Uber) — oferta comoditizada, alto riesgo de que un competidor
    alcance un nivel "good enough" para competir.
- **Data**: el valor del producto crece con más datos, y más uso genera
  más datos (Google, Waze, OpenAI, IMDb). El material describe el loop
  para IA: obtener datos → analizar → predecir → recibir feedback →
  mejores predicciones → más utilidad → más usuarios → más feedback →
  reinforcement learning.
- **Tech Performance**: la red mejora (más rápida/barata/fácil) cuanto
  más grande — BitTorrent.
- **Social**: las personas se agregan valor influyéndose. Subtipos:
  *Language* (crear el lenguaje de una categoría o el nombre de un
  producto, efecto winner-take-most), *Belief* (Bitcoin: "beliefs become
  more valuable to believers the more people believe" — se comparan con
  arena: en poca cantidad se dispersa, apilada se vuelve dura como
  piedra), *Bandwagon* (presión social a no quedar afuera — filas en
  Apple Store).

**Asimetría**: notar que muchos network effects de 2 lados son asimétricos
(ej. Lyft: pocos drivers, muchos riders) — la defensibilidad no es igual
para ambos lados.

### Debilidades de los network effects ("las 3 amenazas")

Ningún network effect es indestructible. El material nombra tres
amenazas concretas — usarlas como checklist antes de declarar un moat
"fuerte":

1. **Multi-tenanting**: el lado de oferta participa simultáneamente en
   varios marketplaces competidores (ejemplo citado: Lyft, Uber, Amazon,
   eBay) — diluye la exclusividad de la red.
2. **Negative network effects**: *Network Congestion* (la red se degrada
   con más uso, ej. tráfico) y *Network Pollution* (más ruido/spam con
   más usuarios, ej. newsfeed, Kijiji).
3. **Disintermediation**: oferta y demanda se conocen a través de la
   plataforma y después transaccionan por fuera de ella, evitando el
   intermediario.

## 3. Análisis estructural de marketplaces (defensibilidad y escalabilidad)

Para un modelo tipo marketplace/plataforma, el material da tres factores
estructurales a chequear explícitamente: **Cross-Border Network
Effects** (¿la red es hiperlocal o cruza geografías?), **Commoditized
Supply** (¿la oferta es intercambiable o diferenciada?), y **Naturaleza
del Engagement** (tamaño y frecuencia de las transacciones).

- **The Marketplace Matrix**: cruza *Differentiated Supply* vs.
  *Commoditized Supply* con *Hyperlocal* vs. *Cross-Border Network
  Effects*. El cuadrante "Holy Grail" (differentiated + cross-border) es
  el de Airbnb; el de mayor riesgo ("High Risk of Overfunding":
  commoditized + hyperlocal) es el de Uber/Deliveroo/Wag — oferta
  comoditizada facilita que un competidor alcance nivel "good enough",
  sube el costo de adquisición de oferta y baja los márgenes.
- **Matriz de Engagement**: transacciones grandes/pequeñas × frecuentes/
  infrecuentes. Bajo ticket promedio → baja sustentabilidad de unit
  economics y necesidad de alta frecuencia para el break-even; baja
  frecuencia → expone a ataques de competidores con promociones e
  impacta el CAC/lealtad.
- **Marketplaces fallidos citados como advertencia** (con financiamiento
  levantado antes de fracasar): Shyp ($60M), Homejoy ($60M), Kitchensurfing
  ($20M), Wash.io ($15M) — el material atribuye el fracaso a
  hiperlocalidad, oferta comoditizada (facilita multi-tenanting), no usar
  estrategia SaaS, y alta desintermediación → dependencia extrema del
  engagement.

## 4. Flywheels: cómo armarlo y explicarlo en un pitch

El material define el flywheel como una dinámica **triggered by network
effects**: `More Participants (mayor densidad de red) → Product Value
Increases (mayor engagement + satisfacción + trust = mayor LTV) → Higher
Organic Search & Referrals (menor CAC) → More Participants`. Para un
pitch, la forma defendible de presentarlo no es dibujar el círculo
genérico, sino nombrar **qué mecanismo concreto del negocio** empuja cada
flecha (ej.: qué genera más participantes, qué hace que el valor del
producto suba con más uso, qué genera boca a boca orgánico).

El material también da el diagrama de crecimiento → unit economics:
`Users Acquired via Organic Search + Viral Coefficient → Growth: Word of
Mouth Coefficient → (Increased Network Density | Reduced CAC) →
Engagement and Retention Cohorts → Unit Economics: LTV/CAC Ratio`. Es
decir: un flywheel se demuestra, no se afirma — mostrando que LTV sube,
CAC baja, y el ratio LTV/CAC mejora a medida que la red gana escala.

## 5. Mecanismos de monetización

Acá el material es acotado: no desarrolla un catálogo completo de
modelos de monetización de plataformas. Lo que sí dice explícitamente es
que el LTV (y por lo tanto la elección de monetización) depende de
**cuatro palancas**: *ad load*, *basket size*, *frecuencia de compra* y
*take rate*. Para elegir un mecanismo defendible (suscripción, freemium,
comisión/take rate, ads, etc.) más allá de esas cuatro palancas, no
atribuir el catálogo completo a "la cátedra" — buscarlo en el research
del entregable activo o marcarlo explícitamente como criterio propio del
equipo. La regla dura del repo aplica también acá: no inventar que el
material cubre algo que no cubre.

## 6. Cómo medir esto (para que el moat no sea solo narrativa)

El material distingue **métricas pre-liquidez** (objetivo: alcanzar masa
crítica — funnel New Users → Conversion to Core Action → Retention
Cohorts vs. Lurkers/Inactive; para marketplaces: search-to-fill ratio,
tiempo de concreción, utilización/penetración de oferta) de **métricas
post-liquidez** (crecimiento y flywheel — K-factor, coeficiente boca a
boca, cohortes de engagement/retención creciendo en el tiempo, y la
consecuencia esperada: sube LTV, baja CAC, sube el ratio LTV/CAC a medida
que la red gana escala).

## 7. Barreras de entrada — cómo argumentarlas sin sonar genérico

No alcanza con decir "tenemos barreras de entrada". El framework da una
forma de argumentarlo en negativo: repasar la checklist de debilidades
(sección 2) y mostrar, caso por caso, por qué el modelo propio **no**
es vulnerable a multi-tenanting fácil, a negative network effects, ni a
disintermediación — y ubicar el modelo en la Marketplace Matrix
(sección 3) para mostrar en qué cuadrante de defensibilidad cae y por
qué. Si el modelo cae en el cuadrante de mayor riesgo (commoditized +
hyperlocal, como Uber), decirlo así y compensarlo con otro moat de la
lista de durabilidad (brand, embedding, scale) en vez de forzar un
network effect que no es tan fuerte.

## Reglas

- **Cada framework citado tiene que poder rastrearse al material real**
  (`UdeSA - MOATS - 042025.pdf`, Clase 4 MT25 IBS) — nunca escribir "la
  cátedra dice X" si no está en el material. Si hace falta un concepto
  que el material no cubre (ej. catálogo completo de mecanismos de
  monetización, ver sección 5), buscarlo en `research/` del entregable
  activo o marcarlo explícitamente como supuesto propio del equipo.
- **Aplicar el framework al modelo de negocio concreto del entregable**,
  no en abstracto: nombrar qué tipo de network effect tiene el caso real,
  a qué debilidad estructural está expuesto, y en qué cuadrante de la
  Marketplace Matrix cae — no un ensayo genérico sobre "qué es un moat".
- Nunca declarar un moat "fuerte" sin haber chequeado la checklist de
  debilidades (multi-tenanting, negative network effects,
  disintermediation) contra el caso real.
- Este análisis es **diseño de la solución**, no redacción del documento
  final: guardarlo en `plans/` dentro de la carpeta del entregable activo
  (`materias/<materia>/<entregable>/`), como parte del trabajo de
  `tp-solution-architect` — nunca redactarlo directo en `entregable/`
  (esa separación existe para que un moat mal fundado se detecte antes de
  llegar al documento final; ver `tp-workflow`).
