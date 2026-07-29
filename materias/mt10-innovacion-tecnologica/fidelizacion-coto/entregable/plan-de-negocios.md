# Plan de negocios: plataforma de fidelización para COTO

**MT10 Innovación Tecnológica — Maestría en Gestión de Servicios Tecnológicos y de Telecomunicaciones / Master in Business & Technology, UDESA**
Documento para presentación ante el directorio de COTO C.I.C.S.A. (role play).

> Nota de nombre: este documento usa "COTO Wallet" como nombre de trabajo de la propuesta, tal como lo hace la consigna del TP. No existe evidencia pública de que un producto con ese nombre ya exista dentro de COTO — es el nombre de referencia de este proyecto, no una afirmación sobre el portafolio actual de la compañía.

---

## Resumen ejecutivo

COTO es el líder del mercado de supermercados en Argentina (22,3% de participación) y el líder indiscutido del e-commerce del sector. Sin embargo, pierde trazabilidad de entre el 35% y el 45% de sus transacciones presenciales porque el cliente no consigna su DNI ni su carnet de Comunidad COTO al pagar — y es, de los dos líderes de mercado, el único que no tiene una billetera digital propia: depende de un tercero (Mercado Pago) para los pagos digitales en caja, mientras Carrefour (Cuenta Digital Mi Carrefour, lanzada en septiembre de 2025) y Cencosud (CencoPay, desde 2023) ya construyeron esa capa de dato y de retención de margen financiero.

Este documento propone una **plataforma agéntica de datos unificada** — no seis proyectos de inteligencia artificial independientes, sino un único orquestador de agentes que cruza, por primera vez, el punto de venta presencial, Coto Digital, el core bancario de la Tarjeta TCI, el stock de tienda y (donde el dato lo permita) la interacción en redes sociales. Esa plataforma es el mecanismo que conecta cada uno de los componentes que pide este trabajo: la generación de demanda y gestión de campañas, la atención al cliente, la interacción omnicanal, la segmentación en tiempo real y la infraestructura de Big Data que los sostiene a todos. La razón de fondo es simple: el problema de negocio más concreto que encontramos — la pérdida de trazabilidad del cliente — es, en sí mismo, un problema de datos que no se cruzan. La plataforma agéntica no es una capa de IA "agregada" sobre el negocio actual; es la respuesta estructural a ese problema específico.

El caso de inversión no se apoya en el escenario más optimista del modelo financiero. Se apoya en tres argumentos más sólidos: (1) el costo de no actuar — cada mes de demora es un mes más de datos de cliente que se generan y se pierden sin capturar, sobre 12 millones de transacciones mensuales; (2) una ventana competitiva concreta y con fecha, que se angosta cada trimestre que Carrefour y Cencosud siguen escalando adopción de sus billeteras; y (3) un análisis de sensibilidad que muestra que, incluso en el escenario más adverso que modelamos, el proyecto mantiene valor presente neto (VAN) positivo. El riesgo principal no es tecnológico ni de costo de infraestructura de IA — ambos resultan de bajo impacto en la sensibilidad — sino de **adopción**, y depende de un supuesto sobre el tamaño del padrón de Comunidad COTO que todavía no está validado con datos internos de la compañía. Por eso la propuesta arranca con una fase 0 de tres experimentos de bajo costo, diseñados específicamente para reemplazar ese y otros supuestos críticos por evidencia real antes de comprometer el presupuesto completo.

---

## 1. Contexto de la organización

### 1.1. La industria y la posición de COTO

COTO compite en el retail de supermercados de Argentina, un mercado donde lidera con **22,3% de participación** (rango estimado 21,5%–23,5%), por delante de Carrefour (21%), Cencosud —Jumbo/Disco/Vea— (17%), La Anónima (12,5%), Día (9%) y Changomás (8,7%)¹. A diferencia del resto de los competidores relevados, COTO tiene una integración vertical poco común en el sector: producción agrícola-ganadera propia, frigoríficos con capacidad de exportación, logística de distribución centralizada y venta minorista masiva, sostenida por una red de 120 a 121 sucursales y entre 17.000 y 22.000 empleados.

Un dato clave para encuadrar esta propuesta: **Coto Digital ya es el líder indiscutido del e-commerce de supermercados en Argentina**, con más de 20% de tráfico mensual y más de 50% de volumen de pedidos por encima del competidor directo más cercano. El desafío que plantea este proyecto, entonces, no es de escala ni de infraestructura digital básica — COTO ya la tiene y ya lidera en volumen. El desafío es de **integración de datos entre canales que hoy operan como silos separados**.

### 1.2. Desafíos actuales

**El desafío central: pérdida de trazabilidad del cliente en el canal presencial.** Entre el 35% y el 45% de las transacciones presenciales en salón se liquidan sin que el cliente consigne su DNI o su carnet de Comunidad COTO. El ticket queda disociado del perfil del cliente, y esa desconexión se agrava porque buena parte de la adquirencia en caja corresponde a tarjetas bancarias de terceros, que no dejan visibilidad de hábito de consumo fuera de la transacción puntual. A esto se suma que la navegación de Coto Digital no está integrada analíticamente en tiempo real con la actividad presencial del mismo cliente en tienda física. No es un problema de tecnología de punta: es un problema de **identificación del cliente en el momento de la transacción**, y es la restricción de partida de todo lo que sigue en este documento — sin resolverlo, cualquier iniciativa de segmentación o personalización tiene un techo bajo.

**La misma fricción se repite en otros canales.** Las redes sociales de COTO (Instagram, Facebook, X, TikTok) funcionan hoy como vidriera de marca y canal de difusión de ofertas, con derivación hacia un canal de WhatsApp que es unidireccional ("Channel" de difusión, no chat conversacional). No hay evidencia pública de que esa interacción alimente el perfil de Comunidad COTO, y los reclamos que se inician en redes se derivan sistemáticamente al 0800 telefónico (Fonocoto) en vez de resolverse en el canal de origen — el cliente tiene que repetir su reclamo en otro canal para que lo atiendan.

**Sistemas legacy y dificultad de integración en tiempo real.** El punto de venta presencial, Coto Digital, el core bancario de la Tarjeta TCI, el sistema de gestión de stock (WMS) y el CRM de Comunidad COTO operan hoy como sistemas separados, con la dificultad de integración en tiempo real que es habitual en organizaciones de esta escala y antigüedad.

**Fuga de margen a medios de pago de terceros.** El 45% de las ventas se paga con tarjeta de crédito de terceros, con costos de adquirencia de entre 1,2% y 1,8% más IVA, y un 23,9% adicional se paga con débito. Cada punto de venta que migra hacia la Tarjeta TCI propia es margen que hoy se fuga hacia bancos y procesadoras externas y que, con la propuesta de este documento, permanece dentro del grupo económico.

### 1.3. Oportunidades

- **Un activo propio, ya construido y subutilizado como fuente de dato**: la Tarjeta TCI retiene el 100% del valor dentro del grupo económico (no hay fuga de comisión a un tercero) y es la base natural para construir trazabilidad transaccional del cliente — hoy esa capacidad no está explotada a nivel de una plataforma de datos unificada.
- **Una base de e-commerce ya consolidada**, sobre la cual construir en vez de crear un canal digital desde cero.
- **Una ventana competitiva todavía abierta en billeteras digitales**: solo dos de los cinco competidores relevados tienen wallet propia con cashback o rendimiento (ver 1.4). COTO puede posicionarse rápido si actúa ahora, aunque la ventana se cierra a medida que esos dos competidores escalan adopción.
- **Un beneficio ancla ya fuerte y diferenciado**: el 15% de descuento martes y jueves de Comunidad COTO cubre dos días por semana, más cobertura semanal que el 20% de un solo día que ofrece ClubDia (Día Argentina) — es un activo de marca sobre el cual construir, no algo que haya que inventar.

