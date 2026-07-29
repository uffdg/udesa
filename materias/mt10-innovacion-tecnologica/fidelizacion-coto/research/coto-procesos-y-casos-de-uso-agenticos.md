---
fuente: Dossier Negocio e Infraestructura COTO.pdf (Fase 4 ext., 5 y 6 — Inventario de Procesos, Evaluación de Aptitud Agéntica, Inventario de Oportunidades y Casos de Uso Agénticos)
---

# Procesos críticos y casos de uso agénticos

## Taxonomía de niveles de autonomía usada por el dossier

- **Nivel 0 (Información)**: búsqueda y presentación pasiva de datos.
- **Nivel 1 (Recomendación)**: sugerencia de acciones evaluadas por el
  usuario.
- **Nivel 2 (Preparación)**: configuración y precarga de una transacción a la
  espera de confirmación.
- **Nivel 3 (Ejecución aprobada)**: el agente dispara la acción tras
  autorización explícita del usuario.
- **Nivel 4 (Ejecución autónoma limitada)**: transacción completada
  automáticamente dentro de umbrales estrictos prefijados.
- **Nivel 5 (Operación autónoma total)**: ejecución y autorregulación
  completa en casos excepcionales.

## Inventario de 12 procesos críticos evaluados (resumen)

| # | Proceso | Volumen estimado | Costo/tiempo actual | Tasa de error actual | Potencial agéntico |
|---|---|---|---|---|---|
| 1 | Alta de miembro Comunidad COTO | 40K req/mes | 3-5 min, $1,20 USD | 8,5% (datos inválidos) | Alto |
| 2 | Búsqueda y explicación de promos | 2,5M consultas/mes | 2-4 min | 15,0% (confusión días/tarjetas) | Muy Alto |
| 3 | Armado y optimización de lista | 800K listas/mes | 15-25 min | N/A | Muy Alto |
| 4 | Selección de medio de pago en caja | 12M trans/mes | 1-2 min, $0,35 USD | 5,0% (medio no óptimo) | Alto |
| 5 | Gestión de sustitutos en Coto Digital | 150K pedidos/mes | 4-8 min/pedido, $1,80 USD | 12,0% (rechazo de sustituto) | Muy Alto |
| 6 | Resolución de reclamos posventa | 60K casos/mes | 8-15 min, $3,50 USD | 6,0% (resolución diferida) | Alto |
| 7 | Autenticación y cobro en Tarjeta TCI | 500K resúmenes/mes | 3-5 min, $0,90 USD | 4,0% | Medio |
| 8 | Segmentación y envío de campañas | 50 campañas/mes | 4-8 horas, $120 USD/campaña | 20,0% (baja relevancia) | Muy Alto |
| 9 | Conciliación de descuentos con bancos | 120 acuerdos/mes | 3-5 días, $850 USD/mes | 3,5% (discrepancias no cobradas) | Medio |
| 10 | Monitoreo de stock y reposición | 120 sucursales/día | 1-2 horas/tienda, $45 USD/día/tienda | 7,0% (quiebre de stock) | **Bajo** (requiere IoT pesado) |
| 11 | Prevención de churn de clientes | 3,5M miembros | N/A | N/A (Customer LTV Loss) | Alto |
| 12 | Prevención de abuso de promociones | 12M trans/mes | Real-time | 2,0% (falsos positivos/negativos) | Medio |

**Nota**: el proceso #10 (monitoreo de stock) es el único con potencial
agéntico marcado explícitamente **Bajo** por el dossier — requiere
integración IoT pesada que un agente conversacional/de decisión no resuelve
por sí solo. Útil para no sobrevender la propuesta de IA en el TP: no todo
proceso es igual de apto.

## Matriz de 6 casos de uso agénticos propuestos (CU-01 a CU-06)

| Caso de uso | Nivel autonomía | Usuario target | Qué decide el agente | Latencia requerida | Riesgo operativo | Valor económico potencial |
|---|---|---|---|---|---|---|
| **CU-01**: Asistente de Promociones y Medio de Pago | Nivel 2 | Cliente presencial/digital | Recomienda la combinación óptima de tarjeta, día y descuento en tiempo real | <800 ms | Bajo | Muy Alto — maximiza conversión y percepción de ahorro |
| **CU-02**: Planificador de Canasta por Presupuesto | Nivel 3 | Cliente Coto Digital/App | Sustituye SKUs o ajusta cantidades para no exceder un presupuesto límite | <2.000 ms | Medio | Alto — incrementa el volumen de pedidos completados sin abandono |
| **CU-03**: Asistente de Sustituciones en E-commerce | Nivel 3 | Picker de tienda/Operaciones | Elige el producto de reemplazo con mayor probabilidad de aceptación | <500 ms | Medio | Alto — reduce cancelaciones de pedidos online en ~25% |
| **CU-04**: Resolutor de Reclamos Posventa y Devoluciones (hasta $15.000 ARS) | Nivel 4 | Cliente Final/Soporte | Emite cupones de reembolso o reposición directa por faltantes/daños | <1.500 ms | Alto (escala a humano si excede tope o score dudoso) | Muy Alto — reduce el costo por ticket de soporte de $3,50 a $0,40 USD |
| **CU-05**: Orquestador de Campañas Hiper-Personalizadas | Nivel 3 | Equipo de Marketing COTO | Genera ofertas dinámicas individuales según propensión de compra e inventario | Asíncrono | Medio (aprobación del gerente antes del envío masivo) | Muy Alto — eleva la tasa de redención de cupones de 3% a 12% |
| **CU-06**: Asistente Conversacional Tarjeta TCI | Nivel 2 | Cliente Financiero TCI | Informa disponible, refinancia resúmenes y recuerda fechas de vencimiento | <1.000 ms | Alto (requiere autenticación 2FA robusta) | Medio — reduce costos de call center y morosidad temprana |

## Lectura para el checklist del TP

- **CU-05** es el caso de uso que más directamente alimenta "Gestión de
  campañas (deseable con IA)".
- **CU-04** y **CU-06** alimentan "Esquema de atención al cliente (deseable
  con IA)".
- **CU-01, CU-02, CU-03** alimentan "Segmentación de clientes y acciones en
  tiempo real (deseable con IA)".
- Ninguno de los 6 casos de uso cubre redes sociales u omnicanalidad más allá
  de POS/App/WhatsApp — ver research separado en
  `coto-redes-sociales-omnicanalidad.md`.
