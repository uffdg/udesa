import { useMemo, useState } from 'react'
import { useWalletStore } from '../../store/useWalletStore'

export default function Recompra() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const transacciones = useWalletStore((s) => s.transacciones)
  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const [agregados, setAgregados] = useState<Set<string>>(new Set())

  const productosFrecuentes = useMemo(() => {
    const conteo = new Map<string, { producto: string; categoria: string; veces: number }>()
    transacciones
      .filter((t) => t.clienteId === cliente.id)
      .forEach((t) =>
        t.items.forEach((it) => {
          const key = it.producto
          const prev = conteo.get(key)
          conteo.set(key, {
            producto: it.producto,
            categoria: it.categoria,
            veces: (prev?.veces ?? 0) + 1,
          })
        }),
      )
    return [...conteo.values()].sort((a, b) => b.veces - a.veces).slice(0, 8)
  }, [transacciones, cliente.id])

  function toggle(producto: string) {
    setAgregados((prev) => {
      const next = new Set(prev)
      if (next.has(producto)) next.delete(producto)
      else next.add(producto)
      return next
    })
  }

  return (
    <div className="p-6 flex flex-col gap-5">
      <h1 className="text-lg font-semibold">Recompra rápida</h1>
      <p className="text-xs text-black/50">
        Lo que más comprás en COTO, listo para sumar a tu próximo pedido de
        Coto Digital sin buscarlo de nuevo.
      </p>

      {productosFrecuentes.length === 0 ? (
        <p className="text-sm text-black/40">Todavía no hay historial suficiente.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {productosFrecuentes.map((p) => (
            <button
              key={p.producto}
              type="button"
              onClick={() => toggle(p.producto)}
              className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm ${
                agregados.has(p.producto)
                  ? 'border-[var(--color-brand)] bg-[var(--color-brand-pale)]'
                  : 'border-[var(--color-border)]'
              }`}
            >
              <div>
                <p className="font-medium">{p.producto}</p>
                <p className="text-xs text-black/40">
                  {p.categoria} · comprado {p.veces}x
                </p>
              </div>
              <span className="text-lg">{agregados.has(p.producto) ? '✓' : '+'}</span>
            </button>
          ))}
        </div>
      )}

      {agregados.size > 0 && (
        <div className="mt-auto rounded-lg bg-[var(--color-ink)] text-white text-center py-3 text-sm font-medium">
          {agregados.size} producto{agregados.size > 1 ? 's' : ''} listo para el carrito de Coto Digital
        </div>
      )}
    </div>
  )
}