### 1.4. Estado de los competidores

| Competidor | Participación de mercado | ¿Billetera digital propia? | Diferencial confirmado |
|---|---|---|---|
| **COTO** | **22,3% (líder)** | **No** — pagos digitales vía Mercado Pago (tercero) | 15% de descuento martes/jueves (Comunidad COTO) + Tarjeta TCI (crédito propio, no billetera) |
| Carrefour Argentina | 21% | **Sí** — Cuenta Digital Mi Carrefour (set. 2025) | 43% TNA sobre saldo, 10% de descuento fin de semana, banco propio con ~1M de clientes financieros, red Mastercard completa |
| Cencosud (Jumbo/Disco/Vea) | 17% | **Sí** — CencoPay (desde 2023) | 2% de cashback diario + programa de puntos Jumbo Más en paralelo |
| La Anónima | 12,5% | No confirmada | Asistente virtual y seguros integrados en la app |
| Día Argentina | 9% | No confirmada | ClubDia: entre 3,9 y 4 millones de socios declarados, 50% ya migrado a tarjeta digital |
| Changomás | 8,7% | No — usa Cuenta DNI de Banco Provincia | Beneficios extra-categoría (gastronomía, entretenimiento) |

**Lectura para el directorio**: COTO lidera el mercado y el e-commerce del sector, pero es el único de los dos líderes de participación (junto con Carrefour) **sin billetera digital propia**. Depende de un tercero para pagos digitales en caja, exactamente el terreno donde Carrefour y Cencosud ya construyeron una ventaja de dato propio y de retención de margen financiero. Frente a La Anónima, Día y Changomás la posición de COTO es equivalente o mejor; la brecha real está contra los dos competidores que ya lanzaron billetera, no contra el promedio del mercado.

> **Nota de honestidad de dato**: la cifra de miembros de Comunidad COTO que se usa más adelante para dimensionar adopción (entre 3,5 y 6,5 millones) es un **supuesto pendiente de validación** con información interna de la compañía, no un dato confirmado. Se usa en este documento con esa salvedad explícita cada vez que sostiene una proyección relevante — en particular en la sección de ROI.

---

## 2. La propuesta: una plataforma agéntica de datos unificada

Antes de entrar componente por componente, vale explicitar la lógica que conecta todo este documento. No proponemos seis integraciones de inteligencia artificial independientes, una por cada frente del checklist de este trabajo. Proponemos **una plataforma de datos unificada, con un orquestador de agentes único**, que distintos casos de uso consumen desde distintos puntos de contacto: caja, e-commerce, atención al cliente, campañas, WhatsApp y redes sociales. Todos comparten la misma fuente de verdad de cliente, el mismo motor de segmentación, la misma capa de gobernanza de datos y los mismos guardrails de auditoría.

Esta decisión de diseño no es estética. El problema de negocio más concreto y medible que encontramos —la pérdida de trazabilidad en el 35%-45% de las transacciones presenciales— es, literalmente, un problema de fuentes de datos que no se cruzan. Construir seis soluciones de IA aisladas, cada una con su propia integración de datos, repetiría el mismo problema seis veces en vez de resolverlo una sola vez. La plataforma agéntica es la respuesta directa al diagnóstico de la sección 1, no una capa de tecnología de moda añadida encima del negocio actual.

En términos concretos, la plataforma se organiza en seis casos de uso agénticos (CU-01 a CU-06), cada uno con un nivel de autonomía explícito y acotado, que se distribuyen entre las secciones 3 a 6 de este documento:

| Caso de uso | Componente | Nivel de autonomía |
|---|---|---|
| CU-01 — Asistente de Promociones y Medio de Pago | Segmentación en tiempo real (también insumo de campañas) | 2 — Recomendación |
| CU-02 — Planificador de Canasta por Presupuesto | Segmentación en tiempo real | 3 — Ejecución aprobada por el cliente |
| CU-03 — Asistente de Sustituciones en E-commerce | Segmentación en tiempo real | 3 — Ejecución aprobada (usuario interno: picker) |
| CU-04 — Resolutor de Reclamos Posventa y Devoluciones | Atención al cliente (también interfaz en redes sociales) | 4 — Ejecución autónoma limitada (tope $15.000 ARS) |
| CU-05 — Orquestador de Campañas Hiper-Personalizadas | Gestión de campañas | 3 — Ejecución aprobada por gerente de marketing |
| CU-06 — Asistente Conversacional Tarjeta TCI | Atención al cliente (canal financiero) | 2 — Recomendación, nunca aprueba crédito |

Ningún caso de uso llega a autonomía plena sin supervisión (Nivel 5). Es una decisión deliberada: el riesgo reputacional y regulatorio de un agente actuando sin control sobre dinero del cliente, crédito o promociones supera, en esta etapa, el beneficio de sacar al humano del circuito.

---

## 3. Plataforma de generación de demanda y gestión de campañas

### 3.1. Dónde está el problema real

La generación de demanda en sí —tráfico, visibilidad de marca— no es el cuello de botella de COTO: Coto Digital ya lidera el e-commerce del sector. El cuello de botella está en **qué oferta se le arma a cada cliente una vez que la demanda ya existe**. Hoy, armar una campaña segmentada toma entre 4 y 8 horas y cuesta 120 USD por campaña (se ejecutan cerca de 50 campañas mensuales), y produce una tasa de baja relevancia del 20% — el cliente recibe una oferta que no le interesa. Es uno de los procesos con mayor potencial de mejora agéntica de todo el inventario relevado.

### 3.2. Cómo se organiza esta plataforma

Seguimos el marco de la cátedra de **Machear → Relacionar → Nutrir** como columna vertebral de la gestión de campañas: primero identificar al cliente correcto en el momento correcto, después convertir esa identificación en una oferta relevante, y finalmente sostener la relación en el tiempo (este último momento se desarrolla en la sección 5, segmentación en tiempo real). Esta plataforma no es un sistema separado de la infraestructura de datos que describe la sección 6: es la capa de marketing y ventas que consume esos mismos datos.

**Captura de demanda (sin IA en el núcleo).** El canal de entrada es el alta de miembro de Comunidad COTO —hoy unas 40.000 solicitudes mensuales, con 8,5% de tasa de error por datos inválidos—. Proponemos un asistente de validación de datos en el propio formulario de alta (lectura óptica de DNI, validación de formato en tiempo real), de Nivel 1 de autonomía (recomienda, no decide), porque cualquier ruido que entre al CRM en este punto contamina toda segmentación posterior. Es, deliberadamente, el componente de menor riesgo de todo el proyecto — depende solo del propio formulario, no de ninguna integración externa — y por eso se prioriza como quick win de la fase inicial.

No proponemos IA "generativa de demanda" en esta etapa: la captura de tráfico y awareness ya funciona con las palancas tradicionales de marketing (medios pagos, presencia en redes, el propio beneficio ancla de Comunidad COTO). El valor real de la IA está del lado de qué se le ofrece a cada cliente una vez capturado — que es exactamente el problema de la gestión de campañas.

### 3.3. CU-05 — Orquestador de Campañas Hiper-Personalizadas

