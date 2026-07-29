# Marco teórico: CRM, Omnicanalidad, Data Analytics e IA

Frameworks y datos extraídos de la bibliografía de la cátedra, organizados por
sección del checklist obligatorio del TP (ver `CLAUDE.md`). Cada bloque cita su
fuente exacta — nada de esto es dato de COTO, son marcos de referencia y
benchmarks de OTRAS empresas/estudios que hay que citar así, nunca presentar como
hecho propio de COTO.

## 1. CRM y visión Consumer Centric

- El programa de la materia define el CRM como el elemento central para
  capitalizar la innovación tecnológica y optimizar la administración de las
  interacciones con la cadena de valor, "desde el upstream hasta el downstream",
  bajo una **visión Consumer Centric**. Menciona como soluciones de mercado de
  referencia Salesforce, Oracle Siebel, Microsoft Dynamics y Sugar, evaluadas via
  Cuadrantes de Gartner. *(Programa MT10, Cap. 2)*
- El nuevo ciclo de relacionamiento del cliente que propone la cátedra:
  **Machear → Relacionar → Nutrir**, cruzando Marketing, Ventas y Customer
  Service. *(Programa MT10, Cap. 2)* — sirve de columna vertebral para la
  sección "plataforma de generación de demanda y gestión de campañas" del TP.
- Libro de referencia (Payne & Frow, *Strategic Customer Management: Integrating
  Relationship Marketing and CRM*, Cambridge, 2013): plantea que relationship
  marketing y CRM se trataron históricamente como procesos separados, y que la
  mayoría de los sistemas de CRM fallan justamente por falta de comprensión de
  las necesidades del cliente — la integración de ambos es lo que llaman
  "Strategic Customer Management". *(Strategic_Customer_Management, contratapa)*

## 2. Omnicanalidad: definiciones y niveles de madurez

- Progresión de madurez (Clase IV, slide 29): **Single Channel → Multichannel →
  Crosschannel → Omnichannel**. De un cliente hablando con un solo canal, a
  varios canales en paralelo sin cruzarse, a canales que se cruzan puntualmente,
  a una red donde todos los canales están interconectados alrededor del cliente.
- Comparación Multicanal vs. Omnicanal vs. Omnicanal+IA (Clase IV slide 30 /
  Clase VI slide 6):
  - **Multicanal**: 1 cliente, 1 canal, muchos mensajes distintos = **lento**.
  - **Omnicanal**: muchos clientes, muchos canales, 1 mensaje, muchas fuentes de
    datos.
  - **Omnicanal + IA**: muchos clientes, muchos canales, 1 mensaje, **1 fuente de
    datos** = **eficiente**.
  - Este framework es clave para justificar en el TP por qué el salto de
    "multicanal" a "omnicanal con IA" no es un lujo, sino lo que separa lento de
    eficiente.
- Definición formal (Clase VI, slide 19): *"Una Estrategia Omnicanal busca
  gestionar la experiencia del cliente de manera coherente y consistente, a
  través de cualquier canal de comunicación con los clientes, ya sea online u
  offline. A diferencia de una estrategia multicanal, que focaliza esfuerzos en
  diferentes canales, la omnicanalidad se concentra en la integralidad de la
  estrategia."* Aclara explícitamente: una empresa puede tener una app buena,
  buenas campañas en redes y un sitio web bien diseñado, pero **si no hay
  coherencia e interoperación entre ellos, NO es una experiencia omnicanal**.
- Mito a desarmar en el TP (Clase VI, slide 21): *"¿La implementación de una
  estrategia de Omnicanalidad depende de una única plataforma tecnológica?
  NO, es el resultado de la orquestación de procesos y soluciones tecnológicas
  que interactúen hacia tal fin."* — argumento útil para no vender "compramos un
  CRM y ya está", sino un roadmap de integración.

## 3. Elementos de una estrategia omnicanal y de una plataforma tecnológica omnicanal

*(Clase VI, slides 7 y 22 — usar como checklist de diseño de la plataforma)*

- **Elementos de la estrategia**: Selección de Canales de Contacto · Plan de
  Comunicación · Customer Journey Map · Sistemas de Gestión Unificados ·
  Solución de Atención al Cliente · Integración entre plataformas ·
  Capacitación Constante a los Representantes.
- **Elementos de la plataforma tecnológica**: Multicanal · Monitoreo ·
  Segmentación · Priorización · Automatización · Visión de Cliente Unificada ·
  Trazabilidad · Gestión de Casos · Guía de respuestas · Integración de
  Sistemas de Gestión · Métricas de Gestión Integradas · Flexibilidad al
  Cambio.

## 4. Customer Journey Map (metodología, Clase VI slides 9-12)

