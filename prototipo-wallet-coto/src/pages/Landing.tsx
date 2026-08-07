import { Link } from 'react-router-dom'
import { useWalletStore } from '../store/useWalletStore'

function openMobileWindow() {
  const base = window.location.href.replace(/#.*$/, '')
  window.open(
    base + '#/member',
    'cotopay-member',
    'width=390,height=844,menubar=no,toolbar=no,location=no,status=no,resizable=no',
  )
}

export default function Landing() {
  const resetDemo = useWalletStore((s) => s.resetDemo)

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center px-6 py-16 gap-10 text-center">
      {/* w-full en ambos bloques: en un flex-col con items-center, un hijo
          sin ancho explícito se dimensiona a su contenido preferido (la
          línea de texto entera sin cortar) y sólo después se recorta contra
          el viewport — en mobile angosto eso cortaba el párrafo y el kicker
          en vez de hacerlos ajustar (wrap) dentro del ancho disponible. */}
      <div className="w-full space-y-3 max-w-xl">
        <p className="text-sm font-medium text-[var(--color-brand)] tracking-wide uppercase">
          Prototipo funcional — datos sideados
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">Wallet COTO</h1>
        <p className="text-base text-black/60">
          Demo end-to-end para MT10 (fidelización) y MT25 (business plan) —
          mismo modelo de datos, dos vistas. Un pago hecho en{' '}
          <strong>member</strong> se refleja en vivo en <strong>manager</strong>{' '}
          si abrís las dos rutas en pestañas o ventanas distintas.
        </p>
      </div>

      {/* grid-cols-1 explícito: sin él, un grid mobile-first sin columnas
          declaradas usa tracks "auto" que se dimensionan al max-content de
          las cards (todo el texto en una sola línea) e ignoran el w-full
          del contenedor — otro caso del mismo bug de overflow horizontal. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <button
          type="button"
          onClick={openMobileWindow}
          className="group rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8 text-left shadow-sm transition hover:shadow-md hover:border-[var(--color-brand)] w-full"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-black/40">Vista</p>
          <h2 className="text-2xl font-semibold mt-1">Member</h2>
          <p className="text-sm text-black/60 mt-2">
            La wallet del cliente: pagar en caja con beneficio automático,
            ver beneficios activos y recomprar desde el historial.
          </p>
          <span className="inline-block mt-4 text-sm font-medium text-[var(--color-brand)] group-hover:underline">
            Abrir en ventana móvil →
          </span>
        </button>

        <Link
          to="/manager"
          className="group rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-8 text-left shadow-sm transition hover:shadow-md hover:border-[var(--color-brand)]"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-black/40">Vista</p>
          <h2 className="text-2xl font-semibold mt-1">Manager</h2>
          <p className="text-sm text-black/60 mt-2">
            Segmentación RFM en tiempo real, gestión de campañas (CU-05) y
            analytics de adopción/redención.
          </p>
          <span className="inline-block mt-4 text-sm font-medium text-[var(--color-brand)] group-hover:underline">
            Entrar como manager →
          </span>
        </Link>
      </div>

      <button
        type="button"
        onClick={resetDemo}
        className="text-xs text-black/40 hover:text-black/70 underline underline-offset-2"
      >
        Reiniciar datos de la demo
      </button>
    </div>
  )
}