Este es el núcleo de la propuesta para esta sección. Un agente que arma la combinación de oferta, segmento y canal para cada cliente individual, según su propensión de compra y el inventario disponible, con **Nivel 3 de autonomía**: genera las ofertas dinámicas, pero un gerente de marketing aprueba el lote antes del envío masivo. No proponemos autonomía plena en esta etapa: el riesgo de un envío mal calibrado —una promoción duplicada, una oferta al segmento equivocado— supera el beneficio de eliminar la revisión humana.

El valor esperado, según el estudio de casos de uso del que parte esta propuesta, es elevar la tasa de redención de cupones del 3% al 12% — una cifra que es una **estimación del caso de uso**, no una medición real sobre datos de COTO (retomamos esta salvedad en la sección de ROI). El agente opera de forma asíncrona: la campaña se prepara con anticipación, se aprueba y se dispara en lote o programada, a diferencia de los casos de uso de tiempo real de la sección 5.

Un punto de diseño no menor: el agente tiene que distinguir explícitamente qué promociones son financiadas 100% por COTO (erosionan margen propio), cuáles son cofinanciadas con proveedores y cuáles son financiadas por una entidad financiera — porque optimizar "tasa de redención" sin esa distinción puede terminar maximizando el canje de las promociones más caras para la empresa. Esa restricción de negocio debe estar codificada en las reglas del orquestador, no delegada al criterio del modelo.

**Gobernanza aplicada**: el agente no puede ofrecer una promoción inexistente o con condiciones distintas a las vigentes (Ley de Defensa del Consumidor, N.° 24.240) — requiere validación contra el motor de promociones antes de cualquier envío. El perfilamiento comercial para campañas hiper-personalizadas requiere consentimiento explícito del socio (Ley de Protección de Datos Personales, N.° 25.326), capturado en el alta descripta arriba. Y por qué a un cliente le llegó una oferta y a otro no debe poder auditarse, tanto por confianza del propio equipo de marketing como por riesgo regulatorio de discriminación de precios.

Este orquestador comparte el mismo motor de segmentación RFM que alimenta los casos de uso de tiempo real de la sección 5 — no se duplica infraestructura de segmentación entre "campañas" y "tiempo real": es una única capa de segmentación con dos consumidores en dos velocidades distintas.

---

## 4. Esquema de atención al cliente

### 4.1. Método: relevar todos los canales antes de proponer mejoras

Antes de proponer dónde entra la IA, mapeamos dónde está hoy la atención al cliente de COTO, cruzando dos ejes: Presencial / Telefónico / Digital, cada uno con o sin intervención humana.

| | **Humano** | **No humano** |
|---|---|---|
| **Presencial** | Personal de sucursal, cajeros | No confirmado (sin evidencia pública de autoservicio o kiosco en sucursal) |
| **Telefónico** | 0800-888-4848 (Fonocoto) — confirmado como destino de derivación desde redes sociales | No confirmado (sin evidencia de IVR o bot de voz) |
| **Digital** | No confirmado (sin evidencia de atención humana por chat o DM) | Débil o ausente — WhatsApp es hoy solo un canal de difusión unidireccional, no un chat conversacional |

**Lectura de la matriz**: la celda con más cobertura confirmada es Presencial + Humano, el modelo tradicional de sucursal. La celda estructuralmente más débil es **Digital, en ambos ejes** — ni atención humana confirmada por canal digital, ni automatización conversacional real. Es consistente con lo que ya vimos en la sección 1: las redes sociales derivan todo al 0800 en vez de resolver en el canal de origen. La propuesta de esta sección apunta específicamente a llenar la celda Digital + No Humano, hoy vacía, y a descomprimir la presión sobre Telefónico + Humano.

### 4.2. El problema en números

Resolver un reclamo posventa hoy toma entre 8 y 15 minutos y cuesta 3,50 USD por ticket, sobre un volumen de 60.000 casos mensuales, con 6% de tasa de resolución diferida (el caso no se cierra en el primer contacto). No es solo un costo operativo: cada reclamo mal resuelto o demorado es una interacción negativa sobre la relación que el resto de esta propuesta busca fortalecer.

### 4.3. CU-04 — Resolutor de Reclamos Posventa y Devoluciones

Automatizar los casos rutinarios —dentro de un tope de monto y con score de confianza alto— baja el costo por ticket de 3,50 USD a 0,40 USD. Es, según el modelo financiero de este proyecto, **la palanca de mayor confianza de todo el caso de ROI**, precisamente porque depende de una decisión operativa interna de COTO (desplegar el agente y ajustar los incentivos del equipo de soporte), no de que el cliente cambie su comportamiento de compra.

- **Nivel de autonomía**: 4 (ejecución autónoma limitada), pero **solo hasta $15.000 ARS**. Por encima de ese umbral, o si el score de confianza del caso es dudoso, el caso escala a un humano. No proponemos autonomía plena: cualquier automatización sin tope sobre dinero del cliente es, según el propio relevamiento, de alto riesgo y baja viabilidad en esta etapa.
- **Valor esperado**: en el escenario base del modelo financiero, se proyecta 65% de autoservicio en reclamos.
- **Qué necesita**: historial de compra del cliente para verificar la legitimidad del reclamo (con la misma limitación de trazabilidad del 35%-45% descripta en la sección 1: un cliente no identificado en su compra original no puede acceder a autoservicio sobre esa compra), catálogo de precios vigente, reglas de reembolso y un score de riesgo de fraude para decidir cuándo escalar.

### 4.4. CU-06 — Asistente Conversacional Tarjeta TCI

Atiende consultas de saldo disponible, refinanciación de resúmenes y recordatorios de vencimiento — hoy absorbidas por un proceso que toma entre 3 y 5 minutos y cuesta 0,90 USD por resumen, sobre 500.000 resúmenes mensuales.

- **Nivel de autonomía**: 2 (recomendación) — **informa y recuerda, nunca aprueba crédito ni modifica límites**. La aprobación autónoma de crédito está marcada explícitamente de baja viabilidad y alto riesgo por la exposición a incobrabilidad y a sanción regulatoria del Banco Central, y esta propuesta respeta ese límite.
- Requiere autenticación de doble factor robusta — riesgo operativo considerado "Alto" precisamente por tocar datos financieros críticos.
- El core bancario de la Tarjeta TCI es uno de los puntos de integración técnica con mayor incertidumbre de todo el proyecto: este componente debería desplegarse después de una prueba de concepto de esa integración, no en la primera ola.

### 4.5. Regla de escalamiento

1. El cliente interactúa con CU-04/CU-06 en un canal digital (app, o WhatsApp si se implementa la extensión conversacional de la sección 5).
2. Si el caso está dentro de umbral y el score de confianza es alto, se resuelve de forma autónoma.
3. Si excede el umbral, el score es dudoso, o el cliente lo pide explícitamente, escala a Telefónico + Humano (el 0800 ya existente) o a Digital + Humano si se define ese canal.
4. El caso escalado **debe llegar al humano con el contexto ya recopilado por el agente** — si el humano recibe el caso desde cero, la automatización solo trasladó el trabajo, no lo redujo.

**Gobernanza**: CU-06 no procesa ni almacena número de tarjeta ni código de seguridad — solo datos tokenizados, bajo estándar PCI DSS y normativa del Banco Central para proveedores de servicios de pago. Los guardrails de CU-04 deben impedir que el agente prometa una reposición o un reembolso que la política real de COTO no respalda.

