// Modelo de datos del prototipo — nombres de campo y conceptos tomados
// directamente de los planes de los dos TPs que este prototipo sirve:
// materias/mt10-innovacion-tecnologica/fidelizacion-coto/plans/ (RFM,
// CU-01, CU-05) y materias/mt25-estrategias-negocios-internet/
// business-plan-coto/plans/ (flujo de wallet, beneficios personalizados).
// Los datos en sí son 100% sideados/ficticios, no datos reales de COTO.

export type SegmentoRFM =
  | 'campeones'
  | 'leales'
  | 'potenciales'
  | 'en_riesgo'
  | 'dormidos'

export interface SegmentoInfo {
  id: SegmentoRFM
  nombre: string
  descripcion: string
  color: string
}

export type Categoria =
  | 'Almacén'
  | 'Frescos'
  | 'Bebidas'
  | 'Limpieza'
  | 'Perfumería'
  | 'Electro y Hogar'

export interface Sucursal {
  id: string
  nombre: string
  zona: 'CABA' | 'GBA' | 'Interior'
}

export interface ItemCompra {
  categoria: Categoria
  producto: string
  monto: number
}

export interface Transaccion {
  id: string
  clienteId: string
  fecha: string // ISO
  sucursalId: string
  items: ItemCompra[]
  montoTotal: number
  medioPago: 'Wallet COTO' | 'Mercado Pago' | 'MODO' | 'Efectivo' | 'Débito/Crédito'
  beneficioAplicadoId: string | null
  puntosGanados: number
}

export interface ReglaBeneficio {
  id: string
  nombre: string // "porque comprás X seguido, tenés Y" — texto ya orientado al cliente
  descripcion: string
  categoriaTarget: Categoria | 'Cualquiera'
  descuentoPct: number
  segmentosElegibles: SegmentoRFM[]
  financiadoPor: 'COTO' | 'Proveedor' | 'Banco/PSP'
}

export interface Cliente {
  id: string
  nombre: string
  email: string
  tieneTCI: boolean // Tarjeta COTO Identificada, ver plan-segmentacion-tiempo-real.md
  walletActivada: boolean
  segmento: SegmentoRFM
  puntos: number
  sucursalHabitualId: string
  fechaAlta: string
}

export type EstadoCampania =
  | 'borrador'
  | 'pendiente_aprobacion'
  | 'aprobada'
  | 'enviada'

export interface Campania {
  id: string
  nombre: string
  segmentoTarget: SegmentoRFM
  oferta: string
  canal: 'Push app' | 'Email' | 'SMS'
  estado: EstadoCampania
  fechaCreacion: string
  tasaRedencionEstimada: number // 0-1
  financiadoPor: 'COTO' | 'Proveedor' | 'Banco/PSP'
}

export interface EventoLog {
  id: string
  fecha: string
  tipo: 'pago' | 'campania_creada' | 'campania_aprobada' | 'alta_wallet'
  descripcion: string
}
