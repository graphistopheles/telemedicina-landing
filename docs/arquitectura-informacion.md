# Arquitectura de información y de contenidos — Landing Medismart

> Landing B2B2C de telemedicina construida en AstroJS, pensada para un Headless CMS y para desplegarse en S3 + CloudFront (según la propuesta ejecutiva Webflow → Astro + AWS).

---

## 1. Principios de arquitectura

| # | Principio | Cómo se aplica |
|---|-----------|----------------|
| 1 | **Dos rutas, una página (B2B2C)** | El paciente es la ruta principal (decisión rápida, emocional). La empresa tiene una "puerta" visible desde el header y desde el hero, y una zona propia con color distinto (violeta profundo). |
| 2 | **La confianza se acumula a lo largo de la página** | Primero los sellos (atención), luego la prueba social (consideración) y al final el compliance en detalle (decisión). |
| 3 | **El compliance también se usa como argumento de venta** | El mismo sello se explica distinto según quién lo lea (toggle "Si eres paciente / Si eres empresa"). |
| 4 | **Menos esfuerzo para decidir** | Packs en vez de listas de exámenes, precios publicados y calculadora de copago antes de pedir datos. |
| 5 | **El contenido lleva al producto** | Todo recurso B2C enlaza a un pack, y todo recurso B2B lleva a un lead magnet o al ROI. |
| 6 | **Separar contenido y presentación** | Cada bloque repetible es un *content type*, y el copy de secciones es un *singleton*. Cambiar de CMS solo cambia el `loader`. |

---

## 2. Audiencias y tareas principales

| Audiencia | Qué necesita hacer | Objeción principal | Sección que la resuelve |
|-----------|-------------------|--------------------|-------------------------|
| **Paciente particular** | "Necesito un médico ahora, sin salir de casa" | ¿Cuánto me va a costar? ¿Es válido? | Hero → Servicios → Precios/Copago → FAQ |
| **Paciente preventivo** | "Quiero chequearme pero no sé qué pedir" | Complejidad | Packs + Recursos "Para cuidarte" |
| **Colaborador con beneficio** | "Mi empresa me dio Medismart, ¿cómo lo uso?" | ¿Mi jefe ve mis datos? | Calculadora (opción "Por mi empresa") + Seguridad |
| **RR.HH. / Gerencia de Personas** | "Necesito bajar el ausentismo y justificar la inversión" | ROI y adopción | Empresas (KPIs → ROI → Informe → Demo) |
| **TI / Compliance corporativo** | "¿Es seguro y legal?" | Datos clínicos, integración | Seguridad (vista empresa) + FAQ empresas |

---

## 3. Mapa del sitio

```
/ (Home: landing B2B2C)                       ← implementada
├── #inicio        Hero + puerta B2B
├── #sellos        Franja regulatoria
├── #como-funciona 3 pasos (AIda → video → Farmazon)
├── #servicios     Especialidades destacadas (+25)
├── #ecosistema    AIda, Triage, Farmazon, Wikidoc, crónicos, salud mental
├── #packs         Packs de salud
├── #precios       Calculadora de copago + lista de precios
├── #opiniones     Alcance, testimonios y profesionales
├── #referidos     Invita y gana
├── #seguridad     Compliance con doble lectura
├── #empresas      KPIs, testimonio B2B, pilares, #roi, #contacto-empresas
├── #recursos      Hub editorial dividido por audiencia
├── #preguntas     FAQ por audiencia
└── #agendar       CTA final para cada audiencia

/recursos/[id]     Detalle de recurso con CTA al pack o al ROI   ← implementada
/empresas          Landing B2B profunda (casos por industria)     ← siguiente fase
/packs/[id]        Ficha de pack (SEO transaccional)              ← siguiente fase
/especialidades    Las 25+ especialidades                         ← siguiente fase
/seguridad         Centro de confianza (políticas, SLA, API)      ← siguiente fase
/privacidad · /terminos · /derechos-del-paciente                  ← legales (migrar de Webflow)
```

---

## 4. Anatomía de la landing

El orden sigue el funnel del paciente y pasa a la ruta B2B después del bloque de confianza compartido.