**Advertencia de adopción** (se desarrolla en profundidad en la sección 6): desplegar estos agentes sin revisar los incentivos del equipo humano que recibe los casos escalados repite un error documentado en la literatura de la cátedra sobre un call center donde un algoritmo de recomendación fracasó porque el esquema de comisión premiaba velocidad de llamada, no calidad de resolución. Si Fonocoto sigue midiéndose por volumen de llamadas y no por calidad de resolución de los casos escalados, es esperable que el escalamiento se maneje mal aunque la tecnología funcione bien.

---

## 5. Interacción por redes sociales y omnicanalidad

### 5.1. Diagnóstico honesto

Con la evidencia pública disponible, COTO está hoy en el nivel **"Multichannel"** de la escala de madurez omnicanal de la cátedra (varios canales activos en paralelo: Instagram con cerca de 808.000 seguidores, Facebook con 1,1 millones, X, TikTok, Threads), no todavía en **"Omnichannel"**. Lo que falta para dar ese salto es que la interacción social alimente el perfil de Comunidad COTO y que un reclamo iniciado en redes se resuelva en el mismo canal en vez de derivarse al 0800. Usando el marco de tres pilares de la industria (Reconocimiento, Interacción, Orquestación): COTO tiene Interacción —contenido, presencia, volumen de audiencia— pero no hay evidencia de Reconocimiento (identificar al mismo cliente en redes y en Comunidad COTO) ni de Orquestación (coordinar esa experiencia sobre datos compartidos). Vale aclarar que esto no es una falla exclusiva de COTO: solo el 8,9% de una muestra amplia de responsables de marketing relevados logra reconocer consistentemente al mismo cliente en todos sus canales.

Este diagnóstico está construido sobre **ausencia de evidencia pública**, no sobre confirmación de que la integración no existe — es posible que COTO tenga integración interna no visible desde afuera. Lo tratamos como el escenario más probable, pero recomendamos confirmarlo antes de comprometer inversión específica en este componente (ver 5.4).

### 5.2. Qué rol cumplen hoy las redes sociales

Vidriera de marca y canal de difusión de ofertas y alertas, con derivación cruzada hacia un canal de WhatsApp unidireccional. No hay evidencia de catálogo transaccional dentro de las redes ni de resolución de reclamos en el mismo hilo o mensaje directo. Este patrón no es exclusivo de COTO — Carrefour Argentina muestra el mismo comportamiento de derivación a un centro telefónico; Cencosud sí menciona atención automática de WhatsApp 24/7, aunque sin confirmación pública de que sea conversacional con IA.

### 5.3. La propuesta: extender agentes existentes, no crear agentes nuevos

Siguiendo el principio de no caer en el sesgo de creer que la omnicanalidad exige reemplazar toda la plataforma, esta propuesta **no crea agentes nuevos para redes sociales**: extiende como interfaz adicional los mismos agentes ya descriptos en las secciones 3 y 4.

**Componente 1 — Cerrar el loop de datos entre redes y Comunidad COTO (sin IA).** Vincular la interacción social —clic desde la biografía o un posteo, ingreso vía el canal de WhatsApp— al perfil de Comunidad COTO mediante seguimiento de campañas y, opcionalmente, un inicio de sesión social en el alta de socio. No lleva IA porque es infraestructura de datos, no de decisión: es la base sin la cual cualquier componente de IA en redes carecería de contexto de cliente para personalizar nada. Es la misma lógica de la pérdida de trazabilidad presencial, aplicada a redes sociales. **Se marca explícitamente como propuesta a validar**: no hay research que confirme si esta integración ya existe internamente en COTO.

**Componente 2 — Extender CU-01 y CU-04 a WhatsApp Business conversacional (con IA).** Migrar el actual canal de difusión de "Promos y Descuentos" a WhatsApp Business API con capacidad conversacional, como interfaz adicional del mismo orquestador que ya sirve a CU-01 (sección 5.2 más abajo) y CU-04 — no es un agente nuevo, es el mismo backend con un canal de acceso adicional. Hoy el cliente que interactúa por WhatsApp solo puede recibir mensajes; no puede preguntar "¿qué promoción tengo hoy si pago con TCI?" ni iniciar un reclamo sin cambiar de canal. Hereda el mismo nivel de autonomía de CU-01 (2) y CU-04 (4, hasta $15.000 ARS) — no se propone un nivel de autonomía distinto por el solo hecho de tratarse de un canal nuevo.

**Componente 3 — Triage de redes sociales (con IA, Nivel 1-2).** Un clasificador liviano que lee comentarios y mensajes directos en Instagram, Facebook y X, y los deriva en tres direcciones: resoluble dentro del alcance de CU-04 (ofrece resolución en el mismo canal o deriva a WhatsApp conversacional), requiere atención humana (deriva al equipo de social care con el contexto ya extraído, sin que el cliente tenga que repetir el reclamo desde cero) o alerta de seguridad/fraude (prioriza escalamiento inmediato — patrón ya observado en la cuenta de X de COTO). Este componente no reemplaza la derivación actual al 0800: la hace más inteligente y evita que el cliente tenga que re-explicar su problema en otro canal.

### 5.4. Qué falta validar antes de comprometer inversión acá

Este es, de los seis componentes de este documento, el que más depende de datos que hoy no están confirmados públicamente. Antes de dimensionar un costo o un retorno específico para esta sección, se necesita:

1. Confirmar si existe o no integración interna entre redes sociales y el CRM de Comunidad COTO.
2. El volumen real de reclamos y consultas por redes sociales — hoy no hay ni siquiera un proxy estimado, a diferencia del resto de los procesos relevados en este documento.
3. Si existe o no, hoy, un equipo de "social care" dentro de la organización.

Sin estos tres datos, cualquier cifra de ahorro o de mejora para este componente específico sería inventada. Por esa razón, **este documento no le asigna una palanca de valor propia dentro del caso de ROI** (sección 8) — su valor está incluido, de forma conservadora, dentro de la palanca de automatización de atención al cliente, no como una palanca adicional. Si en el futuro aparecen datos propios de COTO sobre este componente, corresponde reabrir el caso de ROI para evaluar si amerita una palanca independiente.

---

## 6. Segmentación de clientes y acciones en tiempo real

### 6.1. Base de segmentación: RFM, no un modelo nuevo desde cero

Esta propuesta adopta segmentación **RFM (Recencia, Frecuencia, Monto)** como la capa única de segmentación de toda la plataforma — no un modelo adicional ni competidor, para evitar el error clásico de "juntar datos sin una pregunta de negocio clara". Esta misma capa alimenta tanto a CU-05 (campañas, sección 3) como a los tres casos de uso de esta sección: es una única fuente de verdad de segmento por cliente, consumida en dos velocidades distintas — asíncrona para campañas, en tiempo real para lo que sigue.

**Restricción de partida, no un detalle menor**: la calidad de cualquier segmentación depende de qué fracción de transacciones tiene cliente identificado. Con el 35%-45% de transacciones presenciales sin DNI ni carnet (sección 1), el segmento RFM de un cliente que compra mayoritariamente en salón sin identificarse va a estar sistemáticamente subestimado en frecuencia y en monto real. No es un defecto del modelo de segmentación: es un defecto de la captura de datos que lo alimenta. Es, además, la razón de negocio por la que CU-01 importa tanto — cada vez que el agente logra que un cliente use la Tarjeta TCI o consigne su DNI, mejora la calidad del propio dato de segmentación a futuro.

### 6.2. Los tres casos de uso de tiempo real

