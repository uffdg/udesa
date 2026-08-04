import type {
  Campania,
  Categoria,
  Cliente,
  ReglaBeneficio,
  SegmentoInfo,
  Sucursal,
  Transaccion,
} from './types'

export const SEGMENTOS: SegmentoInfo[] = [
  {
    id: 'campeones',
    nombre: 'Campeones',
    descripcion: 'Compran seguido, ticket alto, compra reciente.',
    color: '#502bd8',
  },
  {
    id: 'leales',
    nombre: 'Leales',
    descripcion: 'Compran seguido y buen ticket, aunque no tan recientes.',
    color: '#917eda',
  },
  {
    id: 'potenciales',
    nombre: 'Potenciales',
    descripcion: 'Clientes nuevos con buena frecuencia inicial.',
    color: '#49B3FC',
  },
  {
    id: 'en_riesgo',
    nombre: 'En riesgo',
    descripcion: 'Antes frecuentes, bajaron actividad — foco de reactivación.',
    color: '#b8940a',
  },
  {
    id: 'dormidos',
    nombre: 'Dormidos',
    descripcion: 'Muy baja recencia y frecuencia.',
    color: '#8a8a8a',
  },
]

export const SUCURSALES: Sucursal[] = [
  { id: 'suc-01', nombre: 'COTO CABA — Palermo', zona: 'CABA' },
  { id: 'suc-02', nombre: 'COTO CABA — Belgrano', zona: 'CABA' },
  { id: 'suc-03', nombre: 'COTO GBA — San Isidro', zona: 'GBA' },
  { id: 'suc-04', nombre: 'COTO GBA — Quilmes', zona: 'GBA' },
  { id: 'suc-05', nombre: 'COTO GBA — La Matanza', zona: 'GBA' },
]
// Nota: 153 sucursales en total según plan-problema-contexto-oportunidad.md
// de business-plan-coto — acá se sidea solo una muestra representativa.

export const REGLAS_BENEFICIO: ReglaBeneficio[] = [
  {
    id: 'reg-frescos',
    nombre: 'Fanático de Frescos',
    descripcion: 'Porque comprás Frescos seguido, tenés 10% extra en la categoría.',
    categoriaTarget: 'Frescos',
    descuentoPct: 10,
    segmentosElegibles: ['campeones', 'leales', 'potenciales'],
    financiadoPor: 'COTO',
  },
  {
    id: 'reg-bebidas',
    nombre: 'Bebidas con descuento de marca',
    descripcion: '15% en Bebidas seleccionadas — cofinanciado con el proveedor.',
    categoriaTarget: 'Bebidas',
    descuentoPct: 15,
    segmentosElegibles: ['campeones', 'leales', 'potenciales', 'en_riesgo'],
    financiadoPor: 'Proveedor',
  },
  {
    id: 'reg-campeones',
    nombre: 'Gracias por elegirnos siempre',
    descripcion: '5% en cualquier categoría para los clientes más frecuentes.',
    categoriaTarget: 'Cualquiera',
    descuentoPct: 5,
    segmentosElegibles: ['campeones'],
    financiadoPor: 'COTO',
  },
  {
    id: 'reg-reactivacion',
    nombre: 'Te extrañamos',
    descripcion: '20% con Wallet COTO para volver a comprar — con TCI.',
    categoriaTarget: 'Cualquiera',
    descuentoPct: 20,
    segmentosElegibles: ['en_riesgo', 'dormidos'],
    financiadoPor: 'Banco/PSP',
  },
]

const NOMBRES: Array<[string, string]> = [
  ['María González', 'campeones'],
  ['Jorge Fernández', 'campeones'],
  ['Lucía Romero', 'campeones'],
  ['Carlos Pérez', 'leales'],
  ['Ana Martínez', 'leales'],
  ['Diego Suárez', 'leales'],
  ['Valentina Ríos', 'leales'],
  ['Martín Acosta', 'leales'],
  ['Sofía Herrera', 'potenciales'],
  ['Nicolás Godoy', 'potenciales'],
  ['Camila Ibáñez', 'potenciales'],
  ['Tomás Aguirre', 'potenciales'],
  ['Patricia Luna', 'en_riesgo'],
  ['Roberto Díaz', 'en_riesgo'],
  ['Marisa Ponce', 'en_riesgo'],
  ['Eduardo Molina', 'dormidos'],
  ['Silvana Castro', 'dormidos'],
  ['Hugo Benítez', 'dormidos'],
]

export const CLIENTES: Cliente[] = NOMBRES.map(([nombre, segmento], i) => ({
  id: `cli-${String(i + 1).padStart(2, '0')}`,
  nombre,
  email: `${nombre.toLowerCase().replace(/ /g, '.').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}@mail.com`,
  tieneTCI: i % 3 !== 0,
  walletActivada: i < 6, // solo los primeros ya "activaron" la wallet en el seed
  segmento: segmento as Cliente['segmento'],
  puntos: Math.max(0, 800 - i * 35 + (segmento === 'campeones' ? 400 : 0)),
  sucursalHabitualId: SUCURSALES[i % SUCURSALES.length].id,
  fechaAlta: `2026-0${(i % 6) + 1}-${String((i % 27) + 1).padStart(2, '0')}`,
}))

const PRODUCTOS: Record<Categoria, string[]> = {
  Almacén: ['Fideos', 'Arroz', 'Aceite', 'Yerba', 'Galletitas'],
  Frescos: ['Verdura de estación', 'Pollo', 'Carne picada', 'Queso', 'Fiambre'],
  Bebidas: ['Gaseosa 2.25L', 'Agua saborizada', 'Cerveza', 'Vino', 'Jugo'],
  Limpieza: ['Detergente', 'Lavandina', 'Papel higiénico', 'Esponjas'],
  Perfumería: ['Shampoo', 'Jabón', 'Desodorante', 'Pasta dental'],
  'Electro y Hogar': ['Pilas', 'Bombita LED', 'Cargador USB'],
}

