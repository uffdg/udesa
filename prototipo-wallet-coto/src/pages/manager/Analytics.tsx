import { useWalletStore } from '../../store/useWalletStore'
import { KPIS_BASELINE_DOSSIER, SUCURSALES } from '../../data/seed'
import {
  formatoMoneda,
  formatoPct,
  shareMedioPago,
  tasaAdopcionWallet,
  tasaRedencion,
} from '../../lib/analytics'

type EstadoOperacion = 'normal' | 'atencion' | 'critico'

type SistemaMonitor = {
  nombre: string
  descripcion: string
  estado: EstadoOperacion
  disponibilidad: number
  latencia: string
  volumen: string
  alerta: string
  responsable: string
  color: string
}

type SucursalHeatmap = {
  id: string
  nombre: string
  zona: string
  transacciones: number
  gmv: number
  wallet: number
  intensidad: number
}

const SISTEMAS: SistemaMonitor[] = [
  {
    nombre: 'POS / Caja',
    descripcion: 'Terminales, QR, cupones y captura de fidelidad en sucursal.',
    estado: 'normal',
    disponibilidad: 0.997,
    latencia: '180 ms',
    volumen: '18.240 tx/h',
    alerta: '2 cajas con caída intermitente en GBA Sur',
    responsable: 'Operaciones tienda',
    color: 'var(--color-success)',
  },
  {
    nombre: 'Coto Digital',
    descripcion: 'Carrito online, login, checkout y promesas de entrega.',
    estado: 'atencion',
    disponibilidad: 0.982,
    latencia: '420 ms',
    volumen: '1.840 órdenes/h',
    alerta: 'Demora en validación de stock para frescos',
    responsable: 'E-commerce',
    color: 'var(--color-warning)',
  },
  {
    nombre: 'Core TCI',
    descripcion: 'Alta de tarjeta, límites, scoring y movimientos de cuenta.',
    estado: 'normal',
    disponibilidad: 0.994,
    latencia: '250 ms',
    volumen: '6.820 consultas/h',
    alerta: 'Sin degradaciones relevantes',
    responsable: 'Producto financiero',
    color: 'var(--color-success)',
  },
  {
    nombre: 'Stock',
    descripcion: 'Inventario por SKU, reposición, quiebres y sustituciones.',
    estado: 'critico',
    disponibilidad: 0.943,
    latencia: '1,8 s',
    volumen: '94.300 SKUs sync',
    alerta: '128 SKUs críticos sin confirmación de reposición',
    responsable: 'Supply chain',
    color: 'var(--color-brand)',
  },
  {
    nombre: 'Redes sociales',
    descripcion: 'Escucha, sentimiento, reclamos y campañas orgánicas.',
    estado: 'atencion',
    disponibilidad: 0.971,
    latencia: '12 min',
    volumen: '3.420 menciones/día',
    alerta: 'Pico de reclamos por demoras en entrega',
    responsable: 'CX + Marketing',
    color: '#2563eb',
  },
  {
    nombre: 'Proc. tarjetas propio (TCI)',
    descripcion: 'Adquirencia propia, autorización, conciliación y fraude.',
    estado: 'normal',
    disponibilidad: 0.996,
    latencia: '210 ms',
    volumen: '9.760 autorizaciones/h',
    alerta: 'Fraude bajo umbral, conciliación al día',
    responsable: 'Payments',
    color: 'var(--color-success)',
  },
]

const SERIE_OPERATIVA = [
  { hora: '08', pos: 92, digital: 42, tci: 54 },
  { hora: '09', pos: 118, digital: 58, tci: 66 },
  { hora: '10', pos: 145, digital: 73, tci: 82 },
  { hora: '11', pos: 168, digital: 92, tci: 96 },
  { hora: '12', pos: 184, digital: 118, tci: 110 },
  { hora: '13', pos: 196, digital: 126, tci: 122 },
  { hora: '14', pos: 181, digital: 112, tci: 116 },
  { hora: '15', pos: 164, digital: 104, tci: 101 },
]