**CU-01 — Asistente de Promociones y Medio de Pago.** Sugiere en caja, en menos de 800 milisegundos, la combinación óptima de tarjeta, día y descuento disponible para esa transacción puntual (Nivel 2, recomienda — el cliente decide). Resuelve un proceso que hoy corre sobre 12 millones de transacciones mensuales con 5% de tasa de error de medio de pago no óptimo (el cliente paga con un medio que le genera menos beneficio del disponible). Además de optimizar la transacción puntual, es el punto de contacto de mayor volumen de todo el proyecto para incentivar la migración hacia la Tarjeta TCI — la palanca de mayor confianza del caso de ROI (sección 8).

**CU-02 — Planificador de Canasta por Presupuesto.** En Coto Digital, sustituye SKUs o ajusta cantidades para no exceder un presupuesto que el cliente define, con el cliente confirmando la canasta ajustada antes de aplicarla (Nivel 3, latencia menor a 2 segundos). Apunta a reducir el abandono en el armado de listas de compra, un proceso que hoy toma entre 15 y 25 minutos sobre unas 800.000 listas mensuales.

**CU-03 — Asistente de Sustituciones en E-commerce.** Cuando falta stock de un ítem pedido online, sugiere el producto de reemplazo con mayor probabilidad de aceptación, en menos de 500 milisegundos —el requisito de latencia más exigente de los seis casos de uso de este documento—. El usuario de este agente no es el cliente final sino el picker de tienda (Nivel 3, ejecución aprobada por el operador interno). Ataca un proceso de 150.000 pedidos mensuales con 12% de tasa de rechazo de sustituto hoy, con una reducción de cancelaciones estimada en el orden del 25%.

### 6.3. Por qué "tiempo real" es infraestructura, no solo un modelo

Los tres casos de uso comparten un requisito exigente: latencia por debajo del segundo sobre datos que cambian constantemente (stock, promociones vigentes, contexto de la transacción). Esto requiere una arquitectura de streaming de eventos para desacoplar los eventos de caja del procesamiento del agente sin bloquear el checkout, una capa de caché de alta velocidad imprescindible para cumplir los umbrales de latencia de CU-01 y CU-03, y un middleware de integración con el punto de venta — señalado como una de las integraciones técnicas con mayor incertidumbre de todo el proyecto: la latencia real entre el POS y la nube no está medida hoy, solo asumida. Es, justamente, la razón por la que el primero de los tres experimentos de des-arriesgamiento de la sección 8 es una prueba de concepto de esa latencia, antes de comprometer inversión de producción a CU-01 y CU-03.

### 6.4. Gobernanza aplicada a segmentación

El perfilamiento para segmentación RFM requiere el mismo consentimiento explícito del cliente que se exige para campañas (Ley 25.326) — no es un consentimiento distinto, es el mismo consentimiento cubriendo un uso adicional del dato. El dato de "medios de pago habilitados para ese cliente" que necesita CU-01 sale del core bancario de la Tarjeta TCI, dato crítico bajo PCI DSS: el agente no debe procesar ni almacenar el número completo de tarjeta ni el código de seguridad, solo un indicador tokenizado de elegibilidad. Por qué un cliente cae en un segmento y no en otro debe ser auditable, en particular porque el segmento determina qué promoción ve — si dos clientes con comportamiento similar reciben ofertas sistemáticamente distintas sin explicación trazable, hay riesgo de percepción de trato desigual. Y si el dato histórico de quién recibió qué oferta está sesgado (por ejemplo, clientes de sucursales con mejor conectividad identificados con más frecuencia), el modelo de segmentación puede amplificar esa desigualdad en vez de corregirla — se recomienda auditar periódicamente la distribución de ofertas por segmento socioeconómico y geográfico de sucursal, no asumir que el modelo es neutral por defecto.

---

## 7. Técnicas de Big Data y Data Analytics

### 7.1. El problema de fondo

Los datos de COTO están fragmentados en sistemas que no se integran entre sí: el punto de venta presencial, Coto Digital, el core bancario de la Tarjeta TCI, el sistema de gestión de stock y el CRM de Comunidad COTO operan como silos separados. Esta es la causa técnica detrás del problema de negocio central de todo este documento: el 35%-45% de trazabilidad perdida no es solo una cuestión de que el cliente no consigne su DNI, es que incluso el dato que sí se captura en un sistema no está cruzado en tiempo real con los demás.

Esta sección no propone un caso de uso agéntico adicional. Propone la infraestructura, la gobernanza y la disciplina de datos que sostiene a los seis casos de uso ya descriptos en las secciones 3 a 6, organizada según ocho principios de la literatura de la cátedra sobre cómo hacer que el Big Data genere valor real, aplicados punto por punto al caso de COTO.

### 7.2. Ocho principios aplicados a COTO

1. **Hacer las preguntas correctas.** La pregunta de negocio de este proyecto no es "qué patrones muestra el Big Data de COTO", es concreta y medible: ¿cómo recuperamos trazabilidad de cliente en el 35%-45% de transacciones que hoy la pierden, y qué hacemos con ese dato una vez recuperado? Cada uno de los seis casos de uso se diseñó para responder a esa pregunta o a una derivada directa de ella — reducir costo de atención, subir redención de campañas — no porque la tecnología lo permita.

2. **Pensar en chico y en grande a la vez.** No se propone lanzar los seis casos de uso a escala completa desde el día uno. Se definen tres escenarios de volumetría crecientes:

   | Escenario | Usuarios activos mensuales | Interacciones/mes | Costo IA + Cloud mensual |
   |---|---|---|---|
   | Piloto | 15.000 | 180.000 | ~$1.712 USD |
   | Intermedio | 350.000 | 7.875.000 | ~$12.958 USD |
   | Escala COTO | 1.800.000 | 64.800.000 | ~$83.577 USD |

   El roadmap de secuenciación arranca con **CU-01 y CU-04** en el escenario Piloto — los dos casos de uso que combinan mayor frecuencia de uso con reducción inmediata de costo — y recién escala al resto (CU-02, CU-03, CU-05, CU-06) en el escenario Intermedio, una vez validada la integración con el punto de venta (ver sección 8).

3. **No descartar datos "blandos".** Los comentarios y mensajes directos en redes sociales (componente 3 de la sección 5) son la única fuente de "voz del cliente" no transaccional que hoy no se aprovecha en absoluto. Se incluyen explícitamente en el dominio de datos de la plataforma, aunque sea texto libre no estructurado, en vez de descartarlos por no encajar en el modelo relacional del CRM tradicional.

4. **Cruzar fuentes de datos distintas.** Este es, en rigor, el corazón de todo el proyecto: la arquitectura une en un mismo orquestador de agentes datos que hoy están separados — punto de venta presencial, navegación de Coto Digital, core bancario de la Tarjeta TCI, sistema de stock y, con la extensión de la sección 5, interacción social. El problema de fondo que motiva todo este documento es, literalmente, un problema de fuentes de datos que no se cruzan; cruzarlas es la propuesta central, no un paso técnico secundario.

5. **Iterar en loops (observar → orientar → decidir → actuar).** El plan de medición de incrementalidad que se describe en la sección 8.6 —grupo de control permanente y diseño de diferencia en diferencias— es la aplicación directa de este principio: no se lanza una funcionalidad asumiendo que funcionó, se mide contra un grupo control y se reajusta. Los tres experimentos de des-arriesgamiento de la sección 8.5 son loops previos al lanzamiento completo, con el mismo espíritu: observar con evidencia real antes de comprometer el presupuesto completo a un supuesto.

