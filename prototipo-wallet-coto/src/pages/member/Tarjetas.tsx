import { useState } from 'react'
import { useWalletStore } from '../../store/useWalletStore'
import { IconCreditCard, IconCheck, IconPlus } from '../../components/Icons'
import type { Tarjeta } from '../../data/types'

function logoMarca(marca: Tarjeta['marca']) {
  if (marca === 'Visa') return '💳'
  if (marca === 'Mastercard') return '🔴'
  if (marca === 'Amex') return '🔵'
  return '🏪'
}

function labelTipo(tipo: Tarjeta['tipo']) {
  if (tipo === 'credito') return 'Crédito'
  if (tipo === 'debito') return 'Débito'
  return 'TCI'
}

function TarjetaCard({
  tarjeta,
  onSetPrincipal,
}: {
  tarjeta: Tarjeta
  onSetPrincipal: () => void
}) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div className={`rounded-[var(--radius-card)] border overflow-hidden ${tarjeta.esPrincipal ? 'border-[var(--color-brand)]/40 bg-[var(--color-brand-pale)]' : 'border-[var(--color-border)] bg-white'}`}>
      {/* Vista de tarjeta */}
      <div className={`p-4 ${tarjeta.tipo === 'tci' ? 'bg-[var(--color-brand)] text-white' : ''}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className={`text-xs font-medium ${tarjeta.tipo === 'tci' ? 'text-white/70' : 'text-black/50'}`}>
              {tarjeta.banco} · {labelTipo(tarjeta.tipo)}
            </p>
            {tarjeta.esPrincipal && (
              <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 ${tarjeta.tipo === 'tci' ? 'bg-white/20 text-white' : 'bg-[var(--color-brand)] text-white'}`}>
                <IconCheck className="w-3 h-3" /> Predeterminada
              </span>
            )}
          </div>
          <span className="text-2xl">{logoMarca(tarjeta.marca)}</span>
        </div>

        <p className={`font-mono text-base tracking-widest mb-1 ${tarjeta.tipo === 'tci' ? 'text-white' : 'text-black/70'}`}>
          •••• •••• •••• {tarjeta.ultimosCuatro}
        </p>

        <div className="flex items-end justify-between">
          <div>
            <p className={`text-[10px] uppercase tracking-wide ${tarjeta.tipo === 'tci' ? 'text-white/50' : 'text-black/40'}`}>Titular</p>
            <p className={`text-sm font-medium ${tarjeta.tipo === 'tci' ? 'text-white' : 'text-black/80'}`}>{tarjeta.titular}</p>
          </div>
          <div className="text-right">
            <p className={`text-[10px] uppercase tracking-wide ${tarjeta.tipo === 'tci' ? 'text-white/50' : 'text-black/40'}`}>Vence</p>
            <p className={`text-sm font-medium ${tarjeta.tipo === 'tci' ? 'text-white' : 'text-black/80'}`}>{tarjeta.vencimiento}</p>
          </div>
        </div>
      </div>

      {/* Beneficio destacado */}
      {tarjeta.beneficioDestacado && (
        <div className="px-4 py-2 bg-[var(--color-accent-pale)] border-t border-[var(--color-accent)]/20">
          <p className="text-xs text-[var(--color-accent-dark)]">💡 {tarjeta.beneficioDestacado}</p>
        </div>
      )}

      {/* Acciones */}
      <div className="px-4 py-3 border-t border-[var(--color-border)] flex items-center justify-between">
        {!tarjeta.esPrincipal ? (
          <button onClick={onSetPrincipal} className="text-sm text-[var(--color-brand)] font-medium">
            Establecer como principal
          </button>
        ) : (
          <span className="text-sm text-black/30">Tarjeta predeterminada</span>
        )}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="text-black/40 text-lg leading-none px-2"
        >
          ···
        </button>
      </div>

      {menuAbierto && (
        <div className="px-4 pb-3 flex gap-2">
          <button className="text-xs text-black/50 border border-[var(--color-border)] px-3 py-1.5 rounded-lg">Editar nombre</button>
          <button className="text-xs text-red-500 border border-red-100 px-3 py-1.5 rounded-lg">Eliminar</button>
        </div>
      )}
    </div>
  )
}

export default function Tarjetas() {
  const tarjetas = useWalletStore((s) => s.tarjetas)
  const setTarjetaPrincipal = useWalletStore((s) => s.setTarjetaPrincipal)
  const [autoOptima, setAutoOptima] = useState(true)

  const principal = tarjetas.find((t) => t.esPrincipal)

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-5 pb-3">
        <h1 className="text-lg font-bold mb-1">Mis tarjetas</h1>
        <p className="text-xs text-black/50 mb-4">Los números completos nunca se muestran por tu seguridad.</p>

        {/* Opción automática */}
        <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 mb-4">
          <div className="flex items-start gap-3">
            <IconCreditCard className="w-5 h-5 text-[var(--color-brand)] mt-0.5" />
            <div>
              <p className="text-sm font-medium">Usar tarjeta con mejor beneficio</p>
              <p className="text-xs text-black/50">Seleccionamos automáticamente la opción más conveniente</p>
            </div>
          </div>
          <button
            onClick={() => setAutoOptima(!autoOptima)}
            className={`w-11 h-6 rounded-full transition-colors shrink-0 ml-2 ${autoOptima ? 'bg-[var(--color-brand)]' : 'bg-[var(--color-border)]'}`}
          >
            <span className={`block w-5 h-5 bg-white rounded-full shadow transition-transform ${autoOptima ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
        </div>

        {/* Recomendación contextual */}
        {principal && (
          <div className="rounded-xl bg-[var(--color-accent-pale)] border border-[var(--color-accent)]/30 px-4 py-3 mb-4">
            <p className="text-xs text-[var(--color-accent-dark)]">
              💡 Pagando con <strong>{principal.banco} {principal.marca}</strong> {principal.beneficioDestacado?.toLowerCase()}
            </p>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-6 flex flex-col gap-3">
        {tarjetas.map((t) => (
          <TarjetaCard key={t.id} tarjeta={t} onSetPrincipal={() => setTarjetaPrincipal(t.id)} />
        ))}

        {/* Agregar tarjeta */}
        <button className="w-full rounded-[var(--radius-card)] border-2 border-dashed border-[var(--color-border)] py-4 flex items-center justify-center gap-2 text-sm text-black/40 hover:border-[var(--color-brand)]/40 hover:text-[var(--color-brand)] transition-colors">
          <IconPlus className="w-4 h-4" />
          Agregar tarjeta
        </button>
      </div>
    </div>
  )
}
