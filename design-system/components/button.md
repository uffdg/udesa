---
name: button-awwwards
fuente: CSS real de awwwards.com, ver design-system/tokens/tokens.md
---

# Botón — patrón extraído de awwwards.com

Único componente con CSS completo extraído hasta ahora (el resto del sitio
tiene demasiadas clases específicas de su propia app como para generalizar).

```css
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: var(--button-height);        /* 48px */
  padding: 0 var(--button-pad);        /* 24px */
  background-color: var(--button-bg);  /* --color-primary por default */
  color: var(--button-color);          /* blanco por default */
  border: none;
  border-radius: var(--button-rounded); /* 8px, o --button-rounded-full (72px) para pill */
  font-size: var(--text-size-primary); /* 14px */
  font-weight: var(--font-medium);     /* 500 */
  white-space: nowrap;
  cursor: pointer;
  transition: color .3s, background .3s, border .3s;
}
```

Variante secundaria/outline: mismo alto y padding, `--button-bg: transparent`
o `#fff`, `--button-color: var(--color-primary)`, `--button-border-color` con
1px de borde visible (inferido del patrón de variables, no de una regla
capturada literal — verificar si se necesita el detalle exacto).

## Para nuestras slides

Sirve como base para botones/CTA dentro de mockups o pantallas que se
muestren en una presentación (ej. si el TP incluye un mockup de la wallet o
de una interfaz). No aplica directo a controles de PowerPoint/Figma de
slides — ahí lo que importa es la tipografía y la paleta de
`design-system/tokens/`.