const ALERTAS = [
  {
    prioridad: 'Alta',
    sistema: 'Stock',
    detalle: 'Quiebre probable en Bebidas y Limpieza para 5 sucursales de GBA.',
    accion: 'Activar sustitutos y limitar promesa en Coto Digital.',
  },
  {
    prioridad: 'Media',
    sistema: 'Redes sociales',
    detalle: 'Sentimiento negativo sube 18% por reclamos de entrega.',
    accion: 'Derivar casos con orden abierta a CX omnicanal.',
  },
  {
    prioridad: 'Media',
    sistema: 'Coto Digital',
    detalle: 'Checkout online duplica tiempo normal al consultar inventario.',
    accion: 'Monitorear latencia de stock y preparar fallback de cupos.',
  },
  {
    prioridad: 'Baja',
    sistema: 'POS / Caja',
    detalle: 'Dos terminales con reversos manuales sobre el promedio.',
    accion: 'Validar conectividad y capacitación del turno.',
  },
]

function estadoLabel(estado: EstadoOperacion) {
  if (estado === 'normal') return 'Operativo'
  if (estado === 'atencion') return 'Atención'
  return 'Crítico'
}

function Kpi({
  label,
  valor,
  referencia,
}: {
  label: string
  valor: string
  referencia?: string
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-black/40">{label}</p>
      <p className="text-3xl font-semibold mt-2">{valor}</p>
      {referencia && <p className="text-xs text-black/40 mt-1">{referencia}</p>}
    </div>
  )
}

