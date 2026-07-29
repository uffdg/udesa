# Prompt para instalar una arquitectura agéntica en un proyecto

Pegá esto en una sesión nueva de Claude Code, **dentro del repo del proyecto
destino** (para que explore ESE código y arme todo en base a lo que
encuentre ahí).

Sirve para cualquier proyecto de tecnología o negocio, sin importar el
dominio (backend, frontend, mobile, data, infraestructura, etc.) — la lógica
es genérica, el contenido concreto sale siempre de explorar el repo real.

---

```
Quiero que instales en este repo una arquitectura de trabajo con agentes y
skills que separe planificación de implementación, con memoria persistente
por agente y una skill de workflow que gobierne cómo se hace cualquier
tarea no trivial. Todo lo que escribas tiene que salir de explorar este
repo de verdad — no inventes stack, convenciones ni estructura.

## Paso 0 — Explorá antes de escribir nada

Recorré el repo y determiná:
- Stack real (lenguaje, framework, gestor de paquetes, ORM/DB si hay)
- Cómo se corren tests, lint, build, typecheck
- Cómo está organizado el código (carpetas principales, capas: UI/API/servicio/DB)
- Si hay CI/CD, cómo se despliega
- Si ya existe un CLAUDE.md, un README con convenciones, o carpetas .claude/

No asumas nada de este mensaje como verdad del proyecto — es solo la
estructura del proceso a instalar, el contenido lo sacás de leer el código.

## Paso 1 — Crear el sistema de agentes en .claude/agents/

Tres agentes con esta división de responsabilidad (nombralos con el prefijo
del proyecto, ej. `<proyecto>-architect`):

### `<proyecto>-architect`
- Rol: planificador y revisor, **NUNCA escribe código de la aplicación**.
- Explora el código, diseña la solución cruzando todas las capas afectadas,
  y guarda un plan escrito en una carpeta de planes (creala si no existe,
  ej. `/plans/` o `/docs/plans/` — la que tenga más sentido acá).
- También sabe revisar un plan existente contra el código real y devolver
  una lista de problemas/confirmaciones, sin reescribirlo.
- Frontmatter: name, description (con 2-3 ejemplos de uso), model, color.
- Le das memoria de agente en `.claude/agent-memory/<proyecto>-architect/`
  (mismo patrón: MEMORY.md como índice + archivos de memoria con
  frontmatter name/description/type, tipos: user/feedback/project/reference).

### `<proyecto>-plan-implementer`
- Rol: ejecutor, **NUNCA diseña ni crea planes**.
- Lee un plan de la carpeta de planes y escribe TODO el código necesario,
  capa por capa, en el orden que tenga sentido para este stack (por ejemplo:
  schema/DB → lógica de negocio/servicio → API/endpoint → UI → i18n si aplica).
- Corre los checks del proyecto (typecheck/lint/test) antes de reportar terminado.

### `<proyecto>-orchestrator`
- Rol: coordina, no diseña ni implementa directamente.
- Flujo estándar para una feature nueva end-to-end:
  1. Fase Plan: invoca al architect, obtiene el path del plan.
  2. Fase Review (recomendada salvo cambios triviales): invoca de nuevo al
     architect para revisar el plan que acaba de escribir, contra el código real.
  3. Fase Implement: invoca al plan-implementer con el plan (ya revisado).
  4. Fase Report: resume para el usuario qué se planeó, qué se construyó,
     y qué pasos manuales quedan pendientes (migraciones, variables de
     entorno, etc.).
- Regla dura: nunca saltea la fase de plan e implementa directo.
- Regla dura: nunca hace `git push` sin confirmación explícita del usuario.

Si el proyecto tiene una superficie de UI relevante, agregá un cuarto agente
`<proyecto>-ux-designer`: diseña pantallas/flujos aplicando principios de UX
(simplicidad, disclosure progresivo, accesibilidad), y puede implementar
directo si el alcance es puramente visual.

Si el proyecto tiene una lógica de negocio o de dominio particularmente
compleja (reglas, cálculos, integraciones externas), evaluá si conviene un
agente adicional `<proyecto>-domain-expert` dedicado a esa lógica, con el
mismo patrón de memoria que los demás.

## Paso 2 — Crear la librería de skills en .claude/skills/

Cada skill es una carpeta con un `SKILL.md` (frontmatter: name, description,
trigger — cuándo cargarlo).

### Skill obligatoria: `implementation-workflow`
Define el esqueleto de TODO trabajo no trivial en este repo:
**Plan → Branch → Implement → Finish**, con dos modos de finish:
- **Manual (default)**: deja los cambios sin commitear, reporta y el usuario
  decide cuándo commitear/pushear.
- **Auto (opt-in explícito del usuario, nunca por defecto)**: commitea por
  tarea con mensajes claros, corre TODOS los checks de este proyecto, pero
  **nunca hace push sin confirmación explícita** — esto es una regla dura,
  no negociable, sin importar el modo.

Esta skill también tiene una tabla de "qué skill/agente usar para qué tarea"
y repite las reglas duras de git (nunca a main directo, nunca --force sin
pedir permiso, nunca -A al hacer git add, nunca saltear hooks).

### Skills de "cómo hacer X" (procedimentales)
Creá las que apliquen a este proyecto, por ejemplo:
- `how-to-fix-bug` — protocolo de investigación antes de tocar código
- `how-to-extend-feature` — cómo sumar algo a una feature existente
- `how-to-new-<unidad-de-trabajo>` — ej. cómo crear una página nueva, un
  endpoint nuevo, un módulo nuevo (usá el vocabulario real de este proyecto)
- `pre-push-testing` — el/los gate(s) de testing exactos que este proyecto
  necesita antes de pushear (adaptá a los comandos reales que encontraste
  en el Paso 0 — no inventes categorías de test que no existen acá)

### Skills de referencia de features complejas
Para cada subsistema no trivial que encuentres en la exploración (algo con
varios archivos, reglas de negocio, o que un futuro Claude necesitaría
releer varias veces), creá una skill de referencia estática
`feature-<nombre>` con la arquitectura de ESE subsistema — no la escribas
en abstracto, escribila después de leer el código real.

## Paso 3 — Escribir o actualizar CLAUDE.md en la raíz del repo

Estructura sugerida (adaptá secciones que no apliquen, ej. si no hay DB no
pongas "Database Migrations"):

1. **Hard Rules** — arriba de todo, en negrita: nunca push a la rama
   principal directo, nunca `git push` sin confirmación explícita, gates de
   testing obligatorios antes de push/merge (los reales de este proyecto).
2. **Development Commands** — los comandos reales (dev/build/test/lint) del Paso 0.
3. **Tech Stack** — lo que encontraste, no una lista genérica.
4. **Code Architecture** — árbol de carpetas real con una línea de qué hace
   cada una.
5. **Key Patterns** — las 5-10 convenciones no negociables que ya existen en
   el código (ej. cómo se maneja auth, cómo se estructuran los endpoints,
   patrones de UI si aplica).
6. **How AI Should Work in This Repo** — esta es la sección que documenta la
   lógica agéntica instalada:
   - Tabla de los agentes creados en el Paso 1 y cuándo usar cada uno.
   - Tabla de las skills creadas en el Paso 2, separadas en "workflow
     skills" (cómo hacer algo) y "feature reference skills" (cómo funciona
     algo complejo).
   - Si hay subcarpetas con su propio CLAUDE.md (ver Paso 4), una tabla que
     las liste — se cargan solas al abrir archivos ahí, no hace falta
     invocarlas a mano.
   - Una tabla "Mandatory Reading Before Coding" — qué leer antes de tocar
     cada tipo de área del código.
   - Repetir: nunca diseñar e implementar en el mismo paso — la separación
     entre architect e implementer existe para cazar errores de diseño
     antes de que se conviertan en código.
7. **Testing** — cómo están organizados los tests reales de este repo.
8. **Engineering Principles** — consistencia sobre creatividad, seguridad
   por defecto, ningún código muerto ni abstracciones prematuras.

## Paso 4 — CLAUDE.md por subsistema (opcional, solo si el repo lo justifica)

Si hay carpetas grandes/complejas (ej. la capa de servicios, la capa de API,
los componentes de UI), agregales un CLAUDE.md propio con las convenciones
específicas de esa capa. Estos se cargan automáticamente cuando se abre un
archivo de esa carpeta — no hace falta que el agente los invoque a mano,
pero sí que los lea antes de editar ahí.

## Reglas para vos al ejecutar esto

- No inventes nombres de modelos, features, o convenciones que no viste en
  el código real de este repo.
- Si el proyecto es chico (sin capas claras, sin tests, un solo archivo),
  no fuerces las 5 capas ni los 4 agentes — adaptá el número de agentes y
  skills a la complejidad real que encontraste. La lógica que importa
  preservar es: separar planificar de implementar, y documentar el "cómo
  se trabaja acá" en CLAUDE.md para que valga para cualquier sesión futura.
- Al final, mostrame un resumen de qué agentes, skills y secciones de
  CLAUDE.md creaste, y por qué elegiste esa forma para este proyecto en
  particular.
```

---

## Nota

Esto instala una **lógica de trabajo agéntica genérica**, aplicable a
cualquier proyecto de tecnología o negocio — no asume ningún dominio,
stack ni caso de uso particular. Cada agente y skill que se cree va a
estar armado con el stack, las capas y las convenciones reales del
proyecto destino, porque el prompt le pide a Claude que explore antes de
escribir.