| § | Sección | Audiencia | Etapa | Patrón de marketing (documento HealthTech) | CTA | KPI |
|---|---------|-----------|-------|---------------------------------------------|-----|-----|
| — | Hero | Pacientes | Atracción | Mensaje directo sin jerga ("Tu médico, hoy mismo. Sin salir de casa.") + acción inmediata | Atenderme ahora | CTR hero |
| — | Sellos | Ambos | Atracción | Compliance como activo publicitario | — | Rebote |
| 01 | Cómo funciona | Pacientes | Consideración | Menos esfuerzo para decidir | — | Scroll |
| 02 | Servicios | Pacientes | Consideración | Mensaje directo + precio "desde" | Tarjeta de especialidad | Clics |
| 03 | Ecosistema | Ambos | Consideración | Ecosistema de producto (retención, ticket) | — | Clics AIda/Farmazon |
| 04 | Packs | Pacientes | Conversión | **Empaquetamiento** ("Chequeo Preventivo", "Salud del Corazón", "ITS Full") | Quiero este pack | Ticket promedio |
| 05 | Precios | Pacientes | Conversión | **Transparencia financiera** + calculadora Fonasa/Isapre | Agendar con este valor | Uso de la calculadora |
| 06 | Opiniones | Pacientes | Consideración | **Prueba social + autoridad** (RNPI) | Verificar en RNPI | Tiempo en sección |
| 07 | Referidos | Pacientes | Fidelización | **Growth hacking** (invita y gana) | Copiar / WhatsApp | Códigos compartidos, CAC |
| 08 | Seguridad | Ambos | Consideración | **Compliance como barrera frente a la competencia** (Ley 21.541, 21.719, CENS) | Solicitar documentación | Clics |
| 09 | Empresas | Empresas | Consideración | **Thought leadership con datos** (−25 % ausentismo, −23 % rotación) + **lead magnets** (calculadora ROI, whitepaper) | Agendar demo / Descargar | MQL |
| 10 | Recursos | Ambos | Atracción | Hub editorial + redes visuales | Leer / Ver reel | Lecturas que llevan a un pack |
| 11 | FAQ | Ambos | Conversión | Resolución de objeciones (FAQPage JSON-LD) | — | Aperturas |
| 12 | CTA final | Ambos | Conversión | CTA para cada audiencia | Consultar / Demo | Conversión |

**Navegación:** header con 6 ítems como máximo, selector de audiencia **Personas / Empresas** que se actualiza según la zona visible y barra fija en móvil con la acción principal ("Un médico hoy, 24/7" + "Atenderme"). El footer muestra el mapa completo agrupado en **Personas / Empresas / Confianza**.

---

## 5. Modelo de contenidos

### 5.1 Content types (colecciones) — `src/content.config.ts`

| Tipo | Campos clave | Relaciones | Quién lo edita |
|------|-------------|------------|----------------|
| `servicios` | nombre, beneficio (lenguaje llano), precioDesde, duración, disponibilidad, bonoFonasa | ← packs, ← testimonios | Producto |
| `ecosistema` | nombre, tipo, beneficio, icono | — | Producto |
| `packs` | nombre, promesa, idealPara, precio, **precioSeparado** (referencia de ahorro), incluye[], pilar, destacado | → servicios[] | Marketing |
| `testimonios` | autor, ciudad, rating, texto (≤280), audiencia, cargo, **verificado**, fecha | → servicio | Marketing / CX |
| `profesionales` | nombre, especialidad, años | — | Dirección médica |
| `certificaciones` | sigla, nombre, emisor, tipo, **paraPacientes**, **paraEmpresas** | — | Legal / Compliance |
| `metricas` | valor, etiqueta, contexto, **fuente**, audiencia | — | Marketing B2B |
| `faqs` | pregunta, respuesta, audiencia, categoría | — | CX |
| `recursos` | título, bajada, audiencia, etapa, pilar, formato, canal, **packRelacionado**, leadMagnet | → packs | Copywriter |

### 5.2 Singletons — `src/data/`

