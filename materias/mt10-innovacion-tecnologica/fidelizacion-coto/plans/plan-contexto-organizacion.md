---
entregable: mt10-innovacion-tecnologica/fidelizacion-coto
checklist_item: "Contexto de la organización: industria elegida, desafíos y oportunidades actuales de mercado, estado de los competidores."
tipo: síntesis (NO es diseño de solución — es organizar lo ya investigado para que tp-plan-writer redacte)
research_usado:
  - coto-dimension-negocio.md
  - coto-ecosistema-actores.md
  - coto-modelo-economico-unit-economics.md
  - competidores.md
  - coto-redes-sociales-omnicanalidad.md
  - catedra-contexto-tp.md
---

# Contexto de la organización — síntesis para redacción

Este archivo no propone nada nuevo. Organiza lo que ya está confirmado en
`research/` en la estructura que pide el checklist (industria → desafíos/
oportunidades → estado de competidores), para que `tp-plan-writer` lo
convierta directamente en la sección del documento. Cada afirmación remite
al archivo de research donde está fundamentada — no se agrega ningún dato
nuevo acá.

## 1. Industria elegida

Retail de supermercados en Argentina. Empresa de referencia: **COTO
C.I.C.S.A.**, líder del mercado con **22,3% de participación** (rango
21,5%–23,5%), por encima de Carrefour (21%), Cencosud (17%), La Anónima
(12,5%), Día (9%) y Changomás (8,7%). *(`coto-dimension-negocio.md`)*

Rasgos distintivos de COTO frente al resto de la industria:
- Integración vertical única en el sector: producción agrícola-ganadera,
  frigoríficos propios con capacidad de exportación, distribución logística
  centralizada, venta minorista masiva.
- **Coto Digital es el líder indiscutido de e-commerce de supermercados**
  en Argentina (+20% de tráfico mensual, +50% de volumen de pedidos frente
  al competidor directo).
- Estructura de red: 120–121 sucursales, 17.000–22.000 empleados, 1 gran
  centro de distribución, 3 plantas procesadoras.
*(`coto-dimension-negocio.md`)*

Nota de framing sugerida para la redacción: COTO no es una empresa que
necesite "entrar" al retail digital — ya lo lidera en volumen de e-commerce.
El desafío que plantea este TP no es de escala ni de infraestructura básica,
es de **integración de datos entre canales que hoy operan separados**
(ver punto 2).

## 2. Desafíos actuales de mercado (con evidencia, no genéricos)

### 2.1. Pérdida de trazabilidad de cliente en el canal presencial (el desafío central)

- **Entre el 35% y el 45% de las transacciones presenciales en salón se
  liquidan sin que el cliente consigne su DNI o carnet de Comunidad
  COTO.** El ticket queda disociado del perfil del cliente.
- La adquirencia bancaria externa (tarjetas de terceros) bloquea la
  visibilidad de los hábitos de consumo del cliente fuera de las
  sucursales COTO.
- Los eventos de navegación de Coto Digital **no están integrados
  analíticamente en tiempo real** con la interacción presencial del mismo
  cliente en tienda física.
*(`coto-modelo-economico-unit-economics.md`, `coto-ecosistema-actores.md`)*

Esto no es un problema de tecnología de punta — es un problema de
**identificación del cliente en el momento de la transacción**, y es la
justificación de negocio más concreta y medible para cualquier inversión en
datos/IA que se proponga en este TP: sin resolverlo, cualquier componente
de segmentación o personalización tiene un techo bajo de entrada.

### 2.2. Fricción entre canales, más allá de presencial/digital

- Redes sociales (Instagram ~808K seguidores, Facebook ~1,1M) funcionan
  como vidriera de marca y canal de push de ofertas, con derivación a
  WhatsApp — pero **no hay evidencia pública de que esa interacción
  alimente el perfil de Comunidad COTO/TCI**, ni de un chatbot
  conversacional en ningún canal social o en WhatsApp (que hoy son
  "Channels" de difusión unidireccional, no chat bidireccional).
- La atención de reclamos vía redes sociales deriva sistemáticamente al
  0800 telefónico (Fonocoto) en vez de resolverse en el mismo canal — no
  "cierra el loop" dentro del ecosistema digital de COTO.
*(`coto-redes-sociales-omnicanalidad.md`)*

Esta es la misma fricción presencial/digital del punto 2.1, repetida (y
probablemente agravada) entre redes sociales y el resto del ecosistema.

### 2.3. Sistemas legacy y dificultad de integración en tiempo real

Mencionado explícitamente por el mapa de actores del dossier: "Sistemas /
Data COTO" enfrenta sistemas legacy heredados y dificultad de integración
en tiempo real como fricción propia. *(`coto-ecosistema-actores.md`)*

### 2.4. Estructura de costos de pago de terceros

