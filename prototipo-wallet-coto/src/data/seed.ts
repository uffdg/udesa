import type {
  Campania,
  Categoria,
  Cliente,
  Cupon,
  Insignia,
  Mision,
  ReglaBeneficio,
  SegmentoInfo,
  Sucursal,
  Tarjeta,
  Transaccion,
} from './types'

export const SEGMENTOS: SegmentoInfo[] = [
  {
    id: 'campeones',
    nombre: 'Campeones',
    descripcion: 'Compran seguido, ticket alto, compra reciente.',
    color: '#d90012',
  },
  {
    id: 'leales',
    nombre: 'Leales',
    descripcion: 'Compran seguido y buen ticket, aunque no tan recientes.',
    color: '#e84455',
  },
  {
    id: 'potenciales',
    nombre: 'Potenciales',
    descripcion: 'Clientes nuevos con buena frecuencia inicial.',
    color: '#f5c500',
  },
  {
    id: 'en_riesgo',
    nombre: 'En riesgo',
    descripcion: 'Antes frecuentes, bajaron actividad — foco de reactivación.',
    color: '#f07800',
  },
  {
    id: 'dormidos',
    nombre: 'Dormidos',
    descripcion: 'Muy baja recencia y frecuencia.',
    color: '#8a8a8a',
  },
]

export const SUCURSALES: Sucursal[] = [
  { id: 'suc-01', nombre: 'COTO Palermo', zona: 'CABA' },
  { id: 'suc-02', nombre: 'COTO Belgrano', zona: 'CABA' },
  { id: 'suc-03', nombre: 'COTO San Isidro', zona: 'GBA' },
  { id: 'suc-04', nombre: 'COTO Quilmes', zona: 'GBA' },
  { id: 'suc-05', nombre: 'COTO La Matanza', zona: 'GBA' },
  { id: 'suc-digital', nombre: 'Coto Digital', zona: 'CABA' },
]

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

// Mariana es el usuario de ejemplo de la consigna, siempre el primero (default)
const MARIANA: Cliente = {
  id: 'cli-mariana',
  nombre: 'Mariana García',
  email: 'mariana.garcia@mail.com',
  tieneTCI: true,
  walletActivada: true,
  segmento: 'leales',
  puntos: 8450,
  sucursalHabitualId: 'suc-01',
  fechaAlta: '2024-03-15',
  nivel: 'Comunidad Plus',
  puntosVencimiento: { cantidad: 1200, fecha: '2026-08-31' },
  puntosReservados: 3000,
  ahorroMes: 28450,
  numeroSocio: '0042-8812-3',
}

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

export const CLIENTES: Cliente[] = [
  MARIANA,
  ...NOMBRES.map(([nombre, segmento], i) => ({
    id: `cli-${String(i + 1).padStart(2, '0')}`,
    nombre,
    email: `${nombre.toLowerCase().replace(/ /g, '.').normalize('NFD').replace(/[̀-ͯ]/g, '')}@mail.com`,
    tieneTCI: i % 3 !== 0,
    walletActivada: i < 6,
    segmento: segmento as Cliente['segmento'],
    puntos: Math.max(0, 800 - i * 35 + (segmento === 'campeones' ? 400 : 0)),
    sucursalHabitualId: SUCURSALES[i % 5].id,
    fechaAlta: `2026-0${(i % 6) + 1}-${String((i % 27) + 1).padStart(2, '0')}`,
    nivel: (segmento === 'campeones'
      ? 'Comunidad Gold'
      : segmento === 'leales'
        ? 'Comunidad Plus'
        : 'Comunidad') as Cliente['nivel'],
  })),
]

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
  extra?: Partial<Transaccion>,
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
    ...extra,
  }
}

