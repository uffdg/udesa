#!/usr/bin/env python3
"""Genera business-plan-coto.pptx siguiendo la plantilla oficial de 12
puntos del Trabajo Final de la cátedra (ver
.claude/skills/how-to-structure-pitch/SKILL.md), con el patrón visual
canónico documentado en design-system/components/pptx-pitch-deck.md —
mismo tratamiento editorial que
materias/mt10-innovacion-tecnologica/fidelizacion-coto/entregable/
presentacion/plataforma-fidelizacion-coto.pptx (callouts de cifra grande,
chips, tablas por shapes, footer de marca, roadmap con flechas), no solo
la misma paleta.

Contenido 1:1 desde guion.md / entregable/business-plan-coto.md — no
inventa nada nuevo, solo cambia el tratamiento visual. Requiere
python-pptx (`pip install python-pptx`) y el kit compartido en
design-system/components/pptx_kit.py.

Correr desde cualquier lado: `python3 build-pptx.py` (la ruta de salida es
relativa a este mismo archivo, y el import del kit se resuelve por ruta
absoluta al repo, no al directorio desde el que se invoca).
"""
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[5]
sys.path.insert(0, str(REPO_ROOT / "design-system" / "components"))
import pptx_kit as k  # noqa: E402

MARCA = "Wallet COTO"

prs = k.new_deck()


def footer(slide, seccion, n, on_dark=False):
    k.footer_marca(slide, MARCA, seccion, n, on_dark=on_dark)


# 1. Nombre de la empresa ----------------------------------------------------
s = k.slide_titulo(
    prs,
    titulo="Wallet COTO",
    subtitulo="Nombre de trabajo — naming final pendiente de decisión de branding",
    meta="MT25 — Estrategias de Negocios en Internet  ·  Pitch a inversores (profesores)  ·  15 min + 10' Q&A",
    creditos="Equipo del TP — Maestría en Gestión de Servicios Tecnológicos y de Telecomunicaciones",
)
footer(s, "Portada", 1, on_dark=True)

# 2. Equipo -------------------------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Quiénes somos", "Equipo")
k.chip_card(
    s, "PENDIENTE",
    "Espacio reservado para foto, nombre y background de cada integrante.",
    left=k.MARGIN_L, top=top, width=k.CONTENT_W, height=1.6, active_chip=False,
)
k.callout_box(
    s,
    "El equipo debe completar esta sección con los datos reales de cada integrante antes de la entrega — no se inventan nombres ni backgrounds.",
    top + 1.6 + 0.35, kind="note",
)
k.add_speaker_notes(
    s,
    "Gap explícito: el documento final no tiene datos reales del equipo todavía — no se inventan nombres.",
)
footer(s, "Equipo", 2)

# 3. Propósito ------------------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Propósito de la empresa", "Por qué existe Wallet COTO")
_, tf = k.textbox(s, k.MARGIN_L, top + 0.35, k.CONTENT_W, 3.0)
p = tf.paragraphs[0]
k.run(
    p,
    "“Construir la relación directa de pago, datos y fidelización que hoy "
    "COTO no tiene con sus propios clientes — porque hoy esa relación la "
    "construyen Mercado Pago y MODO, cada vez que un cliente paga digital "
    "en una sucursal COTO.”",
    26, color=k.BRAND, italic=True,
)
# Refuerzo visual de "quién" construye hoy esa relación (los mismos dos
# nombres que ya están en la cita de arriba, re-presentados como chips en
# vez de solo texto corrido) — no agrega ningún dato nuevo.
_, tf_lbl = k.textbox(s, k.MARGIN_L, 5.05, k.CONTENT_W, 0.35)
k.run(tf_lbl.paragraphs[0], "HOY, ESA RELACIÓN LA CONSTRUYEN", 12, color=k.MUTED, bold=True)
k.chip(s, "Mercado Pago", k.MARGIN_L, 5.45, width=2.4, height=0.42, active=False)
k.chip(s, "MODO", k.MARGIN_L + 2.4 + 0.2, 5.45, width=1.6, height=0.42, active=False)
footer(s, "Propósito", 3)

