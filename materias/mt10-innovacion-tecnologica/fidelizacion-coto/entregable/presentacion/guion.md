# Guion de presentación — Plataforma de fidelización COTO

**Formato confirmado** (`consignas/mt10-fidelizacion-coto.md`): 10 minutos,
ante CFO / CEO / CMO ("el directorio" del programa oficial concretado en
esos tres roles), equipo de 4 a 6 personas, defensa tipo role play.

**Fuente única de contenido**: `entregable/plan-de-negocios.md` (10
secciones). Este guion no agrega ningún dato, cifra o afirmación que no
esté ya en ese documento — solo lo prioriza, lo recorta a 10 minutos y lo
convierte en algo hablable.

---

## 0. Cómo se decidió el orden (léelo antes de repartir el guion)

La consigna define tres roles de audiencia con intereses distintos, y un
pitch lineal por secciones del documento (1→10) no les habla a los tres por
igual:

- **CFO**: quiere riesgo y retorno pronto, no al final — pero el propio
  documento (sección 8.1) advierte que abrir con el VAN/ROI optimista
  "debilita el caso, no lo fortalece". Se resuelve dándole el bloque de ROI
  **temprano** (minuto 4:45, no al cierre) pero **en el mismo orden interno
  que ya usa la sección 8**: costo de no hacerlo → por qué ahora → rango de
  escenarios → riesgo principal → plan de des-arriesgamiento. Nunca se abre
  con "$5,24M / 1.505,7%".
- **CMO**: quiere ver la experiencia de cliente concreta, no una lista de
  seis casos de uso con nombres técnicos (CU-01 a CU-06). Se resuelve
  narrando la propuesta como un recorrido de cliente real (caja → reclamo →
  campaña → e-commerce → WhatsApp), sin leer la tabla de la sección 2.
- **CEO**: quiere la estrategia y el "por qué ahora" competitivo. Se
  resuelve poniendo el panorama competitivo (Carrefour, Cencosud) en los
  primeros 105 segundos, no enterrado en la sección 8.3.

**Disclosure progresivo aplicado**: los primeros 105 segundos ya contienen
el problema de negocio (pérdida de trazabilidad) y la brecha competitiva
(único líder sin billetera propia) — no son solo contexto de industria. El
contexto puro (participación de mercado, tamaño de COTO) se dice en una
frase, no en un minuto.

---

## 1. Minutado (10:00 total)

| # | Tiempo | Duración | Bloque | Fuente en el documento |
|---|---|---|---|---|
| 1 | 0:00–1:00 | 1:00 | Apertura + el problema | Resumen ejecutivo, 1.1–1.2 |
| 1b | 1:00–2:30 | 1:30 | Customer Journey — AS-IS y TO-BE | CJM (AS-IS/TO-BE) |
| 2 | 2:30–3:15 | 0:45 | Por qué ahora / panorama competitivo | 1.3, 1.4, 8.3 |
| 3 | 3:15–4:00 | 0:45 | La propuesta — recorrido de cliente + omnicanalidad | 2, 3.3, 4.3–4.4, 5.3, 6.2 |
| 4 | 4:00–4:45 | 0:45 | Lo que lo hace posible: Big Data & Data Analytics + segmentación RFM | 6.1, 6.3, 7.1–7.2 |
| 5 | 4:45–7:45 | 3:00 | Caso de ROI | 8.1–8.8 |
| 6 | 7:45–9:15 | 1:30 | Plan de implementación y adopción | 9.1–9.6 (+ hueco 9.7) |
| 7 | 9:15–10:00 | 0:45 | Cierre | 10 |

Margen: ninguno explícito — 10:00 es el límite duro de la consigna. Si el
equipo necesita colchón, recortar primero el bloque 4 (es el más
comprimible) antes que el bloque 5 (ROI) o el 3 (experiencia de cliente).

---

## 2. Guion detallado por bloque

### Bloque 1 — Apertura + el problema (0:00–1:00) · **Voz 1**

**Diapositiva 1 — Título**: "Plataforma de fidelización COTO" + nombres del
equipo. El slide incluye un **QR en la esquina inferior derecha** que lleva
al prototipo de CotoPay en vivo — la audiencia puede escanearlo cuando
quiera para explorar la app en su celular.

**Diapositiva 2 — El problema en una imagen**: cifra grande, `35%–45%` +
"de las transacciones presenciales pierden trazabilidad de cliente" sobre
`12 millones de transacciones mensuales`.