// Transacciones realistas de Mariana para la pantalla de Actividad
const TRANSACCIONES_MARIANA: Transaccion[] = [
  crearTransaccion('cli-mariana', '2026-08-05', 'suc-01', 'Wallet COTO', ['Frescos', 'Almacén', 'Bebidas'], 'reg-frescos', {
    montoTotal: 42300,
    puntosGanados: 423,
    descuentoAplicado: 9650,
    comercioNombre: 'COTO Palermo',
  }),
  crearTransaccion('cli-mariana', '2026-08-03', 'suc-digital', 'Wallet COTO', ['Almacén', 'Limpieza'], 'reg-frescos', {
    montoTotal: 58200,
    puntosGanados: 532,
    descuentoAplicado: 5000,
    cuponAplicadoId: 'cup-limpieza',
    puntosUsados: 3000,
    comercioNombre: 'Coto Digital',
  }),
  crearTransaccion('cli-mariana', '2026-07-30', 'suc-01', 'Wallet COTO', ['Frescos', 'Perfumería'], 'reg-frescos', {
    montoTotal: 32450,
    puntosGanados: 324,
    descuentoAplicado: 8700,
    comercioNombre: 'COTO Palermo',
  }),
  crearTransaccion('cli-mariana', '2026-07-27', 'suc-02', 'Wallet COTO', ['Bebidas', 'Almacén'], 'reg-bebidas', {
    montoTotal: 24800,
    puntosGanados: 248,
    descuentoAplicado: 3720,
    comercioNombre: 'COTO Belgrano',
  }),
  crearTransaccion('cli-mariana', '2026-07-22', 'suc-01', 'Wallet COTO', ['Frescos'], null, {
    montoTotal: 18600,
    puntosGanados: 186,
    descuentoAplicado: 0,
    comercioNombre: 'COTO Palermo',
  }),
  crearTransaccion('cli-mariana', '2026-07-18', 'suc-digital', 'Wallet COTO', ['Limpieza', 'Perfumería', 'Almacén'], null, {
    montoTotal: 61400,
    puntosGanados: 614,
    descuentoAplicado: 5000,
    cuponAplicadoId: 'cup-50k',
    comercioNombre: 'Coto Digital',
  }),
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
    const conBeneficio =
      medioPago === 'Wallet COTO' &&
      REGLAS_BENEFICIO.find((r) => r.segmentosElegibles.includes(cliente.segmento))
    const beneficioId = conBeneficio && Math.random() < 0.6 ? conBeneficio.id : null
    return crearTransaccion(clienteId, fecha, cliente.sucursalHabitualId, medioPago, categorias, beneficioId)
  })
}

