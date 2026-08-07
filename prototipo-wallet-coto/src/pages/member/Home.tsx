import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWalletStore } from '../../store/useWalletStore'
import { formatoMoneda } from '../../lib/analytics'
import { SUCURSALES } from '../../data/seed'
import {
  IconScan, IconGift, IconActivity, IconChevronRight,
  IconEye, IconEyeOff, IconArrowUp, IconArrowDown,
  IconStore, IconTrendingUp, IconX, IconCheck,
} from '../../components/Icons'

type ModalTipo = 'enviar' | 'ingresar' | 'cashin' | 'cashout' | 'invertir' | null

// ── Modal base ──────────────────────────────────────────────────────────────
function Modal({
  titulo,
  onCerrar,
  children,
}: {
  titulo: string
  onCerrar: () => void
  children: React.ReactNode
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
      onClick={onCerrar}
    >
      <div
        className="w-full max-w-[390px] bg-white rounded-t-3xl p-5 pb-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-black/10 rounded-full mx-auto mb-5" />
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-base">{titulo}</h2>
          <button onClick={onCerrar} className="text-black/30 hover:text-black/60">
            <IconX className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

function PasoExito({
  mensaje,
  sub,
  onCerrar,
}: {
  mensaje: string
  sub: string
  onCerrar: () => void
}) {
  return (
    <div className="text-center py-2">
      <div className="w-16 h-16 rounded-full bg-[var(--color-success-pale)] flex items-center justify-center mx-auto mb-4">
        <IconCheck className="w-8 h-8 text-[var(--color-success)]" />
      </div>
      <p className="font-semibold text-base mb-1">{mensaje}</p>
      <p className="text-sm text-black/50 mb-6">{sub}</p>
      <button
        onClick={onCerrar}
        className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium"
      >
        Listo
      </button>
    </div>
  )
}

// ── Modal Enviar ─────────────────────────────────────────────────────────────
function ModalEnviar({ onCerrar }: { onCerrar: () => void }) {
  const [destino, setDestino] = useState('')
  const [monto, setMonto] = useState('')
  const [paso, setPaso] = useState<'form' | 'confirm' | 'ok'>('form')

  return (
    <Modal titulo="Enviar dinero" onCerrar={onCerrar}>
      {paso === 'form' && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-black/50 mb-1.5 block">
              Destinatario (alias, CVU o CBU)
            </label>
            <input
              className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)]"
              placeholder="alias.destino o 22 dígitos"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs text-black/50 mb-1.5 block">Monto</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black/40">$</span>
              <input
                className="w-full border border-[var(--color-border)] rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)]"
                placeholder="0"
                type="number"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={() => destino && monto && setPaso('confirm')}
            disabled={!destino || !monto}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium disabled:opacity-40 mt-1"
          >
            Continuar
          </button>
        </div>
      )}
      {paso === 'confirm' && (
        <div className="flex flex-col gap-3">
          <div className="bg-[var(--color-paper)] rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-black/50">Para</span>
              <span className="font-medium text-right max-w-[60%] break-all">{destino}</span>
            </div>
            <div className="border-t border-[var(--color-border)]" />
            <div className="flex justify-between">
              <span className="text-sm text-black/50">Monto</span>
              <span className="font-bold text-lg">{formatoMoneda(Number(monto))}</span>
            </div>
          </div>
          <button
            onClick={() => setPaso('ok')}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium"
          >
            Confirmar transferencia
          </button>
          <button
            onClick={() => setPaso('form')}
            className="w-full py-3 rounded-xl border border-[var(--color-border)] text-sm text-black/50"
          >
            Volver
          </button>
        </div>
      )}
      {paso === 'ok' && (
        <PasoExito
          mensaje="Transferencia enviada"
          sub="El dinero llegará en instantes."
          onCerrar={onCerrar}
        />
      )}
    </Modal>
  )
}

