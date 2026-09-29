/**
 * MODELO DE CONTENIDOS
 * ---------------------------------------------------------------------------
 * Cada colección es un "content type" que se replica 1:1 en el Headless CMS
 * (Sanity / Storyblok / Contentful). Hoy se alimenta desde archivos locales;
 * al conectar el CMS solo cambia el `loader`, no los componentes.
 *
 * Taxonomías transversales (ver docs/arquitectura-informacion.md §5):
 *   audiencia  → quién lo consume         (pacientes | empresas | ambos)
 *   etapa      → momento del funnel       (atraccion | consideracion | conversion | fidelizacion)
 *   pilar      → territorio editorial     (prevencion | salud-mental | ... )
 */
import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const audiencia = z.enum(['pacientes', 'empresas', 'ambos']);
export const etapa = z.enum(['atraccion', 'consideracion', 'conversion', 'fidelizacion']);
export const pilar = z.enum([
  'prevencion',
  'salud-mental',
  'salud-sexual',
  'cardiovascular',
  'bienestar-laboral',
  'gobernanza-datos',
  'interoperabilidad',
]);

/** Servicio clínico unitario (lo que el paciente puede consultar hoy). */
const servicios = defineCollection({
  loader: file('src/content/servicios.json'),
  schema: z.object({
    nombre: z.string(),
    // Beneficio en lenguaje llano, sin jerga médica (patrón B2C "mensaje directo").
    beneficio: z.string(),
    icono: z.string(),
    precioDesde: z.number().int().positive(),
    duracionMin: z.number().int(),
    disponibilidad: z.string(),
    bonoFonasa: z.boolean(),
    orden: z.number().int(),
  }),
});

/** Producto del ecosistema digital Medismart (AIda, Triage, Farmazon…). */
const ecosistema = defineCollection({
  loader: file('src/content/ecosistema.json'),
  schema: z.object({
    nombre: z.string(),
    tipo: z.string(),
    beneficio: z.string(),
    icono: z.string(),
    orden: z.number().int(),
  }),
});

/** Pack = empaquetamiento de servicios (patrón B2C "Packs"). */
const packs = defineCollection({
  loader: file('src/content/packs.json'),
  schema: z.object({
    nombre: z.string(),
    promesa: z.string(),
    idealPara: z.string(),
    precio: z.number().int().positive(),
    precioSeparado: z.number().int().positive(), // precio sumando los servicios por separado → ancla de ahorro
    incluye: z.array(z.string()).min(1),
    servicios: z.array(reference('servicios')),
    pilar,
    destacado: z.boolean().default(false),
    etiqueta: z.string().optional(),
    orden: z.number().int(),
  }),
});

/** Testimonio verificado (patrón "Prueba social"). */
const testimonios = defineCollection({
  loader: file('src/content/testimonios.json'),
  schema: z.object({
    autor: z.string(),
    ciudad: z.string(),
    rating: z.number().min(1).max(5),
    texto: z.string().max(280),
    servicio: reference('servicios').optional(),
    audiencia,
    cargo: z.string().optional(), // solo testimonios B2B
    verificado: z.boolean(),
    fecha: z.coerce.date(),
  }),
});

/** Profesional acreditado (autoridad). */
const profesionales = defineCollection({
  loader: file('src/content/profesionales.json'),
  schema: z.object({
    nombre: z.string(),
    especialidad: z.string(),
    anios: z.number().int(),
    iniciales: z.string().length(2),
  }),
});

/** Certificaciones y normativas (patrón "Compliance como activo publicitario"). */
const certificaciones = defineCollection({
  loader: file('src/content/certificaciones.json'),
  schema: z.object({
    nombre: z.string(),
    emisor: z.string(),
    tipo: z.enum(['normativa', 'seguridad', 'interoperabilidad', 'acreditacion']),
    // Mensaje para cada audiencia: el mismo sello se "traduce" distinto.
    paraPacientes: z.string(),
    paraEmpresas: z.string(),
    sigla: z.string(),
  }),
});

/** Métricas de impacto (patrón B2B "Thought leadership con datos"). */
const metricas = defineCollection({
  loader: file('src/content/metricas.json'),
  schema: z.object({
    valor: z.string(),
    etiqueta: z.string(),
    contexto: z.string(),
    fuente: z.string(),
    audiencia,
  }),
});

/** Preguntas frecuentes (objeciones), agrupadas por audiencia. */
const faqs = defineCollection({
  loader: file('src/content/faqs.json'),
  schema: z.object({
    pregunta: z.string(),
    respuesta: z.string(),
    audiencia,
    categoria: z.enum(['precios', 'cobertura', 'seguridad', 'uso', 'contratacion']),
    orden: z.number().int(),
  }),
});

/**
 * Recursos editoriales: artículos, whitepapers, webinars, reels.
 * Un recurso B2C siempre enlaza a un pack (contenido → producto).
 * Un recurso B2B puede ser "lead magnet" (contenido → formulario).
 */
const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: z.object({
    titulo: z.string(),
    bajada: z.string(),
    audiencia,
    etapa,
    pilar,
    formato: z.enum(['articulo', 'guia', 'whitepaper', 'webinar', 'reel', 'calculadora']),
    canal: z.enum(['blog', 'linkedin', 'instagram', 'tiktok', 'evento']),
    lecturaMin: z.number().int().optional(),
    packRelacionado: reference('packs').optional(),
    leadMagnet: z.boolean().default(false),
    fecha: z.coerce.date(),
  }),
});

export const collections = {
  servicios,
  ecosistema,
  packs,
  testimonios,
  profesionales,
  certificaciones,
  metricas,
  faqs,
  recursos,
};