Guion hablado:
- COTO lidera el mercado de supermercados (22,3%) y lidera, sin discusión,
  el e-commerce del sector con Coto Digital. No venimos a proponer que COTO
  entre al retail digital — ya lo lidera.
- El problema es otro: entre 35% y 45% de las transacciones presenciales se
  cierran sin que el cliente consigne su DNI o su carnet de Comunidad COTO.
  Ese cliente queda invisible para cualquier segmentación, campaña o
  atención personalizada — sobre 12 millones de transacciones al mes.
  Hay dos perfiles de cliente afectados: el **registrado** —que tiene
  Comunidad COTO o Tarjeta TCI activa— y el **casual**, que no dejó
  ningún dato en el sistema.
- No es un problema de tecnología de punta. Es un problema de identificación
  del cliente en el momento de la transacción, y es la restricción de la que
  parte todo lo demás en esta presentación.

### Bloque 1b — Customer Journey: AS-IS y TO-BE (1:00–2:30) · **Voz 2**

**Dos slides — AS-IS + TO-BE** (ocho etapas en AS-IS, nueve en TO-BE con el
paso 0 de bienvenida). El orador no las lee una por una: las presenta como
un arco narrativo en dos actos.

**Acto 1 — AS-IS (0:45)**

"Sigamos al cliente desde que decide ir a COTO hasta que vuelve a comprar."

- El recorrido arranca con el trigger: una oferta masiva de baja relevancia —
  tasa de redención del 3%.
- El primer momento crítico es la caja: entre el 35% y el 45% de los 12
  millones de tickets mensuales se cierran sin identificar al cliente.
- El segundo momento crítico es el reclamo: entre 8 y 15 minutos de espera,
  USD 3,50 por ticket, el cliente tiene que repetir su problema desde cero.
- Imagen de cierre del acto: "El flywheel de datos no puede girar porque el
  35–45% del dato falta en cada vuelta."

**Acto 2 — TO-BE (0:45)**

"Con CotoPay, el mismo recorrido se convierte en un ciclo que aprende."

- **Paso 0, antes del trigger**: alta simple con un beneficio inmediato de
  bienvenida — el primer incentivo que empuja la descarga y el registro,
  antes de que exista cualquier historial de compra para personalizar nada.
- El trigger es personalizado: de 3% a 12% de redención proyectada — solo
  COTO tiene dato de góndola para construir esa oferta.
- La caja: un tap, 100% identificado, comisión propia.
- El reclamo: resuelto en la app sin repetir el problema, USD 0,40 por ticket.
- La recompra: el dato de esa compra alimenta la próxima oferta. El flywheel
  gira.

**Momentos de verdad a nombrar explícito:**
- **Etapa 3 (caja)**: "El momento de mayor volumen es el momento de mayor
  pérdida de dato en el AS-IS — y el momento de mayor captura en el TO-BE."
- **Etapa 8 (recompra)**: "La recompra es la prueba de que el flywheel
  funcionó al menos una vez."

*(Tabla de métricas — para Q&A, no leer en el pitch):*

| Dimensión | AS-IS | TO-BE |
|---|---|---|
| Trazabilidad en caja | 55–65% | ~100% |
| Redención de cupones | 3% | 12% proyectado |
| Costo reclamo/ticket | USD 3,50 | USD 0,40 |
| Tiempo de reclamo | 8–15 min | Automático hasta $15.000 ARS |
| Autoservicio reclamos | ~0% digital | 65% proyectado |

### Bloque 2 — Por qué ahora / panorama competitivo (2:30–3:15) · **Voz 1** (continúa)

**Diapositiva 3 — Tabla comparativa reducida**: solo 3 filas (COTO,
Carrefour, Cencosud) × columna "¿billetera digital propia?" — no la tabla
completa de 6 competidores del documento (esa queda de backup).

Guion hablado:
- De los dos líderes de participación de mercado, COTO es el único sin
  billetera digital propia: paga a un tercero, Mercado Pago, por los pagos
  digitales en caja.
- Carrefour lanzó su Cuenta Digital hace menos de un año y ya está en fase
  agresiva de adquisición de usuarios. Cencosud opera CencoPay desde 2023.
