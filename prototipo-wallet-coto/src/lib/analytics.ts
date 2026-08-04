import type { Cliente, SegmentoRFM, Transaccion } from '../data/types'
import { SEGMENTOS } from '../data/seed'

export function contarPorSegmento(clientes: Cliente[]): Record<SegmentoRFM, number> {
  const base = Object.fromEntries(SEGMENTOS.map((s) => [s.id, 0])) as Record<SegmentoRFM, number>
  for (const c of clientes) base[c.segmento]++
  return base
}

export function tasaRedencion(transacciones: Transaccion[]): number {
  const wallet = transacciones.filter((t) => t.medioPago === 'Wallet COTO')
  if (wallet.length === 0) return 0
  const conBeneficio = wallet.filter((t) => t.beneficioAplicadoId !== null)
  return conBeneficio.length / wallet.length
}

export function tasaAdopcionWallet(clientes: Cliente[]): number {
  if (clientes.length === 0) return 0
  return clientes.filter((c) => c.walletActivada).length / clientes.length
}

export function shareMedioPago(transacciones: Transaccion[]): Record<string, number> {
  const total = transacciones.length
  const acc: Record<string, number> = {}
  for (const t of transacciones) acc[t.medioPago] = (acc[t.medioPago] ?? 0) + 1
  const out: Record<string, number> = {}
  for (const [k, v] of Object.entries(acc)) out[k] = total === 0 ? 0 : v / total
  return out
}

export function gmvPorSegmento(clientes: Cliente[], transacciones: Transaccion[]): Record<SegmentoRFM, number> {
  const base = Object.fromEntries(SEGMENTOS.map((s) => [s.id, 0])) as Record<SegmentoRFM, number>
  const segmentoPorCliente = new Map(clientes.map((c) => [c.id, c.segmento]))
  for (const t of transacciones) {
    const seg = segmentoPorCliente.get(t.clienteId)
    if (seg) base[seg] += t.montoTotal
  }
  return base
}

export function formatoMoneda(n: number): string {
  return n.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })
}

export function formatoPct(n: number): string {
  return `${(n * 100).toFixed(1)}%`
}
