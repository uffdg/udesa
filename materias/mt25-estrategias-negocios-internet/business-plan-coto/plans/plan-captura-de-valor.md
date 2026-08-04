---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
checklist_item: "Captura de valor (mecanismos de monetización, modelo de
  negocio, network effects, barreras de entrada)"
research_usado:
  - competidores-billeteras-argentina.md (alianzas activas COTO-MP,
    COTO-MODO — la amenaza estructural de multi-tenanting es un hecho
    hoy, no hipotético)
  - competidor-uala.md (por qué competir como neobank completo no es
    viable — barrera de licencia bancaria)
skill_aplicada: how-to-identify-moats-network-effects
depende_de:
  - plan-problema-contexto-oportunidad.md (problema y SAM/SOM que este
    plan monetiza)
  - plan-creacion-de-valor.md (mecanismo de beneficio que sostiene el moat)
---

# Captura de valor: moat, monetización y barreras de entrada

Este plan aplica el framework real de la Clase 4 de MT25
(`.claude/skills/how-to-identify-moats-network-effects/SKILL.md`) al caso
concreto de una wallet COTO — no es un desarrollo genérico de manual.

## 1. Chequeo de falsos moats (antes de declarar cualquier ventaja)

El material descarta explícitamente producto, ejecución, cuota de mercado
y management como moats "per se". Aplicado al caso: "nuestra wallet tiene
mejor UX" o "vamos a ejecutar mejor" **no son moats** bajo este framework
— no se usan como argumento de defensibilidad en ningún otro plan de este
entregable.

## 2. ¿Qué tipo de network effect tiene (si tiene alguno)?

**Lectura honesta**: una wallet de supermercado propia **no es** un
network effect clásico de dos lados (no conecta compradores con
vendedores externos dentro de la app — COTO es el único vendedor). No
aplica la Ley de Metcalfe de un marketplace tipo MercadoLibre/Ualá Bis.

Lo más cercano al framework es un **network effect de datos, débil y
unilateral**: más clientes usando la wallet → más historial de compra
capturado → mejor personalización de beneficios → mayor frecuencia/
retención → más datos. Es el mismo loop que describe el material para
Google/Waze, pero con una diferencia estructural importante que hay que
decir así de claro en el pitch: en Google/Waze, **el producto mejora para
todos los usuarios** con más datos agregados (más tráfico = mejores rutas
para cualquiera). En la wallet COTO, el beneficio de "más datos" es
**individual, no colectivo** — que un cliente use más la wallet no mejora
la experiencia de otro cliente distinto. Por eso se marca como **network
effect débil/indirecto, no un moat fuerte por sí solo** — no se le puede
pedir al pitch que cargue la defensibilidad completa sobre este punto.

## 3. Moats de compensación (durabilidad = Network Effects + Scale + Brand + Embedding)

Dado el network effect débil, la defensibilidad real tiene que apoyarse
en los otros tres componentes de durabilidad del framework:

- **Brand**: COTO ya tiene una relación de compra física, recurrente y de
  confianza con su clientela — no hay que construir la marca desde cero
  como sí tuvo que hacer Ualá (8 años, capital de fondos globales, para
  llegar a 7,5M de clientes en Argentina, según `competidor-uala.md`).
  Esto reduce el costo de adquisición de la wallet frente a un
  competidor que entra sin base de clientes.
- **Embedding**: el historial de compra, puntos acumulados y beneficios
  personalizados descriptos en `plan-creacion-de-valor.md` generan un
  costo de cambio creciente en el tiempo — cuanto más usa el cliente la
  wallet, más "pierde" (beneficios acumulados, personalización afinada)
  si deja de usarla. Este es el mecanismo concreto que sostiene la
  retención, más que el network effect de datos en sí.
- **Scale**: no aplica como economía de escala tecnológica clásica (COTO
  no tiene ventaja de costo marginal decreciente en infraestructura de
  pagos frente a un competidor grande) — pero sí aplica como **escala de
  distribución física**: 153 sucursales (cifra definitiva del equipo, ver
  `plans/supuestos-resueltos.md`; base usada en `plan-ejecucion.md` y
  `plan-problema-contexto-oportunidad.md`, sección 3.4) y una base de
  clientes que ya visita esas sucursales con
  frecuencia es una ventaja de distribución que un entrante nuevo (otra
  fintech, otro retailer) no tiene de entrada.

