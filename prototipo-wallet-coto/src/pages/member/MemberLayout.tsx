import { NavLink, Outlet, Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'
import { IconCart, IconGift, IconHome, IconScan } from '../../components/Icons'

const TABS = [
  { to: '/member', label: 'Home', Icon: IconHome, end: true },
  { to: '/member/pagar', label: 'Pagar', Icon: IconScan, end: false },
  { to: '/member/beneficios', label: 'Beneficios', Icon: IconGift, end: false },
  { to: '/member/recompra', label: 'Lista', Icon: IconCart, end: false },
]

export default function MemberLayout() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const setClienteActivo = useWalletStore((s) => s.setClienteActivo)

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center px-3 py-8 gap-4 bg-[var(--color-paper)]">
      {/* flex-wrap + min-w-0 en el select: en viewports angostos el nombre
          del cliente activo ("María González (campeones)") es más largo que
          el espacio disponible — sin esto el <select> nunca se achica
          (comportamiento default de flexbox) y empuja toda la página a
          scrollear horizontal, cortando el resto de la UI. */}
      <div className="w-full max-w-[390px] flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-black/50">
        <Link to="/" className="hover:underline shrink-0">
          ← volver
        </Link>
        <span className="shrink-0">·</span>
        <span className="shrink-0">Simulando sesión de:</span>
        <select
          value={clienteActivoId}
          onChange={(e) => setClienteActivo(e.target.value)}
          className="min-w-0 max-w-full border border-[var(--color-border)] rounded-md px-2 py-1 bg-white"
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
              <tab.Icon className="w-5 h-5" />
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
