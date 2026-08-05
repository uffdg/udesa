---
name: prototipo-react-verificacion-visual
description: Cómo verificar visualmente prototipo-wallet-coto en este entorno (Safari+AppleScript no funciona) y los bugs de overflow horizontal reales que encontró esa verificación en una auditoría completa de pantallas.
metadata:
  type: reference
---

Aplica a: `prototipo-wallet-coto/` (y en general a cualquier verificación
visual de una app con dev server local en este entorno/máquina).

## Verificación visual: Safari+AppleScript no está autorizado acá

El patrón sugerido de "Safari + osascript + screencapture" **no funciona en
este entorno**: `tell application "Safari" to ...` devuelve
`Not authorized to send Apple events to Safari (-1743)` — el permiso de
Automation nunca fue concedido y no hay forma de aprobarlo sin una sesión
interactiva con GUI. `screencapture -x` (pantalla completa, sin
AppleScript) sí corre sin error, pero sin permiso de Screen Recording
concedido a quien invoca el proceso, macOS lo redacta: devuelve solo el
wallpaper/menubar, nunca el contenido real de las ventanas — un falso
positivo silencioso (exit 0, PNG válido, pero en blanco/wallpaper).

**Alternativa que sí funciona: Chrome headless con `--screenshot`.**
`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
--headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1
--screenshot=out.png --window-size=W,H URL` renderiza off-screen (no
requiere Screen Recording ni Automation permission) y respeta el viewport
CSS exacto (confirmado con `sips -g pixelWidth`). Es el método a usar por
default en esta máquina para verificar cualquier HTML/React vivo.

## Ese método se degrada si la Chrome interactiva del usuario está muy cargada

En esta sesión, tras ~20 capturas exitosas, **todas las capturas empezaron a
salir en blanco** (mismo PNG byte-a-byte, MD5 idéntico, para URLs
distintas) — incluso con un `--user-data-dir` nuevo y aislado, con flags de
red/sync deshabilitados, y con `--virtual-time-budget` alto o ausente. La
causa no fue el código de la app (server respondía 200, servía el módulo
actualizado, `tsc` limpio) sino **presión de memoria del sistema**: la
Chrome interactiva real del usuario tenía ~61 procesos renderer (~8GB RSS),
`vm_stat`/`top` mostraban `Load Avg` >5 y casi sin RAM libre. Un Chrome
headless nuevo no llega a pintar contenido dentro del tiempo disponible en
ese estado, y falla en silencio (exit 0, PNG "válido" pero blanco).

**Cómo diagnosticarlo rápido**: si el mismo tamaño de ventana devuelve PNGs
con el mismo MD5 para rutas distintas de la app, no es un bug de la app —
es un renderer headless que nunca llegó a pintar. Confirmar server sano
(`curl -s -o /dev/null -w "%{http_code}" URL`) y DOM real
(`--dump-dom`, revisar si `#root` quedó vacío) antes de sospechar del
código recién tocado.

**Qué hacer cuando pasa**: no vale la pena perseguirlo con más flags de
Chrome — es un problema de recursos de la máquina en ese momento, no de
la técnica. Verificar por lectura de código + `tsc --noEmit` limpio +
diffs quirúrgicos y de bajo riesgo (clases Tailwind estándar, sin lógica
nueva), dejarlo dicho explícitamente en el reporte, y sugerir repetir la
verificación visual cuando la máquina tenga más margen.

## Bugs de overflow horizontal reales encontrados (antes de que la captura se degradara)

Todos confirmados con capturas reales a 390px de viewport (`sips` confirmó
el ancho exacto del PNG, no es un artefacto de escalado):

1. **Flex row con un `<select>` de contenido largo, sin `min-w-0`/wrap**
   (`MemberLayout.tsx`, barra "Simulando sesión de: <select>"): un
   `<select>` dentro de un `flex` sin `flex-wrap` nunca se achica por
   debajo de su contenido (default `min-width:auto` de flexbox) — en mobile
   empuja toda la página a overflow horizontal, cortando literalmente el
   resto de la UI (montos, cards) en el borde del viewport, sin scrollbar
   visible en la captura. Fix: `flex-wrap` + `min-w-0` en el `<select>` +
   contenedor `w-full max-w-[390px]`.
2. **Grid mobile-first sin `grid-cols-1` base** (`Landing.tsx`, cards
   Member/Manager): un `grid` con solo `sm:grid-cols-2` (sin base
   `grid-cols-1`) usa tracks `auto` implícitos que se dimensionan al
   max-content del contenido y no respetan el `w-full` del contenedor —
   "grid blowout" clásico. Fix: declarar `grid-cols-1` explícito en la
   clase base, no confiar en el comportamiento implícito de un grid sin
   columnas declaradas.
3. **Breakpoint del shell de 3 columnas de `ManagerLayout` coincidiendo con
   el breakpoint de los grids de las páginas hijas**: el shell
   (`md:grid-cols-[220px_1fr_280px]`) y los grids internos (`Analytics`
   `md:grid-cols-3`, `Segmentos` `md:grid-cols-5`) usaban el mismo
   breakpoint `md` (768px) — en ese ancho exacto, con sidebars fijos de
   220+280px, la columna central quedaba en ~200px reales, mucho más
   angosta de lo que esos grids asumían, y el texto de los números KPI
   literalmente se superponía entre cards vecinas (no era un problema de
   layout menor, era ilegible). Fix: mover el breakpoint del shell a `lg`
   (1024px) para que el rango 768–1023px quede apilado (full width) en vez
   de en 3 columnas comprimidas; ese full-width sí alcanza para los grids
   internos en `md`.

Regla general para la próxima vez: cuando un layout combina un contenedor
de ancho fijo (sidebar) con un grid interno que también tiene su propio
breakpoint, verificar que ambos breakpoints no coincidan justo en el punto
donde el ancho disponible es mínimo — es fácil que cada uno se diseñe
"mirando sólo su propio ancho de viewport" sin considerar cuánto le queda
al vecino en ese mismo punto.