| Archivo | Contenido |
|---------|-----------|
| `site.ts` | Marca, lema, contacto, redes, navegación principal y footer |
| `home.ts` | **Composición de la página**: orden de secciones + metadatos estratégicos + copy de cada sección |
| `coberturas.ts` | Reglas de la calculadora de copago (Fonasa, Isapre, empresa, particular) |
| `roi.ts` | Supuestos de la calculadora de ROI |

### 5.3 Relaciones

```
recursos ──packRelacionado──► packs ──servicios[]──► servicios ◄──servicio── testimonios
    │                                                                    
    └─ leadMagnet=true ──► formulario B2B (CRM)
```

### 5.4 Correspondencia con el Headless CMS

Los schemas Zod se traducen directamente a *content types* en Sanity, Storyblok o Contentful. `home.ts` corresponde a un documento "Página" con un campo *blocks* (modular content) donde cada bloque es una sección. Al conectar el CMS solo cambia el `loader` de cada colección; los componentes no se tocan.

---

## 6. Taxonomías compartidas

| Taxonomía | Valores | Para qué sirve |
|-----------|---------|----------------|
| **audiencia** | pacientes · empresas · ambos | Filtrar recursos y FAQ, colorear zonas y segmentar la analítica |
| **etapa** | atracción · consideración · conversión · fidelización | Planificar el calendario editorial y medir el funnel |
| **pilar** | prevención · salud-mental · salud-sexual · cardiovascular · bienestar-laboral · gobernanza-datos · interoperabilidad | Territorios editoriales; cada pilar B2C tiene un pack asociado |
| **formato** | artículo · guía · whitepaper · webinar · reel · calculadora | Elegir la plantilla y el ícono |
| **canal** | blog · linkedin · instagram · tiktok · evento | Plan de distribución (B2B en LinkedIn/eventos, B2C en Instagram/TikTok) |

---

## 7. Medición integrada

- Cada `<section>` expone `data-audiencia`, `data-etapa` y `data-patron`.
- Cada CTA lleva `data-cta="<seccion>-<accion>"`. Un listener global envía `cta_click` a `dataLayer` con sección, audiencia y etapa.
- Los formularios B2B envían `lead_submit`.
- Resultado: en GA4 se puede comparar la conversión por patrón de marketing (por ejemplo, packs frente a calculadora) sin configurar etiquetas una por una.

---

## 8. Gobernanza del contenido (según la propuesta Astro + AWS)

| Rol | Qué hace | Dónde |
|-----|----------|-------|
| Copywriter | Recursos, FAQ, copy de secciones | CMS → publica → webhook → build (< 2 min) |
| Marketing | Packs, testimonios, métricas, orden de secciones | CMS (singleton "Home") |
| Legal / Compliance | Certificaciones y textos legales | CMS (con aprobación) |
| Desarrollo / Diseño | Nuevas secciones o componentes | Git → CI/CD → S3 + CloudFront |

---

## 9. Contenido que hay que validar antes de publicar ⚠️

Datos obtenidos de medismart.live: lema, claim B2B, ecosistema (AIda, Triage, Farmazon, Wikidoc), +25 especialidades, +7 M de usuarios en 8 países, WhatsApp, email, horario, CENS, Pro Salud Chile, +31 % de productividad y −19 % de errores.

**Son placeholders y deben reemplazarse o validarse:**

- **Precios** de servicios y packs, y porcentajes de cobertura Fonasa/Isapre.
- **Testimonios y profesionales**: son ficticios. No se publican hasta tener testimonios verificados reales, con consentimiento.
- **Métricas −25 % / −23 %**: vienen del benchmark sectorial del documento HealthTech. Hay que citar la fuente o reemplazarlas por datos propios.
- **Programa de referidos** (montos y código), **plazos de implementación** y la regla de anonimización (mínimo 10 personas).
- **Sellos**: confirmar cuáles tiene Medismart formalmente (cifrado E2E, adhesión a la Ley 21.719) y cambiar el isotipo por el **SVG oficial**.
- URLs oficiales de redes sociales y endpoint del CRM para los formularios (`data-endpoint`).
