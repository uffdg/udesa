---
fuente: Dossier Negocio e Infraestructura COTO.pdf (Fase 3 — Modelo Económico del Negocio y Unit Economics)
nota: cifras de participación de medios de pago según INDEC (referencia mayo 2026) [DM], citadas tal cual las trae el dossier, no verificadas por nosotros en esta sesión.
---

# Modelo económico y unit economics

## Fórmula de margen de contribución por transacción

```
Margen_Contribucion = Ingreso_Bruto − CMV − Desc_COTO − Costo_Pago − Costo_Op − Costo_Log − Costo_Fidel − Costo_CS
```

Donde: `Ingreso_Bruto` = precio de venta nominal en caja · `CMV` = costo de
mercadería vendida · `Desc_COTO` = descuentos financiados 100% por la empresa
· `Costo_Pago` = adquirencia y aranceles bancarios · `Costo_Op` = recursos
operativos del punto de venta/recolección · `Costo_Log` = distribución de
última milla en compras digitales · `Costo_Fidel` = costo del programa
Comunidad COTO · `Costo_CS` = costo asignado de atención al cliente.

Esta fórmula es el punto de partida obligado para cualquier caso de ROI: toda
palanca de valor que se proponga (más frecuencia, más ticket, menos
comisiones, etc.) tiene que poder ubicarse en uno de estos términos.

## Mix de medios de pago sobre ventas totales (INDEC, sector supermercados, ref. mayo 2026) [DM]

| Medio de pago | % de ventas totales | Costo asociado |
|---|---|---|
| Tarjetas de crédito | 45,0% | Adquirencia 1,2%–1,8% + IVA, más retenciones impositivas y costo financiero por diferimiento de acreditación |
| Tarjetas de débito | 23,9% | Arancel de adquirencia 0,6%–0,8% + IVA, acreditación en 24–48 hs hábiles |
| Efectivo | 16,5% | Cero costo de procesamiento financiero directo, pero costos operativos de transporte de caudales, procesamiento físico, faltantes de caja y riesgo de seguridad (estimado 0,8%–1,2% del efectivo procesado) |
| Otros medios (billeteras virtuales, transferencias, QR, gift cards) | 14,6% | Comisiones 0,8%–1,5% según sea transferencia interoperable o tarjeta prepaga |

## Estructura de promociones (35%–50% de las ventas totales de la cadena)

Se diferencian tres estructuras financieras:

1. **Promociones 100% COTO**: descuentos de Comunidad COTO (ej. 15% en un
   pago) y ofertas en marcas propias. Erosión directa sobre el margen bruto
   de la empresa.
2. **Promociones cofinanciadas (proveedor–COTO)**: descuentos por volumen
   (2x1, 70% en la 2da unidad) financiados con notas de crédito de
   proveedores y aportes de trade marketing.
3. **Promociones 100% entidad financiera**: reintegros aplicados por bancos
   (Banco Nación, Galicia, Santander) o billeteras externas (MODO, Mercado
   Pago) en el extracto del cliente. COTO no erosiona su margen bruto acá,
   pero asume la fricción operativa de validación en caja.

## Tarjeta TCI (Tarjeta Coto Integrada)

Tarjeta de crédito propia emitida por COTO C.I.C.S.A. [DC, fuente 13].
Permite a la empresa:

- Eliminar las comisiones de adquirencia pagadas a terceros.
- Capturar ingresos financieros por cargos de financiamiento e intereses
  punitorios.
- Construir **trazabilidad transaccional absoluta del cliente**,
  independientemente del uso del carnet de Comunidad COTO.

**Implicancia directa para la plataforma de fidelización**: la migración de
medios de pago de terceros hacia TCI es, por diseño, la palanca con mejor
relación "esfuerzo de producto vs. captura de margen" — no depende de cambiar
el comportamiento de compra del cliente (frecuencia/ticket), solo de
redirigir el medio de pago en el checkout. El dossier la usa como una de las
7 palancas del árbol de beneficios económicos (ver
`coto-modelo-financiero-roi.md`).

## Pérdida de trazabilidad de datos (dato clave para cualquier propuesta de segmentación)

- Entre el **35% y el 45%** de las transacciones presenciales en salón se
  liquidan en efectivo o tarjeta de débito **sin que el consumidor consigne
  su DNI o carnet de Comunidad COTO** [EC/SV según el dossier]. Esto disocia
  el ticket de compra del perfil del cliente.
- La adquirencia bancaria externa bloquea el acceso a los hábitos de consumo
  del usuario fuera de las sucursales.
- Los eventos de navegación en Coto Digital **no están integrados
  analíticamente en tiempo real** con la interacción presencial del cliente
  en tienda física.

Estos tres puntos son, en la práctica, la justificación de negocio más
concreta para invertir en una plataforma de datos/IA unificada — sin
resolverlos, cualquier componente de segmentación o personalización tiene un
techo bajo porque falta identificar al cliente en gran parte de las
transacciones.
