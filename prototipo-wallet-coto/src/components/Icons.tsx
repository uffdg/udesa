// Set de iconos de línea compartido para member (nav inferior, accesos rápidos).
// Mismo lenguaje visual que el ícono QR ya usado en Pagar.tsx (viewBox 24,
// stroke currentColor, strokeWidth 1.8) — antes cada pantalla mezclaba este
// estilo con emojis sueltos (🏠📷🎁🛒), lo que se veía inconsistente entre
// Home/MemberLayout/Pagar. `currentColor` permite que el tab activo/inactivo
// tiña el ícono con el mismo color que el texto, cosa que un emoji no puede
// hacer.

type IconProps = {
  className?: string
}

export function IconHome({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 11.5 12 4l8 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10v8.5a1 1 0 0 0 1 1h3.5v-5h3v5H17a1 1 0 0 0 1-1V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconScan({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function IconGift({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="9" width="16" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 13h13V19a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-6ZM12 9V20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9c0-2-1.2-3.5-3-3.5S6.2 7 8 8.6C9.2 9.6 12 9 12 9ZM12 9c0-2 1.2-3.5 3-3.5S17.8 7 16 8.6C14.8 9.6 12 9 12 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconCart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M3.5 4h2l1.2 11.2a1.5 1.5 0 0 0 1.5 1.3h8.6a1.5 1.5 0 0 0 1.48-1.24L20 8H6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="20" r="1.3" fill="currentColor" />
      <circle cx="16.5" cy="20" r="1.3" fill="currentColor" />
    </svg>
  )
}