45% de las ventas se paga con tarjeta de crédito de terceros (adquirencia
1,2%–1,8% + IVA) y 23,9% con débito — cada punto de migración hacia la
Tarjeta TCI propia es margen que hoy se fuga a bancos y procesadoras
externas. *(`coto-modelo-economico-unit-economics.md`)*

## 3. Oportunidades actuales de mercado

- **Activo propio ya existente y subutilizado como fuente de dato**: la
  Tarjeta TCI retiene el 100% del valor dentro del grupo económico (no hay
  fuga de comisión a terceros) y puede construir trazabilidad
  transaccional absoluta del cliente — hoy esa capacidad no está explotada
  a nivel de plataforma de datos unificada. *(`coto-modelo-economico-unit-economics.md`)*
- **Liderazgo de e-commerce ya consolidado** (Coto Digital) como base de
  usuarios digitales activos sobre la que construir, no un canal a crear
  desde cero. *(`coto-dimension-negocio.md`)*
- **Ventana competitiva todavía abierta en wallet propia** (ver punto 4):
  solo 2 de 5 competidores relevados tienen wallet con cashback/rendimiento;
  COTO puede posicionarse rápido si actúa, pero la ventana se cierra a
  medida que Carrefour y Cencosud escalan adopción.
- **Beneficio ancla ya fuerte y diferenciado**: 15% de descuento
  martes/jueves de Comunidad COTO cubre 2 días por semana, más cobertura
  semanal que el 20% de un solo día de ClubDia (Día) — activo de marca
  sobre el que construir, no que inventar. *(`competidores.md`)*

## 4. Estado de los competidores (síntesis de `competidores.md`)

| Competidor | Market share | ¿Wallet propia? | Diferencial confirmado |
|---|---|---|---|
| Carrefour Argentina | 21% | **Sí** — Cuenta Digital Mi Carrefour (set. 2025) | 43% TNA sobre saldo, 10% descuento fin de semana, banco propio con ~1M de clientes financieros, red Mastercard completa |
| Cencosud (Jumbo/Disco/Vea) | 17% | **Sí** — CencoPay (desde 2023) | 2% cashback diario + programa de puntos Jumbo Más en paralelo (dos mecanismos de fidelización simultáneos) |
| La Anónima | 12,5% | No confirmada | Asistente virtual y seguros integrados en la app |
| Día Argentina | 9% | No confirmada | ClubDia: ~3,9–4M socios declarados, 50% ya migrado a tarjeta digital |
| Changomás | 8,7% | No (usa Cuenta DNI de Banco Provincia) | Beneficios extra-categoría (gastronomía, entretenimiento) |
| **COTO** | **22,3% (líder)** | **No confirmada** — pagos digitales vía Mercado Pago (tercero) | 15% descuento martes/jueves (Comunidad COTO) + TCI (crédito propio, no wallet) |

**Lectura para la redacción**: COTO es el líder de mercado y de e-commerce,
pero es el **único de los dos líderes de participación (COTO y Carrefour)
sin wallet digital propia** — depende de un tercero (Mercado Pago) para
pagos digitales en caja, exactamente el punto donde Carrefour y Cencosud ya
construyeron una ventaja de dato propio y de retención de margen
financiero. Los otros tres competidores (La Anónima, Día, Changomás) están,
en este frente específico, al mismo nivel que COTO — la brecha real es
contra los dos líderes que sí wallet-earon, no contra el promedio del
mercado.

## 5. Nota metodológica para tp-plan-writer

- La cifra de "Miembros de Comunidad COTO" (3,5M–6,5M) está marcada como
  **[SV] — supuesto pendiente de validación** en el dossier original. Si se
  usa en la sección de contexto, debe ir con esa salvedad explícita, no como
  hecho confirmado.
- No hay research de competidores en redes sociales con la misma
  profundidad que el resto — lo que hay en `coto-redes-sociales-
  omnicanalidad.md` sección 4 es deliberadamente liviano y así debe
  presentarse.

## 6. Cómo estos desafíos/oportunidades se traducen en los 6 planes de solución

Este contexto general no se repite en cada plan de `plans/` — cada uno abre
con el ángulo específico de este mismo panorama que su componente ataca:
la pérdida de trazabilidad presencial (2.1) es la restricción de partida de
`plan-segmentacion-tiempo-real.md` y la causa raíz que
`plan-big-data-analytics.md` resuelve con una plataforma de datos
unificada; la fricción entre canales más allá de presencial/digital (2.2)
es el problema central de `plan-redes-sociales-omnicanalidad.md`; los
sistemas legacy fragmentados (2.3) son el problema técnico de
`plan-big-data-analytics.md`; la fuga de margen a medios de pago de
terceros (2.4) y la ventana competitiva de wallet (punto 4) son el
argumento de "por qué ahora" de `plan-roi.md`; y las ineficiencias
puntuales de campañas y atención al cliente (procesos #8 y #6 del
inventario, no desarrollados acá) son atacadas respectivamente por
`plan-plataforma-demanda-campanas.md` y `plan-atencion-cliente.md`.