// ── Modal Ingresar ───────────────────────────────────────────────────────────
function ModalIngresar({
  alias,
  cvu,
  onCerrar,
}: {
  alias: string
  cvu: string
  onCerrar: () => void
}) {
  const [origen, setOrigen] = useState('')
  const [monto, setMonto] = useState('')
  const [paso, setPaso] = useState<'form' | 'confirm' | 'ok'>('form')
  const [copiado, setCopiado] = useState<'alias' | 'cvu' | null>(null)

  function copiar(texto: string, tipo: 'alias' | 'cvu') {
    navigator.clipboard.writeText(texto)
    setCopiado(tipo)
    setTimeout(() => setCopiado(null), 1500)
  }

  function formatCVU(c: string) {
    return c.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
  }

  return (
    <Modal titulo="Ingresar dinero" onCerrar={onCerrar}>
      {paso === 'form' && (
        <div className="flex flex-col gap-4">
          <div className="bg-[var(--color-paper)] rounded-xl p-4 flex flex-col gap-2">
            <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-1">
              Tus datos para recibir
            </p>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] text-black/40">Alias</p>
                <p className="text-sm font-medium truncate">{alias}</p>
              </div>
              <button
                onClick={() => copiar(alias, 'alias')}
                className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-black/50 shrink-0"
              >
                {copiado === 'alias' ? '✓ Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] text-black/40">CVU</p>
                <p className="text-xs font-mono text-black/70 truncate">{formatCVU(cvu)}</p>
              </div>
              <button
                onClick={() => copiar(cvu, 'cvu')}
                className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-black/50 shrink-0"
              >
                {copiado === 'cvu' ? '✓ Copiado' : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="relative flex items-center gap-3">
            <div className="flex-1 border-t border-[var(--color-border)]" />
            <span className="text-xs text-black/30 whitespace-nowrap">o debitá desde una cuenta</span>
            <div className="flex-1 border-t border-[var(--color-border)]" />
          </div>

          <div>
            <label className="text-xs text-black/50 mb-1.5 block">
              Cuenta origen (alias, CBU o CVU)
            </label>
            <input
              className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)]"
              placeholder="alias.banco o 22 dígitos"
              value={origen}
              onChange={(e) => setOrigen(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs text-black/50 mb-1.5 block">Monto</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black/40">$</span>
              <input
                className="w-full border border-[var(--color-border)] rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)]"
                placeholder="0"
                type="number"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={() => origen && monto && setPaso('confirm')}
            disabled={!origen || !monto}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium disabled:opacity-40"
          >
            Continuar
          </button>
        </div>
      )}
      {paso === 'confirm' && (
        <div className="flex flex-col gap-3">
          <div className="bg-[var(--color-paper)] rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-black/50">Desde</span>
              <span className="font-medium text-right max-w-[60%] break-all">{origen}</span>
            </div>
            <div className="border-t border-[var(--color-border)]" />
            <div className="flex justify-between">
              <span className="text-sm text-black/50">Monto</span>
              <span className="font-bold text-lg">{formatoMoneda(Number(monto))}</span>
            </div>
          </div>
          <button
            onClick={() => setPaso('ok')}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium"
          >
            Confirmar ingreso
          </button>
          <button
            onClick={() => setPaso('form')}
            className="w-full py-3 rounded-xl border border-[var(--color-border)] text-sm text-black/50"
          >
            Volver
          </button>
        </div>
      )}
      {paso === 'ok' && (
        <PasoExito
          mensaje="Solicitud enviada"
          sub="El dinero se acreditará en tu cuenta en instantes."
          onCerrar={onCerrar}
        />
      )}
    </Modal>
  )
}

// ── Modal Cash In ────────────────────────────────────────────────────────────
function ModalCashIn({ onCerrar }: { onCerrar: () => void }) {
  const [monto, setMonto] = useState('')
  const [paso, setPaso] = useState<'form' | 'codigo' | 'ok'>('form')
  const codigo = '4782-COTO'

  return (
    <Modal titulo="Depósito en caja COTO" onCerrar={onCerrar}>
      {paso === 'form' && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-black/60">
            Ingresá efectivo en cualquier sucursal COTO y el saldo se acredita al instante.
          </p>
          <div>
            <label className="text-xs text-black/50 mb-1.5 block">Monto a depositar</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black/40">$</span>
              <input
                className="w-full border border-[var(--color-border)] rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)]"
                placeholder="0"
                type="number"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={() => monto && setPaso('codigo')}
            disabled={!monto}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium disabled:opacity-40"
          >
            Generar código
          </button>
        </div>
      )}
      {paso === 'codigo' && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-black/60">
            Mostrá este código en la caja y pagá{' '}
            <strong>{formatoMoneda(Number(monto))}</strong> en efectivo.
          </p>
          <div className="bg-[var(--color-paper)] rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold tracking-[0.15em] text-[var(--color-brand)] mb-2">
              {codigo}
            </p>
            <p className="text-xs text-black/40">Código válido por 30 minutos</p>
          </div>
          <button
            onClick={() => setPaso('ok')}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium"
          >
            Listo, fui a la caja
          </button>
        </div>
      )}
      {paso === 'ok' && (
        <PasoExito
          mensaje="Depósito registrado"
          sub="El saldo se acreditará una vez que el cajero confirme el pago."
          onCerrar={onCerrar}
        />
      )}
    </Modal>
  )
}

