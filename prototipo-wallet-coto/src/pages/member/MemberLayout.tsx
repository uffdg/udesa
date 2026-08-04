import { NavLink, Outlet, Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'

const TABS = [
  { to: '/member', label: 'Home', icon: '🏠', end: true },
  { to: '/member/pagar', label: 'Pagar', icon: '📷', end: false },
  { to: '/member/beneficios', label: 'Beneficios', icon: '🎁', end: false },
  { to: '/member/recompra', label: 'Lista', icon: '🛒', end: false },
]

export default function MemberLayout() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const setClienteActivo = useWalletStore((s) => s.setClienteActivo)

  return (
    <div className="min-h-screen flex flex-col items-center py-8 gap-4 bg-[var(--color-paper)]">
      <div className="flex items-center gap-2 text-xs text-black/50">
        <Link to="/" className="hover:underline">
          ← volver
        </Link>
        <span>·</span>
        <span>Simulando sesión de:</span>
        <select
          value={clienteActivoId}
          onChange={(e) => setClienteActivo(e.target.value)}
          className="border border-[var(--color-border)] rounded-md px-2 py-1 bg-white"
        >
          {clientes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre} ({c.segmento})
            </option>
          ))}
        </select>
      </div>

      <div className="phone-frame flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <nav className="grid grid-cols-4 border-t border-[var(--color-border)] bg-white">
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-3 text-[11px] font-medium ${
                  isActive ? 'text-[var(--color-brand)]' : 'text-black/40'
                }`
              }
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