- La ventana para que COTO entre a esta categoría sin quedar en tercer
  lugar sigue abierta — pero se angosta cada trimestre. Y el dato que se
  pierde hoy, en una transacción sin identificar, no se recupera después.
- La adopción de billeteras en supermercados ya es 11,1% del volumen
  (INDEC, 2024) y las curvas de adopción QR proyectan 35–40% para 2026.
  No es tendencia emergente: es sustitución en curso. Dos referentes de
  finanzas embebidas en ecosistemas propios validan el modelo: **Shellbox
  (YPF)** y **FarmaPay** — la analogía directa con lo que sería CotoPay
  para la red COTO.

### Bloque 3 — La propuesta, como experiencia de cliente + omnicanalidad (3:15–4:00) · **Voz 2** (y **Voz 3** si el equipo es de 6)

**Nota de compresión**: este bloque se redujo a 0:45 (era 2:15) porque el
Customer Journey del Bloque 1b ya cubrió la capa experiencial del recorrido.
En estos 0:45 se prioriza el ancla de los tres pilares + 2 a 3 puntos del
recorrido; el resto queda disponible para Q&A o para profundizar en la
defensa oral.

**No leer la tabla de casos de uso (CU-01 a CU-06) de la sección 2.** Narrar
como recorrido de cliente. Sugerencia de diapositivas: una por momento del
recorrido (4 a 5 diapositivas cortas). El slide de redes/WhatsApp lleva el
título "Redes sociales y WhatsApp: omnicanalidad con el mismo agente" —
usar ese encuadre al hablar del punto 5.

**Antes de arrancar el recorrido, anclar los tres pilares en orden** (15s):
la propuesta tiene tres capas que se construyen en secuencia:
**fidelización** del cliente como base, **beneficios personalizados** que
se construyen sobre el historial de compra, y el **medio de pago embebido**
que integra todo en el momento de la transacción. El recorrido que sigue
muestra cómo se vive en la práctica.

Guion hablado (recorrido):
1. **En caja**: en menos de 800 milisegundos, el sistema sugiere la
   combinación óptima de tarjeta, día y descuento — el cliente decide, el
   sistema recomienda. Cada vez que ese momento empuja el uso de la Tarjeta
   TCI, además de mejorar la transacción puntual, mejora la calidad del
   dato de cliente a futuro.
2. **Si hay un reclamo posventa**: hoy tarda entre 8 y 15 minutos. La
   propuesta resuelve los casos rutinarios de forma automática, con un tope
   de $15.000 ARS — por encima de ese monto, o si hay duda, escala a una
   persona, con todo el contexto ya recopilado (el cliente no repite su
   reclamo desde cero).
3. **Las campañas**: en vez de una oferta genérica, un agente arma la
   combinación de oferta, segmento y canal para cada cliente — pero un
   gerente de marketing aprueba el lote antes de salir. No es autonomía
   plena: es velocidad con supervisión.
4. **En Coto Digital**: el cliente arma su lista de compras dentro de un
   presupuesto que él mismo define, y si falta stock, el sistema sugiere el
   sustituto con mayor probabilidad de aceptación en menos de 500 ms.
5. **En redes sociales y WhatsApp — omnicanalidad con el mismo agente**: hoy
   WhatsApp es un canal de difusión unidireccional y un reclamo iniciado en
   redes se deriva al 0800; el cliente tiene que repetirlo desde cero en
   otro canal. La propuesta no crea agentes nuevos: extiende los mismos
   agentes de atención y promociones como interfaz adicional, con el mismo
   contexto en cualquier punto de contacto — eso es omnicanalidad. **No le
   asignamos un número de retorno propio a este componente** — todavía
   faltan datos públicos (volumen real de reclamos por redes, integración
   interna) para hacerlo con responsabilidad.

### Bloque 4 — Lo que lo hace posible: Big Data & Data Analytics (4:00–4:45) · **Voz 3**

**Diapositiva — un solo diagrama**: los cinco sistemas hoy separados (POS,
Coto Digital, core TCI, stock, redes) convergiendo en "un orquestador de
agentes + una capa de Big Data para segmentación RFM y Data Analytics en
tiempo real". Nada de arquitectura técnica detallada — la audiencia es de
negocio, no de tecnología.

