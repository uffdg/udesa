import { Link, NavLink, Outlet } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'

const NAV = [
  { to: '/manager', label: 'Segmentos', end: true },
  { to: '/manager/campanias', label: 'Campañas', end: false },
  { to: '/manager/analytics', label: 'Analytics', end: false },
]

export default function ManagerLayout() {
  const eventos = useWalletStore((s) => s.eventos)
  const resetDemo = useWalletStore((s) => s.resetDemo)

  return (
    <div className="min-h-screen flex flex-col md:grid md:grid-cols-[220px_1fr_280px]">
      <aside className="border-b md:border-b-0 md:border-r border-[var(--color-border)] p-4 md:p-5 flex flex-col gap-4 md:gap-6">
        <div className="flex items-center justify-between md:block">
          <div>
            <Link to="/" className="text-xs text-black/40 hover:underline">
              ← volver
            </Link>
            <h1 className="text-lg font-semibold mt-1 md:mt-2">Wallet COTO</h1>
            <p className="text-xs text-black/40">Panel de manager</p>
          </div>
        </div>
        <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `shrink-0 rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-[var(--color-brand-pale)] text-[var(--color-brand)]'
                    : 'text-black/60 hover:bg-black/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          onClick={resetDemo}
          className="md:mt-auto text-xs text-black/30 hover:text-black/60 underline underline-offset-2 text-left"
        >
          Reiniciar datos de la demo
        </button>
      </aside>

      <main className="p-5 md:p-8 overflow-y-auto order-3 md:order-none">
        <Outlet />
      </main>

      <aside className="border-t md:border-t-0 md:border-l border-[var(--color-border)] p-4 md:p-5 flex flex-col gap-3 order-2 md:order-none max-h-64 md:max-h-none overflow-y-auto md:overflow-visible">
        <p className="text-xs font-medium uppercase tracking-wide text-black/40">
          Actividad en vivo
        </p>
        <p className="text-[11px] text-black/40 -mt-2">
          Se actualiza en vivo si hay una pestaña de /member abierta con
          Wallet COTO activada.
        </p>
        <div className="flex flex-col gap-2 md:overflow-y-auto">
          {eventos.length === 0 && (
            <p className="text-xs text-black/30">Sin eventos todavía.</p>
          )}
          {eventos.map((e) => (
            <div key={e.id} className="text-xs border-l-2 border-[var(--color-brand)] pl-2 py-0.5">
              <p className="text-black/40">{e.fecha}</p>
              <p className="text-black/70">{e.descripcion}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