- Se lee en 4 capas: (1) **Etapa + Interacción + Canal de contacto** — qué hace
  el cliente y por dónde; (2) **Tipo de experiencia** (Wow / Positivo / Neutro /
  Negativo / Ouch), marcando "momentos de la verdad" y "momentos de dolor";
  (3) **Voz del cliente y oportunidades de mejora**.
- Fórmula (Clase VI, slide 8): **Experiencia del cliente = Interacción en el
  punto de contacto**. Si interacción < expectativa → frustración; si
  interacción = expectativa → conformidad; si interacción > expectativa →
  deleite. Sirve para priorizar: no hay que mejorar todo el journey parejo,
  sino los puntos donde la interacción está por debajo de la expectativa.

## 5. Tipologías de canales — matriz para diseñar atención al cliente

*(Clase VI, slides 24-28)*

- Eje 1: **Presencial / Telefónico / Digital**.
- Eje 2: **Atención Humana / Atención No Humana**.
- La cátedra propone armar una matriz 2x3 relevando TODOS los canales de
  atención reales antes de proponer mejoras. Aplicación directa al TP: primero
  mapear los canales reales de COTO en esta matriz (con research real, no
  inventado), después proponer dónde suma IA — por ejemplo, un chatbot cae en
  "No Humano + Digital".

## 6. Transformación omnicanal — McKinsey, *"More than digital plus traditional"* (2016)

- Dato de contexto citado en el paper: en EE.UU. (mercado de origen de Amazon),
  a comienzos de 2016 **~92% de las ventas retail seguían siendo presenciales**
  — el canal digital no reemplaza al resto, hay que integrar, no sustituir.
  *(McKinsey, "More than digital plus traditional", p. 2)*
- Casos con resultados medibles (**no son de COTO, son benchmarks de otras
  empresas** — citar así si se usan en el TP):
  - Un banco regional que integró canales digital+tradicional aumentó ventas de
    cuentas corrientes y préstamos personales **+25% en 6 meses** (préstamos
    personales +28%, cuentas corrientes +38%). *(Exhibit 1, p. 3)*
  - Una telco europea con la misma lógica logró **+40% de uso del canal online
    de servicio, -20% de costos, +5 puntos porcentuales de satisfacción**.
    *(p. 3)*
- Metodología de 4 pasos para diseñar la transformación:
  1. **Descubrir "personas"** — 4 a 6 arquetipos de cliente suelen cubrir ~80%
     de la base.
  2. **Mapear el journey** de cada persona y detectar puntos de dolor ocultos
     (ejemplo real citado: 80% de clientes abandonaban el registro online antes
     de completarlo; 98% de clientes de call center no llegaba a pedir una
     oferta; 30% de los pedidos nunca se activaban).
  3. **Diseñar un portfolio de iniciativas pragmáticas** — varias docenas de
     mejoras puntuales, no una plataforma nueva única ("silver bullet").
  4. **Habilitar mejora continua** con equipos cross-funcionales dueños de cada
     journey, e incentivos rediseñados para premiar la cooperación entre
     canales en vez de la competencia interna entre ellos.
- Riesgos explícitos a evitar (útiles para la sección de riesgos del TP):
  **"bias toward bigness"** (creer que omnicanalidad exige reemplazar toda la
  plataforma de IT) y **"curbing cooperation"** (canales que compiten entre sí
  porque sus incentivos premian el volumen propio, no el resultado conjunto).

## 7. Reconocimiento, Engagement y Orquestación — Winterberry Group / DMA (2016)

- Framework de 3 pilares para una estrategia omnicanal real:
  **Recognition** (reconocer al mismo cliente en todos los puntos de contacto),
  **Engagement** (mezcla de canales desplegada según la fortaleza de cada uno),
  **Orchestration** (coordinación de la experiencia con datos + infraestructura).
- Encuesta a +100 marketers (2016): **72.4%** dice que el reconocimiento
  cross-canal de audiencia es prioridad, pero solo **8.9%** logra reconocer
  consistentemente al mismo cliente en TODOS sus canales, y solo **6.7%** está
  "totalmente satisfecho" con su capacidad de usar datos de un canal para
  personalizar en otro. *(pp. 9-12)* — brecha entre ambición y capacidad real,
  útil para justificar inversión en integración de datos y no solo en "más
  canales".
- Qué mejoraría más esa capacidad, según los mismos encuestados: mejor
  agregación/gestión de datos (47.7%), mejor integración de martech (39.5%),
  mejor matching de perfiles entre canales (38.4%). *(p. 13)*