Guion hablado:
- Todo lo anterior corre sobre una sola capa de segmentación (RFM:
  recencia, frecuencia, monto) y una sola plataforma de datos — no seis
  proyectos de IA sueltos. A esto se suma una capacidad propia clave:
  **procesamiento de tarjetas propio**, que permite capturar el dato de
  cada transacción dentro del ecosistema COTO sin depender de la lectura
  de un tercero. Es la respuesta directa al problema del bloque 1: el dato
  no se pierde porque falte tecnología, se pierde porque las fuentes no se
  cruzan.
- Esto no se lanza de una sola vez a toda la base: arranca en un piloto de
  15.000 usuarios y escala en dos pasos más — lo retomamos en el plan de
  implementación.

### Bloque 5 — Caso de ROI (4:45–7:45) · **Voz 4** (dividir en 2 voces si el equipo es de 6: Voz 4 para 5a-5b, Voz 5 para 5c-5e)

**Regla dura de este bloque**: seguir el orden de la sección 8.1 del
documento. La primera cifra grande en pantalla **no** es el VAN ni el ROI.

**5a — Costo de no hacerlo (4:45–5:30, 0:45)**
- Cada mes sin esto es un mes más de dato de cliente que se genera y se
  pierde, sobre 12 millones de transacciones. El 45% de las ventas se paga
  hoy con tarjeta de un tercero, con una comisión de 0,6% promedio que
  sale del grupo económico cada mes, con o sin proyecto. A eso se suma que
  COTO financia el 100% de las campañas emisoras vía MP/MODO sin retener
  ningún dato del cliente para uso propio.

**5b — Por qué ahora (5:30–6:00, 0:30)**
- Retoma el bloque 2 en una frase: la ventana frente a Carrefour y Cencosud
  se angosta cada trimestre, y el activo para capturarla —la Tarjeta TCI—
  ya existe.

**Diapositiva — rango de escenarios**: tabla conservador/base/optimista
(sección 8.5) o directamente la tabla de sensibilidad (8.6) — priorizar
esta última si hay que elegir solo una, porque es "el argumento central,
no el VAN base" según el propio documento.

**5c — El rango, no el número optimista (6:00–6:45, 0:45)**
- No trabajamos con un solo número. Trabajamos con un rango: en el
  escenario base, VAN **a definir con modelo actualizado** y ROI a **24
  meses**. Pero el argumento que importa acá no es esa cifra — es que
  **incluso en el escenario más adverso que modelamos** (caída de 50% en
  adopción), el VAN se mantiene positivo, con un ROI sustancial.
- (Nota interna, no leer en voz alta salvo que pregunten: los escenarios
  de sensibilidad se recalcularán con el modelo actualizado a 24 meses —
  los pisos de cada escenario quedan a definir con ese modelo; la
  estructura del argumento no cambia, sección 8.9 del documento.)

**5d — El riesgo principal, sin rodeos (6:45–7:15, 0:30)**
- El riesgo principal no es tecnológico ni de costo de infraestructura de
  IA — la sensibilidad muestra que ambos pesan poco. El riesgo es
  **adopción**, y depende de una cifra que todavía no está validada por la
  compañía: el tamaño real del padrón de Comunidad COTO.

**5e — Plan de des-arriesgamiento (7:15–7:45, 0:30)**
- Por eso no pedimos autorizar el CAPEX completo hoy. El CAPEX total del
  proyecto es **USD 500.000** — pedimos autorizar una fase 0: tres
  experimentos de bajo costo — una prueba de latencia en el punto de
  venta, un piloto de WhatsApp con 5.000 socios, y un benchmarking de
  costo de IA — diseñados específicamente para reemplazar los supuestos
  más importantes de este caso por evidencia propia de COTO. Desde la
  Fase 2, el OPEX incorpora USD 100.000 adicionales de escala. La palanca
  de financiamiento parcial: un 20% de conversión de clientes de MP a
  CotoPay ya genera ahorro de comisiones que fondea parcialmente el OPEX
  de la siguiente fase.

### Bloque 6 — Plan de implementación y adopción (7:45–9:15) · **Voz 5** (o Voz 4 si el equipo es de 4-5)

**Diapositiva — línea de tiempo de 3 fases con gates**: Fase 0 (des-arriesgamiento) → Fase 1 (piloto, 15.000 usuarios, CU-01 + CU-04) → Fase 2 (intermedio, 350.000) → Fase 3 (escala, 1.800.000). Cada flecha entre fases marcada con el gate correspondiente.

