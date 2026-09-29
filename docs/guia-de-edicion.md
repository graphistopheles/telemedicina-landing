# Guía de edición: textos, imágenes y diseño

Esta guía es para quien mantenga la landing sin conocer el código en detalle.
**Regla general:** los textos y las imágenes nunca se editan dentro de los componentes
(`src/components/…`). Se editan en los archivos de datos listados abajo.

---

## 1. ¿Dónde se edita cada cosa?

| Quiero cambiar… | Archivo |
|---|---|
| Titulares, bajadas y botones de cualquier sección | `src/data/home.ts` → objeto `copy` (una clave por sección) |
| Orden de las secciones, ocultar una | `src/data/home.ts` → lista `secciones` (`visible: false` la oculta) |
| Menú, footer, teléfono, email, redes | `src/data/site.ts` |
| Imágenes (todas) | `src/data/imagenes.ts` + archivos en `public/img/` |
| Especialidades y precios | `src/content/servicios.json` |
| Packs de salud | `src/content/packs.json` |
| Productos del ecosistema (AIda, Triage…) | `src/content/ecosistema.json` |
| Testimonios | `src/content/testimonios.json` |
| Profesionales destacados | `src/content/profesionales.json` |
| Sellos y normativas | `src/content/certificaciones.json` |
| Métricas B2B (−25 %, +31 %…) | `src/content/metricas.json` |
| Preguntas frecuentes | `src/content/faqs.json` |
| Artículos, guías y webinars | `src/content/recursos/*.md` (un archivo por recurso) |
| Reglas de la calculadora de copago | `src/data/coberturas.ts` |
| Supuestos de la calculadora de ROI | `src/data/roi.ts` |

Cada componente tiene al inicio un comentario que indica de qué archivos toma sus datos.

---

## 2. Imágenes

Todas las imágenes están declaradas en **`src/data/imagenes.ts`**. Hoy se muestran como
**placeholders**: un marco con el nombre del slot, el tamaño recomendado, la ruta destino y la
foto de referencia. En el HTML publicado también queda un comentario `<!-- PLACEHOLDER … -->`
con esos datos.

**Para poner la imagen definitiva:**
1. Exporta la foto con el tamaño indicado en `tamano` (JPG o WebP, calidad ~80, < 250 KB).
2. Súbela a la ruta de `archivo` (ej. `public/img/hero/paciente-en-casa.jpg`).
3. En `imagenes.ts`, cambia `estado: 'placeholder'` por `estado: 'final'`.
4. Revisa que el texto `alt` describa la foto real.

**Para revisar la composición con las fotos de referencia** (solo en local), cambia
`MOSTRAR_REFERENCIAS` a `true` en `imagenes.ts`. No lo publiques así.

La tabla completa de slots está en [`public/img/README.md`](../public/img/README.md).

Otros assets gráficos pendientes:
- **Portada del informe 2026:** bloque marcado con `PORTADA DEL INFORME` en `src/components/sections/Business.astro`.

---

## 3. Titulares con dos tonos

Los titulares de sección que tienen **dos frases** se muestran automáticamente en dos tonos
(la segunda en gris), igual que en las referencias. Por ejemplo:

- `"Tres pasos. Ninguna sala de espera."` → "Tres pasos." en color y "Ninguna sala de espera." en gris.
- `"Lo que necesitas, cuando lo necesitas"` → se divide en la coma.
- Si el titular tiene una sola frase, se muestra completo en color principal.

---

## 4. Sistema visual (para diseño y desarrollo)

Todo vive en `src/styles/global.css` como variables CSS:

**Paleta oficial Medismart:** azul marino `#030c43`, azul `#529de8`, violeta `#7e42d3`.

