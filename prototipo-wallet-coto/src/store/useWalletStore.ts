import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  CAMPANIAS_SEED,
  CLIENTES,
  CUPONES_SEED,
  INSIGNIAS_SEED,
  MISIONES_SEED,
  REGLAS_BENEFICIO,
  SUCURSALES,
  TARJETAS_SEED,
  TRANSACCIONES_SEED,
} from '../data/seed'
import type {
  Campania,
  Categoria,
  Cliente,
  Cupon,
  EventoLog,
  Insignia,
  Mision,
  ReglaBeneficio,
  Tarjeta,
  Transaccion,
} from '../data/types'

interface WalletState {
  clientes: Cliente[]
  transacciones: Transaccion[]
  campanias: Campania[]
  reglas: ReglaBeneficio[]
  eventos: EventoLog[]
  clienteActivoId: string
  misiones: Mision[]
  insignias: Insignia[]
  tarjetas: Tarjeta[]
  cupones: Cupon[]

  setClienteActivo: (id: string) => void
  pagarEnCaja: (items: { categoria: Categoria; producto: string; monto: number }[]) => {
    transaccion: Transaccion
    beneficio: ReglaBeneficio | null
  }
  crearCampania: (input: Omit<Campania, 'id' | 'estado' | 'fechaCreacion'>) => void
  avanzarEstadoCampania: (id: string) => void
  activarCupon: (cuponId: string) => void
  reservarPuntos: (cantidad: number) => void
  setTarjetaPrincipal: (tarjetaId: string) => void
  resetDemo: () => void
}

let txSeqLocal = TRANSACCIONES_SEED.length + 1
let cmpSeqLocal = CAMPANIAS_SEED.length + 1

// CU-01 simulado: elige el mejor beneficio disponible para el cliente en
// el momento del pago (ver plan-segmentacion-tiempo-real.md, CU-01 —
// acá sin la infraestructura real de latencia/Redis/streaming, solo la
// lógica de decisión, que es lo que importa para la demo).
function elegirMejorBeneficio(
  cliente: Cliente,
  items: { categoria: Categoria }[],
  reglas: ReglaBeneficio[],
): ReglaBeneficio | null {
  const candidatas = reglas.filter((r) => r.segmentosElegibles.includes(cliente.segmento))
  if (candidatas.length === 0) return null
  const categoriasCompradas = new Set(items.map((it) => it.categoria))
  const conCategoria = candidatas.filter(
    (r) => r.categoriaTarget !== 'Cualquiera' && categoriasCompradas.has(r.categoriaTarget),
  )
  const pool = conCategoria.length > 0 ? conCategoria : candidatas
  return pool.reduce((mejor, r) => (r.descuentoPct > mejor.descuentoPct ? r : mejor), pool[0])
}