Guion hablado:
- Arrancamos con los dos casos de uso de mayor confianza y menor
  dependencia de integraciones inciertas: la recomendación en caja y la
  resolución automática de reclamos. Recién en la siguiente fase se suman
  campañas, e-commerce y el asistente de la Tarjeta TCI.
- Esto no es solo tecnología. Tres cambios de gestión tienen que pasar
  junto con el despliegue, no después: redefinir cómo se mide al equipo de
  Fonocoto (de volumen de llamadas a calidad de resolución), redefinir el
  incentivo del gerente que aprueba campañas, y capacitar al personal de
  caja — porque la adopción de una recomendación depende de que la persona
  que la ve confíe en ella.
- **Con transparencia**: todavía no tenemos diseñado el detalle de quién es
  el dueño de cada uno de esos rediseños de incentivo puertas adentro de
  COTO, ni el cronograma exacto dentro de cada fase. Es el siguiente paso
  de trabajo si el directorio da luz verde a la fase 0, y necesita
  información interna de la estructura organizacional de COTO que hoy no
  tenemos.

### Bloque 7 — Cierre (9:15–10:00) · **Voz 1** (cierra quien abrió)

#### Evolutivos del producto — visión de escala (9:15–9:45, 0:30–0:45)

Antes de la frase de cierre, 30–45 segundos de visión estratégica a mediano
plazo — se dice rápido, como horizonte que muestra profundidad del negocio
sin comprometer el scope del piloto. No son parte del plan financiero de
lanzamiento: son la razón de fondo por la que el dato que se genera desde
la Fase 1 tiene valor más allá de la comisión ahorrada. Si el pitch va
ajustado de tiempo, comprimir a 20 segundos con solo la frase ancla; el
colchón alternativo sin tocar Bloque 5 ni Bloque 3 es Bloque 4, el más
comprimible del minutado.

Guion hablado de los evolutivos (casi textual):

> "Una vez que el flywheel de datos esté girando — y eso es lo que
> construimos en las tres fases — dos evolutivos naturales se habilitan:
> primero, **micropréstamos para consumo dentro de COTO**, instrumentados a
> través de TCI, la unidad financiera del holding que ya existe. El historial
> de compra real de CotoPay es una señal crediticia mejor que cualquier score
> bancario para predecir si este cliente va a repagar un préstamo de consumo
> en el mismo supermercado donde lo originó. Segundo, **hiperpersonalización
> de la oferta a nivel de ítem**: pasar de segmentar por RFM a modelos que
> saben exactamente qué descuento acepta este cliente, en esta categoría, en
> esta visita — y vender esa capacidad de targeting a las marcas proveedoras
> como retail media de alta precisión. Estos dos evolutivos no son el scope
> del piloto, pero son la razón por la que el dato que generamos hoy vale
> mucho más que la comisión que ahorramos."

**Qué no decir**: cifras de retorno o proyecciones de estos evolutivos —
no hay números validados. Se presenta como visión estratégica fundamentada
en la lógica del negocio, no como plan.

**Nota de contenido** (para quien lo dice y para preguntas posibles de la
defensa oral):
- **Micropréstamos vía TCI**: TCI (Tarjeta COTO Identificada) ya opera como
  unidad financiera del holding — no requiere licencia bancaria nueva. El
  dato de compra real de CotoPay es mejor señal crediticia para consumo en
  supermercados que el score de un banco que solo ve el movimiento de dinero.
  El crédito es captive (solo para consumo dentro de COTO): reduce riesgo de
  incobrabilidad y aumenta el ticket. Si preguntan por regulación: TCI ya
  opera en ese marco; escalar el volumen de originaciones requiere capacidad
  regulatoria que se construye con datos de CotoPay, no antes.
- **Hiperpersonalización**: pasar de segmentación RFM (Fases 1-2) a modelos
  de ML a nivel de ítem, visita y canal. El dato de compra ítem a ítem es el
  activo que ningún competidor de pagos (MP, MODO, Ualá) puede tener — solo
  COTO lo genera. La Fase 3 del roadmap ya menciona retail media; este
  evolutivo es la versión a escala de esa palanca sobre un volumen mayor de
  datos históricos acumulados.

#### Cierre (9:45–10:00)

Guion hablado:
- COTO no necesita entrar al retail digital: ya lo lidera. Lo que
  proponemos es cerrar la brecha de datos que hoy impide que ese liderazgo
  se traduzca en conocimiento del cliente y en retención de margen
  financiero — antes de que la ventana frente a Carrefour y Cencosud se
  siga cerrando.