| Token | Uso |
|---|---|
| `--navy` / `--text` `#030c43` | Texto principal, logo y fondo de la zona Empresas (`--deep`) |
| `--accent` `#7e42d3` | Único acento de UI: botones principales y estados activos |
| `--blue` `#529de8` | Segundo color de marca: degradados, brillos y datos sobre fondo profundo |
| `--grad` | Degradado del logo (azul a violeta), solo en momentos de marca |
| `--accent-ink` / `--blue-ink` | Versiones oscuras para usar como texto sobre fondo claro (contraste AA) |
| `--text-2` / `--text-3` | Texto secundario y tono de énfasis gris de los titulares |
| `--bg` / `--bg-2` / `--surface` | Fondo base, fondo alterno y tarjetas |

- **Logo:** `src/components/ui/Logo.astro` (SVG oficial inline). Sus partes azul marino usan
  `currentColor`, así que se adaptan solas al modo oscuro. Archivo original en
  `public/img/marca/logo.svg`; isotipo suelto en `public/img/marca/simbolo.svg`; favicon en `public/favicon.svg`.
- **Tipografía:** Poppins (titulares), Mulish (texto), IBM Plex Mono (etiquetas y datos técnicos).
- **Radios:** botones y chips en píldora, tarjetas de 20px, campos de 12px.
- **Íconos:** Phosphor (`@phosphor-icons/core`). Para sumar uno, ver el comentario en `src/components/ui/Icon.astro`.
- **Modo oscuro:** automático según el sistema operativo, sobre los mismos tokens.
- **Animaciones:** se desactivan solas si la persona tiene activado "reducir movimiento".

---

## 5. Lo que NO conviene cambiar

- Los `id` de las secciones (`#servicios`, `#empresas`, `#roi`, `#contacto-empresas`…): los usan el menú, los enlaces y la analítica.
- Los atributos `data-cta`, `data-audiencia`, `data-etapa` y `data-patron`: alimentan los eventos de GA4.
- Los nombres de los campos de los formularios.

---

## 6. Reglas de redacción (neuromarketing aplicado)

Usa estas reglas al escribir o editar textos para mantener el tono persuasivo de la landing.

| Técnica | Cómo se aplica | Ejemplo en la landing |
|---|---|---|
| Autorreferencia | Segunda persona y presente | "Tu médico, hoy mismo." |
| CTA en primera persona | El botón completa la frase "Quiero…" | "Atenderme ahora", "Quiero este pack" |
| Aversión a la pérdida | Nombrar lo que se evita antes que lo que se gana | "Sin letra chica ni cobros sorpresa", "¿Cuánto le cuesta hoy el ausentismo a tu empresa?" |
| Tensión y alivio | Titular en dos tiempos: problema y resolución | "Cuando algo duele, no quieres esperar." |
| Fluidez cognitiva | Frases cortas, sin jerga médica, una idea por frase | "Escríbele como se lo dirías a un amigo." |
| Prueba social | Cifras reales de uso y verbo en presente | "+7 millones de personas ya se atienden con Medismart" |
| Autoridad verificable | Invitar a comprobar, no solo afirmar | "Profesionales verificables en la Superintendencia" |
| Anclaje de precio | Mostrar el precio por separado tachado junto al del pack | Tarjetas de Packs |
| Reciprocidad | Regalar antes de pedir | "Regala salud. Gana $5.000 por cada amigo." |
| Reversión de riesgo | Quitar la incertidumbre justo antes del clic | "Conoce tu copago antes de pagar." |
| Regla pico-final | El cierre resume la pérdida evitada y repite el CTA | "Deja de postergar esa consulta." |

**Límites que no se cruzan:**
- No inventar cifras, testimonios ni urgencia falsa (contadores, "últimos cupos").
- No prometer tiempos de espera o resultados clínicos que no estén medidos.
- En salud, la emoción se usa para acompañar, nunca para asustar.
- Hero: bajada de 20 palabras como máximo. Botones: 3 palabras como máximo.
- Una sola etiqueta por intención en toda la página ("Atenderme ahora" para consultar, "Agendar demo" para empresas).
