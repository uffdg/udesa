---
entregable: mt25-estrategias-negocios-internet/business-plan-coto
checklist_item: "Creación de valor para el cliente (cómo la solución genera
  valor, prototipos, beneficios y costo para el cliente)"
research_usado:
  - competidores-billeteras-argentina.md (mecanismos de beneficio de MP,
    MODO, Cuenta DNI — para diferenciar, no copiar)
  - competidor-uala.md (alcance de producto de un neobank, para marcar
    contraste de alcance)
  - market-sizing-billeteras-argentina.md (dato COTO Digital, base de
    clientes digitales existente)
depende_de:
  - plan-problema-contexto-oportunidad.md (problema concreto que resuelve
    esta propuesta de valor)
---

# Creación de valor para el cliente

## 1. Principio de diseño: no competir en amplitud de producto financiero

`competidor-uala.md` y `competidores-billeteras-argentina.md` dejan un
punto claro: Mercado Pago y Ualá ya ofrecen ecosistemas financieros
completos (inversión, crédito, seguros, cuenta remunerada) respaldados por
licencia bancaria o capital fintech de escala regional. COTO no tiene
licencia bancaria ni track record fintech — competir ahí es una batalla
perdida de entrada (mismo argumento que usa `plan-captura-de-valor.md`
para las barreras de entrada).

**Decisión de diseño**: la wallet COTO no compite como "banco digital
más chico". Compite como **la wallet que mejor conoce el historial de
compra real de supermercado del cliente** — algo que ni MP, ni MODO, ni
Ualá pueden ofrecer de forma nativa, porque ninguno de los tres tiene
visibilidad de línea de producto/góndola comprada, solo del movimiento de
dinero. Esto no es un dato confirmado en research (marcado ya como
supuesto del equipo en `plan-problema-contexto-oportunidad.md`, sección
2), pero es la hipótesis de valor central de todo este plan y debe leerse
con esa salvedad.

## 2. Propuesta de valor para el cliente

| Necesidad del cliente | Qué resuelve la wallet COTO | Por qué MP/MODO/Cuenta DNI no lo resuelven igual |
|---|---|---|
| "Quiero pagar rápido y sumar el beneficio sin hacer dos pasos" | Un solo flujo: escanear QR propio → pagar → aplicar automáticamente el beneficio que corresponde a ese cliente, sin presentar tarjeta de fidelización aparte ni depender de que el cajero aplique una promo manual. | MODO exige elegir el banco/tarjeta correcta para que aplique la promo del día; MP exige tener Meli+ activo para el cashback; Cuenta DNI tiene topes variables por rubro y calendario mensual — ninguno integra el paso de "acreditar beneficio" dentro del mismo tap de pago con reglas fijas y transparentes. |
| "Quiero beneficios que tengan que ver con lo que realmente compro" | Ofertas y descuentos personalizados en función del historial real de compra en COTO (categorías, frecuencia, ticket) — no un cupón genérico de rubro. | El mecanismo de Cuenta DNI es descuento % por rubro genérico con tope, igual para cualquier cliente que compre esa categoría — no diferencia por historial individual. El cashback de MP depende de la categoría promocionada por Meli+, no del patrón de consumo del cliente. |
| "No quiero cargar una tarjeta física de fidelización aparte de mi medio de pago" | La fidelización vive adentro del mismo instrumento de pago — no hay tarjeta física ni doble paso en caja. | Los reintegros de MP/MODO son promociones del medio de pago, no de un programa de fidelización propio de COTO — el cliente asocia el beneficio a la marca del tercero, no a COTO. |
| "Quiero reponer mi compra habitual rápido" | Integración con Coto Digital (el canal e-commerce ya existente y líder según fuente propia de COTO — 17 años, +30 mil artículos) para recompra rápida desde el historial de la wallet. | Ninguno de los tres competidores tiene integración con el catálogo o historial de compra de un supermercado específico — son medios de pago genéricos. |

## 3. Boceto de producto / flujo principal (descripción de UX, no código)

Cinco pantallas núcleo, pensadas para minimizar fricción de adopción
(punto crítico dado que MODO ya está "adentro" del banco sin fricción de
instalación — ver `plan-captura-de-valor.md`, debilidad de multi-tenanting):