export const TRANSACCIONES_SEED: Transaccion[] = [
  ...TRANSACCIONES_MARIANA,
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

export const MISIONES_SEED: Mision[] = [
  {
    id: 'mis-01',
    titulo: 'Comprá frutas y verduras 3 veces este mes',
    descripcion: 'Una compra más y ganás 1.000 puntos',
    recompensaPuntos: 1000,
    fechaLimite: '2026-08-31',
    progresoActual: 2,
    progresoTotal: 3,
    estado: 'activa',
    ctaLabel: 'Ir a comprar',
    ctaRuta: '/member/beneficios',
  },
  {
    id: 'mis-02',
    titulo: 'Hacé tu primera compra con QR',
    descripcion: 'Usá el escáner para pagar en caja y ganás 500 puntos.',
    recompensaPuntos: 500,
    fechaLimite: '2026-08-31',
    progresoActual: 1,
    progresoTotal: 1,
    estado: 'completada',
    ctaLabel: 'Completada',
  },
  {
    id: 'mis-03',
    titulo: 'Probá Coto Digital',
    descripcion: 'Hacé tu primera compra online y ganás 800 puntos.',
    recompensaPuntos: 800,
    fechaLimite: '2026-08-31',
    progresoActual: 0,
    progresoTotal: 1,
    estado: 'disponible',
    ctaLabel: 'Comprar online',
  },
  {
    id: 'mis-04',
    titulo: 'Visitá dos marcas asociadas',
    descripcion: 'Usá un beneficio de terceros y ganás 600 puntos.',
    recompensaPuntos: 600,
    fechaLimite: '2026-08-31',
    progresoActual: 1,
    progresoTotal: 2,
    estado: 'activa',
    ctaLabel: 'Ver marcas',
    ctaRuta: '/member/beneficios',
  },
  {
    id: 'mis-05',
    titulo: 'Comprá productos de tres categorías diferentes',
    descripcion: 'Diversificá tu canasta y ganás 400 puntos.',
    recompensaPuntos: 400,
    fechaLimite: '2026-07-31',
    progresoActual: 3,
    progresoTotal: 3,
    estado: 'completada',
    ctaLabel: 'Completada',
  },
]

export const INSIGNIAS_SEED: Insignia[] = [
  {
    id: 'ins-01',
    nombre: 'Ahorrista experta',
    descripcion: 'Ahorraste más de $20.000 en un mes.',
    icono: '💰',
    fechaObtenida: '2026-07-31',
    beneficioDesbloqueado: '200 puntos extra en tu próxima compra',
    bloqueada: false,
  },
  {
    id: 'ins-02',
    nombre: 'Compra inteligente',
    descripcion: 'Usaste el mejor medio de pago disponible 5 veces seguidas.',
    icono: '🧠',
    fechaObtenida: '2026-07-15',
    beneficioDesbloqueado: 'Acceso anticipado a promociones',
    bloqueada: false,
  },
  {
    id: 'ins-03',
    nombre: 'Exploradora digital',
    descripcion: 'Comprá 3 veces en Coto Digital.',
    icono: '🌐',
    progresoActual: 1,
    progresoTotal: 3,
    bloqueada: true,
  },
  {
    id: 'ins-04',
    nombre: 'Cliente frecuente',
    descripcion: 'Más de 10 compras en el mes.',
    icono: '⭐',
    fechaObtenida: '2026-06-30',
    beneficioDesbloqueado: '5% extra en Frescos durante 30 días',
    bloqueada: false,
  },
  {
    id: 'ins-05',
    nombre: 'Aliada sustentable',
    descripcion: 'Elegí productos de marcas sustentables 5 veces.',
    icono: '🌿',
    progresoActual: 2,
    progresoTotal: 5,
    bloqueada: true,
  },
  {
    id: 'ins-06',
    nombre: 'Fan de Comunidad',
    descripcion: 'Miembro activa durante 12 meses consecutivos.',
    icono: '❤️',
    fechaObtenida: '2026-03-15',
    beneficioDesbloqueado: 'Invitación a eventos exclusivos',
    bloqueada: false,
  },
  {
    id: 'ins-07',
    nombre: 'Cazadora de ofertas',
    descripcion: 'Activá 10 cupones distintos.',
    icono: '🏷️',
    progresoActual: 6,
    progresoTotal: 10,
    bloqueada: true,
  },
]

export const TARJETAS_SEED: Tarjeta[] = [
  {
    id: 'tar-01',
    tipo: 'debito',
    banco: 'Galicia',
    marca: 'Visa',
    ultimosCuatro: '4521',
    titular: 'Mariana García',
    vencimiento: '09/28',
    esPrincipal: true,
    beneficioDestacado: '15% de descuento los martes con débito Galicia',
  },
  {
    id: 'tar-02',
    tipo: 'credito',
    banco: 'Santander',
    marca: 'Mastercard',
    ultimosCuatro: '8834',
    titular: 'Mariana García',
    vencimiento: '03/27',
    esPrincipal: false,
    beneficioDestacado: '3 cuotas sin interés en compras mayores a $50.000',
  },
  {
    id: 'tar-03',
    tipo: 'tci',
    banco: 'COTO',
    marca: 'COTO',
    ultimosCuatro: '1234',
    titular: 'Mariana García',
    vencimiento: '12/27',
    esPrincipal: false,
    beneficioDestacado: 'Sin comisión de adquirencia + puntos dobles',
  },
]

export const CUPONES_SEED: Cupon[] = [
  {
    id: 'cup-frescos',
    marca: 'COTO',
    titulo: '20% en frutas y verduras',
    descripcion: '20% de descuento en toda la sección de Frescos.',
    descuento: '20% off',
    vigencia: '2026-08-31',
    canal: 'presencial',
    estado: 'activado',
    esTercero: false,
    condiciones: 'Válido en compras presenciales. Tope de reintegro $3.000. Una vez por semana.',
    topeReintegro: 3000,
    medioPagoRequerido: 'Wallet COTO',
    localesAdheridos: ['Todas las sucursales'],
    activacionRequerida: false,
    logoEmoji: '🥦',
  },
  {
    id: 'cup-limpieza',
    marca: 'COTO',
    titulo: '15% en productos de limpieza',
    descripcion: '15% de descuento en toda la sección de Limpieza en Coto Digital.',
    descuento: '15% off',
    vigencia: '2026-08-15',
    canal: 'online',
    estado: 'disponible',
    esTercero: false,
    condiciones: 'Válido solo en cotosupermercados.com.ar. Tope de reintegro $2.000.',
    topeReintegro: 2000,
    medioPagoRequerido: 'Wallet COTO',
    localesAdheridos: ['Coto Digital'],
    activacionRequerida: true,
    logoEmoji: '🧹',
  },
  {
    id: 'cup-50k',
    marca: 'COTO',
    titulo: '$5.000 de descuento superando $50.000',
    descripcion: 'Hacé una compra mayor a $50.000 y obtenés $5.000 de descuento.',
    descuento: '$5.000',
    vigencia: '2026-08-31',
    canal: 'ambos',
    estado: 'disponible',
    esTercero: false,
    condiciones: 'Compra mínima $50.000. Válido en sucursales y Coto Digital. Una vez por mes.',
    medioPagoRequerido: 'Cualquier medio',
    localesAdheridos: ['Todas las sucursales', 'Coto Digital'],
    activacionRequerida: false,
    logoEmoji: '🏪',
  },
  {
    id: 'cup-martinez',
    marca: 'Café Martínez',
    titulo: '2x1 en cualquier bebida caliente',
    descripcion: 'Llevate dos cafés al precio de uno en cualquier sucursal de Café Martínez.',
    descuento: '2x1',
    vigencia: '2026-08-20',
    canal: 'presencial',
    estado: 'disponible',
    esTercero: true,
    logoEmoji: '☕',
    condiciones: 'Válido de lunes a viernes hasta las 12hs. No acumulable con otras promociones.',
    medioPagoRequerido: 'Tarjeta cargada en Wallet COTO',
    localesAdheridos: ['Café Martínez Palermo', 'Café Martínez Belgrano', 'Café Martínez Recoleta'],
    activacionRequerida: true,
    distancia: '350 m',
    codigo: 'COTO2X1CM',
  },
  {
    id: 'cup-tostado',
    marca: 'Tostado',
    titulo: '25% en toda la carta',
    descripcion: '25% de descuento en cualquier consumición en Tostado.',
    descuento: '25% off',
    vigencia: '2026-08-31',
    canal: 'presencial',
    estado: 'disponible',
    esTercero: true,
    logoEmoji: '🥪',
    condiciones: 'Consumición mínima $8.000. Válido de domingo a jueves. No aplica en delivery.',
    topeReintegro: 5000,
    medioPagoRequerido: 'Tarjeta cargada en Wallet COTO',
    localesAdheridos: ['Tostado Palermo', 'Tostado Cañitas', 'Tostado Las Cañitas'],
    activacionRequerida: true,
    distancia: '1,2 km',
  },
  {
    id: 'cup-dexter',
    marca: 'Dexter',
    titulo: '20% en ropa y calzado',
    descripcion: '20% de descuento en toda la tienda Dexter.',
    descuento: '20% off',
    vigencia: '2026-08-28',
    canal: 'ambos',
    estado: 'disponible',
    esTercero: true,
    logoEmoji: '👟',
    condiciones: 'No acumulable con otras promociones. Tope de reintegro $8.000.',
    topeReintegro: 8000,
    medioPagoRequerido: 'Tarjeta cargada en Wallet COTO',
    localesAdheridos: ['Dexter Palermo', 'Dexter Alto Palermo', 'dexter.com.ar'],
    activacionRequerida: true,
    distancia: '800 m',
  },
  {
    id: 'cup-mostaza',
    marca: 'Mostaza',
    titulo: 'Combo Comunidad: hamburguesa + papas + bebida',
    descripcion: 'Combo especial para socios Comunidad COTO con 30% de descuento.',
    descuento: '30% off',
    vigencia: '2026-08-31',
    canal: 'presencial',
    estado: 'disponible',
    esTercero: true,
    logoEmoji: '🍔',
    condiciones: 'Un combo por persona por día. Válido en sucursales participantes.',
    medioPagoRequerido: 'Tarjeta cargada en Wallet COTO',
    localesAdheridos: ['Mostaza Palermo', 'Mostaza Corrientes', 'Mostaza Santa Fe'],
    activacionRequerida: true,
    distancia: '600 m',
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
