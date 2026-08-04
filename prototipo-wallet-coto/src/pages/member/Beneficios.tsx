import { useWalletStore } from '../../store/useWalletStore'

export default function Beneficios() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const reglas = useWalletStore((s) => s.reglas)

  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const elegibles = reglas.filter((r) => r.segmentosElegibles.includes(cliente.segmento))
  const noElegibles = reglas.filter((r) => !r.segmentosElegibles.includes(cliente.segmento))

  return (
    <div className="p-6 flex flex-col gap-5">
      <h1 className="text-lg font-semibold">Tus beneficios</h1>
      <p className="text-xs text-black/50">
        Reglas fijas y visibles según tu historial — no un calendario
        genérico. Cada regla dice quién la financia, para que quede claro
        qué es promoción de COTO y qué es de un proveedor/banco.
      </p>

      <div className="flex flex-col gap-3">
        {elegibles.map((b) => (
          <div key={b.id} className="rounded-lg border border-[var(--color-border)] p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[var(--color-brand)]">{b.descuentoPct}% off</p>
              <span className="text-[10px] uppercase tracking-wide text-black/40">
                Financia: {b.financiadoPor}
              </span>
            </div>
            <p className="text-sm font-medium mt-1">{b.nombre}</p>
            <p className="text-xs text-black/60 mt-1">{b.descripcion}</p>
          </div>
        ))}
      </div>

      {noElegibles.length > 0 && (
        <div>
          <p className="text-xs font-medium text-black/30 uppercase tracking-wide mb-2">
            No disponibles para tu segmento hoy
          </p>
          <div className="flex flex-col gap-2">
            {noElegibles.map((b) => (
              <div key={b.id} className="rounded-lg border border-dashed border-[var(--color-border)] p-3 opacity-50">
                <p className="text-sm">{b.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