6. **El output tiene que ser usable, no solo matemáticamente correcto.** Por eso la arquitectura incluye una capa completa de observabilidad y guardrails —entre $45 y cerca de $9.720 USD mensuales según el escenario— no como costo accesorio, sino como condición para que el equipo de marketing y los gerentes de sucursal confíen lo suficiente en las recomendaciones del sistema como para usarlas. Un agente que alucina una promoción una sola vez pierde la confianza del equipo que lo opera, no solo la del cliente.

7. **Armar equipos multidisciplinarios.** La estructura de equipo del proyecto (ver sección 8.4) combina ingeniería, ciencia de datos, diseño de experiencia y un analista de negocio de fidelización/retail — no es un equipo compuesto solo por especialistas en datos.

8. **La adopción ES el entregable.** Este es el principio más crítico para este proyecto. La literatura de la cátedra documenta un caso real de un modelo de recomendación de venta cruzada en un call center que fracasó porque los representantes cerraban la sugerencia del sistema: su esquema de comisión premiaba velocidad de llamada, no venta cruzada. El algoritmo era bueno; el incentivo estaba mal alineado. Esta propuesta busca evitar el mismo error en tres puntos concretos: si el equipo de Fonocoto sigue midiéndose por volumen de llamadas y no por calidad de resolución de los casos escalados por CU-04/CU-06, va a tratar esos casos como una interrupción, no como una oportunidad — se recomienda rediseñar ese KPI a "tasa de resolución correcta de casos escalados" antes o junto con el despliegue, no después. El gerente de marketing que aprueba el lote de campañas de CU-05 necesita un incentivo alineado con la calidad de esa aprobación (tasa de redención real contra objetivo), no con la velocidad de aprobar y pasar al siguiente lote. Y el personal de caja que interactúa con CU-01 necesita capacitación explícita, no solo despliegue técnico, porque si desconfía de la recomendación puede ignorarla frente al cliente.

### 7.3. Gobernanza de datos

| Entidad de datos | Sistema de origen | Sensibilidad | Marco regulatorio aplicable |
|---|---|---|---|
| Perfil del cliente | CRM Comunidad COTO | Alta (dato personal) | Ley 25.326 |
| Historial de compras | Mainframe / ERP | Media | Perfilamiento de consumo |
| Maestro de productos (SKUs) | ERP SAP / PIM | Pública | Riesgo de precio desactualizado en respuesta de IA |
| Promociones y reglas | Motor de promociones | Pública | Ley 24.240 (publicidad engañosa por alucinación) |
| Medios de pago y Tarjeta TCI | Core bancario / TCI | **Crítica (PCI)** | PCI DSS, normativa BCRA |
| Stock por sucursal | WMS / Inventarios | Interna | Riesgo de promesa de entrega sin stock real |

### 7.4. Riesgos técnicos, sin venderlos como resueltos

Cinco integraciones técnicas concentran la mayor incertidumbre de todo el proyecto: el middleware con las terminales de punto de venta en caja, el core bancario de la Tarjeta TCI, el sistema de gestión de stock y las terminales de los pickers en Coto Digital, la sincronización bidireccional con el padrón de Comunidad COTO, y la coherencia de precios entre el motor de precios/catálogo y cualquier respuesta de un agente. A esto se suman tres asunciones explícitas que sostienen todo el modelo de costos: una tasa de reutilización de caché de contexto superior al 60% (si no se logra, el consumo de tokens puede escalar hasta 250% por encima del presupuesto), una trayectoria descendente sostenida del precio por token de los modelos de lenguaje, y que el parque de cajas de sucursal puede conectarse vía APIs modernas sin sustituir el hardware POS existente. Ninguna de las tres está validada con datos internos de COTO — son supuestos de partida, y se presentan como tales, no como hechos.

---

## 8. Caso de ROI: por qué es necesario hacerlo, por qué ahora

### 8.1. Cómo se estructura este caso — y qué no lidera el pitch

El modelo financiero de este proyecto arroja, en su escenario base, un valor presente neto de $5,24 millones de USD y un retorno sobre la inversión de 1.505,7% a 36 meses. Es una cifra real dentro del modelo, pero no es el número con el que abrimos esta sección, por tres razones: depende de un escenario base que asume 18% de adopción sobre un padrón de Comunidad COTO que es, a su vez, un supuesto sin validar (sección 1.4); casi un tercio del beneficio anual proyectado corresponde a palancas marcadas de baja confianza (ver 8.2); y un directorio real va a desconfiar de un ROI de cuatro dígitos más rápido de lo que va a confiar en él — presentarlo como número de apertura debilita el caso, no lo fortalece. Por eso este caso lidera con el rango completo de escenarios y el análisis de sensibilidad, y trata el plan de des-arriesgamiento (8.5) como parte central del pitch, no como anexo técnico.

### 8.2. Por qué es necesario hacerlo

**El costo de no hacerlo.** El 35%-45% de las transacciones presenciales pierde trazabilidad de cliente hoy, todos los días que la inversión no se hace, sobre 12 millones de transacciones mensuales. COTO es el único de los dos líderes de participación de mercado sin billetera digital propia: Carrefour ya lanzó su Cuenta Digital (septiembre de 2025, con el objetivo declarado de mover el 20% de sus ventas a la wallet) y Cencosud opera CencoPay desde 2023 con 2% de cashback diario. Mientras tanto, COTO sigue dependiendo de un tercero para pagos digitales en caja, sin capturar esa capa de dato ni de margen financiero. Y el 45% de las ventas se paga con tarjeta de crédito de terceros, con costos de adquirencia de 1,2% a 1,8% más IVA — comisión que sale del grupo económico cada mes, indefinidamente, con o sin proyecto.

**Dónde se genera el valor, ordenado por confianza del dato, no por magnitud** — separando lo que depende de que el cliente cambie de comportamiento (más incierto) de lo que depende de una decisión operativa interna de COTO (más sólido):

| Palanca | Confianza | Depende de |
|---|---|---|
| Automatización de atención al cliente (CU-04/CU-06) | **Muy alta** | Decisión operativa interna — desplegar el agente y redefinir incentivos de soporte |
| Migración a Tarjeta TCI (nudge de medio de pago vía CU-01) | **Alta** | Decisión operativa interna — no requiere que el cliente compre más, solo que pague distinto |
| Incremento en frecuencia de compra | Media | Comportamiento del cliente |
| Aumento del ticket promedio (venta cruzada) | Media | Comportamiento del cliente |
| Reducción de cancelaciones en e-commerce (CU-03) | Media | Comportamiento del cliente (aceptación de sustitutos) |
| Optimización del costo promocional (CU-05) | **Baja** — supuesto sin validar | Comportamiento del cliente + calidad del modelo de propensión |
| Monetización de "retail media" agéntico | **Baja** — supuesto sin validar | Terceros (proveedores pagando por espacio patrocinado) — ni siquiera depende de COTO o del cliente |

El caso más sólido para presentar frente al directorio no es "vamos a vender más" (las tres palancas de comportamiento del cliente, más inciertas): es "vamos a dejar de perder margen que ya generamos" (migración a Tarjeta TCI) y "vamos a gastar menos en resolver lo que ya pasa" (atención automatizada). Las dos últimas palancas —optimización promocional y retail media— no deberían presentarse con cifra propia en esta instancia: son upside, no el caso base.

### 8.3. Por qué ahora