# 4. Problema -----------------------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "El problema", "No es un problema de aceptar pagos digitales", content_top=2.05)
# Columna izquierda: la cifra que ya está en el segundo bullet (reintegro
# MODO), promovida a stat_callout — mismo patrón que la slide "El problema"
# de mt10 (número suelto + bullets al lado), en vez de solo texto corrido.
k.stat_callout(
    s, "20-30%",
    ["reintegro que ofrece MODO en sucursales", "COTO desde may. 2024 — acumulable con", "ofertas propias de COTO"],
    left=k.MARGIN_L, top=top, width=4.0, big_size=40, label_size=13,
)
problema_bullets = [
    ("Mercado Pago acepta QR en COTO desde 2020, con descuentos.", 0),
    ("MODO renovó alianza en mayo 2024 — reintegros 20-30%.", 0),
    ("BBVA (ene. 2025): las alianzas de MODO con Coto y Día duplicaron su volumen en supermercados durante 2024.", 0),
    ("Lo que COTO pierde al procesar ese pago vía terceros:", 0),
    ("Datos de primera parte incompletos", 1),
    ("Fidelización cedida a la marca del tercero, no a COTO", 1),
    ("Cero control del calendario promocional del propio checkout", 1),
    ("Dependencia de reglas ajenas (MP/MODO/bancos)", 1),
]
bullets_left = k.MARGIN_L + 4.0 + 0.4
bullets_width = k.CONTENT_W - 4.0 - 0.4
_, tf = k.textbox(s, bullets_left, top, bullets_width, 3.3)
k.bullets_dash(tf, problema_bullets, size=14.5, bold_level0=True, space_after=7)
# callout posicionado dinámicamente después del bloque de bullets real (no
# un top fijo hardcodeado) — mismo criterio que pptx-callout-buffer-overlap.md.
bullets_bottom = top + k.bullets_height(problema_bullets, width=bullets_width, size=14.5, space_after=7)
k.callout_box(
    s,
    "Apuesta central (supuesto del equipo): ni MP, ni MODO, ni Ualá ven el historial de compra real de supermercado — solo el movimiento de dinero.",
    bullets_bottom + 0.40, kind="note", height=0.65,
)
k.add_speaker_notes(
    s,
    "Abierto: no hay fuente que confirme quién financia hoy los reintegros de MP/MODO en sucursales COTO.",
)
footer(s, "El problema", 4)

# 5. Solución -------------------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Solución", "La wallet que conoce tu historial real de compra")
solucion_bullets = [
    ("No compite como “banco digital más chico” — sin licencia bancaria ni track record fintech.", 0),
    ("Compite como la wallet que mejor conoce el historial de compra real de supermercado del cliente.", 0),
    ("Diferenciadores clave:", 0),
]
_, tf = k.textbox(s, k.MARGIN_L, top, k.CONTENT_W, 2.0)
k.bullets_dash(tf, solucion_bullets, size=15.5, bold_level0=True)
# Los 2 diferenciadores, antes sub-bullets, promovidos a chip_card (mismo
# componente que la slide "Competencia") — mismo texto, más peso visual.
bullets_bottom = top + k.bullets_height(solucion_bullets, width=k.CONTENT_W, size=15.5, space_after=10)
cards_top = bullets_bottom + 0.35
card_w = (k.CONTENT_W - 0.3) / 2
k.chip_card(
    s, "Beneficios personalizados",
    "Por historial real de compra — no un % genérico por rubro, como Cuenta DNI.",
    left=k.MARGIN_L, top=cards_top, width=card_w, height=1.35, active_chip=True,
)
k.chip_card(
    s, "Fidelización integrada",
    "Dentro del mismo instrumento de pago, sin tarjeta aparte.",
    left=k.MARGIN_L + card_w + 0.3, top=cards_top, width=card_w, height=1.35, active_chip=True,
)
cards_bottom = cards_top + 1.35
k.callout_box(
    s,
    "Límite honesto: no resuelve por qué dejar de usar MP/MODO — resuelve por qué sumar Wallet COTO además. Sin inversión, crédito ni IA generativa en esta fase.",
    cards_bottom + 0.30, kind="risk", height=0.85,
)
footer(s, "Solución", 5)

