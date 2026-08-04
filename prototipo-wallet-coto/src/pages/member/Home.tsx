import { Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'
import { formatoMoneda } from '../../lib/analytics'
import { SEGMENTOS, SUCURSALES } from '../../data/seed'
import { IconScan } from '../../components/Icons'

export default function Home() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const transacciones = useWalletStore((s) => s.transacciones)
  const reglas = useWalletStore((s) => s.reglas)

  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const segmento = SEGMENTOS.find((s) => s.id === cliente.segmento)!
  const historial = transacciones
    .filter((t) => t.clienteId === cliente.id)
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
    .slice(0, 5)
  const beneficiosDisponibles = reglas.filter((r) => r.segmentosElegibles.includes(cliente.segmento))

  if (!cliente.walletActivada) {
    return (
      <div className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
        <p className="text-sm text-black/60">Todavía no activaste la Wallet COTO.</p>
        <Link
          to="/member/onboarding"
          className="rounded-full bg-[var(--color-brand)] text-white px-6 py-3 text-sm font-medium"
        >
          Activar ahora
        </Link>
      </div>
    )
  }

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="rounded-[var(--radius-card)] bg-[var(--color-brand)] text-white p-5">
        <p className="text-xs opacity-70">Hola, {cliente.nombre.split(' ')[0]}</p>
        <p className="text-3xl font-semibold mt-1">{cliente.puntos.toLocaleString('es-AR')} pts</p>
        <span
          className="inline-block mt-2 text-[11px] font-medium px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(255,255,255,0.18)' }}
        >
          Segmento: {segmento.nombre}
        </span>
      </div>

      <Link
        to="/member/pagar"
        className="flex items-center justify-center gap-2 rounded-[var(--radius-card)] border-2 border-[var(--color-brand)] text-[var(--color-brand)] py-3 text-center font-medium"
      >
        <IconScan className="w-5 h-5" />
        Pagar en caja
      </Link>

      {beneficiosDisponibles.length > 0 && (
        <div>
          <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">
            Beneficios activos para vos
          </p>
          {/* overflow-x-auto + fade a la derecha: sin el fade, la última
              card queda cortada justo en el borde del phone-frame y se lee
              como un error de layout en vez de "hay más, deslizá". */}
          <div className="relative -mx-5">
            <div className="flex gap-3 overflow-x-auto px-5 pb-1 snap-x snap-proximity scroll-px-5">
              {beneficiosDisponibles.map((b) => (
                <div
                  key={b.id}
                  className="min-w-[200px] snap-start rounded-[var(--radius-card)] bg-[var(--color-brand-pale)] p-3 text-sm"
                >
                  <p className="font-semibold text-[var(--color-brand)]">{b.descuentoPct}% off</p>
                  <p className="text-xs mt-1 text-black/70">{b.descripcion}</p>
                </div>
              ))}
            </div>
            <div
              className="pointer-events-none absolute right-0 top-0 bottom-1 w-8"
              style={{ background: 'linear-gradient(to right, transparent, var(--color-card))' }}
              aria-hidden="true"
            />
          </div>
        </div>
      )}

      <div>
        <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">
          Compras recientes
        </p>
        {historial.length === 0 && <p className="text-sm text-black/40">Todavía no hay compras.</p>}
        <div className="flex flex-col gap-2">
          {historial.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between rounded-lg border border-[var(--color-border)] px-3 py-2"
            >
              <div>
                <p className="text-sm font-medium">
                  {SUCURSALES.find((s) => s.id === t.sucursalId)?.nombre ?? t.sucursalId}
                </p>
                <p className="text-xs text-black/40">
                  {t.fecha} · {t.items.map((i) => i.categoria).join(', ')} · {t.medioPago}
                </p>
              </div>
              <p className="text-sm font-semibold">{formatoMoneda(t.montoTotal)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
