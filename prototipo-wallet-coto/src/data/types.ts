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

export type NivelComunidad =
  | 'Comunidad'
  | 'Comunidad Plus'
  | 'Comunidad Gold'
  | 'Comunidad Platinum'

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
  // Campos enriquecidos opcionales para la pantalla de Actividad
  descuentoAplicado?: number
  cuponAplicadoId?: string
  puntosUsados?: number
  comercioNombre?: string
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
  // Campos extendidos para la experiencia completa de wallet
  nivel?: NivelComunidad
  puntosVencimiento?: { cantidad: number; fecha: string }
  puntosReservados?: number
  ahorroMes?: number
  numeroSocio?: string
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

// --- Nuevas entidades para las pantallas adicionales ---

export type EstadoMision = 'disponible' | 'activa' | 'completada' | 'vencida'

export interface Mision {
  id: string
  titulo: string
  descripcion: string
  recompensaPuntos: number
  fechaLimite: string
  progresoActual: number
  progresoTotal: number
  estado: EstadoMision
  ctaLabel: string
  ctaRuta?: string
}

export interface Insignia {
  id: string
  nombre: string
  descripcion: string
  icono: string // emoji usado como ícono simple
  fechaObtenida?: string
  beneficioDesbloqueado?: string
  progresoActual?: number
  progresoTotal?: number
  bloqueada: boolean
}

export type MarcaTarjeta = 'Visa' | 'Mastercard' | 'Amex' | 'COTO'

export interface Tarjeta {
  id: string
  tipo: 'credito' | 'debito' | 'tci'
  banco: string
  marca: MarcaTarjeta
  ultimosCuatro: string
  titular: string
  vencimiento: string // MM/YY
  esPrincipal: boolean
  beneficioDestacado?: string
}

export type CanalCupon = 'presencial' | 'online' | 'ambos'
export type EstadoCupon = 'disponible' | 'activado' | 'usado' | 'vencido'

export interface Cupon {
  id: string
  marca: string
  titulo: string
  descripcion: string
  descuento: string // "20% off" o "$5.000 de desc."
  vigencia: string // fecha ISO o texto legible
  canal: CanalCupon
  estado: EstadoCupon
  esTercero: boolean
  logoEmoji?: string
  condiciones: string
  topeReintegro?: number
  medioPagoRequerido?: string
  localesAdheridos?: string[]
  activacionRequerida: boolean
  distancia?: string // solo para terceros
  codigo?: string
}