// ── Modal Cash Out ───────────────────────────────────────────────────────────
function ModalCashOut({ saldo, onCerrar }: { saldo: number; onCerrar: () => void }) {
  const [monto, setMonto] = useState('')
  const [paso, setPaso] = useState<'form' | 'codigo' | 'ok'>('form')
  const codigo = '9431-COTO'

  return (
    <Modal titulo="Retiro en caja COTO" onCerrar={onCerrar}>
      {paso === 'form' && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-black/60">
            Retirá efectivo de tu saldo en cualquier sucursal COTO presentando tu DNI.
          </p>
          <div className="bg-[var(--color-paper)] rounded-xl px-4 py-3 flex justify-between">
            <span className="text-sm text-black/50">Saldo disponible</span>
            <span className="text-sm font-semibold">{formatoMoneda(saldo)}</span>
          </div>
          <div>
            <label className="text-xs text-black/50 mb-1.5 block">Monto a retirar</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black/40">$</span>
              <input
                className="w-full border border-[var(--color-border)] rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)]"
                placeholder="0"
                type="number"
                max={saldo}
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={() => monto && Number(monto) <= saldo && setPaso('codigo')}
            disabled={!monto || Number(monto) > saldo || Number(monto) <= 0}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium disabled:opacity-40"
          >
            Generar código
          </button>
        </div>
      )}
      {paso === 'codigo' && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-black/60">
            Presentá tu DNI y este código en la caja para retirar{' '}
            <strong>{formatoMoneda(Number(monto))}</strong>.
          </p>
          <div className="bg-[var(--color-paper)] rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold tracking-[0.15em] text-[var(--color-brand)] mb-2">
              {codigo}
            </p>
            <p className="text-xs text-black/40">Código válido por 30 minutos</p>
          </div>
          <button
            onClick={() => setPaso('ok')}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium"
          >
            Listo
          </button>
        </div>
      )}
      {paso === 'ok' && (
        <PasoExito
          mensaje="Retiro autorizado"
          sub="Acercate a la caja con tu DNI para retirar el efectivo."
          onCerrar={onCerrar}
        />
      )}
    </Modal>
  )
}