- No les pedimos que confíen en un número de retorno extraordinario. Les
  pedimos que autoricen una fase 0, de bajo costo y alta información,
  diseñada para reemplazar los supuestos más importantes de este caso
  —empezando por el tamaño real del padrón de Comunidad COTO— por evidencia
  propia de COTO.

---

## 3. Reparto sugerido (ajustar según tamaño real del equipo, 4 a 6)

| Voz | Bloques a cargo | Si el equipo es de 4 |
|---|---|---|
| Voz 1 | Bloque 1, 2 y 7 (abre y cierra) | igual |
| Voz 2 | Bloque 1b (Customer Journey) y Bloque 3 (propuesta) | absorbe también Bloque 4 |
| Voz 3 | Bloque 4 (segmentación + Big Data) | se funde con Voz 2 |
| Voz 4 | Bloque 5a–5c (ROI: costo/por qué ahora/rango) | absorbe también 5d–5e |
| Voz 5 | Bloque 5d–5e (riesgo + des-arriesgamiento) | se funde con Voz 4 |
| Voz 6 | Bloque 6 (implementación y adopción) | pasa a Voz 4 o Voz 1 |

Con 6 personas: cada una tiene un bloque propio salvo Voz 1 (abre y
cierra). Con 4 personas: Voz 1 (contexto+cierre), Voz 2 (propuesta +
infraestructura), Voz 3 (ROI completo), Voz 4 (implementación). El bloque
de ROI (5) es el que más conviene mantener con una sola voz continua aunque
el equipo sea grande, para no cortar el argumento costo→por qué ahora→
rango→riesgo→plan a mitad de frase.

---

## 4. Momentos de riesgo de la defensa oral (preparar, no leer en el pitch)

Preguntas más probables por rol, con respuesta corta ya anclada en el
documento — para que quien responda no improvise un dato nuevo.

**CFO**

1. *"¿De dónde sale el padrón de 3,5 a 6,5 millones de socios de Comunidad
   COTO?"* → Es un supuesto pendiente de validación con información interna
   de la compañía, no un dato confirmado (nota de honestidad, sección 1.4).
   Por eso la fase 0 empieza por ahí: el piloto de 15.000 usuarios y el
   análisis de sensibilidad ya muestran que el caso sostiene VAN positivo
   incluso si la adopción cae 50% — pero la cifra real del padrón es el
   primer insumo que necesitamos de COTO antes de comprometer el
   presupuesto completo.
2. *"¿Por qué no lideraron con el ROI de 1.505,7%?"* → Porque depende de un
   escenario base que asume 18% de adopción sobre un padrón sin validar, y
   casi un tercio del beneficio anual proyectado viene de palancas de baja
   confianza (optimización promocional, retail media). Un directorio real
   desconfía de un ROI de cuatro dígitos más rápido de lo que confía en él
   — preferimos mostrar que el caso se sostiene incluso en el peor
   escenario que modelamos (sección 8.1).
3. *"¿Qué pasa si la integración con el punto de venta se demora?"* → Es uno
   de los dos riesgos marcados "alto" en la sensibilidad: un retraso de 3
   meses baja el VAN a $4,2M, pero se mantiene positivo. Por eso el primer
   experimento de la fase 0 es exactamente una prueba de concepto de esa
   latencia, antes de comprometer el CAPEX completo.

**CEO**

4. *"¿Por qué no lanzar los seis casos de uso juntos?"* → Roadmap
   secuenciado en tres fases con gates de decisión — arranca con los dos
   casos de uso de mayor confianza y menor dependencia de integraciones
   inciertas (recomendación en caja y reclamos), y recién escala al resto
   una vez validada la integración con el punto de venta (sección 9).
5. *"¿Por qué Tarjeta TCI y no seguir con Mercado Pago?"* → Mercado Pago es
   un tercero: cada pago digital vía MP no deja dato propio ni retiene
   margen financiero dentro del grupo. La Tarjeta TCI ya existe, retiene
   100% del valor dentro de COTO, y es la base natural para construir
   trazabilidad — no hay que construir nada desde cero (sección 1.3, 8.3).