export const useWalletStore = create<WalletState>()(
  persist(
    (set, get) => ({
      clientes: CLIENTES,
      transacciones: TRANSACCIONES_SEED,
      campanias: CAMPANIAS_SEED,
      reglas: REGLAS_BENEFICIO,
      eventos: [],
      clienteActivoId: CLIENTES[0].id,
      misiones: MISIONES_SEED,
      insignias: INSIGNIAS_SEED,
      tarjetas: TARJETAS_SEED,
      cupones: CUPONES_SEED,

      setClienteActivo: (id) => set({ clienteActivoId: id }),

      pagarEnCaja: (items) => {
        const state = get()
        const cliente = state.clientes.find((c) => c.id === state.clienteActivoId)!
        const beneficio = elegirMejorBeneficio(cliente, items, state.reglas)
        const descuento = beneficio ? beneficio.descuentoPct / 100 : 0
        const montoBruto = items.reduce((acc, it) => acc + it.monto, 0)
        const montoTotal = Math.round(montoBruto * (1 - descuento))
        const puntosGanados = Math.round(montoTotal / 100)
        const descuentoAplicado = montoBruto - montoTotal

        const transaccion: Transaccion = {
          id: `tx-${String(txSeqLocal++).padStart(3, '0')}`,
          clienteId: cliente.id,
          fecha: new Date().toISOString().slice(0, 10),
          sucursalId: cliente.sucursalHabitualId,
          items,
          montoTotal,
          medioPago: 'Wallet COTO',
          beneficioAplicadoId: beneficio?.id ?? null,
          puntosGanados,
          descuentoAplicado,
          comercioNombre: 'COTO (pago en caja)',
        }

        const evento: EventoLog = {
          id: `ev-${transaccion.id}`,
          fecha: transaccion.fecha,
          tipo: 'pago',
          descripcion: beneficio
            ? `${cliente.nombre} pagó $${montoTotal.toLocaleString('es-AR')} en caja — se aplicó "${beneficio.nombre}" (${beneficio.descuentoPct}% off, financia ${beneficio.financiadoPor})`
            : `${cliente.nombre} pagó $${montoTotal.toLocaleString('es-AR')} en caja — sin beneficio elegible para este segmento/categoría`,
        }

        set({
          transacciones: [transaccion, ...state.transacciones],
          eventos: [evento, ...state.eventos].slice(0, 30),
          clientes: state.clientes.map((c) =>
            c.id === cliente.id
              ? {
                  ...c,
                  puntos: c.puntos + puntosGanados,
                  walletActivada: true,
                  ahorroMes: (c.ahorroMes ?? 0) + descuentoAplicado,
                }
              : c,
          ),
        })

        return { transaccion, beneficio }
      },

      crearCampania: (input) => {
        const campania: Campania = {
          ...input,
          id: `cmp-${String(cmpSeqLocal++).padStart(2, '0')}`,
          estado: 'pendiente_aprobacion',
          fechaCreacion: new Date().toISOString().slice(0, 10),
        }
        const evento: EventoLog = {
          id: `ev-${campania.id}`,
          fecha: campania.fechaCreacion,
          tipo: 'campania_creada',
          descripcion: `Campaña creada: "${campania.nombre}" para segmento ${campania.segmentoTarget} — pendiente de aprobación`,
        }
        set((state) => ({
          campanias: [campania, ...state.campanias],
          eventos: [evento, ...state.eventos].slice(0, 30),
        }))
      },

      avanzarEstadoCampania: (id) => {
        set((state) => {
          const orden: Campania['estado'][] = ['borrador', 'pendiente_aprobacion', 'aprobada', 'enviada']
          const campanias = state.campanias.map((c) => {
            if (c.id !== id) return c
            const idx = orden.indexOf(c.estado)
            const siguiente = orden[Math.min(idx + 1, orden.length - 1)]
            return { ...c, estado: siguiente }
          })
          const actualizada = campanias.find((c) => c.id === id)!
          const evento: EventoLog = {
            id: `ev-${id}-${actualizada.estado}`,
            fecha: new Date().toISOString().slice(0, 10),
            tipo: 'campania_aprobada',
            descripcion: `Campaña "${actualizada.nombre}" pasó a estado "${actualizada.estado}"`,
          }
          return { campanias, eventos: [evento, ...state.eventos].slice(0, 30) }
        })
      },

      activarCupon: (cuponId) => {
        set((state) => ({
          cupones: state.cupones.map((c) =>
            c.id === cuponId && c.estado === 'disponible' ? { ...c, estado: 'activado' } : c,
          ),
        }))
      },

      reservarPuntos: (cantidad) => {
        set((state) => ({
          clientes: state.clientes.map((c) =>
            c.id === state.clienteActivoId ? { ...c, puntosReservados: cantidad } : c,
          ),
        }))
      },

      setTarjetaPrincipal: (tarjetaId) => {
        set((state) => ({
          tarjetas: state.tarjetas.map((t) => ({ ...t, esPrincipal: t.id === tarjetaId })),
        }))
      },

      resetDemo: () => {
        txSeqLocal = TRANSACCIONES_SEED.length + 1
        cmpSeqLocal = CAMPANIAS_SEED.length + 1
        set({
          clientes: CLIENTES,
          transacciones: TRANSACCIONES_SEED,
          campanias: CAMPANIAS_SEED,
          reglas: REGLAS_BENEFICIO,
          eventos: [],
          clienteActivoId: CLIENTES[0].id,
          misiones: MISIONES_SEED,
          insignias: INSIGNIAS_SEED,
          tarjetas: TARJETAS_SEED,
          cupones: CUPONES_SEED,
        })
      },
    }),
    {
      name: 'coto-wallet-demo',
      version: 1,
    },
  ),
)

export { SUCURSALES }
