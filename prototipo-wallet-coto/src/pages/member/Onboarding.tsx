import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'

export default function Onboarding() {
  const navigate = useNavigate()
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const [step, setStep] = useState(0)

  function confirmar() {
    useWalletStore.setState((state) => ({
      clientes: state.clientes.map((c) =>
        c.id === cliente.id ? { ...c, walletActivada: true } : c,
      ),
    }))
    navigate('/member')
  }

  return (
    <div className="p-6 flex flex-col gap-5 h-full">
      <h1 className="text-lg font-semibold">Activar Wallet COTO</h1>

      {step === 0 && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-black/60">
            Detectamos que ya sos socio de Comunidad COTO — vinculamos tu
            alta existente, sin volver a empezar de cero.
          </p>
          <div className="rounded-lg border border-[var(--color-border)] p-3 text-sm">
            <p className="font-medium">{cliente.nombre}</p>
            <p className="text-black/50">{cliente.email}</p>
            <p className="text-black/50 mt-1">
              {cliente.tieneTCI ? 'TCI vinculada ✓' : 'Sin TCI vinculada todavía'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="rounded-full bg-[var(--color-brand)] text-white py-3 text-sm font-medium"
          >
            Continuar
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-black/60">
            Sin costo de apertura ni mantenimiento. Vas a poder pagar en caja
            escaneando un QR propio y sumar beneficios automáticos según tu
            historial de compra.
          </p>
          <button
            type="button"
            onClick={confirmar}
            className="rounded-full bg-[var(--color-brand)] text-white py-3 text-sm font-medium"
          >
            Activar Wallet COTO
          </button>
        </div>
      )}
    </div>
  )
}
