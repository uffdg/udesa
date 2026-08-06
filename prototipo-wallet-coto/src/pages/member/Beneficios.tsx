import { useState } from 'react'
import { useWalletStore } from '../../store/useWalletStore'
import { IconMapPin, IconClock, IconCheck } from '../../components/Icons'
import type { Cupon } from '../../data/types'

type Tab = 'beneficios' | 'mis-cupones'
type Filtro = 'todos' | 'coto' | 'presencial' | 'online' | 'terceros' | 'por-vencer'

const LABELS: Record<Filtro, string> = {
  todos: 'Para vos',
  coto: 'COTO',
  presencial: 'Presencial',
  online: 'Online',
  terceros: 'Terceros',
  'por-vencer': 'Próximos a vencer',
}

function etiquetaCanal(canal: Cupon['canal']) {
  if (canal === 'presencial') return 'Solo en sucursal'
  if (canal === 'online') return 'Solo online'
  return 'Presencial y online'
}

function diasRestantes(fecha: string) {
  const hoy = new Date('2026-08-06')
  const vence = new Date(fecha)
  return Math.ceil((vence.getTime() - hoy.getTime()) / 86400000)
}

function CuponCard({ cup, onActivar, detalle, onDetalle }: {
  cup: Cupon
  onActivar: () => void
  detalle: boolean
  onDetalle: () => void
}) {
  const dias = diasRestantes(cup.vigencia)
  const porVencer = dias <= 5 && dias > 0

  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white overflow-hidden">
      <button className="w-full text-left p-4" onClick={onDetalle}>
        <div className="flex items-start gap-3">
          <span className="text-3xl shrink-0">{cup.logoEmoji ?? '🏷️'}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs text-black/50 truncate">{cup.marca}</p>
                <p className="text-sm font-semibold leading-tight">{cup.titulo}</p>
                <p className="text-[var(--color-brand)] font-bold text-base mt-0.5">{cup.descuento}</p>
              </div>
              <span className="text-2xl font-bold text-[var(--color-brand)] shrink-0">{cup.descuento.split(' ')[0]}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-paper)] text-black/60 border border-[var(--color-border)]">
                {etiquetaCanal(cup.canal)}
              </span>
              {cup.distancia && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-paper)] text-black/60 border border-[var(--color-border)]">
                  <IconMapPin className="w-3 h-3" />{cup.distancia}
                </span>
              )}
              {porVencer && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-warning-pale)] text-[var(--color-warning)] border border-[var(--color-warning)]/30">
                  <IconClock className="w-3 h-3" />Vence en {dias} {dias === 1 ? 'día' : 'días'}
                </span>
              )}
              {cup.activacionRequerida && cup.estado === 'disponible' && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-accent-pale)] text-[var(--color-accent-dark)] border border-[var(--color-accent)]/30">
                  Activación requerida
                </span>
              )}
              {cup.estado === 'activado' && (
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-success-pale)] text-[var(--color-success)] border border-[var(--color-success)]/30">
                  <IconCheck className="w-3 h-3" />Activado
                </span>
              )}
            </div>
          </div>
        </div>
      </button>

      {/* Detalle expandible */}
      {detalle && (
        <div className="px-4 pb-4 border-t border-[var(--color-border)] pt-3">
          <div className="flex flex-col gap-2 text-xs text-black/60 mb-3">
            <p><span className="font-medium text-black/80">Condiciones:</span> {cup.condiciones}</p>
            {cup.topeReintegro && <p><span className="font-medium text-black/80">Tope:</span> {cup.topeReintegro.toLocaleString('es-AR')}</p>}
            {cup.medioPagoRequerido && <p><span className="font-medium text-black/80">Medio de pago:</span> {cup.medioPagoRequerido}</p>}
            {cup.vigencia && <p><span className="font-medium text-black/80">Vigencia:</span> hasta {new Date(cup.vigencia + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>}
            {cup.localesAdheridos && <p><span className="font-medium text-black/80">Locales:</span> {cup.localesAdheridos.join(' · ')}</p>}
            {cup.esTercero && cup.codigo && (
              <p><span className="font-medium text-black/80">Código:</span> <span className="font-mono bg-[var(--color-paper)] px-2 py-0.5 rounded">{cup.codigo}</span></p>
            )}
          </div>

          {cup.esTercero && (
            <div className="bg-[var(--color-paper)] rounded-lg p-3 mb-3 text-xs text-black/60">
              <p className="font-medium text-black/80 mb-1">Cómo usarlo:</p>
              <ol className="list-decimal list-inside space-y-0.5">
                <li>Activá el beneficio</li>
                <li>Mostrá el QR en el comercio o ingresá el código online</li>
                <li>Pagá con una tarjeta cargada en tu wallet</li>
              </ol>
            </div>
          )}

          {cup.estado === 'disponible' && (
            <button
              onClick={onActivar}
              className="w-full py-2.5 rounded-xl bg-[var(--color-brand)] text-white text-sm font-semibold"
            >
              {cup.activacionRequerida ? 'Activar cupón' : 'Usar beneficio'}
            </button>
          )}
          {cup.estado === 'activado' && (
            <div className="w-full py-2.5 rounded-xl bg-[var(--color-success-pale)] text-[var(--color-success)] text-sm font-semibold text-center flex items-center justify-center gap-2">
              <IconCheck className="w-4 h-4" /> Cupón activado — mostralo en caja
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function Beneficios() {
  const cupones = useWalletStore((s) => s.cupones)
  const activarCupon = useWalletStore((s) => s.activarCupon)

  const [tab, setTab] = useState<Tab>('beneficios')
  const [filtro, setFiltro] = useState<Filtro>('todos')
  const [busqueda, setBusqueda] = useState('')
  const [detalleAbierto, setDetalleAbierto] = useState<string | null>(null)

  const FILTROS: Filtro[] = ['todos', 'coto', 'presencial', 'online', 'terceros', 'por-vencer']

  function filtrarCupones(lista: Cupon[]) {
    let r = lista
    if (busqueda) r = r.filter((c) => c.titulo.toLowerCase().includes(busqueda.toLowerCase()) || c.marca.toLowerCase().includes(busqueda.toLowerCase()))
    if (filtro === 'coto') r = r.filter((c) => !c.esTercero)
    if (filtro === 'presencial') r = r.filter((c) => c.canal === 'presencial' || c.canal === 'ambos')
    if (filtro === 'online') r = r.filter((c) => c.canal === 'online' || c.canal === 'ambos')
    if (filtro === 'terceros') r = r.filter((c) => c.esTercero)
    if (filtro === 'por-vencer') r = r.filter((c) => diasRestantes(c.vigencia) <= 5)
    return r
  }

  const disponibles = filtrarCupones(cupones.filter((c) => c.estado !== 'usado' && c.estado !== 'vencido'))
  const misCupones = filtrarCupones(cupones.filter((c) => c.estado === 'activado' || c.estado === 'usado'))

  const lista = tab === 'beneficios' ? disponibles : misCupones

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <h1 className="text-lg font-bold mb-3">Beneficios y cupones</h1>

        {/* Buscador */}
        <input
          type="search"
          placeholder="Buscar marca o beneficio…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2.5 text-sm bg-[var(--color-paper)] outline-none focus:ring-2 focus:ring-[var(--color-brand)]/30 mb-3"
        />

        {/* Tabs */}
        <div className="flex gap-1 bg-[var(--color-paper)] rounded-xl p-1 mb-3">
          {(['beneficios', 'mis-cupones'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === t ? 'bg-white text-[var(--color-brand)] shadow-sm' : 'text-black/50'
              }`}
            >
              {t === 'beneficios' ? 'Beneficios' : 'Mis cupones'}
            </button>
          ))}
        </div>

        {/* Filtros horizontales */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5">
          {FILTROS.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filtro === f
                  ? 'bg-[var(--color-brand)] text-white border-[var(--color-brand)]'
                  : 'bg-white text-black/60 border-[var(--color-border)]'
              }`}
            >
              {LABELS[f]}
            </button>
          ))}
        </div>
      </div>

      {/* Lista */}
      <div className="flex-1 overflow-y-auto px-5 pb-6 flex flex-col gap-3">
        {lista.length === 0 && (
          <div className="text-center py-12 text-black/40">
            <p className="text-2xl mb-2">🔍</p>
            <p className="text-sm">No hay resultados para este filtro.</p>
          </div>
        )}
        {lista.map((cup) => (
          <CuponCard
            key={cup.id}
            cup={cup}
            onActivar={() => activarCupon(cup.id)}
            detalle={detalleAbierto === cup.id}
            onDetalle={() => setDetalleAbierto(detalleAbierto === cup.id ? null : cup.id)}
          />
        ))}
      </div>
    </div>
  )
}
