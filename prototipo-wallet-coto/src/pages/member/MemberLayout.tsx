import { NavLink, Outlet, Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'
import { IconActivity, IconGift, IconHome, IconScan, IconUser } from '../../components/Icons'

// Nav de 5 tabs según consigna: Inicio | Beneficios | [Pagar central] | Actividad | Perfil
// El botón central de Pagar está elevado sobre la nav bar con position absolute.
const LEFT_TABS = [
  { to: '/member', label: 'Inicio', Icon: IconHome, end: true },
  { to: '/member/beneficios', label: 'Beneficios', Icon: IconGift, end: false },
]
const RIGHT_TABS = [
  { to: '/member/actividad', label: 'Actividad', Icon: IconActivity, end: false },
  { to: '/member/perfil', label: 'Perfil', Icon: IconUser, end: false },
]

export default function MemberLayout() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const setClienteActivo = useWalletStore((s) => s.setClienteActivo)

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center px-3 py-8 gap-4 bg-[var(--color-paper)]">
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
              {c.nombre} ({c.nivel ?? c.segmento})
            </option>
          ))}
        </select>
      </div>

      <div className="phone-frame flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>

        {/* Nav inferior con botón central elevado */}
        <nav className="relative grid grid-cols-5 border-t border-[var(--color-border)] bg-white pb-safe">
          {LEFT_TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-3 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-[var(--color-brand)]' : 'text-black/40'
                }`
              }
            >
              <tab.Icon className="w-5 h-5" />
              {tab.label}
            </NavLink>
          ))}

          {/* Slot central vacío — el botón está en position absolute */}
          <div className="relative" />

          {RIGHT_TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-3 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-[var(--color-brand)]' : 'text-black/40'
                }`
              }
            >
              <tab.Icon className="w-5 h-5" />
              {tab.label}
            </NavLink>
          ))}

          {/* Botón central Pagar elevado sobre la nav */}
          <NavLink
            to="/member/pagar"
            className="absolute left-1/2 -translate-x-1/2 -top-6 flex flex-col items-center gap-0.5"
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform active:scale-95 ${
                    isActive
                      ? 'bg-[var(--color-brand-light)] ring-4 ring-[var(--color-brand)]/20'
                      : 'bg-[var(--color-brand)]'
                  }`}
                >
                  <IconScan className="w-6 h-6 text-white" />
                </span>
                <span className={`text-[11px] font-semibold mt-0.5 ${isActive ? 'text-[var(--color-brand)]' : 'text-black/50'}`}>
                  Pagar
                </span>
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