function SistemaCard({ sistema }: { sistema: SistemaMonitor }) {
  return (
    <article className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold">{sistema.nombre}</p>
          <p className="text-xs text-black/45 mt-1 leading-relaxed">{sistema.descripcion}</p>
        </div>
        <span
          className="shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold"
          style={{ color: sistema.color, backgroundColor: `${sistema.color}16` }}
        >
          {estadoLabel(sistema.estado)}
        </span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-black/5 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${sistema.disponibilidad * 100}%`, backgroundColor: sistema.color }}
        />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
        <div>
          <p className="text-black/35">Uptime</p>
          <p className="font-semibold mt-0.5">{formatoPct(sistema.disponibilidad)}</p>
        </div>
        <div>
          <p className="text-black/35">Latencia</p>
          <p className="font-semibold mt-0.5">{sistema.latencia}</p>
        </div>
        <div>
          <p className="text-black/35">Volumen</p>
          <p className="font-semibold mt-0.5">{sistema.volumen}</p>
        </div>
      </div>
      <div className="mt-4 border-t border-[var(--color-border)] pt-3">
        <p className="text-xs font-medium text-black/65">{sistema.alerta}</p>
        <p className="text-[11px] text-black/35 mt-1">{sistema.responsable}</p>
      </div>
    </article>
  )
}

function BarraSerie({
  label,
  valor,
  maximo,
  color,
}: {
  label: string
  valor: number
  maximo: number
  color: string
}) {
  return (
    <div className="flex flex-col justify-end gap-2 min-w-0">
      <div className="h-40 flex items-end gap-1">
        <div
          className="w-full rounded-t-sm"
          style={{ height: `${(valor / maximo) * 100}%`, backgroundColor: color }}
          title={`${label}: ${valor}`}
        />
      </div>
      <p className="text-[11px] text-center text-black/35">{label}</p>
    </div>
  )
}

function SucursalHeatmapCard({ sucursal }: { sucursal: SucursalHeatmap }) {
  const walletShare = sucursal.transacciones === 0 ? 0 : sucursal.wallet / sucursal.transacciones
  const intensidad = Math.max(0.12, sucursal.intensidad)

  return (
    <article
      className="rounded-[var(--radius-card)] border p-4 transition"
      style={{
        backgroundColor: `rgba(217, 0, 18, ${0.07 + intensidad * 0.34})`,
        borderColor: `rgba(217, 0, 18, ${0.14 + intensidad * 0.34})`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold leading-tight">{sucursal.nombre}</p>
          <p className="text-xs text-black/45 mt-1">{sucursal.zona}</p>
        </div>
        <span className="rounded-full bg-white/70 px-2 py-1 text-xs font-semibold text-[var(--color-brand)]">
          {sucursal.transacciones} tx
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div>
          <p className="text-black/40">GMV</p>
          <p className="font-semibold mt-0.5">{formatoMoneda(sucursal.gmv)}</p>
        </div>
        <div>
          <p className="text-black/40">Wallet</p>
          <p className="font-semibold mt-0.5">{formatoPct(walletShare)}</p>
        </div>
      </div>
      <div className="mt-4 h-2 rounded-full bg-white/60 overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--color-brand)]"
          style={{ width: `${intensidad * 100}%` }}
        />
      </div>
    </article>
  )
}

export default function Analytics() {
  const clientes = useWalletStore((s) => s.clientes)
  const transacciones = useWalletStore((s) => s.transacciones)

  const redencion = tasaRedencion(transacciones)
  const adopcion = tasaAdopcionWallet(clientes)
  const shares = shareMedioPago(transacciones)
  const gmvTotal = transacciones.reduce((acc, t) => acc + t.montoTotal, 0)
  const gmvWallet = transacciones
    .filter((t) => t.medioPago === 'Wallet COTO')
    .reduce((a, t) => a + t.montoTotal, 0)
  const transaccionesDigital = transacciones.filter((t) => t.sucursalId === 'suc-digital')
  const transaccionesTCI = transacciones.filter((t) => t.medioPago === 'Wallet COTO' && t.beneficioAplicadoId)
  const maxSerie = Math.max(...SERIE_OPERATIVA.flatMap((p) => [p.pos, p.digital, p.tci]))
  const cajasActivas = SUCURSALES.length * 42 - 2
  const maxTransaccionesSucursal = Math.max(
    1,
    ...SUCURSALES.map((sucursal) => transacciones.filter((t) => t.sucursalId === sucursal.id).length),
  )
  const heatmapSucursales: SucursalHeatmap[] = SUCURSALES.map((sucursal) => {
    const txSucursal = transacciones.filter((t) => t.sucursalId === sucursal.id)
    return {
      id: sucursal.id,
      nombre: sucursal.nombre,
      zona: sucursal.zona,
      transacciones: txSucursal.length,
      gmv: txSucursal.reduce((acc, t) => acc + t.montoTotal, 0),
      wallet: txSucursal.filter((t) => t.medioPago === 'Wallet COTO').length,
      intensidad: txSucursal.length / maxTransaccionesSucursal,
    }
  }).sort((a, b) => b.transacciones - a.transacciones)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Monitoreo operacional</h1>
          <p className="text-sm text-black/50 mt-1 max-w-3xl">
            Vista ejecutiva para seguir POS/Caja, Coto Digital, Core TCI, Stock,
            Redes sociales y el procesamiento propio de tarjetas TCI.
          </p>
        </div>
        <div className="flex gap-2 text-xs">
          <span className="rounded-full bg-white border border-[var(--color-border)] px-3 py-2 text-black/55">
            Hoy
          </span>
          <span className="rounded-full bg-[var(--color-brand)] px-3 py-2 font-semibold text-white">
            Última hora
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Kpi
          label="Cajas activas"
          valor={String(cajasActivas)}
          referencia="Terminales con QR, cupones y wallet operativos"
        />
        <Kpi
          label="Órdenes Coto Digital"
          valor={String(transaccionesDigital.length)}
          referencia={`${formatoMoneda(
            transaccionesDigital.reduce((acc, t) => acc + t.montoTotal, 0),
          )} en la muestra`}
        />
        <Kpi
          label="Autorizaciones TCI propias"
          valor={String(transaccionesTCI.length)}
          referencia={`Error caja ref. dossier: ${formatoPct(KPIS_BASELINE_DOSSIER.tasaErrorMedioPagoCaja)}`}
        />
        <Kpi
          label="Stock con riesgo"
          valor="128 SKUs"
          referencia="Prioridad en frescos, bebidas y limpieza"
        />
      </div>

      <section>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-sm font-semibold">Salud por integración</p>
            <p className="text-xs text-black/40 mt-1">Disponibilidad, latencia, volumen y alerta principal por dominio.</p>
          </div>
          <p className="text-xs text-black/40">Actualizado 15:48</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {SISTEMAS.map((sistema) => (
            <SistemaCard key={sistema.nombre} sistema={sistema} />
          ))}
        </div>
      </section>

      <div className="grid xl:grid-cols-[1.3fr_0.7fr] gap-6">
        <section className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold">Tráfico operativo por hora</p>
              <p className="text-xs text-black/40 mt-1">Comparación normalizada de POS, Coto Digital y TCI.</p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[var(--color-brand)]" />POS</span>
              <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#2563eb]" />Digital</span>
              <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[var(--color-success)]" />TCI</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-8 gap-3 border-b border-l border-[var(--color-border)] pl-3 pb-3">
            {SERIE_OPERATIVA.map((punto) => (
              <div key={punto.hora} className="grid grid-cols-3 gap-1 items-end">
                <BarraSerie label={punto.hora} valor={punto.pos} maximo={maxSerie} color="var(--color-brand)" />
                <BarraSerie label="" valor={punto.digital} maximo={maxSerie} color="#2563eb" />
                <BarraSerie label="" valor={punto.tci} maximo={maxSerie} color="var(--color-success)" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold">Alertas accionables</p>
          <div className="mt-4 flex flex-col gap-4">
            {ALERTAS.map((alerta) => (
              <div key={`${alerta.sistema}-${alerta.prioridad}`} className="border-l-2 border-[var(--color-brand)] pl-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/40">{alerta.sistema}</p>
                  <p className="text-xs font-semibold text-[var(--color-brand)]">{alerta.prioridad}</p>
                </div>
                <p className="text-sm font-medium mt-1">{alerta.detalle}</p>
                <p className="text-xs text-black/45 mt-1">{alerta.accion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold">Mapa de calor por sucursal</p>
            <p className="text-xs text-black/40 mt-1">
              Intensidad por cantidad de transacciones; incluye tiendas físicas y Coto Digital.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-black/40">
            <span>Baja</span>
            <span className="h-2 w-10 rounded-full bg-[rgba(217,0,18,.14)]" />
            <span className="h-2 w-10 rounded-full bg-[rgba(217,0,18,.28)]" />
            <span className="h-2 w-10 rounded-full bg-[rgba(217,0,18,.45)]" />
            <span>Alta</span>
          </div>
        </div>
        <div className="mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {heatmapSucursales.map((sucursal) => (
            <SucursalHeatmapCard key={sucursal.id} sucursal={sucursal} />
          ))}
        </div>
      </section>

      <div className="grid xl:grid-cols-2 gap-6">
        <section className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold mb-4">Share por medio de pago</p>
          <div className="flex flex-col gap-3">
            {Object.entries(shares)
              .sort((a, b) => b[1] - a[1])
              .map(([medio, pct]) => (
                <div key={medio} className="flex items-center gap-3">
                  <p className="w-32 text-sm text-black/60 shrink-0">{medio}</p>
                  <div className="flex-1 h-2 rounded-full bg-black/5 overflow-hidden">
                    <div
                      className="h-full bg-[var(--color-brand)]"
                      style={{ width: `${pct * 100}%` }}
                    />
                  </div>
                  <p className="w-14 text-right text-sm text-black/50">{formatoPct(pct)}</p>
                </div>
              ))}
          </div>
          <p className="text-xs text-black/40 mt-4">
            MP y MODO siguen instalados en caja; la wallet propia se mide como
            participación adicional, no como reemplazo.
          </p>
        </section>

        <section className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold mb-4">Lealtad y wallet</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Kpi
              label="Redención"
              valor={formatoPct(redencion)}
              referencia={`Objetivo CU-05 ${formatoPct(KPIS_BASELINE_DOSSIER.tasaRedencionCuponesObjetivoCU05)}`}
            />
            <Kpi
              label="Adopción"
              valor={formatoPct(adopcion)}
              referencia={`${clientes.filter((c) => c.walletActivada).length} de ${clientes.length} clientes`}
            />
            <Kpi
              label="GMV wallet"
              valor={formatoPct(gmvTotal === 0 ? 0 : gmvWallet / gmvTotal)}
              referencia={formatoMoneda(gmvWallet)}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
