import { useState } from 'react'
import { useWalletStore } from '../../store/useWalletStore'
import { formatoMoneda } from '../../lib/analytics'
import type { Categoria } from '../../data/types'
import { IconScan } from '../../components/Icons'

const CANASTA_RAPIDA: Record<string, { categoria: Categoria; producto: string; monto: number }[]> = {
  'Compra semanal': [
    { categoria: 'Frescos', producto: 'Verdura + carne', monto: 6400 },
    { categoria: 'Almacén', producto: 'Almacén variado', monto: 5200 },
    { categoria: 'Limpieza', producto: 'Limpieza del hogar', monto: 3100 },
  ],
  'Solo bebidas': [{ categoria: 'Bebidas', producto: 'Gaseosas + agua', monto: 4200 }],
  'Perfumería': [{ categoria: 'Perfumería', producto: 'Higiene personal', monto: 3800 }],
}

export default function Pagar() {
  const pagarEnCaja = useWalletStore((s) => s.pagarEnCaja)
  const [canasta, setCanasta] = useState<keyof typeof CANASTA_RAPIDA>('Compra semanal')
  const [resultado, setResultado] = useState<ReturnType<typeof pagarEnCaja> | null>(null)
  const [escaneando, setEscaneando] = useState(false)

  function confirmarPago() {
    setEscaneando(true)
    // simula la latencia de CU-01 (<800ms en el diseño real) — acá solo
    // de forma cosmética, no hay infraestructura de streaming/Redis real.
    setTimeout(() => {
      const r = pagarEnCaja(CANASTA_RAPIDA[canasta])
      setResultado(r)
      setEscaneando(false)
    }, 600)
  }

  if (resultado) {
    const { transaccion, beneficio } = resultado
    return (
      <div className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
        <div className="text-4xl">✅</div>
        <p className="text-lg font-semibold">Pago confirmado</p>
        <p className="text-2xl font-semibold text-[var(--color-brand)]">
          {formatoMoneda(transaccion.montoTotal)}
        </p>
        {beneficio ? (
          <div className="rounded-lg bg-[var(--color-success-pale)] px-4 py-3 text-sm">
            Se aplicó <strong>{beneficio.nombre}</strong> ({beneficio.descuentoPct}% off) automáticamente.
          </div>
        ) : (
          <p className="text-sm text-black/50">No había un beneficio elegible para esta compra.</p>
        )}
        <p className="text-xs text-black/40">+{transaccion.puntosGanados} pts sumados</p>
        <button
          type="button"
          onClick={() => setResultado(null)}
          className="mt-4 text-sm font-medium text-[var(--color-brand)] underline"
        >
          Volver a pagar
        </button>
      </div>
    )
  }

  return (
    <div className="p-6 flex flex-col gap-5 h-full">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        <div className="flex-1 flex flex-col gap-1">
          <h1 className="text-lg font-semibold">Pagar en caja</h1>
          <p className="text-sm text-black/50">Elegí tu compra</p>
        </div>

        {/* Nota de contexto para quien corre la demo — no es parte de la
            experiencia real del wallet member, por eso queda visualmente
            aparte (más chica, muted, colapsada) y no compite con el flujo
            principal. En mobile/tablet cae debajo del título; en viewports
            más anchos se ubica al costado. */}
        <aside className="sm:w-44 sm:shrink-0">
          <details className="rounded-lg border border-[var(--color-border)] bg-black/[0.03] px-3 py-2">
            <summary className="flex items-center gap-1.5 text-[11px] font-medium text-black/45 cursor-pointer select-none marker:content-none [&::-webkit-details-marker]:hidden">
              <svg
                viewBox="0 0 16 16"
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6.8" stroke="currentColor" strokeWidth="1.3" />
                <rect x="7.25" y="6.75" width="1.5" height="4.5" rx="0.75" fill="currentColor" />
                <circle cx="8" cy="4.6" r="0.9" fill="currentColor" />
              </svg>
              Cómo funciona esta demo
            </summary>
            <p className="mt-2 text-[11px] leading-relaxed text-black/40">
              Elegís qué está "comprando" el cliente en esta simulación de caja —
              el beneficio se calcula y aplica solo, en el mismo tap.
            </p>
          </details>
        </aside>
      </div>

      <div className="flex flex-col gap-2">
        {Object.keys(CANASTA_RAPIDA).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setCanasta(k as keyof typeof CANASTA_RAPIDA)}
            className={`text-left rounded-lg border px-4 py-3 text-sm ${
              canasta === k
                ? 'border-[var(--color-brand)] bg-[var(--color-brand-pale)]'
                : 'border-[var(--color-border)]'
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center gap-3">
        <div
          className={`w-40 h-40 rounded-2xl bg-white border-2 flex items-center justify-center transition-colors ${
            escaneando ? 'border-[var(--color-brand)] animate-pulse' : 'border-[var(--color-brand-pale)]'
          }`}
          style={{
            boxShadow: escaneando
              ? '0 12px 32px color-mix(in srgb, var(--color-brand) 28%, transparent), 0 2px 8px color-mix(in srgb, var(--color-brand) 14%, transparent)'
              : '0 8px 24px color-mix(in srgb, var(--color-brand) 14%, transparent), 0 2px 6px color-mix(in srgb, var(--color-brand) 8%, transparent)',
          }}
        >
          <IconScan className={`w-14 h-14 ${escaneando ? 'text-[var(--color-brand)]' : 'text-black/25'}`} />
        </div>
        <button
          type="button"
          onClick={confirmarPago}
          disabled={escaneando}
          aria-label={escaneando ? 'Procesando pago' : 'Escanear código QR y pagar'}
          aria-busy={escaneando}
          className="w-20 h-20 shrink-0 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center shadow-lg disabled:opacity-60 transition-opacity"
        >
          {escaneando ? (
            <span
              className="w-6 h-6 rounded-full border-2 border-white/40 border-t-white animate-spin"
              aria-hidden="true"
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8"
              fill="none"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
              <rect x="5.5" y="5.5" width="2" height="2" fill="currentColor" />
              <rect x="16.5" y="5.5" width="2" height="2" fill="currentColor" />
              <rect x="5.5" y="16.5" width="2" height="2" fill="currentColor" />
              <rect x="14" y="14" width="3" height="3" fill="currentColor" />
              <rect x="18" y="14" width="3" height="3" fill="currentColor" />
              <rect x="14" y="18" width="3" height="3" fill="currentColor" />
              <rect x="18" y="18" width="3" height="3" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
