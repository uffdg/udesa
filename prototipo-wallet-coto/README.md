# prototipo-wallet-coto

Prototipo funcional de la Wallet COTO — sirve como demo compartida para
dos TPs de dos materias distintas que abordan la misma idea de negocio
desde ángulos diferentes:

- `materias/mt10-innovacion-tecnologica/fidelizacion-coto/` — plataforma
  de fidelización (segmentación RFM, campañas con IA, atención al
  cliente).
- `materias/mt25-estrategias-negocios-internet/business-plan-coto/` —
  business plan/pitch de la wallet como producto (creación y captura de
  valor, moats).

**No es parte del negocio real de COTO.** Es un prototipo académico con
datos 100% sideados (ficticios), sin backend ni base de datos real —
Vite + React + TypeScript + Tailwind, con el estado en el cliente
(Zustand + localStorage). Pensado para una demo en vivo, no para
producción.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`. Desde ahí hay dos vistas:

- **`/member`** — la wallet del cliente: onboarding, home, pagar en caja
  (con beneficio auto-aplicado), beneficios, recompra rápida. El
  selector arriba de la pantalla del teléfono permite simular la sesión
  de cualquiera de los 18 clientes sideados.
- **`/manager`** — el panel de negocio: segmentación RFM en tiempo real,
  gestión de campañas (crear → aprobar → enviar, con aprobación humana
  obligatoria) y analytics de adopción/redención.

## El truco de la demo: sincronización en vivo entre pestañas

El estado vive en `localStorage` y se sincroniza entre pestañas del
mismo navegador vía el evento `storage` (ver `src/lib/crossTabSync.ts`).
Para la demo real ante manager y member:

1. Abrí `/manager` en una ventana/pestaña.
2. Abrí `/member/pagar` en otra, simulando un cliente.
3. Confirmá un pago — el feed de "Actividad en vivo" del manager y las
   métricas de Analytics/Segmentos se actualizan solas, sin recargar.

No hay backend: es el truco que "funciona" para una demo de pitch, no
una arquitectura real de producción (eso está en `plan-financials.md`
de cada TP, no acá).

## Qué está modelado (y de dónde sale)

Todo el contenido de negocio viene de los planes ya diseñados en
`plans/` de ambos entregables — no se inventó nada nuevo acá, solo se
tradujo a interacción:

- **Segmentación RFM** (Campeones/Leales/Potenciales/En riesgo/Dormidos)
  — `mt10-fidelizacion-coto/plans/plan-segmentacion-tiempo-real.md`.
- **CU-01 simulado** (elegir el mejor beneficio disponible al pagar) —
  mismo plan, sin la infraestructura real de latencia/Redis/streaming
  que ahí se describe — acá es solo la lógica de decisión.
- **CU-05 simulado** (campañas por segmento con aprobación de gerente
  antes del envío) —
  `mt10-fidelizacion-coto/plans/plan-plataforma-demanda-campanas.md`.
- **Flujo de wallet de 5 pantallas** (onboarding, home, pagar, beneficios,
  recompra) — `mt25-business-plan-coto/plans/plan-creacion-de-valor.md`.
- **Reglas de beneficio y quién las financia** (COTO / Proveedor /
  Banco-PSP) — mismo plan + `plan-captura-de-valor.md`.
- **153 sucursales totales** (acá se sidea una muestra de 5) —
  `mt25-business-plan-coto/plans/plan-problema-contexto-oportunidad.md`.

Los KPIs de referencia en `/manager/analytics` (3% de redención actual,
12% objetivo, 5% de error de medio de pago) son las cifras citadas del
dossier COTO en los planes de `mt10-fidelizacion-coto` — el prototipo
las muestra como referencia, no las reproduce exacto sobre el dato
sideado.

## Qué NO está en el alcance de este prototipo

- Atención al cliente (CU-06 de `plan-atencion-cliente.md`) — no se
  incluyó, la demo se limitó a member + manager como pidió el equipo.
- Cualquier integración real (POS, PSP/BaaS, Core bancario) — todo
  simulado en el cliente.
- Persistencia real: `localStorage` no sincroniza entre dispositivos
  distintos, solo entre pestañas del mismo navegador/perfil.