# 6. Producto -------------------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Producto", "5 pantallas núcleo + roadmap de ejecución", content_top=2.05)
producto_bullets = [
    "Onboarding simplificado, sin costo de apertura",
    "Home con beneficios calculados sobre historial",
    "Pagar en caja — QR propio (Transferencias 3.0), un tap: paga + aplica beneficio + suma puntos",
    "Beneficios con reglas fijas y visibles",
    "Recompra rápida integrada con Coto Digital",
]
_, tf = k.textbox(s, k.MARGIN_L, top, k.CONTENT_W, 2.0)
k.bullets_dash(tf, producto_bullets, size=13, space_after=5)
# Posición Y del roadmap calculada en base a la altura real estimada del
# bloque de bullets de arriba (no un offset fijo) — así si el texto crece
# o la fuente real resulta más ancha que Inter, el roadmap se corre para
# abajo en vez de superponerse. Buffer generoso (0.40in, no 0.30in) porque
# `k.bullets_height()` es una estimación por ancho de caracter promedio,
# no una medición real — ver su docstring en pptx_kit.py y
# tp-ux-ui-designer/pptx-callout-buffer-overlap.md.
roadmap_top = top + k.bullets_height(producto_bullets, width=k.CONTENT_W, size=13, space_after=5) + 0.40
roadmap_bottom = k.roadmap_arrows(s, [
    ("Año 1", "Piloto CABA", ["15-20 suc. → 100% CABA", "59% de la red · 5% del SAM"]),
    ("Año 2", "+ GBA", ["90% de la red", "15% del SAM"]),
    ("Año 3", "Rollout nacional", ["100% de la red", "25% del SAM"]),
], active_index=0, top=roadmap_top, card_width=3.85, card_height=1.85)
# Callout posicionado dinámicamente después del roadmap (no un top fijo
# hardcodeado) — el gap ahora es determinístico (roadmap_bottom es
# `top + card_height`, sin estimación de por medio), a diferencia del gap
# bullets→roadmap de arriba que sí depende de la estimación de texto.
k.callout_box(
    s,
    "La cobertura física crece más rápido que la captura de GMV: sin exclusividad frente a MP/MODO, migrar un hábito de pago instalado toma tiempo.",
    roadmap_bottom + 0.25, kind="risk",
)
footer(s, "Producto", 6)

# 7. Modelo de negocio -------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Modelo de negocio", "Captura de valor — moats, monetización, barreras", content_top=2.10)
left_bullets = [
    ("No es network effect clásico de dos lados — COTO es el único vendedor.", 0),
    ("Network effect de datos: débil y unilateral (no es el pilar del argumento).", 0),
    ("Defensibilidad real:", 0),
    ("Brand — COTO ya tiene relación de compra física", 1),
    ("Embedding — historial y beneficios generan costo de cambio", 1),
    ("Escala — 153 sucursales con base que ya visita seguido", 1),
]
_, tf = k.textbox(s, k.MARGIN_L, top, 5.8, 3.6)
k.bullets_dash(tf, left_bullets, size=13, bold_level0=True, space_after=6)
right_bullets = [
    ("Monetización — 4 palancas:", 0),
    ("Frecuencia (primaria) · Basket size (secundaria)", 1),
    ("Take rate: no aplica (no es marketplace)", 1),
    ("Ad load / retail media: complementaria, desde Fase 3", 1),
    ("Modelo: retención / margen retail incremental", 0),
    ("Barrera frente a otro retailer: moderada — first mover + tiempo, no estructural", 0),
]
_, tf2 = k.textbox(s, 6.8, top, 5.8, 3.6)
k.bullets_dash(tf2, right_bullets, size=13, bold_level0=True, space_after=6)
# Tag visual de los 3 pilares de defensibilidad (mismas 3 palabras que ya
# están en los sub-bullets de arriba) — confinado al ancho de la columna
# izquierda (0.6 a 6.4in) para que, sin importar cuánto se extienda en Y,
# nunca se superponga en X con la columna derecha (6.8 a 12.6in).
left_bottom = top + k.bullets_height(left_bullets, width=5.8, size=13, space_after=6)
chips_top = left_bottom + 0.30
k.chip_strip(
    s, ["Brand", "Embedding", "Escala"], active_index=-1,
    left=k.MARGIN_L, top=chips_top, chip_width=1.79, chip_height=0.45, gap=0.12, size=12,
)
chips_bottom = chips_top + 0.45
right_bottom = top + k.bullets_height(right_bullets, width=5.8, size=13, space_after=6)
k.callout_box(
    s,
    "Amenaza dicha en voz alta: MP y MODO siguen aceptados en la misma caja — la wallet COTO no reemplaza, compite por share of wallet.",
    max(chips_bottom, right_bottom) + 0.30, kind="risk", height=0.85,
)
footer(s, "Modelo de negocio", 7)

# 8. Tamaño de mercado ----------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Tamaño de mercado", "TAM / SAM / SOM — cadena de supuestos transparente", content_top=1.95)
k.stat_card(s, "≈ ARS 24,8 billones/año", "TAM — ventas totales de supermercados (INDEC, 5 meses 2025 anualizados)",
            left=0.6, top=top, width=5.75, height=1.55, big_size=22)
k.stat_card(s, "≈ ARS 458.000 M/año", "SAM — gasto de COTO ya pagado con billeteras/medios digitales",
            left=6.75, top=top, width=5.75, height=1.55, big_size=22)