6. *"¿Cuán confiables son las cifras de mercado que usaron?"* → Combinan
   fuentes públicas (INDEC, cámaras del sector, comunicación institucional)
   y estimaciones propias del equipo cuando no había cifra exacta
   disponible; el research clasifica cada dato por nivel de certeza y esa
   clasificación se preserva en el documento, en particular en la sección
   de ROI (nota final del documento).

**CMO**

7. *"¿Cuál es el ROI específico del componente de redes sociales?"* → El
   documento no le asigna una palanca de ROI propia, a propósito: faltan
   datos públicos sobre volumen real de reclamos por redes sociales y sobre
   si ya existe integración interna con el CRM o un equipo de social care.
   Su valor está incluido, de forma conservadora, dentro de la palanca de
   atención al cliente — no inflado como línea aparte (sección 5.4).
8. *"¿Quién es responsable puertas adentro de que el personal de sucursal y
   de Fonocoto realmente adopten esto?"* → Es un hueco que el documento
   señala explícitamente, no lo resuelve todavía (sección 9.7): falta
   definir el dueño organizacional de cada rediseño de incentivo, el
   cronograma dentro de cada fase, y cómo se mide la adopción interna más
   allá de las métricas de negocio. Es investigación adicional que
   corresponde hacer si el directorio aprueba avanzar.

**Riesgos estructurales — respuesta corta para la defensa**

Tres riesgos de fondo que el directorio puede plantear. Las respuestas
son cortas a propósito: 20–30 segundos, sin improvisar datos nuevos.

**Riesgo 1 — Reacción competitiva**
*"MP/MODO bajan su costo para COTO — pierden diferencial y market share
antes de llegar a masa crítica."*
→ El plan contempla un escenario dinámico. El moat no está solo en el
precio sino en el historial de compra acumulado — una base de datos de
comportamiento que MP/MODO no tienen porque solo ven el movimiento de
dinero, no la canasta. Ese historial es el activo que COTO empieza a
construir desde el día 1 y que no se puede replicar instantáneamente
aunque la competencia baje el costo.

**Riesgo 2 — Gestión de producto financiero**
*"COTO no tiene experiencia operando un instrumento financiero regulado —
riesgo en compliance y atención al cliente."*
→ Se mitiga con un partnership PSP/BaaS que trae el know-how regulatorio.
COTO opera la relación comercial, no la infraestructura bancaria. El socio
tecnológico es el responsable regulado — COTO no necesita licencia bancaria
para operar el modelo de este plan.

**Riesgo 3 — Agresividad asimétrica**
*"La competencia no va a reaccionar igual sino que va a cambiar las
reglas del juego."*
→ El roadmap por fases con gates de decisión explícitos está diseñado
exactamente para esto: cada gate es un punto de pivote. El compromiso de
hoy es solo la Fase 0 — exactamente el nivel de decisión que genera la
información necesaria para ver cómo empieza a reaccionar el mercado antes
de escalar.

---

## 5. Nota de diseño visual

`design-system/tokens/` tiene una primera pasada (tipografía Inter Tight,
escala de peso, radios 4/8/16px, fondo no blanco puro / texto no negro
puro) extraída de un sitio de referencia (awwwards.com), pensada para
mantener consistencia entre presentaciones de distintas materias. Es
utilizable tal cual para tipografía, spacing y radios.

**Una decisión queda abierta y el propio `tokens.md` la señala**: el acento
naranja-coral (`#FA5D29`) que ese sistema usa como color de acción viene de
un sitio de diseño/showcase — el propio archivo dice textualmente "puede no
encajar con el tono de una presentación de negocios/CFO; evaluar un acento
propio". No se resuelve en este guion (no es una decisión de contenido, es
de identidad visual) — el equipo debería decidir un acento propio antes de
maquetar las diapositivas, o confirmar que el naranja-coral funciona para
este contexto. No hay un color de marca de COTO ya definido en este
repositorio para reemplazarlo — si el equipo quiere usar el verde/rojo de
identidad de COTO, es una decisión a tomar aparte, no algo que este guion
pueda asumir sin fuente.

No hay componentes de "card" o "gráfico" ya definidos en
`design-system/components/` más allá del patrón de botón — las
visualizaciones de datos sugeridas en este guion (tabla comparativa
reducida, diagrama de convergencia de sistemas, línea de tiempo de fases,
tabla de sensibilidad) quedan a criterio de quien maquete, siguiendo
tipografía/color/radios del design-system pero sin un componente de
gráfico predefinido que copiar.