- **Una ventana competitiva concreta y con fecha.** Carrefour lanzó su billetera hace menos de un año y todavía está en fase de adquisición agresiva de usuarios (objetivo declarado: pasar del 10% al 20% de sus ventas pagadas con la wallet). Cencosud lleva más tiempo —desde 2023— corriendo dos mecanismos de fidelización en paralelo. La ventana para que COTO entre a la categoría "billetera de supermercado" sin quedar en tercer lugar sigue abierta, pero se angosta con cada trimestre de demora.
- **El costo de oportunidad de esperar no se recupera.** Cada trimestre sin una plataforma de datos unificada es un trimestre más de historial de compra fragmentado que no se puede reconstruir retroactivamente — el dato perdido en una transacción sin identificar no se recupera después.
- **El activo propio ya está construido.** La Tarjeta TCI ya existe y retiene el 100% del valor dentro del grupo, y Coto Digital ya lidera el e-commerce del sector — esta inversión no parte de cero, capitaliza infraestructura y base de clientes que COTO ya tiene y que la competencia no tiene en la misma escala.

### 8.4. Inversión requerida

| Concepto | Monto |
|---|---|
| CAPEX inicial — equipo del proyecto (6 meses, 12,5 FTE equivalentes) | $469.425 USD |
| OPEX técnico (IA + Cloud), según escala | entre $1.712 y $83.577 USD/mes |
| OPEX recurrente post-lanzamiento (equipo estable, licencias, soporte), año 1 | ~$906.000 USD |

El equipo se organiza bajo un Product Lead y un Architect/Tech Lead, con tres células: backend e integración con el punto de venta, IA y datos, y experiencia y calidad — un equipo multidisciplinario, no solo de especialistas en datos, con un analista de negocio de fidelización/retail dedicado a medio tiempo.

### 8.5. El rango completo, no el número optimista

| Variable | Conservador | Base | Optimista |
|---|---|---|---|
| Tasa de adopción (usuarios activos / padrón Comunidad COTO) | 10,0% | 18,0% | 28,0% |
| Uplift de frecuencia de compra | +2,0% | +4,5% | +7,0% |
| Uplift de ticket promedio | +1,5% | +3,2% | +5,0% |
| Autoservicio en reclamos | 40,0% | 65,0% | 80,0% |
| Tasa de descuento (WACC) | 16,0% | 12,0% | 10,0% |

### 8.6. Análisis de sensibilidad — el argumento central, no el VAN base

En vez de abrir con "el VAN es de $5,24 millones", el argumento central frente al directorio es esta tabla, que muestra qué tan robusto es el caso ante los supuestos que con mayor probabilidad se van a mover:

| Variación sobre el escenario base | Impacto en VAN | Impacto en ROI | Nivel de riesgo |
|---|---|---|---|
| Caso base | $5.241.800 | 1.505,7% | Referencia |
| Costo de IA/Cloud +50% | $4.850.000 | 1.380,0% | **Bajo** — el proyecto resiste bien una sorpresa de costo de infraestructura |
| Caída de adopción −50% en usuarios activos | $2.150.000 | 620,0% | **Medio** — el riesgo real está en marketing y adopción, no en tecnología |
| Uplift de frecuencia −50% | $3.100.000 | 890,0% | **Medio** — requiere validar la propuesta de valor al cliente |
| Devaluación del peso +50% | $3.650.000 | 1.050,0% | **Alto** — riesgo macroeconómico fuera del control del proyecto |
| Falla en integración con el punto de venta (retraso de 3 meses) | $4.200.000 | 1.200,0% | **Alto** — riesgo de ejecución técnica |

El mensaje correcto para el directorio no es "el retorno es altísimo": es que, incluso en el escenario más adverso de todos los que modelamos, el VAN se mantiene positivo y el retorno se mantiene por encima del 600%. Con una salvedad explícita: esto prueba robustez *dentro* del modelo, no contra la realidad — los supuestos de base, en particular la adopción y el tamaño del padrón de Comunidad COTO, todavía no están validados con datos internos de la compañía.

### 8.7. El riesgo principal, nombrado sin rodeos

Un caso de ROI sin un riesgo principal nombrado explícitamente suena poco creíble. El riesgo principal de este proyecto **no es tecnológico ni de costo de infraestructura de IA** — la sensibilidad muestra que ambos son de bajo impacto —: es **adopción**. La caída del uso activo es la única variable de negocio (no macroeconómica ni de ejecución técnica) marcada de riesgo medio o superior, y depende de una cifra de base —el padrón de Comunidad COTO— que todavía no está confirmada por la compañía. Es el riesgo que nombramos como central, no los riesgos técnicos que suelen dominar este tipo de conversación por defecto.

### 8.8. Plan de des-arriesgamiento — fase 0 del proyecto, no nota al pie

Antes de comprometer el CAPEX completo a los supuestos de la sección 8.5, proponemos tres experimentos concretos, de bajo costo relativo, presentados como **fase 0** del proyecto:

1. **Prueba de concepto de latencia entre el punto de venta y la nube.** Mide si una API agéntica responde dentro del umbral de 800 milisegundos que requiere CU-01, desde una terminal real de punto de venta. De esto depende directamente el riesgo "alto" marcado en la sensibilidad como falla de integración con el punto de venta.
2. **Piloto de promociones conversacionales en WhatsApp**, sobre una muestra de 5.000 socios. Mide tasa de conversión e incremento de ticket real, para reemplazar el supuesto de uplift de frecuencia y ticket (hoy basado en proxies de empresas comparables) por un dato propio de COTO, antes de proyectar el escenario base a toda la base de clientes.
3. **Benchmarking de reutilización de caché de contexto** sobre el maestro de SKUs. Valida o corrige el supuesto de costo de IA de la sección 7 antes de comprometerse a la estructura de costos por escenario.

**Plan de medición de incrementalidad — cómo se sabe si funcionó.** Diseño de 90% grupo test (expuesto a las funcionalidades agénticas) contra 10% grupo control permanente, filtrado por segmento RFM, con la fórmula de diferencia en diferencias: `Uplift Neto = (Venta Test, después − Venta Test, antes) − (Venta Control, después − Venta Control, antes)`. El diseño aísla el efecto de campañas bancarias generales que no son mérito del proyecto (comparando test y control que paguen con el mismo medio en la misma sucursal) y controla que el crecimiento de Coto Digital no sea solo migración de compras que el cliente ya hacía en salón — solo cuenta como incremental el valor neto agregado al gasto total del cliente en COTO.

### 8.9. Resumen ejecutivo del caso de ROI

| | Inversión | Retorno esperado | Riesgo principal |
|---|---|---|---|
| CAPEX inicial (equipo, 6 meses) | $469.425 USD | — | Ejecución técnica (integración con el punto de venta) |
| OPEX técnico (IA + Cloud), según escala | $1.712–$83.577 USD/mes | — | Costo de IA — sensibilidad "bajo" |
| Retorno a 36 meses, escenario base y peor caso de sensibilidad | — | VAN entre $2,15M y $5,24M USD; ROI entre ~620% y ~1.506% | **Adopción** — depende del padrón de Comunidad COTO, sin validar |

*Aclaración necesaria sobre esta tabla*: el rango de arriba no es el VAN de los escenarios Conservador/Base/Optimista de la sección 8.5 — esos tres escenarios definen supuestos de entrada, no un VAN calculado para cada uno. El piso de $2,15M corresponde a un stress test univariable sobre el escenario base (caída de adopción del 50%, manteniendo el resto de las variables en su valor base): es el peor caso *dentro* del análisis de sensibilidad, no el resultado del escenario "Conservador" completo. Son dos ejercicios distintos, y no corresponde presentarlos como si fueran el mismo cálculo.

