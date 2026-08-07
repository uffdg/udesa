import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'
import { IconStar, IconCheck } from '../../components/Icons'
import type { EstadoMision, Mision, Insignia } from '../../data/types'

type Tab = 'misiones' | 'insignias'

function colorEstado(estado: EstadoMision) {
  if (estado === 'completada') return 'text-[var(--color-success)]'
  if (estado === 'activa') return 'text-[var(--color-brand)]'
  if (estado === 'vencida') return 'text-black/30'
  return 'text-[var(--color-accent-dark)]'
}

function bgEstado(estado: EstadoMision) {
  if (estado === 'completada') return 'bg-[var(--color-success-pale)]'
  if (estado === 'activa') return 'bg-[var(--color-brand-pale)]'
  if (estado === 'vencida') return 'bg-[var(--color-paper)]'
  return 'bg-[var(--color-accent-pale)]'
}

function etiquetaEstado(estado: EstadoMision) {
  if (estado === 'completada') return 'Completada'
  if (estado === 'activa') return 'En progreso'
  if (estado === 'vencida') return 'Vencida'
  return 'Disponible'
}

function MisionCard({ mision }: { mision: Mision }) {
  const pct = mision.progresoTotal > 0 ? (mision.progresoActual / mision.progresoTotal) * 100 : 0

  return (
    <div className={`rounded-[var(--radius-card)] border border-[var(--color-border)] p-4 ${mision.estado === 'vencida' ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1">
          <span className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full mb-1.5 ${bgEstado(mision.estado)} ${colorEstado(mision.estado)}`}>
            {etiquetaEstado(mision.estado)}
          </span>
          <p className="text-sm font-semibold leading-tight">{mision.titulo}</p>
        </div>
        {mision.estado === 'completada' && (
          <span className="w-8 h-8 rounded-full bg-[var(--color-success-pale)] flex items-center justify-center shrink-0">
            <IconCheck className="w-4 h-4 text-[var(--color-success)]" />
          </span>
        )}
        {mision.estado !== 'completada' && (
          <div className="text-right shrink-0">
            <p className="text-[var(--color-brand)] font-bold text-sm">+{mision.recompensaPuntos.toLocaleString('es-AR')}</p>
            <p className="text-[10px] text-black/40">puntos</p>
          </div>
        )}
      </div>

      {mision.progresoTotal > 1 && (
        <div className="mb-2">
          <div className="flex justify-between text-xs text-black/50 mb-1">
            <span>{mision.descripcion}</span>
            <span>{mision.progresoActual}/{mision.progresoTotal}</span>
          </div>
          <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${mision.estado === 'completada' ? 'bg-[var(--color-success)]' : 'bg-[var(--color-brand)]'}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-2">
        <p className="text-xs text-black/40">
          Vence {new Date(mision.fechaLimite + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long' })}
        </p>
        {mision.ctaRuta && mision.estado !== 'completada' && mision.estado !== 'vencida' && (
          <Link to={mision.ctaRuta} className="text-xs font-semibold text-[var(--color-brand)]">
            {mision.ctaLabel} →
          </Link>
        )}
      </div>
    </div>
  )
}

function InsigniaCard({ ins }: { ins: Insignia }) {
  return (
    <div className={`rounded-[var(--radius-card)] border p-4 ${ins.bloqueada ? 'border-[var(--color-border)] opacity-60' : 'border-[var(--color-brand)]/20 bg-[var(--color-brand-pale)]'}`}>
      <div className="flex items-start gap-3">
        <span className={`text-4xl ${ins.bloqueada ? 'grayscale opacity-40' : ''}`}>{ins.icono}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{ins.nombre}</p>
            {!ins.bloqueada && <IconStar className="w-3.5 h-3.5 text-[var(--color-brand)]" />}
          </div>
          <p className="text-xs text-black/60 mt-0.5">{ins.descripcion}</p>
          {!ins.bloqueada && ins.fechaObtenida && (
            <p className="text-[10px] text-black/40 mt-1">
              Obtenida el {new Date(ins.fechaObtenida + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          )}
          {!ins.bloqueada && ins.beneficioDesbloqueado && (
            <p className="text-[10px] font-medium text-[var(--color-brand)] mt-1">🎁 {ins.beneficioDesbloqueado}</p>
          )}
          {ins.bloqueada && ins.progresoActual !== undefined && ins.progresoTotal && (
            <div className="mt-2">
              <div className="flex justify-between text-[10px] text-black/40 mb-1">
                <span>Progreso</span>
                <span>{ins.progresoActual}/{ins.progresoTotal}</span>
              </div>
              <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-brand)] rounded-full"
                  style={{ width: `${(ins.progresoActual / ins.progresoTotal) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Misiones() {
  const misiones = useWalletStore((s) => s.misiones)
  const insignias = useWalletStore((s) => s.insignias)

  const [tab, setTab] = useState<Tab>('misiones')

  const activas = misiones.filter((m) => m.estado === 'activa')
  const disponibles = misiones.filter((m) => m.estado === 'disponible')
  const completadas = misiones.filter((m) => m.estado === 'completada')
  const vencidas = misiones.filter((m) => m.estado === 'vencida')

  const obtenidas = insignias.filter((i) => !i.bloqueada)
  const bloqueadas = insignias.filter((i) => i.bloqueada)

  return (
    <div className="flex flex-col h-full">
      <div className="px-5 pt-5 pb-3">
        <h1 className="text-lg font-bold mb-3">Misiones e insignias</h1>

        {/* Tabs */}
        <div className="flex gap-1 bg-[var(--color-paper)] rounded-xl p-1">
          {(['misiones', 'insignias'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                tab === t ? 'bg-white text-[var(--color-brand)] shadow-sm' : 'text-black/50'
              }`}
            >
              {t === 'misiones' ? `Misiones (${activas.length + disponibles.length})` : `Insignias (${obtenidas.length})`}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-6 flex flex-col gap-4">
        {tab === 'misiones' && (
          <>
            {activas.length > 0 && (
              <div>
                <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">En progreso</p>
                <div className="flex flex-col gap-3">
                  {activas.map((m) => <MisionCard key={m.id} mision={m} />)}
                </div>
              </div>
            )}
            {disponibles.length > 0 && (
              <div>
                <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">Disponibles</p>
                <div className="flex flex-col gap-3">
                  {disponibles.map((m) => <MisionCard key={m.id} mision={m} />)}
                </div>
              </div>
            )}
            {completadas.length > 0 && (
              <div>
                <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">Completadas</p>
                <div className="flex flex-col gap-3">
                  {completadas.map((m) => <MisionCard key={m.id} mision={m} />)}
                </div>
              </div>
            )}
            {vencidas.length > 0 && (
              <div>
                <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">Vencidas</p>
                <div className="flex flex-col gap-3">
                  {vencidas.map((m) => <MisionCard key={m.id} mision={m} />)}
                </div>
              </div>
            )}
          </>
        )}

        {tab === 'insignias' && (
          <>
            {obtenidas.length > 0 && (
              <div>
                <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">Obtenidas ({obtenidas.length})</p>
                <div className="flex flex-col gap-3">
                  {obtenidas.map((i) => <InsigniaCard key={i.id} ins={i} />)}
                </div>
              </div>
            )}
            {bloqueadas.length > 0 && (
              <div>
                <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-2">Por desbloquear ({bloqueadas.length})</p>
                <div className="flex flex-col gap-3">
                  {bloqueadas.map((i) => <InsigniaCard key={i.id} ins={i} />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
