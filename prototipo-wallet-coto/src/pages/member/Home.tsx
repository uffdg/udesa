import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'
import { formatoMoneda } from '../../lib/analytics'
import { SUCURSALES } from '../../data/seed'
import { IconScan, IconGift, IconClock, IconChevronRight, IconStar } from '../../components/Icons'

const EQUIVALENCIA = 1000 // 1.000 pts = $1.000

export default function Home() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const transacciones = useWalletStore((s) => s.transacciones)
  const misiones = useWalletStore((s) => s.misiones)
  const cupones = useWalletStore((s) => s.cupones)
  const reservarPuntos = useWalletStore((s) => s.reservarPuntos)

  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const historial = transacciones
    .filter((t) => t.clienteId === cliente.id)
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
    .slice(0, 4)

  const misionActiva = misiones.find((m) => m.estado === 'activa')
  const cuponesRecomendados = cupones.filter((c) => c.estado === 'disponible' || c.estado === 'activado').slice(0, 4)

  const [mostrarSelectorPuntos, setMostrarSelectorPuntos] = useState(false)
  const [puntosTemp, setPuntosTemp] = useState(cliente.puntosReservados ?? 0)

  if (!cliente.walletActivada) {
    return (
      <div className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
        <p className="text-sm text-black/60">Todavía no activaste la Wallet COTO.</p>
        <Link to="/member/onboarding" className="rounded-full bg-[var(--color-brand)] text-white px-6 py-3 text-sm font-medium">
          Activar ahora
        </Link>
      </div>
    )
  }

  const puntosDisponibles = cliente.puntos
  const equivalenciaPesos = Math.round((puntosDisponibles / EQUIVALENCIA) * 1000)
  const puntosVencen = cliente.puntosVencimiento
  const puntosReservados = cliente.puntosReservados ?? 0
  const ahorroMes = cliente.ahorroMes ?? 0
  const primerNombre = cliente.nombre.split(' ')[0]

  function confirmarReserva() {
    reservarPuntos(puntosTemp)
    setMostrarSelectorPuntos(false)
  }

  return (
    <div className="flex flex-col gap-0 pb-4">
      {/* Header con gradiente */}
      <div className="bg-[var(--color-brand)] px-5 pt-6 pb-8">
        <p className="text-white/70 text-sm mb-1">Hola, {primerNombre}</p>

        {/* Tarjeta de fidelización */}
        <div className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-white text-xs font-medium opacity-70 uppercase tracking-wider">Comunidad COTO</p>
              <p className="text-white font-semibold">{cliente.nivel ?? 'Comunidad'}</p>
            </div>
            <span className="text-white text-2xl">🏪</span>
          </div>

          <div className="mb-3">
            <p className="text-white/60 text-xs mb-0.5">Tus puntos</p>
            <p className="text-white text-4xl font-bold tracking-tight">
              {puntosDisponibles.toLocaleString('es-AR')}
              <span className="text-xl font-normal opacity-60 ml-1">pts</span>
            </p>
            <p className="text-white/60 text-sm mt-0.5">= {formatoMoneda(equivalenciaPesos)} de descuento</p>
          </div>

          {/* Puntos por vencer */}
          {puntosVencen && (
            <div className="flex items-center gap-2 bg-[var(--color-accent)]/20 rounded-lg px-3 py-2 mb-3">
              <IconClock className="w-4 h-4 text-[var(--color-accent)]" />
              <p className="text-[var(--color-accent)] text-xs font-medium">
                {puntosVencen.cantidad.toLocaleString('es-AR')} pts vencen el {new Date(puntosVencen.fecha + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long' })}
              </p>
            </div>
          )}

          {cliente.numeroSocio && (
            <p className="text-white/40 text-xs">Socio N° {cliente.numeroSocio}</p>
          )}
        </div>
      </div>

      {/* Ahorro del mes */}
      {ahorroMes > 0 && (
        <div className="mx-4 -mt-4 rounded-xl bg-[var(--color-success-pale)] border border-[var(--color-success)]/20 px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-[var(--color-success)] text-xs font-medium">Este mes ahorraste</p>
            <p className="text-[var(--color-success)] text-2xl font-bold">{formatoMoneda(ahorroMes)}</p>
          </div>
          <span className="text-3xl">💚</span>
        </div>
      )}

      <div className="px-5 pt-5 flex flex-col gap-5">
        {/* Puntos reservados para próxima compra */}
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold">Puntos para tu próxima compra</p>
            <button
              onClick={() => { setMostrarSelectorPuntos(!mostrarSelectorPuntos); setPuntosTemp(puntosReservados) }}
              className="text-xs text-[var(--color-brand)] font-medium"
            >
              {puntosReservados > 0 ? 'Cambiar' : 'Configurar'}
            </button>
          </div>

          {puntosReservados > 0 ? (
            <p className="text-sm text-black/70">
              Tenés <span className="font-semibold text-[var(--color-brand)]">{puntosReservados.toLocaleString('es-AR')} pts</span> reservados
              <span className="text-black/40"> (= {formatoMoneda(Math.round(puntosReservados / EQUIVALENCIA * 1000))})</span>
            </p>
          ) : (
            <p className="text-sm text-black/40">Sin puntos reservados. Configurá cuántos usar en tu próxima compra.</p>
          )}

          {mostrarSelectorPuntos && (
            <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="range"
                  min={0}
                  max={puntosDisponibles}
                  step={500}
                  value={puntosTemp}
                  onChange={(e) => setPuntosTemp(Number(e.target.value))}
                  className="flex-1 accent-[var(--color-brand)]"
                />
                <span className="text-sm font-semibold w-20 text-right">{puntosTemp.toLocaleString('es-AR')} pts</span>
              </div>
              <p className="text-xs text-black/40 mb-3">= {formatoMoneda(Math.round(puntosTemp / EQUIVALENCIA * 1000))} de descuento</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setMostrarSelectorPuntos(false)}
                  className="flex-1 py-2 rounded-lg border border-[var(--color-border)] text-sm text-black/50"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmarReserva}
                  className="flex-1 py-2 rounded-lg bg-[var(--color-brand)] text-white text-sm font-medium"
                >
                  Confirmar
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Acciones rápidas */}
        <div>
          <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-3">Acciones rápidas</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Pagar', icon: <IconScan className="w-6 h-6" />, to: '/member/pagar', color: 'bg-[var(--color-brand)]', textColor: 'text-white' },
              { label: 'Ver cupones', icon: <IconGift className="w-6 h-6" />, to: '/member/beneficios', color: 'bg-[var(--color-brand-pale)]', textColor: 'text-[var(--color-brand)]' },
              { label: 'Misiones', icon: <IconStar className="w-6 h-6" />, to: '/member/misiones', color: 'bg-[var(--color-accent-pale)]', textColor: 'text-[var(--color-accent-dark)]' },
              { label: 'Actividad', icon: <span className="text-xl">📋</span>, to: '/member/actividad', color: 'bg-[var(--color-paper)]', textColor: 'text-black/70' },
            ].map((a) => (
              <Link key={a.to} to={a.to} className="flex flex-col items-center gap-1.5">
                <span className={`flex items-center justify-center w-13 h-13 rounded-2xl ${a.color} ${a.textColor} w-12 h-12`}>
                  {a.icon}
                </span>
                <span className="text-[10px] text-black/60 text-center leading-tight">{a.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Beneficios recomendados */}
        {cuponesRecomendados.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-black/40 uppercase tracking-wide">Para vos</p>
              <Link to="/member/beneficios" className="text-xs text-[var(--color-brand)]">Ver todos</Link>
            </div>
            <div className="relative -mx-5">
              <div className="flex gap-3 overflow-x-auto px-5 pb-1 snap-x snap-proximity scroll-px-5">
                {cuponesRecomendados.map((cup) => (
                  <div key={cup.id} className="min-w-[160px] snap-start rounded-[var(--radius-card)] border border-[var(--color-border)] p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{cup.logoEmoji}</span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[var(--color-brand)] truncate">{cup.descuento}</p>
                        <p className="text-[10px] text-black/50 truncate">{cup.marca}</p>
                      </div>
                    </div>
                    <p className="text-xs text-black/70 line-clamp-2">{cup.titulo}</p>
                    {cup.estado === 'activado' && (
                      <span className="inline-block mt-1.5 text-[10px] font-medium text-[var(--color-success)] bg-[var(--color-success-pale)] px-2 py-0.5 rounded-full">Activado</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute right-0 top-0 bottom-1 w-8" style={{ background: 'linear-gradient(to right, transparent, var(--color-card))' }} aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Misión activa */}
        {misionActiva && (
          <Link to="/member/misiones" className="rounded-[var(--radius-card)] bg-[var(--color-accent-pale)] border border-[var(--color-accent)]/30 p-4 block">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <p className="text-[10px] font-medium text-[var(--color-accent-dark)] uppercase tracking-wide">Misión activa</p>
                <p className="text-sm font-semibold text-black/80 mt-0.5">{misionActiva.titulo}</p>
              </div>
              <IconChevronRight className="w-4 h-4 text-black/30 shrink-0 mt-0.5" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-accent-dark)] rounded-full transition-all"
                  style={{ width: `${(misionActiva.progresoActual / misionActiva.progresoTotal) * 100}%` }}
                />
              </div>
              <p className="text-xs font-medium text-black/60 shrink-0">
                {misionActiva.progresoActual}/{misionActiva.progresoTotal}
              </p>
            </div>
            <p className="text-xs text-black/50">{misionActiva.descripcion} · {misionActiva.recompensaPuntos.toLocaleString('es-AR')} pts</p>
          </Link>
        )}

        {/* Últimos movimientos */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-black/40 uppercase tracking-wide">Últimos movimientos</p>
            <Link to="/member/actividad" className="text-xs text-[var(--color-brand)]">Ver todos</Link>
          </div>
          {historial.length === 0 ? (
            <p className="text-sm text-black/40">Todavía no hay compras.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {historial.map((t) => {
                const sucursal = SUCURSALES.find((s) => s.id === t.sucursalId)
                const nombre = t.comercioNombre ?? sucursal?.nombre ?? t.sucursalId
                return (
                  <div key={t.id} className="flex items-center justify-between rounded-xl border border-[var(--color-border)] px-3 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{nombre}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-xs text-black/40">{t.fecha}</p>
                        {t.puntosGanados > 0 && (
                          <span className="text-[10px] font-medium text-[var(--color-brand)] bg-[var(--color-brand-pale)] px-1.5 py-0.5 rounded-full">
                            +{t.puntosGanados} pts
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <p className="text-sm font-semibold">{formatoMoneda(t.montoTotal)}</p>
                      {(t.descuentoAplicado ?? 0) > 0 && (
                        <p className="text-xs text-[var(--color-success)]">-{formatoMoneda(t.descuentoAplicado!)}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