**Conclusión de esta sección**: el moat de la wallet COTO no es "network
effect fuerte" — es **brand + embedding + escala de distribución física**,
con un network effect de datos débil como complemento, no como pilar
central. Esto es coherente con el framework: la Clase 4 explícitamente
permite combinar componentes de durabilidad en vez de depender de uno solo.

## 4. Debilidades — chequeo de las 3 amenazas del framework

| Amenaza | ¿Aplica al caso COTO? | Detalle |
|---|---|---|
| **Multi-tenanting** | **Sí, es la amenaza central y ya está confirmada como hecho, no como riesgo hipotético.** | `competidores-billeteras-argentina.md` confirma que MP y MODO ya son medios de pago aceptados y activamente promocionados en las sucursales de COTO — nada impide que el cliente siga pagando con esos medios en la misma caja donde existe la wallet COTO. Además, por el mandato de interoperabilidad QR del BCRA (sección 0 del research de competidores), COTO no podría negarse a aceptar otros medios de pago aunque quisiera forzar exclusividad. La wallet COTO **no reemplaza** a MP/MODO en el checkout, compite por una porción del share of wallet del cliente. |
| **Negative network effects** (congestión, pollution) | No aplica de forma relevante — no es una red social ni un feed, no hay riesgo de saturación o spam por más usuarios. | — |
| **Disintermediation** | Riesgo bajo — no es un marketplace de dos lados donde oferta y demanda puedan "saltarse" a la plataforma; COTO es la única contraparte de la transacción (vende directamente, no intermedia entre terceros). | — |

**Consecuencia para el pitch**: no se puede prometer "vamos a sacar a
MP/MODO del checkout de COTO" — eso ya no es viable ni regulatoriamente
(interoperabilidad QR obligatoria) ni comercialmente (alianzas activas y
vigentes). El argumento defendible es **"ganar share of wallet de forma
progresiva, no exclusividad"** — que es exactamente la lógica detrás de
la curva de adopción conservadora del SOM (5%→15%→25% en 3 años, ver
`plan-problema-contexto-oportunidad.md`, sección 3.3), no una curva que
asuma desplazamiento total de la competencia.

## 5. Ubicación en la Marketplace Matrix (aplicabilidad parcial)

La Marketplace Matrix del framework (Differentiated/Commoditized Supply ×
Hyperlocal/Cross-Border) está pensada para marketplaces de dos lados —
aplica solo parcialmente acá, porque la wallet COTO no es un marketplace.
Aun así, es útil para nombrar el riesgo estructural más cercano: si la
propuesta de valor de la wallet se redujera a "otro medio de pago con
descuento" (sin la personalización de la sección 2 de
`plan-creacion-de-valor.md`), caería en el cuadrante de mayor riesgo del
framework — oferta comoditizada (cualquier billetera ofrece descuentos) en
un contexto hiperlocal (una sola cadena, un solo país) — el mismo
cuadrante que el material marca como el de Uber/Deliveroo/Wag, alto
riesgo de que un competidor alcance nivel "good enough". Por eso el
diseño de producto en `plan-creacion-de-valor.md` insiste en la
personalización basada en historial real de compra como diferenciador —
sin eso, la wallet COTO no tiene ninguna defensibilidad real frente a
Cuenta DNI (que ya tiene un mecanismo de descuento por rubro para
supermercados).

## 6. Mecanismos de monetización — las 4 palancas aplicadas al caso

El material de cátedra da 4 palancas (ad load, basket size, frecuencia,
take rate) sin desarrollar un catálogo completo de modelos de
monetización — la skill exige no inventarle a la cátedra un desarrollo que
no tiene. Se aplican las 4 palancas al caso puntual:

| Palanca | Aplicación al caso COTO | Peso relativo |
|---|---|---|
| **Frecuencia** | Palanca **primaria**. Un supermercado monetiza mucho más por visitas recurrentes y consolidación de share of wallet que por comisión de transacción — la wallet nudgea al cliente a comprar más seguido en COTO en lugar de repartir sus compras entre COTO, Carrefour, Día, etc. (beneficios personalizados por frecuencia, ver `plan-creacion-de-valor.md`). | Alta |
| **Basket size** | Palanca secundaria — cross-sell vía recomendaciones/lista de recompra dentro de la wallet (integrado con Coto Digital) puede subir el ticket promedio por visita. No hay dato de elasticidad de COTO para cuantificar esto — se deja cualitativo en este plan, sin un % (ver `plan-financials.md` para cómo se trata en el modelo). | Media |
| **Take rate** | **No aplica como modelo de marketplace** (COTO no cobra comisión a un vendedor externo — es el único vendedor). El "equivalente" de take rate en este negocio es el margen retail normal de COTO sobre las ventas que la wallet ayuda a generar/retener, no una comisión nueva. | Baja/no aplica como palanca independiente |
| **Ad load** | Palanca secundaria y opcional: retail media — venta de espacios promocionales personalizados a proveedores/marcas (CPG) dentro de la wallet, apalancando la relación comercial que COTO ya tiene con sus proveedores. Consistente con que "retail media" es uno de los temas explícitos del programa de MT25 (`catedra-contexto-tp.md`) — pero no hay research específico de cifras de retail media para COTO o Argentina, por lo que se trata como línea de ingreso secundaria e ilustrativa en `plan-financials.md`, no como pilar del caso. | Baja, complementaria |

**Modelo de negocio resultante**: no es un modelo de comisión/marketplace
(a diferencia de Mercado Pago o Ualá Bis) ni de suscripción al cliente
final (no hay costo para el cliente, ver `plan-creacion-de-valor.md`,
sección 4). Es un modelo de **retención/margen retail incremental**, con
retail media como ingreso complementario — el valor que COTO captura no
es una comisión nueva, es la recuperación de margen y de relación de
cliente que hoy fluye (parcialmente) hacia terceros.

**Supuesto de trabajo ya resuelto por el equipo** (ver
`plan-problema-contexto-oportunidad.md`, sección 2, y
`plans/supuestos-resueltos.md`): se asume que COTO cofinancia ~60% del
costo de los reintegros de MP/MODO hoy, vía un presupuesto de comarketing
negociado — no confirmado con COTO, marcado explícitamente como supuesto
del equipo, no como hecho. Ese presupuesto, redirigido a la wallet propia
a medida que el GMV migra, es una fuente adicional de captura de valor
(ahorro, no ingreso nuevo) — cuantificado con una cifra puntual en
`plan-financials.md`, sección 3.2.

## 7. Barreras de entrada — para competidores, con honestidad sobre sus límites

Dos preguntas distintas, no una sola:

**(a) Barreras que protegen a COTO frente a MP/MODO/Ualá en su propio
checkout**: ya cubierto en las secciones 3-4 — brand + embedding +
distribución física, con la limitación explícita de que no hay
exclusividad posible (multi-tenanting).

**(b) Barreras que protegen a la wallet COTO frente a que otro retailer
(Carrefour, Cencosud, Día) copie la misma idea**: acá el framework obliga
a ser honesto en vez de sobrevender. **No hay una barrera estructural
fuerte** — cualquier cadena de supermercados grande podría construir una
wallet con el mismo mecanismo de personalización sobre su propio
historial de compra. Lo que compra tiempo, no lo compra indefinidamente,
es:
- **Ser first mover** entre las 3 cadenas grandes (si COTO se mueve antes
  que Carrefour/Cencosud) — consistente con el dato de NfX citado en el
  framework de que el 96% del valor de mercado en tech se crea después
  del año 10: la ventaja inicial importa menos que sostener la
  durabilidad (embedding acumulado, datos de historial) año tras año.
- **Comparado con Ualá** (que sí tiene una barrera dura y citada: licencia
  bancaria, 1 de 64/50/39 en cada país, 8 años de historial de scoring
  crediticio propio — `competidor-uala.md`), la wallet COTO **no** tiene
  ni necesita ese tipo de barrera regulatoria, porque no compite como
  banco — esto es una decisión de alcance de producto (sección 1 de
  `plan-creacion-de-valor.md`), no una barrera de entrada real.

**Conclusión honesta para el pitch**: el moat de esta propuesta es
moderado y basado en tiempo/ejecución (first mover + embedding
acumulado), no en una barrera estructural infranqueable — esto es
consistente con el framework de la Clase 4, que insiste en que la
durabilidad se demuestra con métricas de retención creciente en el
tiempo (sección 6 de la skill), no se declara de entrada.