// ── Modal Invertir ───────────────────────────────────────────────────────────
function ModalInvertir({ saldo, onCerrar }: { saldo: number; onCerrar: () => void }) {
  const [monto, setMonto] = useState('')
  const [paso, setPaso] = useState<'form' | 'ok'>('form')
  const TNA = 38

  const gananciaAnual = monto ? Math.round((Number(monto) * TNA) / 100) : 0
  const gananciaDiaria = Math.round(gananciaAnual / 365)

  return (
    <Modal titulo="Invertir fondos" onCerrar={onCerrar}>
      {paso === 'form' && (
        <div className="flex flex-col gap-4">
          <div className="bg-[var(--color-accent-pale)] rounded-xl p-4">
            <p className="text-xs font-medium text-[var(--color-accent-dark)] mb-1">
              Fondo CotoPay Pesos
            </p>
            <p className="text-2xl font-bold text-[var(--color-accent-dark)]">{TNA}% TNA</p>
            <p className="text-xs text-[var(--color-accent-dark)]/60 mt-0.5">
              Disponible para rescatar en cualquier momento
            </p>
          </div>
          <div className="bg-[var(--color-paper)] rounded-xl px-4 py-3 flex justify-between">
            <span className="text-sm text-black/50">Saldo disponible</span>
            <span className="text-sm font-semibold">{formatoMoneda(saldo)}</span>
          </div>
          <div>
            <label className="text-xs text-black/50 mb-1.5 block">Monto a invertir</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black/40">$</span>
              <input
                className="w-full border border-[var(--color-border)] rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-[var(--color-brand)]"
                placeholder="0"
                type="number"
                max={saldo}
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
          </div>
          {monto && Number(monto) > 0 && (
            <div className="bg-[var(--color-paper)] rounded-xl px-4 py-3">
              <p className="text-xs text-black/50 mb-1">Ganancia estimada</p>
              <p className="text-sm">
                <span className="font-semibold">{formatoMoneda(gananciaDiaria)}/día</span>
                {' · '}
                {formatoMoneda(gananciaAnual)}/año
              </p>
            </div>
          )}
          <button
            onClick={() =>
              monto && Number(monto) > 0 && Number(monto) <= saldo && setPaso('ok')
            }
            disabled={!monto || Number(monto) <= 0 || Number(monto) > saldo}
            className="w-full py-3 rounded-xl bg-[var(--color-brand)] text-white font-medium disabled:opacity-40"
          >
            Invertir {monto ? formatoMoneda(Number(monto)) : ''}
          </button>
        </div>
      )}
      {paso === 'ok' && (
        <PasoExito
          mensaje="Inversión realizada"
          sub={`Tus fondos generan ${TNA}% TNA. Podés rescatarlos en cualquier momento.`}
          onCerrar={onCerrar}
        />
      )}
    </Modal>
  )
}

// ── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const clientes = useWalletStore((s) => s.clientes)
  const clienteActivoId = useWalletStore((s) => s.clienteActivoId)
  const transacciones = useWalletStore((s) => s.transacciones)
  const misiones = useWalletStore((s) => s.misiones)
  const cupones = useWalletStore((s) => s.cupones)

  const cliente = clientes.find((c) => c.id === clienteActivoId)!
  const historial = transacciones
    .filter((t) => t.clienteId === cliente.id)
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1))
    .slice(0, 4)

  const misionActiva = misiones.find((m) => m.estado === 'activa')
  const cuponesRecomendados = cupones
    .filter((c) => c.estado === 'disponible' || c.estado === 'activado')
    .slice(0, 4)

  const [saldoVisible, setSaldoVisible] = useState(true)
  const [modalAbierto, setModalAbierto] = useState<ModalTipo>(null)
  const [copiado, setCopiado] = useState<'alias' | 'cvu' | null>(null)

  if (!cliente.walletActivada) {
    return (
      <div className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
        <p className="text-sm text-black/60">Todavía no activaste la Wallet COTO.</p>
        <Link
          to="/member/onboarding"
          className="rounded-full bg-[var(--color-brand)] text-white px-6 py-3 text-sm font-medium"
        >
          Activar ahora
        </Link>
      </div>
    )
  }

  const saldo = cliente.saldoARS ?? 0
  const alias = cliente.alias ?? ''
  const cvu = cliente.cvu ?? ''
  const primerNombre = cliente.nombre.split(' ')[0]

  function copiar(texto: string, tipo: 'alias' | 'cvu') {
    navigator.clipboard.writeText(texto)
    setCopiado(tipo)
    setTimeout(() => setCopiado(null), 1500)
  }

  function formatCVU(c: string) {
    return c.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
  }

  type Accion = {
    id: string
    label: string
    icon: React.ReactNode
    color: string
    text: string
    to?: string
    modal?: boolean
  }

  const acciones: Accion[] = [
    {
      id: 'enviar',
      label: 'Enviar',
      icon: <IconArrowUp className="w-6 h-6" />,
      color: 'bg-[var(--color-brand)]',
      text: 'text-white',
      modal: true,
    },
    {
      id: 'ingresar',
      label: 'Ingresar',
      icon: <IconArrowDown className="w-6 h-6" />,
      color: 'bg-[var(--color-success-pale)]',
      text: 'text-[var(--color-success)]',
      modal: true,
    },
    {
      id: 'pagar',
      label: 'Pagar QR',
      icon: <IconScan className="w-6 h-6" />,
      color: 'bg-[var(--color-brand-pale)]',
      text: 'text-[var(--color-brand)]',
      to: '/member/pagar',
    },
    {
      id: 'actividad',
      label: 'Actividad',
      icon: <IconActivity className="w-6 h-6" />,
      color: 'bg-[var(--color-paper)]',
      text: 'text-black/60',
      to: '/member/actividad',
    },
    {
      id: 'cashin',
      label: 'Cash In',
      icon: <IconStore className="w-6 h-6" />,
      color: 'bg-[var(--color-accent-pale)]',
      text: 'text-[var(--color-accent-dark)]',
      modal: true,
    },
    {
      id: 'cashout',
      label: 'Cash Out',
      icon: <IconStore className="w-6 h-6" />,
      color: 'bg-[var(--color-accent-pale)]',
      text: 'text-[var(--color-accent-dark)]',
      modal: true,
    },
    {
      id: 'invertir',
      label: 'Invertir',
      icon: <IconTrendingUp className="w-6 h-6" />,
      color: 'bg-[#f0fdf4]',
      text: 'text-[var(--color-success)]',
      modal: true,
    },
    {
      id: 'beneficios',
      label: 'Beneficios',
      icon: <IconGift className="w-6 h-6" />,
      color: 'bg-[var(--color-brand-pale)]',
      text: 'text-[var(--color-brand)]',
      to: '/member/beneficios',
    },
  ]

  return (
    <>
      <div className="flex flex-col gap-0 pb-4">
        {/* ── Header rojo ── */}
        <div className="bg-[var(--color-brand)] px-5 pt-6 pb-8">
          <p className="text-white/70 text-sm mb-3">Hola, {primerNombre} 👋</p>

          {/* Balance card */}
          <div className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-1">
              <p className="text-white/70 text-xs font-medium uppercase tracking-wider">
                Saldo disponible
              </p>
              <button
                onClick={() => setSaldoVisible(!saldoVisible)}
                className="text-white/60 p-1 -mr-1"
              >
                {saldoVisible ? (
                  <IconEyeOff className="w-4 h-4" />
                ) : (
                  <IconEye className="w-4 h-4" />
                )}
              </button>
            </div>

            <p className="text-white text-4xl font-bold tracking-tight mb-4">
              {saldoVisible ? formatoMoneda(saldo) : '••••••'}
            </p>

            <div className="border-t border-white/20 pt-3 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-white/50 text-[10px] uppercase tracking-wide">Alias</p>
                  <p className="text-white text-sm font-medium truncate">{alias}</p>
                </div>
                <button
                  onClick={() => copiar(alias, 'alias')}
                  className="text-white/70 text-[11px] px-2.5 py-1 rounded-lg bg-white/10 shrink-0"
                >
                  {copiado === 'alias' ? '✓' : 'Copiar'}
                </button>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-white/50 text-[10px] uppercase tracking-wide">CVU</p>
                  <p className="text-white/90 text-[11px] font-mono truncate">{formatCVU(cvu)}</p>
                </div>
                <button
                  onClick={() => copiar(cvu, 'cvu')}
                  className="text-white/70 text-[11px] px-2.5 py-1 rounded-lg bg-white/10 shrink-0"
                >
                  {copiado === 'cvu' ? '✓' : 'Copiar'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 pt-5 flex flex-col gap-5">
          {/* ── Acciones rápidas ── */}
          <div>
            <p className="text-xs font-medium text-black/40 uppercase tracking-wide mb-3">
              Acciones rápidas
            </p>
            <div className="grid grid-cols-4 gap-2">
              {acciones.map((a) => {
                const inner = (
                  <>
                    <span
                      className={`flex items-center justify-center w-12 h-12 rounded-2xl ${a.color} ${a.text}`}
                    >
                      {a.icon}
                    </span>
                    <span className="text-[10px] text-black/60 text-center leading-tight">
                      {a.label}
                    </span>
                  </>
                )
                if (a.to) {
                  return (
                    <Link key={a.id} to={a.to} className="flex flex-col items-center gap-1.5">
                      {inner}
                    </Link>
                  )
                }
                return (
                  <button
                    key={a.id}
                    onClick={() => setModalAbierto(a.id as ModalTipo)}
                    className="flex flex-col items-center gap-1.5"
                  >
                    {inner}
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── Beneficios recomendados ── */}
          {cuponesRecomendados.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium text-black/40 uppercase tracking-wide">
                  Para vos
                </p>
                <Link to="/member/beneficios" className="text-xs text-[var(--color-brand)]">
                  Ver todos
                </Link>
              </div>
              <div className="relative -mx-5">
                <div className="flex gap-3 overflow-x-auto px-5 pb-1 snap-x snap-proximity scroll-px-5">
                  {cuponesRecomendados.map((cup) => (
                    <div
                      key={cup.id}
                      className="min-w-[160px] snap-start rounded-[var(--radius-card)] border border-[var(--color-border)] p-3"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{cup.logoEmoji}</span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[var(--color-brand)] truncate">
                            {cup.descuento}
                          </p>
                          <p className="text-[10px] text-black/50 truncate">{cup.marca}</p>
                        </div>
                      </div>
                      <p className="text-xs text-black/70 line-clamp-2">{cup.titulo}</p>
                      {cup.estado === 'activado' && (
                        <span className="inline-block mt-1.5 text-[10px] font-medium text-[var(--color-success)] bg-[var(--color-success-pale)] px-2 py-0.5 rounded-full">
                          Activado
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-1 w-8"
                  style={{
                    background: 'linear-gradient(to right, transparent, var(--color-card))',
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          )}

          {/* ── Misión activa ── */}
          {misionActiva && (
            <Link
              to="/member/misiones"
              className="rounded-[var(--radius-card)] bg-[var(--color-accent-pale)] border border-[var(--color-accent)]/30 p-4 block"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="text-[10px] font-medium text-[var(--color-accent-dark)] uppercase tracking-wide">
                    Misión activa
                  </p>
                  <p className="text-sm font-semibold text-black/80 mt-0.5">{misionActiva.titulo}</p>
                </div>
                <IconChevronRight className="w-4 h-4 text-black/30 shrink-0 mt-0.5" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--color-accent-dark)] rounded-full transition-all"
                    style={{
                      width: `${(misionActiva.progresoActual / misionActiva.progresoTotal) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-xs font-medium text-black/60 shrink-0">
                  {misionActiva.progresoActual}/{misionActiva.progresoTotal}
                </p>
              </div>
              <p className="text-xs text-black/50">{misionActiva.descripcion}</p>
            </Link>
          )}

          {/* ── Últimos movimientos ── */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-black/40 uppercase tracking-wide">
                Últimos movimientos
              </p>
              <Link to="/member/actividad" className="text-xs text-[var(--color-brand)]">
                Ver todos
              </Link>
            </div>
            {historial.length === 0 ? (
              <p className="text-sm text-black/40">Todavía no hay movimientos.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {historial.map((t) => {
                  const sucursal = SUCURSALES.find((s) => s.id === t.sucursalId)
                  const nombre = t.comercioNombre ?? sucursal?.nombre ?? t.sucursalId
                  return (
                    <div
                      key={t.id}
                      className="flex items-center justify-between rounded-xl border border-[var(--color-border)] px-3 py-3"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{nombre}</p>
                        <p className="text-xs text-black/40 mt-0.5">{t.fecha}</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <p className="text-sm font-semibold">{formatoMoneda(t.montoTotal)}</p>
                        {(t.descuentoAplicado ?? 0) > 0 && (
                          <p className="text-xs text-[var(--color-success)]">
                            -{formatoMoneda(t.descuentoAplicado!)}
                          </p>
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

      {/* ── Modales ── */}
      {modalAbierto === 'enviar' && (
        <ModalEnviar onCerrar={() => setModalAbierto(null)} />
      )}
      {modalAbierto === 'ingresar' && (
        <ModalIngresar alias={alias} cvu={cvu} onCerrar={() => setModalAbierto(null)} />
      )}
      {modalAbierto === 'cashin' && (
        <ModalCashIn onCerrar={() => setModalAbierto(null)} />
      )}
      {modalAbierto === 'cashout' && (
        <ModalCashOut saldo={saldo} onCerrar={() => setModalAbierto(null)} />
      )}
      {modalAbierto === 'invertir' && (
        <ModalInvertir saldo={saldo} onCerrar={() => setModalAbierto(null)} />
      )}
    </>
  )
}