Payback proyectado: mes 9 en el escenario base, mes 14 en el escenario más adverso de la sensibilidad (caída de adopción). Ambos casos mantienen VAN positivo, pero ambos también dependen de supuestos que la fase 0 está diseñada para confirmar o corregir antes de escalar.

---

## 9. Plan de implementación y adopción

### 9.1. Principio rector

Siguiendo el principio de "pensar en chico y en grande a la vez" (sección 7.2) y la lógica de des-arriesgamiento del caso de ROI (sección 8.8), la implementación no se plantea como un único lanzamiento de los seis casos de uso. Se plantea en tres fases secuenciales, cada una con un umbral de decisión (*gate*) antes de habilitar la siguiente, de forma que el compromiso de presupuesto crezca al mismo ritmo que la evidencia real sobre los supuestos más importantes del proyecto.

### 9.2. Fase 0 — Des-arriesgamiento (previa a cualquier compromiso de CAPEX completo)

Los tres experimentos de la sección 8.8 se ejecutan antes de comprometer el CAPEX de $469.425 USD en su totalidad:

| Experimento | Qué valida | Qué decide |
|---|---|---|
| Prueba de concepto de latencia POS-Nube | Si CU-01/CU-03 son viables técnicamente bajo su umbral de latencia | Si se avanza con la integración de punto de venta en caja o se replantea el diseño |
| Piloto de WhatsApp conversacional (5.000 socios) | Uplift real de frecuencia/ticket, reemplazando el proxy de empresas comparables | Si el escenario base de adopción de la sección 8.5 es razonable o debe ajustarse |
| Benchmarking de caché de contexto | Si la tasa de reutilización supera el 60% asumido en el modelo de costos | Si la estructura de costos por escenario de la sección 7.1 se sostiene o debe revisarse al alza |

### 9.3. Fase 1 — Piloto (escenario Piloto de volumetría: 15.000 usuarios activos mensuales)

Arranca con **CU-01 (Asistente de Promociones y Medio de Pago) y CU-04 (Resolutor de Reclamos)** — los dos casos de uso que combinan mayor frecuencia de uso con reducción de costo más inmediata y menor dependencia de integraciones inciertas. En paralelo, arranca el componente de validación de datos en el alta de Comunidad COTO (sección 3.2), por ser el de menor riesgo de todo el proyecto.

- OPEX técnico estimado: ~$1.712 USD/mes (IA + Cloud).
- Corre bajo el plan de medición de incrementalidad de la sección 8.8 (90/10, diferencia en diferencias) desde el primer día, no como agregado posterior.
- Umbral de avance a Fase 2: señal de uplift neto positivo y estadísticamente distinguible del grupo control, más resultados favorables de los tres experimentos de Fase 0.

### 9.4. Fase 2 — Intermedio (350.000 usuarios activos mensuales)

Se habilita el resto de los casos de uso: **CU-02 y CU-03** (segmentación en tiempo real de e-commerce), **CU-05** (campañas) y **CU-06** (asistente conversacional de Tarjeta TCI, condicionado a la prueba de concepto de integración con el core bancario). Es también el punto en el que correspondería evaluar, con datos propios ya recogidos en Fase 1, si abrir la extensión a redes sociales de la sección 5 como componente con presupuesto propio.

- OPEX técnico estimado: ~$12.958 USD/mes.
- Punto de decisión sobre observabilidad y guardrails a escala (sección 7.2, principio 6): a este volumen, la capa de auditoría deja de ser opcional.

### 9.5. Fase 3 — Escala COTO (1.800.000 usuarios activos mensuales)

Despliegue a la base completa de Comunidad COTO que el proyecto está en condiciones de servir, con el equipo estable de soporte y evolución post-lanzamiento (OPEX recurrente ~$906.000 USD el primer año, creciendo a ~$1,63M hacia el año 3, según la proyección de mantenimiento a 36 meses).

### 9.6. Gestión del cambio y adopción interna — no es un ítem aparte

Como se desarrolló en la sección 7.2 (principio 8), la adopción interna es tan parte del alcance de este proyecto como la tecnología. Concretamente:

- **Antes o junto con el despliegue de CU-04/CU-06**, rediseñar el KPI del equipo de Fonocoto de "volumen de llamadas atendidas" a "tasa de resolución correcta de casos escalados".
- **Antes del primer lote de CU-05**, definir el incentivo del gerente de marketing que aprueba las campañas en torno a la calidad de esa aprobación (tasa de redención real contra objetivo), no a la velocidad de aprobación.
- **Antes del despliegue de CU-01 en caja**, capacitación explícita al personal de sucursal — no solo documentación técnica — porque la adopción de una recomendación en el punto de venta depende de que el cajero confíe en ella frente al cliente.

### 9.7. Lo que este documento no puede diseñar todavía

Con el research y los planes disponibles hasta la fecha, hay un punto de la gestión del cambio que **no está desarrollado en ningún plan ni research de este proyecto** y que señalamos en vez de inventar: no existe todavía un diseño detallado de **quién es el dueño organizacional de cada rediseño de incentivos** (Fonocoto, el equipo de marketing, el personal de sucursal), con qué cronograma puntual dentro de cada fase, ni cómo se mide el éxito de la adopción interna más allá de las métricas de negocio del caso de ROI (por ejemplo, una encuesta de confianza del personal de sucursal en las recomendaciones del sistema, o un tablero de adopción interna por rol). Antes de convertir la sección 9.6 en un plan de gestión del cambio ejecutable, correspondería que `tp-solution-architect` diseñe ese componente específico con research adicional (por ejemplo, sobre la estructura organizacional real de Fonocoto y del equipo de marketing de COTO) — este documento no lo inventa.

---

## 10. Cierre

COTO no necesita entrar al retail digital: ya lo lidera. Lo que este proyecto propone es cerrar la brecha de datos que, hoy, hace que ese liderazgo no se traduzca en conocimiento del cliente ni en retención de margen financiero — y hacerlo antes de que la ventana competitiva frente a Carrefour y Cencosud siga cerrándose. La propuesta no pide al directorio que confíe en un número de retorno extraordinario: pide autorizar una fase 0 de bajo costo y alta información, diseñada específicamente para reemplazar los supuestos más importantes de este caso —empezando por el tamaño real del padrón de Comunidad COTO— por evidencia propia de COTO, antes de comprometer el resto de la inversión.

---

### Notas

¹ Los datos de participación de mercado, dimensión de la industria y volumetría de transacciones de este documento provienen de una combinación de fuentes públicas (INDEC, cámaras del sector, comunicación institucional de COTO y de sus competidores) y de estimaciones calculadas por el equipo cuando no había una cifra pública exacta disponible — el research que sostiene este documento clasifica cada dato según su nivel de certeza (dato medido, estimación calculada, proxy de empresa comparable, o supuesto pendiente de validación) y esa clasificación se preserva en las secciones donde el nivel de certeza es relevante para la decisión del directorio (en particular, la sección 8 sobre ROI y la referencia al padrón de Comunidad COTO en las secciones 1.4, 8.2 y 8.6). Los datos de arquitectura, costos de nube y de modelos de lenguaje reflejan precios vigentes al momento del research y no fueron re-verificados contra las páginas oficiales de cada proveedor.