1. **Onboarding**: alta simplificada vinculada a la tarjeta de
   fidelización de COTO existente si la tiene (evita empezar de cero),
   más KYC básico vía el partner de pagos elegido en `plan-financials.md`
   (no vía licencia bancaria propia — decisión de diseño explicada en
   `plan-captura-de-valor.md`). Sin costo de apertura.
2. **Home**: saldo/medio de pago disponible, acceso directo a "Pagar en
   caja", historial reciente de compras con detalle de ítems (no solo
   monto), y un carrusel de beneficios activos calculados sobre ese
   historial.
3. **Pagar en caja**: QR propio de COTO, interoperable (cumple el
   estándar BCRA de Transferencias 3.0 citado en
   `competidores-billeteras-argentina.md`, sección 0 — la interoperabilidad
   regulatoria ya bajó la barrera técnica para que un QR nuevo funcione).
   Un solo tap: escanea, paga, aplica automáticamente el beneficio
   correspondiente y suma puntos — sin pasos adicionales.
4. **Beneficios**: reglas fijas y visibles por cliente (no un calendario
   mensual genérico como Cuenta DNI) — "porque comprás X seguido, tenés Y"
   — con transparencia sobre cómo se calcula, a diferencia de los topes
   variables por campaña de MP/MODO.
5. **Lista de compras / recompra rápida**: integrado con el historial de
   compra y con el catálogo de Coto Digital, para resolver la compra
   recurrente sin fricción — apalanca un activo que COTO ya tiene (Coto
   Digital) en lugar de construir un catálogo nuevo desde cero.

**Nota de alcance explícita**: no se incluye inversión, crédito ni cuenta
remunerada en el alcance inicial — coherente con la decisión de la
sección 1 de no competir en amplitud financiera. Cualquier expansión hacia
crédito de consumo (ej. financiamiento de la compra) queda mencionada como
optionalidad futura en `plan-captura-de-valor.md` y `plan-financials.md`,
no como parte del producto base.

## 4. Costo para el cliente

| Tipo de costo | Detalle | Marcado como |
|---|---|---|
| Monetario | Sin costo de apertura ni mantenimiento — se asume gratis para el usuario final, igual que MP, MODO y Cuenta DNI (los tres son gratuitos según el research de competidores). | Supuesto del equipo, consistente con el estándar de mercado observado en research, no confirmado con una política de precios propia de COTO (no existe todavía). |
| Fricción de adopción | Instalar una app nueva y dar de alta un medio de pago — el costo real más alto no es dinero, es tiempo/atención. MODO no tiene este costo (está "adentro" del banco que el cliente ya usa) — es la ventaja competitiva más dura de igualar, no se puede resolver solo con UX. | Lectura directa del research de competidores (`competidores-billeteras-argentina.md`, sección 2.6). |
| Datos personales | El cliente cede historial de compra detallado a cambio de personalización — costo de privacidad implícito que hoy también cede (de forma menos visible) a MP/MODO al pagar con esos medios. | Consideración propia del equipo — no hay research de política de privacidad de COTO. |
| Riesgo de fragmentación | Adoptar una wallet más entre las 3-4 que ya usa (según Kantar, 91% usa algún medio no efectivo, muchos usan más de uno) — el cliente no necesariamente abandona MP/MODO, puede simplemente sumar una wallet más. | Riesgo nombrado explícitamente en `plan-captura-de-valor.md` como la debilidad central de multi-tenanting — no se resuelve en este plan, se acepta como límite realista de la propuesta. |

## 5. Qué NO resuelve este plan (límites honestos)

- No resuelve por qué un cliente dejaría de usar MP o MODO — resuelve por
  qué **sumaría** la wallet COTO además de esos medios, apostando a que el
  beneficio personalizado gane el share of wallet con el tiempo (ver
  curva de adopción conservadora del SOM en
  `plan-problema-contexto-oportunidad.md`, sección 3.3).
- No incluye, en esta fase, ningún componente de IA generativa o
  automatización avanzada — la personalización descripta en la sección 2
  requiere segmentación básica sobre historial de compra (analítica,
  reglas), no necesariamente un modelo de IA sofisticado. Si el equipo
  decide agregar un componente de IA más adelante (ej. recomendación
  predictiva de próxima compra), debe justificarse con qué problema
  puntual resuelve esa IA y qué dato requiere — no se agrega acá porque
  "queda bien" en un pitch de una materia de estrategia de internet.