sam_bullets = [
    "Carrefour + Cencosud + COTO ≈ 50% del TAM (agregador no verificado) → split parejo 1/3 → COTO ≈ ARS 4,1 billones/año → × 11,1% “otros medios” (INDEC) → SAM",
]
sam_bullets_top = top + 1.65
_, tf = k.textbox(s, k.MARGIN_L, sam_bullets_top, k.CONTENT_W, 0.55)
k.bullets_dash(tf, sam_bullets, size=12, space_after=0)
# Mismo criterio que en la slide de Producto: top del roadmap calculado en
# base a la altura real estimada del bullet de arriba, no hardcodeado, con
# buffer generoso (0.40in, no 0.25in) porque `k.bullets_height()` es una
# estimación, no una medición real — ver tp-ux-ui-designer/
# pptx-callout-buffer-overlap.md.
som_roadmap_top = sam_bullets_top + k.bullets_height(sam_bullets, width=k.CONTENT_W, size=12, space_after=0) + 0.40
som_roadmap_bottom = k.roadmap_arrows(s, [
    ("Año 1 · SOM", "5% del SAM", ["≈ ARS 22.900M"]),
    ("Año 2 · SOM", "15% del SAM", ["≈ ARS 68.750M"]),
    ("Año 3 · SOM", "25% del SAM", ["≈ ARS 114.600M"]),
], active_index=0, top=som_roadmap_top, card_width=3.85, card_height=1.55)
# Callout posicionado dinámicamente después del roadmap (no un top fijo
# hardcodeado) — mismo criterio que som_roadmap_top, mismo motivo.
k.callout_box(
    s,
    "No existe dato público de clientes, ticket promedio ni facturación de COTO — gran parte de este embudo son supuestos propios (ver Anexo). El GMV del SOM no equivale a ingreso incremental (ver Modelo financiero).",
    som_roadmap_bottom + 0.25, kind="risk", height=0.75,
)
footer(s, "Tamaño de mercado", 8)

# 9. Por qué ahora -----------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Por qué ahora", "Sustitución de medio de pago ya en curso, no una apuesta")
stats = [
    ("+45,8%", ["QR interoperable interanual", "(BCRA); débito cae 16,8%"]),
    ("34%→43%", ["del valor pagado en comercio físico", "con billeteras (Global Payments '26)"]),
    ("84%", ["de argentinos usa QR para pagar —", "el más alto de LatAm"]),
    ("11,1%", ["de ventas de supermercados ya es", "“otros medios” (INDEC, nov. 2024)"]),
]
# stat_card en vez de stat_callout suelto: mismo número y label, pero con
# card blanca detrás — da peso visual real a la fila en vez de tipografía
# flotando sobre fondo vacío.
card_width = 2.75
card_height = 1.90
x = k.MARGIN_L
for big, label in stats:
    k.stat_card(s, big, label, left=x, top=top, width=card_width, height=card_height, big_size=24)
    x += card_width + 0.20
# Frase de síntesis que ya abre la sección "Por qué ahora" del documento
# (business-plan-coto.md §9) pero todavía no estaba en la slide — la
# conexión entre las 4 fuentes independientes es parte del argumento, no
# solo las 4 cifras sueltas.
k.callout_box(
    s,
    "Cuatro fuentes independientes (regulador, consultora de pagos, cámara de e-commerce, estadística oficial de supermercados) apuntan en la misma dirección al mismo tiempo — no es una apuesta sobre tecnología emergente, es una sustitución de medio de pago ya en curso y medible.",
    top + card_height + 0.35, kind="note", height=1.05,
)
footer(s, "Por qué ahora", 9)

# 10. Competencia -----------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Competencia", "La única cancha defendible: historial de compra real", content_top=2.15)
competidores = [
    ("Mercado Pago", "Ecosistema financiero completo, sin visibilidad del historial de compra de supermercado.", True),
    ("MODO", "Fricción cero (ya “adentro” del banco), pero promoción de marca de terceros, sin personalización.", True),
    ("Cuenta DNI", "Descuento genérico por rubro, sin alianza confirmada con COTO.", True),
    ("Ualá — indirecto", "Licencia bancaria, 8 años, ~7,5M clientes AR — sin relación con la compra recurrente de supermercado.", False),
]
positions = [(0.6, top), (6.75, top), (0.6, top + 1.85), (6.75, top + 1.85)]
for (label, desc, active), (l, t) in zip(competidores, positions):
    k.chip_card(s, label, desc, left=l, top=t, width=5.75, height=1.70, active_chip=active)
