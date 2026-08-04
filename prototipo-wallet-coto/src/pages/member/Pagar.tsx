import { useState } from 'react'
import { useWalletStore } from '../../store/useWalletStore'
import { formatoMoneda } from '../../lib/analytics'
import type { Categoria } from '../../data/types'

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
      <h1 className="text-lg font-semibold">Pagar en caja</h1>
      <p className="text-sm text-black/50">
        Elegí qué está "comprando" el cliente en esta simulación de caja —
        el beneficio se calcula y aplica solo, en el mismo tap.
      </p>

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
          className={`w-40 h-40 rounded-2xl border-4 border-dashed flex items-center justify-center text-5xl ${
            escaneando ? 'border-[var(--color-brand)] animate-pulse' : 'border-black/15'
          }`}
        >
          📷
        </div>
        <button
          type="button"
          onClick={confirmarPago}
          disabled={escaneando}
          className="w-full rounded-full bg-[var(--color-brand)] text-white py-3 text-sm font-medium disabled:opacity-60"
        >
          {escaneando ? 'Procesando...' : 'Escanear QR y pagar'}
        </button>
      </div>
    </div>
  )
}
