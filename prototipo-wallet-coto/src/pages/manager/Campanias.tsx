import { useState, type FormEvent } from 'react'
import { useWalletStore } from '../../store/useWalletStore'
import { SEGMENTOS } from '../../data/seed'
import type { Campania, SegmentoRFM } from '../../data/types'

const ESTADO_LABEL: Record<Campania['estado'], string> = {
  borrador: 'Borrador',
  pendiente_aprobacion: 'Pendiente de aprobación',
  aprobada: 'Aprobada',
  enviada: 'Enviada',
}

const ESTADO_COLOR: Record<Campania['estado'], string> = {
  borrador: 'bg-black/10 text-black/60',
  pendiente_aprobacion: 'bg-[var(--color-warning-pale)] text-[var(--color-warning)]',
  aprobada: 'bg-[var(--color-brand-pale)] text-[var(--color-brand)]',
  enviada: 'bg-[var(--color-success-pale)] text-[var(--color-success)]',
}

export default function Campanias() {
  const campanias = useWalletStore((s) => s.campanias)
  const crearCampania = useWalletStore((s) => s.crearCampania)
  const avanzarEstadoCampania = useWalletStore((s) => s.avanzarEstadoCampania)

  const [form, setForm] = useState({
    nombre: '',
    segmentoTarget: 'leales' as SegmentoRFM,
    oferta: '',
    canal: 'Push app' as Campania['canal'],
    financiadoPor: 'COTO' as Campania['financiadoPor'],
    tasaRedencionEstimada: 0.1,
  })

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!form.nombre || !form.oferta) return
    crearCampania(form)
    setForm({ ...form, nombre: '', oferta: '' })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Campañas — CU-05</h1>
        <p className="text-sm text-black/50 mt-1">
          El agente arma la oferta por segmento; un gerente aprueba el lote
          antes del envío masivo — no se dispara solo (Nivel 3 de
          autonomía, ver plan-plataforma-demanda-campanas.md).
        </p>
      </div>

      <form
        onSubmit={submit}
        className="grid md:grid-cols-2 gap-3 border border-[var(--color-border)] rounded-lg p-4"
      >
        <input
          placeholder="Nombre de la campaña"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className="border border-[var(--color-border)] rounded-md px-3 py-2 text-sm md:col-span-2"
        />
        <input
          placeholder="Oferta (ej. 10% en Frescos)"
          value={form.oferta}
          onChange={(e) => setForm({ ...form, oferta: e.target.value })}
          className="border border-[var(--color-border)] rounded-md px-3 py-2 text-sm"
        />
        <select
          value={form.segmentoTarget}
          onChange={(e) => setForm({ ...form, segmentoTarget: e.target.value as SegmentoRFM })}
          className="border border-[var(--color-border)] rounded-md px-3 py-2 text-sm"
        >
          {SEGMENTOS.map((s) => (
            <option key={s.id} value={s.id}>
              Segmento: {s.nombre}
            </option>
          ))}
        </select>
        <select
          value={form.canal}
          onChange={(e) => setForm({ ...form, canal: e.target.value as Campania['canal'] })}
          className="border border-[var(--color-border)] rounded-md px-3 py-2 text-sm"
        >
          <option>Push app</option>
          <option>Email</option>
          <option>SMS</option>
        </select>
        <select
          value={form.financiadoPor}
          onChange={(e) => setForm({ ...form, financiadoPor: e.target.value as Campania['financiadoPor'] })}
          className="border border-[var(--color-border)] rounded-md px-3 py-2 text-sm"
        >
          <option value="COTO">Financia: COTO</option>
          <option value="Proveedor">Financia: Proveedor</option>
          <option value="Banco/PSP">Financia: Banco/PSP</option>
        </select>
        <button
          type="submit"
          className="rounded-full bg-[var(--color-brand)] text-white text-sm font-medium py-2 md:col-span-2"
        >
          Crear campaña (queda pendiente de aprobación)
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {campanias.map((c) => {
          const seg = SEGMENTOS.find((s) => s.id === c.segmentoTarget)!
          return (
            <div key={c.id} className="border border-[var(--color-border)] rounded-lg p-4 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{c.nombre}</p>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${ESTADO_COLOR[c.estado]}`}>
                    {ESTADO_LABEL[c.estado]}
                  </span>
                </div>
                <p className="text-xs text-black/50 mt-1">
                  {c.oferta} · Segmento {seg.nombre} · {c.canal} · Financia {c.financiadoPor} · Redención est.{' '}
                  {(c.tasaRedencionEstimada * 100).toFixed(0)}%
                </p>
              </div>
              {c.estado !== 'enviada' && (
                <button
                  type="button"
                  onClick={() => avanzarEstadoCampania(c.id)}
                  className="shrink-0 text-sm font-medium text-[var(--color-brand)] border border-[var(--color-brand)] rounded-full px-4 py-1.5"
                >
                  {c.estado === 'borrador' ? 'Enviar a aprobación' : c.estado === 'pendiente_aprobacion' ? 'Aprobar' : 'Disparar envío'}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
