---
fuente: Dossier Negocio e Infraestructura COTO.pdf (Fases 14 y 16 — Inventario de Datos, Arquitectura de Información y Gobernanza)
---

# Inventario de datos, gobernanza y marco regulatorio

## Dominio de datos requerido para alimentar los agentes

| Entidad de datos | Sistema origen | Sensibilidad | Nivel de calidad exigido | Riesgo de privacidad/compliance |
|---|---|---|---|---|
| Perfil del cliente | CRM Comunidad COTO | Alta (PII) | 98% (DNI/email validado) | Ley 25.326 (Protección de Datos) |
| Historial de compras | Mainframe/ERP | Media | 100% (transaccional) | Perfilamiento de consumo sensible |
| Maestro de productos (SKUs) | ERP SAP / PIM | Pública | 99% (precios/EAN correctos) | Precios desactualizados en respuesta de IA |
| Promociones y reglas | Engine de promociones | Pública | 100% (reglas legales) | Publicidad engañosa por alucinación |
| Medios de pago y TCI | Core bancario / TCI | **Crítica (PCI)** | 100% (tokenizado PCI DSS) | Vulneración de datos de tarjeta / normas BCRA |
| Stock por sucursal | WMS / Inventarios | Interna | 90% (estimación física) | Promesa de entrega sin stock real |

## Marco regulatorio argentino aplicable

- **Ley 25.326 de Protección de Datos Personales**: consentimiento explícito
  del usuario para tratamiento de datos de consumo con fines de perfilamiento
  comercial, y garantía de derechos de acceso, rectificación y supresión.
- **Normas del BCRA para Proveedores de Servicios de Pago (PSP)**: aplican
  ante cualquier integración con Tarjeta TCI o módulos de billetera, incluida
  seguridad operacional en transferencias interoperables.
- **PCI DSS**: la arquitectura debe inhibir el procesamiento/almacenamiento
  de datos primarios de tarjeta (PAN/CVV) mediante tokenización estándar.
- **Ley 24.240 de Defensa del Consumidor**: exige guardrails/validación
  rígida para evitar que alucinaciones del agente comprometan a la empresa
  (ej. ofertas inexistentes, promesas de stock falsas).

## Lectura para el TP

Este inventario es el insumo directo para la parte de "Big Data / Data
Analytics" del checklist en lo que hace a **gobernanza**, no solo a
tecnología: cualquier propuesta de segmentación o personalización con datos
de Comunidad COTO tiene que mencionar explícitamente cómo cumple la Ley
25.326, y cualquier componente que toque la Tarjeta TCI tiene que mencionar
PCI DSS y las normas BCRA — omitir esto frente a una audiencia tipo directorio
sería un hueco visible en el caso.