- Qué canal sirve para qué caso de uso (p. 15): broadcast/TV para brand
  building; direct mail para adquisición de clientes específicos; search para
  clientes "en el momento de compra"; **email es el canal que más valor aporta
  en combinación con otros** (58% de los encuestados), fuerte en
  up-sell/cross-sell (51.3%); mobile todavía no es "primera opción" para ningún
  caso puntual, pero destaca en atención al cliente (48.6%) y up-sell (32.4%).
- Próxima frontera según los mismos marketers: no es "sumar canales" sino
  **mejor integración interna de tecnología y datos** (49.3%) — coincide con el
  punto 6 de McKinsey de arriba.

## 8. Big Data / Advanced Analytics — 8 principios para que el análisis genere valor real

*(McKinsey, "Making data analytics work for you—instead of the other way
around", 2016)*

1. **Hacer las preguntas correctas** — preguntas de negocio concretas ("¿cómo
   reducimos el costo de X?"), no exploratorias vagas ("¿qué patrones muestran
   los datos?"). Caso citado: una financiera que primero juntó datos sin
   pregunta clara perdió tiempo; reenfocada en "reducir tiempo de desarrollo de
   producto" con una métrica concreta (adopción de clientes), lanzó 2 productos
   exitosos.
2. **Pensar en chico y en grande a la vez** — mejoras incrementales puntuales
   pueden sumar exponencialmente si se combinan en toda la cadena. Caso citado:
   una acería combinó mejoras del 5-10% en demand planning, procurement e
   inventario por separado, y al integrarlas de punta a punta llegó a ~50% de
   ahorro total.
3. **No descartar datos "blandos"** (texto libre, comentarios, redes sociales)
   solo por no ser data estructurada — a veces son la única señal disponible.
4. **Cruzar fuentes de datos distintas** (ej. RRHH + performance de máquinas)
   revela causas raíz que un solo dataset no muestra.
5. **Iterar en loops** (observar → orientar → decidir → actuar — el "OODA
   loop"), no en una sola pasada lineal.
6. **El output tiene que ser usable y bien diseñado**, no solo matemáticamente
   correcto — un algoritmo brillante que nadie usa por interfaz confusa no
   genera valor.
7. **Armar equipos multidisciplinarios** (data scientists + ingenieros +
   diseñadores + "traductores" de negocio), no solo matemáticos.
8. **La adopción ES el entregable** — caso citado: un modelo de recomendación
   de venta cruzada falló en un call center real porque los representantes
   cerraban el pop-up de sugerencia; su esquema de comisión premiaba velocidad
   de llamada, no ventas cruzadas. Moraleja: los incentivos internos tienen que
   estar alineados con lo que el sistema busca lograr, o el mejor algoritmo del
   mundo queda sin usar.

Esto es directamente aplicable a la sección "técnicas de Big Data/Data
Analytics" del TP: no alcanza con proponer "vamos a usar IA", hay que mostrar
el circuito completo (pregunta de negocio → dato → adopción real con
incentivos alineados) — si no, el TP suena a lista de buzzwords.

## 9. Límites reales de la IA — para no sobre-prometer

*(McKinsey, "What AI can and can't do (yet) for your business", enero 2018)*

5 limitaciones técnicas a tener presentes al proponer IA en cualquier
componente del TP (marketing, atención al cliente, segmentación):

1. **Etiquetado de datos**: la mayoría de los modelos necesitan datos
   etiquetados por humanos — caro y propenso a error.
2. **Volumen de datos de entrenamiento**: deep learning necesita miles o
   millones de registros; muchas empresas no tienen ese volumen para un caso de
   uso específico.
3. **Explicabilidad ("caja negra")**: es difícil explicar por qué un modelo
   tomó una decisión — relevante quando afecta al cliente (ej. a quién se le
   ofrece qué descuento) por razones de confianza y, potencialmente,
   regulatorias.
4. **Generalización**: lo aprendido en un caso de uso no se traslada
   automáticamente a otro (transfer learning todavía inmaduro).
5. **Sesgo en datos y algoritmos**: si los datos históricos reflejan sesgos (a
   quién le llegó qué oferta antes), el modelo los repite y amplifica.

Recomendaciones del paper para el nivel directivo: entender qué puede y no
puede hacer la IA hoy (no dejarse llevar por el hype), tener una estrategia de
datos sólida antes que un algoritmo, buscar reusar soluciones entre áreas
("pensar lateralmente"), y no esperar a ser "fast follower" porque después es
difícil alcanzar a quien ya arrancó.

**Aplicación al TP**: reconocer estas limitaciones explícitamente en la
propuesta (en vez de solo vender la promesa de la IA) fortalece el caso frente
a un CFO escéptico, y fundamenta por qué el rollout de IA debe ser gradual y
con casos de uso acotados — no "IA en todo desde el día uno".