footer(s, "Competencia", 10)

# 11. Modelo financiero ------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Modelo financiero", "Alto nivel — cadena de supuestos, no una proyección precisa", content_top=2.10)
# stat_card (no stat_callout suelto) con el desglose de CAPEX por
# componente — ya está en business-plan-coto.md §11.1, no estaba
# desagregado en la slide, solo el total.
card_height = 3.6
k.stat_card(
    s, "USD 900.000",
    ["CAPEX inicial (Fase 0-1) — partnership", "con PSP/BaaS, sin infra. bancaria propia"],
    bullet_items=[
        "Plataforma (app+backend+QR) — USD 550.000",
        "Integración con COTO (POS, CRM) — USD 200.000",
        "Compliance / KYC-AML — USD 150.000",
    ],
    left=0.6, top=top, width=5.6, height=card_height, big_size=34,
)
right_bullets = [
    ("OPEX: equipo de 8-12 personas + incentivos de lanzamiento 3-5% del GMV objetivo (por analogía con reintegros de MP 10-25% / MODO 20-30%).", 0),
    ("GMV capturado ≠ ingreso incremental: 20% se fija como fracción genuinamente incremental (extremo conservador de 20-30%).", 0),
    ("Margen bruto retail asociado: 22% (supuesto del equipo, sin benchmark local).", 0),
]
_, tf = k.textbox(s, 6.6, top, 5.9, 2.6)
k.bullets_dash(tf, right_bullets, size=12.5, bold_level0=True, space_after=8)
right_bottom = top + k.bullets_height(right_bullets, width=5.9, size=12.5, space_after=8)
callout_top = max(top + card_height, right_bottom) + 0.30
k.callout_box(
    s,
    "No se lidera con VAN/ROI optimista sobre esta cadena de supuestos — se presenta el número con su lógica. Riesgo principal: la fracción de GMV incremental es el supuesto menos sólido de todo el modelo.",
    callout_top, kind="risk", height=0.70,
)
footer(s, "Modelo financiero", 11)

# 12. Cierre ----------------------------------------------------------
s = k.slide_cierre(
    prs,
    quote_lines=[
        "“La oportunidad no es vender más pagos digitales —",
        "eso ya lo resuelven MP y MODO en el propio checkout de COTO.",
        "La oportunidad es construir el activo de datos y",
        "fidelización propio, no el de un competidor de facto.”",
    ],
    ask_kicker="Siguientes 10 minutos",
    ask_text="Preguntas — arrancamos por las que nosotros mismos nos hicimos primero, si quieren.",
)
footer(s, "Cierre", 12, on_dark=True)

# 13. Anexo -------------------------------------------------------------
s = k.add_slide(prs)
k.set_bg(s, k.BG_LIGHT)
top = k.kicker_headline(s, "Anexo", "Supuestos clave del modelo — resueltos, no abiertos", content_top=2.00)
rows = [
    ("1. Sucursales de COTO", "153", "Única cifra con metodología trazable (suma por zona del sitio oficial); descarta 242 (sin conciliar) y “+120” (piso de prensa)."),
    ("2. Fracción de GMV incremental", "20%", "Extremo conservador del rango 20-30% — MP/MODO sin exclusividad posible en caja."),
    ("3. Financiamiento reintegros MP/MODO", "COTO ~60% de una tasa combinada de 20%", "Sin fuente directa — el supuesto con menos respaldo de los cinco."),
    ("4. CAPEX inicial", "USD 900.000", "Punto medio del rango 650K-1,15M, sin sesgo direccional."),
    ("5. Margen bruto retail", "22%", "Orden de magnitud de industria, sin fuente específica de Argentina/COTO."),
]
k.comparison_table(
    s,
    headers=["Supuesto", "Cifra elegida", "Razonamiento / respaldo"],
    rows=[list(r) for r in rows],
    col_widths=[3.4, 2.5, 6.23],
    top=top, row_height=0.78, header_height=0.44, cell_size=11.5,
)
footer(s, "Anexo", 13)

out = str(Path(__file__).parent / "business-plan-coto.pptx")
# save_deck (no prs.save() directo): este deck usa add_speaker_notes() en
# 2 slides — prs.save() sin el fix de k._fix_notes_master_id_lst() deja el
# .pptx sin <p:notesMasterIdLst> en presentation.xml, que Keynote rechaza
# como archivo inválido (PowerPoint lo tolera). Ver pptx-pitch-deck.md.
k.save_deck(prs, out)
print(f"Guardado: {out}")
