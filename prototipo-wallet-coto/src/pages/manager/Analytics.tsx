import { useWalletStore } from '../../store/useWalletStore'
import { KPIS_BASELINE_DOSSIER } from '../../data/seed'
import {
  formatoMoneda,
  formatoPct,
  shareMedioPago,
  tasaAdopcionWallet,
  tasaRedencion,
} from '../../lib/analytics'

function Kpi({
  label,
  valor,
  referencia,
}: {
  label: string
  valor: string
  referencia?: string
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-black/40">{label}</p>
      <p className="text-3xl font-semibold mt-2">{valor}</p>
      {referencia && <p className="text-xs text-black/40 mt-1">{referencia}</p>}
    </div>
  )
}

export default function Analytics() {
  const clientes = useWalletStore((s) => s.clientes)
  const transacciones = useWalletStore((s) => s.transacciones)

  const redencion = tasaRedencion(transacciones)
  const adopcion = tasaAdopcionWallet(clientes)
  const shares = shareMedioPago(transacciones)
  const gmvTotal = transacciones.reduce((acc, t) => acc + t.montoTotal, 0)
  const gmvWallet = transacciones.filter((t) => t.medioPago === 'Wallet COTO').reduce((a, t) => a + t.montoTotal, 0)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-sm text-black/50 mt-1">
          Calculado en vivo sobre el dato sideado — las "referencias" son
          las cifras citadas del dossier COTO en los planes de
          mt10-fidelizacion-coto, no un objetivo que este prototipo intente
          reproducir exacto.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Kpi
          label="Tasa de redención (Wallet COTO)"
          valor={formatoPct(redencion)}
          referencia={`Dossier: ${formatoPct(KPIS_BASELINE_DOSSIER.tasaRedencionCuponesActual)} hoy → objetivo CU-05 ${formatoPct(
            KPIS_BASELINE_DOSSIER.tasaRedencionCuponesObjetivoCU05,
          )}`}
        />
        <Kpi
          label="Adopción de Wallet COTO"
          valor={formatoPct(adopcion)}
          referencia={`${clientes.filter((c) => c.walletActivada).length} de ${clientes.length} clientes de la muestra`}
        />
        <Kpi
          label="GMV vía Wallet COTO"
          valor={formatoPct(gmvTotal === 0 ? 0 : gmvWallet / gmvTotal)}
          referencia={`${formatoMoneda(gmvWallet)} de ${formatoMoneda(gmvTotal)} totales`}
        />
      </div>

      <div>
        <p className="text-sm font-medium mb-3">Share por medio de pago</p>
        <div className="flex flex-col gap-2">
          {Object.entries(shares)
            .sort((a, b) => b[1] - a[1])
            .map(([medio, pct]) => (
              <div key={medio} className="flex items-center gap-3">
                <p className="w-32 text-sm text-black/60 shrink-0">{medio}</p>
                <div className="flex-1 h-2 rounded-full bg-black/5 overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-brand)]"
                    style={{ width: `${pct * 100}%` }}
                  />
                </div>
                <p className="w-14 text-right text-sm text-black/50">{formatoPct(pct)}</p>
              </div>
            ))}
        </div>
        <p className="text-xs text-black/40 mt-3">
          MP y MODO siguen instalados en caja (multi-tenanting, ver
          plan-captura-de-valor.md) — la wallet propia se mide como
          participación adicional, no como reemplazo.
        </p>
      </div>
    </div>
  )
}
