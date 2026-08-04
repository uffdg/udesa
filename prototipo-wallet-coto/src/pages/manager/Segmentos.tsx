import { useState } from 'react'
import { useWalletStore } from '../../store/useWalletStore'
import { SEGMENTOS, SUCURSALES } from '../../data/seed'
import { contarPorSegmento, formatoMoneda, gmvPorSegmento } from '../../lib/analytics'

export default function Segmentos() {
  const clientes = useWalletStore((s) => s.clientes)
  const transacciones = useWalletStore((s) => s.transacciones)
  const [filtro, setFiltro] = useState<string | null>(null)

  const conteo = contarPorSegmento(clientes)
  const gmv = gmvPorSegmento(clientes, transacciones)
  const total = clientes.length

  const visibles = filtro ? clientes.filter((c) => c.segmento === filtro) : clientes

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Segmentación en tiempo real (RFM)</h1>
        <p className="text-sm text-black/50 mt-1">
          Recencia · Frecuencia · Monto — una única capa de segmentación que
          alimenta tanto a las campañas (CU-05) como a las decisiones en
          caja (CU-01).
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {SEGMENTOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setFiltro(filtro === s.id ? null : s.id)}
            className={`rounded-[var(--radius-card)] border p-4 text-left transition ${
              filtro === s.id ? 'border-black' : 'border-[var(--color-border)]'
            }`}
            style={{ borderLeftColor: s.color, borderLeftWidth: 4 }}
          >
            <p className="text-2xl font-semibold">{conteo[s.id]}</p>
            <p className="text-sm font-medium mt-1">{s.nombre}</p>
            <p className="text-xs text-black/40 mt-1">{((conteo[s.id] / total) * 100).toFixed(0)}% de la base</p>
            <p className="text-xs text-black/50 mt-2">{formatoMoneda(gmv[s.id])} GMV</p>
          </button>
        ))}
      </div>

      <div>
        <p className="text-sm font-medium mb-2">
          {filtro ? `Clientes en "${SEGMENTOS.find((s) => s.id === filtro)?.nombre}"` : 'Todos los clientes'}
        </p>
        <div className="border border-[var(--color-border)] rounded-lg overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-black/[0.03] text-left text-xs uppercase tracking-wide text-black/40">
              <tr>
                <th className="px-4 py-2">Cliente</th>
                <th className="px-4 py-2">Segmento</th>
                <th className="px-4 py-2">Sucursal habitual</th>
                <th className="px-4 py-2">TCI</th>
                <th className="px-4 py-2">Wallet activa</th>
                <th className="px-4 py-2">Puntos</th>
              </tr>
            </thead>
            <tbody>
              {visibles.map((c) => {
                const seg = SEGMENTOS.find((s) => s.id === c.segmento)!
                return (
                  <tr key={c.id} className="border-t border-[var(--color-border)]">
                    <td className="px-4 py-2 font-medium">{c.nombre}</td>
                    <td className="px-4 py-2">
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full text-white"
                        style={{ background: seg.color }}
                      >
                        {seg.nombre}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-black/60">
                      {SUCURSALES.find((s) => s.id === c.sucursalHabitualId)?.nombre}
                    </td>
                    <td className="px-4 py-2">{c.tieneTCI ? '✓' : '—'}</td>
                    <td className="px-4 py-2">{c.walletActivada ? '✓' : '—'}</td>
                    <td className="px-4 py-2">{c.puntos.toLocaleString('es-AR')}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
