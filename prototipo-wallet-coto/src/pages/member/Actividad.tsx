import { useState } from 'react'
import { useWalletStore, SUCURSALES } from '../../store/useWalletStore'
import { formatoMoneda } from '../../lib/analytics'
import type { Transaccion } from '../../data/types'

type Filtro = 'todos' | 'pagos' | 'puntos' | 'descuentos' | 'cupones'

const FILTROS: { id: Filtro; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'pagos', label: 'Pagos' },
  { id: 'puntos', label: 'Puntos' },
  { id: 'descuentos', label: 'Descuentos' },
  { id: 'cupones', label: 'Cupones' },
]

function iconoComercio(nombre: string) {
  if (nombre.toLowerCase().includes('digital')) return '💻'
  if (nombre.toLowerCase().includes('martínez') || nombre.toLowerCase().includes('martinez')) return '☕'
  if (nombre.toLowerCase().includes('tostado')) return '🥪'
  if (nombre.toLowerCase().includes('dexter')) return '👟'
  if (nombre.toLowerCase().includes('mostaza')) return '🍔'
  return '🛒'
}

function DetalleMovimiento({ tx, onCerrar }: { tx: Transaccion; onCerrar: () => void }) {
  const sucursal = SUCURSALES.find((s) => s.id === tx.sucursalId)
  const nombre = tx.comercioNombre ?? sucursal?.nombre ?? tx.sucursalId
  const fecha = new Date(tx.fecha + 'T12:00:00')

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={onCerrar}>
      <div
        className="w-full max-w-[390px] bg-white rounded-t-3xl p-5 pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-4" />
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">{iconoComercio(nombre)}</span>
          <div>
            <p className="font-semibold">{nombre}</p>
            <p className="text-xs text-black/50">
              {fecha.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })} · {tx.medioPago}
            </p>
          </div>
        </div>

        <div className="bg-[var(--color-paper)] rounded-xl p-4 flex flex-col gap-2.5 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-black/60">Importe original</span>
            <span className="font-medium">{formatoMoneda(tx.montoTotal + (tx.descuentoAplicado ?? 0))}</span>
          </div>
          {(tx.descuentoAplicado ?? 0) > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-black/60">Descuento aplicado</span>
              <span className="text-[var(--color-success)] font-medium">-{formatoMoneda(tx.descuentoAplicado!)}</span>
            </div>
          )}
          {(tx.puntosUsados ?? 0) > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-black/60">Puntos usados</span>
              <span className="text-[var(--color-brand)] font-medium">-{tx.puntosUsados!.toLocaleString('es-AR')} pts</span>
            </div>
          )}
          <div className="border-t border-[var(--color-border)] pt-2 flex justify-between">
            <span className="font-semibold">Total pagado</span>
            <span className="font-bold text-base">{formatoMoneda(tx.montoTotal)}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {tx.puntosGanados > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[var(--color-brand)]">⭐</span>
              <span>Sumaste <strong>{tx.puntosGanados} puntos</strong></span>
            </div>
          )}
          {tx.items.length > 0 && (
            <div className="text-xs text-black/50">
              Categorías: {[...new Set(tx.items.map((i) => i.categoria))].join(', ')}
            </div>
          )}
        </div>

        <button
          onClick={onCerrar}
          className="mt-4 w-full py-3 rounded-xl border border-[var(--color-border)] text-sm text-black/60"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default function Actividad() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const transacciones = useWalletStore((s) => s.transacciones)

  const [filtro, setFiltro] = useState<Filtro>('todos')
  const [txDetalle, setTxDetalle] = useState<Transaccion | null>(null)

  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const historial = transacciones
    .filter((t) => t.clienteId === cliente.id)
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))

  function filtrar(lista: Transaccion[]) {
    if (filtro === 'puntos') return lista.filter((t) => t.puntosGanados > 0)
    if (filtro === 'descuentos') return lista.filter((t) => (t.descuentoAplicado ?? 0) > 0)
    if (filtro === 'cupones') return lista.filter((t) => t.cuponAplicadoId)
    if (filtro === 'pagos') return lista
    return lista
  }

  const lista = filtrar(historial)

  const totalAhorrado = historial.reduce((acc, t) => acc + (t.descuentoAplicado ?? 0), 0)
  const totalPuntos = historial.reduce((acc, t) => acc + t.puntosGanados, 0)

  return (
    <div className="flex flex-col h-full">
      {txDetalle && <DetalleMovimiento tx={txDetalle} onCerrar={() => setTxDetalle(null)} />}

      <div className="px-5 pt-5 pb-3">
        <h1 className="text-lg font-bold mb-3">Mi actividad</h1>

        {/* Resumen rápido */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl bg-[var(--color-success-pale)] p-3">
            <p className="text-xs text-[var(--color-success)] font-medium">Ahorro total</p>
            <p className="text-lg font-bold text-[var(--color-success)]">{formatoMoneda(totalAhorrado)}</p>
          </div>
          <div className="rounded-xl bg-[var(--color-brand-pale)] p-3">
            <p className="text-xs text-[var(--color-brand)] font-medium">Puntos ganados</p>
            <p className="text-lg font-bold text-[var(--color-brand)]">{totalPuntos.toLocaleString('es-AR')} pts</p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5">
          {FILTROS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filtro === f.id
                  ? 'bg-[var(--color-brand)] text-white border-[var(--color-brand)]'
                  : 'bg-white text-black/60 border-[var(--color-border)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de movimientos */}
      <div className="flex-1 overflow-y-auto px-5 pb-6 flex flex-col gap-2">
        {lista.length === 0 && (
          <div className="text-center py-12 text-black/40">
            <p className="text-2xl mb-2">📋</p>
            <p className="text-sm">Sin movimientos en este filtro.</p>
          </div>
        )}
        {lista.map((tx) => {
          const sucursal = SUCURSALES.find((s) => s.id === tx.sucursalId)
          const nombre = tx.comercioNombre ?? sucursal?.nombre ?? tx.sucursalId

          return (
            <button
              key={tx.id}
              onClick={() => setTxDetalle(tx)}
              className="w-full text-left rounded-xl border border-[var(--color-border)] px-4 py-3 bg-white hover:bg-[var(--color-paper)] transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{iconoComercio(nombre)}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{nombre}</p>
                      <p className="text-xs text-black/40">{tx.fecha} · {tx.medioPago}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold">{formatoMoneda(tx.montoTotal)}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {(tx.descuentoAplicado ?? 0) > 0 && (
                      <span className="text-[10px] font-medium text-[var(--color-success)] bg-[var(--color-success-pale)] px-1.5 py-0.5 rounded-full">
                        Ahorraste {formatoMoneda(tx.descuentoAplicado!)}
                      </span>
                    )}
                    {tx.puntosGanados > 0 && (
                      <span className="text-[10px] font-medium text-[var(--color-brand)] bg-[var(--color-brand-pale)] px-1.5 py-0.5 rounded-full">
                        +{tx.puntosGanados} pts
                      </span>
                    )}
                    {(tx.puntosUsados ?? 0) > 0 && (
                      <span className="text-[10px] font-medium text-black/50 bg-[var(--color-paper)] px-1.5 py-0.5 rounded-full border border-[var(--color-border)]">
                        -{tx.puntosUsados} pts usados
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
