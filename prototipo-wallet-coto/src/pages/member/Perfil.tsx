import { Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'
import { IconChevronRight, IconBell, IconShield, IconCreditCard, IconLogOut, IconStar } from '../../components/Icons'

type Item = { label: string; sub?: string; to?: string; icon: React.ReactNode; danger?: boolean }

function PerfilRow({ item }: { item: Item }) {
  const inner = (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="text-[var(--color-brand)] opacity-70 shrink-0">{item.icon}</span>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${item.danger ? 'text-red-500' : ''}`}>{item.label}</p>
        {item.sub && <p className="text-xs text-black/40 truncate">{item.sub}</p>}
      </div>
      {!item.danger && <IconChevronRight className="w-4 h-4 text-black/20 shrink-0" />}
    </div>
  )

  if (item.to) {
    return <Link to={item.to} className="block hover:bg-[var(--color-paper)] transition-colors">{inner}</Link>
  }
  return <button className="w-full text-left hover:bg-[var(--color-paper)] transition-colors">{inner}</button>
}

export default function Perfil() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const insignias = useWalletStore((s) => s.insignias)

  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const primerNombre = cliente.nombre.split(' ')[0]
  const insigniasObtenidas = insignias.filter((i) => !i.bloqueada)

  const SECCIONES: { titulo: string; items: Item[] }[] = [
    {
      titulo: 'Mi cuenta',
      items: [
        {
          label: 'Datos personales',
          sub: cliente.email,
          icon: <span className="text-base">👤</span>,
        },
        {
          label: 'Sucursal favorita',
          sub: 'COTO Palermo',
          icon: <span className="text-base">📍</span>,
        },
        {
          label: 'Mis direcciones',
          sub: 'Agregar o editar',
          icon: <span className="text-base">🏠</span>,
        },
      ],
    },
    {
      titulo: 'Wallet',
      items: [
        {
          label: 'Mis tarjetas',
          sub: 'Administrar medios de pago',
          to: '/member/tarjetas',
          icon: <IconCreditCard className="w-5 h-5" />,
        },
        {
          label: 'Misiones e insignias',
          sub: `${insigniasObtenidas.length} insignias obtenidas`,
          to: '/member/misiones',
          icon: <IconStar className="w-5 h-5" />,
        },
      ],
    },
    {
      titulo: 'Preferencias',
      items: [
        {
          label: 'Notificaciones',
          sub: 'Push, email y SMS',
          icon: <IconBell className="w-5 h-5" />,
        },
        {
          label: 'Preferencias de compra',
          sub: 'Categorías y marcas favoritas',
          icon: <span className="text-base">🛒</span>,
        },
        {
          label: 'Preferencias de beneficios',
          sub: 'Qué tipos de ofertas recibir',
          icon: <span className="text-base">🎁</span>,
        },
      ],
    },
    {
      titulo: 'Seguridad',
      items: [
        {
          label: 'Seguridad y biometría',
          sub: 'PIN, Face ID, huella',
          icon: <IconShield className="w-5 h-5" />,
        },
      ],
    },
    {
      titulo: 'Soporte',
      items: [
        {
          label: 'Ayuda y soporte',
          icon: <span className="text-base">💬</span>,
        },
        {
          label: 'Términos y privacidad',
          icon: <span className="text-base">📄</span>,
        },
        {
          label: 'Cerrar sesión',
          icon: <IconLogOut className="w-5 h-5" />,
          danger: true,
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-[var(--color-brand)] px-5 pt-6 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold">
            {primerNombre[0]}
          </div>
          <div>
            <p className="text-white font-semibold text-lg">{cliente.nombre}</p>
            <p className="text-white/70 text-sm">{cliente.nivel ?? 'Comunidad'}</p>
            {cliente.numeroSocio && (
              <p className="text-white/50 text-xs">Socio N° {cliente.numeroSocio}</p>
            )}
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="mx-4 -mt-5 rounded-[var(--radius-card)] bg-white border border-[var(--color-border)] shadow-sm p-4 grid grid-cols-3 gap-2 text-center mb-2">
        <div>
          <p className="text-[var(--color-brand)] font-bold text-base">{cliente.puntos.toLocaleString('es-AR')}</p>
          <p className="text-[10px] text-black/50">Puntos</p>
        </div>
        <div className="border-x border-[var(--color-border)]">
          <p className="text-[var(--color-success)] font-bold text-base">{insigniasObtenidas.length}</p>
          <p className="text-[10px] text-black/50">Insignias</p>
        </div>
        <div>
          <p className="text-black/70 font-bold text-base">
            {new Date().getFullYear() - new Date(cliente.fechaAlta).getFullYear() || '< 1'}
          </p>
          <p className="text-[10px] text-black/50">Años socio</p>
        </div>
      </div>

      {/* Secciones */}
      <div className="flex-1 overflow-y-auto pb-6">
        {SECCIONES.map((sec) => (
          <div key={sec.titulo} className="mt-3">
            <p className="px-5 pb-1 text-[10px] font-semibold uppercase tracking-widest text-black/30">{sec.titulo}</p>
            <div className="bg-white border-t border-b border-[var(--color-border)] divide-y divide-[var(--color-border)]">
              {sec.items.map((item) => (
                <PerfilRow key={item.label} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
