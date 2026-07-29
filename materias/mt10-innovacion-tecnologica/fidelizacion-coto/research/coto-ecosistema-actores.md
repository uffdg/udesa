---
fuente: Dossier Negocio e Infraestructura COTO.pdf (Fase 4 — Ecosistema de Actores y Flujos de Valor)
---

# Ecosistema de actores y flujos de valor

El dossier arma una matriz de actores internos y externos que participan del
negocio de COTO, cada uno con su rol, qué aporta, qué recibe, costos/ingresos
asociados, qué datos genera/consume, y sus puntos de fricción. Resumen por
actor (para el detalle completo de columnas, ver el dossier original):

| Actor | Rol principal | Qué aporta | Qué recibe | Conflictos / fricciones |
|---|---|---|---|---|
| Cliente presencial | Consumidor en salón | Capital de compra, frecuencia, elección presencial | Productos, promociones de caja | Largas filas, tiempo de espera, precios desactualizados, falta de personal |
| Cliente digital | Consumidor e-commerce | Recurrencia de compra digital, datos de navegación | Entrega a domicilio, surtido digital | Entregas fuera de horario, sustitutos involuntarios de stock |
| Comunidad COTO | Programa de beneficio/identificación | Trazabilidad del perfil de consumo | Descuentos exclusivos (ej. 15% en días clave) | Proceso de alta complejo, falta de personalización en ofertas |
| Tarjeta TCI | Entidad de crédito propia | Medio de pago propio, financiamiento exclusivo | Lealtad de pago, captura de aranceles financieros | Límite de crédito insuficiente, tasa de interés percibida alta |
| Bancos / MODO / Billeteras | Medios de pago y financiamiento externo | Co-financiamiento de promociones, tracción de clientes | Exposición de marca en folletos, volumen de cobro | Fallas en acreditación de reintegros en el resumen bancario |
| Proveedores FMCG | Fabricantes de bienes masivos | Productos, trade marketing, promociones | Volumen de venta, posicionamiento en góndola | Disputas por precio de lista, pago diferido de facturas |
| Operaciones / Cajas | Ejecución en el punto de venta | Fuerza de trabajo, cobro, atención | Salarios, comisiones operativas | Fricción al ingresar cupones manuales, fallas de conectividad POS |
| Sistemas / Data COTO | Infraestructura IT y soporte digital | Plataformas operativas (POS, ERP, CRM, Coto Digital) | Presupuesto tecnológico, inversión cloud | Sistemas legacy heredados, dificultad de integración en tiempo real |

## Flujo financiero

- El desembolso del cliente hacia COTO se canaliza vía adquirentes o efectivo
  directo.
- Transacciones con tarjetas de terceros generan retenciones arancelarias del
  **1,5% al 2,5%** del valor bruto.
- La captura vía **Tarjeta TCI retiene el 100% del valor dentro del grupo
  económico** (no hay fuga de comisión a terceros).

## Flujo de datos y pérdida de trazabilidad (mismo punto que en unit economics, visto desde el ecosistema)

- **35%–45%** de las transacciones presenciales se liquidan sin DNI/carnet de
  Comunidad COTO → se disocia el ticket del perfil del cliente.
- La adquirencia bancaria externa bloquea la visibilidad de hábitos de
  consumo del cliente fuera de sucursales COTO.
- Los eventos de navegación de Coto Digital **no están integrados
  analíticamente en tiempo real** con la interacción presencial.

## Lectura para la propuesta de solución

Este mapa de actores es el insumo natural para diseñar **quién usa cada
componente de la plataforma agéntica** (ver
`coto-procesos-y-casos-de-uso-agenticos.md`): el cliente presencial/digital es
el usuario final de los asistentes de promociones y sustitución; Operaciones/
Cajas es quien opera junto al agente en el punto de venta; Sistemas/Data COTO
es quien absorbe la integración técnica; y Bancos/MODO son un actor externo
cuyo comportamiento (reintegros, aranceles) condiciona directamente el diseño
del caso de ROI vía TCI.