let txSeq = 1
function crearTransaccion(
  clienteId: string,
  fecha: string,
  sucursalId: string,
  medioPago: Transaccion['medioPago'],
  categorias: Array<keyof typeof PRODUCTOS>,
  beneficioAplicadoId: string | null,
): Transaccion {
  const items = categorias.map((cat) => {
    const productos = PRODUCTOS[cat]
    const producto = productos[Math.floor(Math.random() * productos.length)]
    const monto = Math.round((Math.random() * 8000 + 1500) / 10) * 10
    return { categoria: cat, producto, monto }
  })
  const montoTotal = items.reduce((acc, it) => acc + it.monto, 0)
  return {
    id: `tx-${String(txSeq++).padStart(3, '0')}`,
    clienteId,
    fecha,
    sucursalId,
    items,
    montoTotal,
    medioPago,
    beneficioAplicadoId,
    puntosGanados: Math.round(montoTotal / 100),
  }
}

export const TRANSACCIONES_SEED: Transaccion[] = [
  ...crearHistorialCliente('cli-01', 6, ['Wallet COTO', 'Mercado Pago']),
  ...crearHistorialCliente('cli-02', 5, ['Wallet COTO', 'MODO']),
  ...crearHistorialCliente('cli-03', 5, ['Wallet COTO', 'Mercado Pago']),
  ...crearHistorialCliente('cli-04', 4, ['MODO', 'Efectivo']),
  ...crearHistorialCliente('cli-05', 4, ['Wallet COTO', 'MODO']),
  ...crearHistorialCliente('cli-06', 3, ['Mercado Pago', 'Efectivo']),
  ...crearHistorialCliente('cli-07', 3, ['Wallet COTO', 'MODO']),
  ...crearHistorialCliente('cli-08', 3, ['MODO', 'Débito/Crédito']),
  ...crearHistorialCliente('cli-09', 2, ['Mercado Pago']),
  ...crearHistorialCliente('cli-10', 2, ['MODO']),
  ...crearHistorialCliente('cli-13', 2, ['Efectivo', 'Débito/Crédito']),
  ...crearHistorialCliente('cli-14', 1, ['Débito/Crédito']),
  ...crearHistorialCliente('cli-16', 1, ['Efectivo']),
]

function crearHistorialCliente(
  clienteId: string,
  cantidad: number,
  medios: Transaccion['medioPago'][],
): Transaccion[] {
  const cliente = CLIENTES.find((c) => c.id === clienteId)!
  const cats = Object.keys(PRODUCTOS) as Array<keyof typeof PRODUCTOS>
  return Array.from({ length: cantidad }, (_, i) => {
    const dia = 28 - i * 4
    const fecha = `2026-07-${String(Math.max(dia, 2)).padStart(2, '0')}`
    const medioPago = medios[i % medios.length]
    const nCats = 1 + Math.floor(Math.random() * 3)
    const categorias = Array.from({ length: nCats }, () => cats[Math.floor(Math.random() * cats.length)])
    // ~35% de las transacciones históricas con Wallet COTO llevan beneficio aplicado
    const conBeneficio =
      medioPago === 'Wallet COTO' &&
      REGLAS_BENEFICIO.find((r) => r.segmentosElegibles.includes(cliente.segmento))
    const beneficioId = conBeneficio && Math.random() < 0.6 ? conBeneficio.id : null
    return crearTransaccion(clienteId, fecha, cliente.sucursalHabitualId, medioPago, categorias, beneficioId)
  })
}

export const CAMPANIAS_SEED: Campania[] = [
  {
    id: 'cmp-01',
    nombre: 'Bebidas con descuento de marca — Julio',
    segmentoTarget: 'leales',
    oferta: '15% en Bebidas seleccionadas',
    canal: 'Push app',
    estado: 'enviada',
    fechaCreacion: '2026-07-05',
    tasaRedencionEstimada: 0.12,
    financiadoPor: 'Proveedor',
  },
  {
    id: 'cmp-02',
    nombre: 'Te extrañamos — reactivación en riesgo',
    segmentoTarget: 'en_riesgo',
    oferta: '20% con Wallet COTO, primera compra del mes',
    canal: 'Email',
    estado: 'pendiente_aprobacion',
    fechaCreacion: '2026-07-20',
    tasaRedencionEstimada: 0.08,
    financiadoPor: 'Banco/PSP',
  },
  {
    id: 'cmp-03',
    nombre: 'Bienvenida potenciales — segunda compra',
    segmentoTarget: 'potenciales',
    oferta: '10% en Frescos en la segunda compra del mes',
    canal: 'Push app',
    estado: 'borrador',
    fechaCreacion: '2026-07-27',
    tasaRedencionEstimada: 0.1,
    financiadoPor: 'COTO',
  },
]

// Baseline citado en los planes de mt10-fidelizacion-coto (dossier COTO,
// coto-procesos-y-casos-de-uso-agenticos.md) — referencia fija para
// comparar contra las métricas que el prototipo calcula en vivo sobre el
// dato sideado, no un valor que el prototipo intente reproducir exacto.
export const KPIS_BASELINE_DOSSIER = {
  tasaRedencionCuponesActual: 0.03,
  tasaRedencionCuponesObjetivoCU05: 0.12,
  tasaErrorMedioPagoCaja: 0.05,
  tasaAltaDatoInvalido: 0.085,
}
