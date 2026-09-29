/**
 * SINGLETON "Página: Home"
 * ---------------------------------------------------------------------------
 * Composición modular de la landing (equivalente a un "page builder" en el
 * Headless CMS). Marketing puede reordenar, ocultar o reescribir secciones sin
 * tocar componentes. Cada sección declara su intención estratégica:
 *
 *   audiencia → a quién le habla
 *   etapa     → qué momento del funnel resuelve
 *   patron    → patrón de marketing de contenidos que aplica
 *   kpi       → cómo sabremos si funciona
 *
 * Estos metadatos se renderizan como data-attributes en el HTML para que la
 * analítica (GA4 / Tag Manager) segmente scroll y clics sin configuración extra.
 */

export type Audiencia = 'pacientes' | 'empresas' | 'ambos';
export type Etapa = 'atraccion' | 'consideracion' | 'conversion' | 'fidelizacion';

export interface SeccionMeta {
  id: string;
  componente: string;
  audiencia: Audiencia;
  etapa: Etapa;
  patron: string;
  kpi: string;
  visible?: boolean;
}

export const seo = {
  titulo: 'Medismart · Telemedicina 24/7 con Fonasa e Isapre',
  descripcion:
    'Habla hoy con un médico por video, 24/7 y en más de 25 especialidades. Conoce tu copago antes de agendar. Beneficio de salud digital para empresas.',
};

export const secciones: SeccionMeta[] = [
  { id: 'inicio', componente: 'Hero', audiencia: 'pacientes', etapa: 'atraccion', patron: 'Mensaje directo sin jerga + acción inmediata', kpi: 'CTR a "Atenderme ahora"' },
  { id: 'sellos', componente: 'TrustBar', audiencia: 'ambos', etapa: 'atraccion', patron: 'Compliance como activo publicitario', kpi: 'Rebote < 40%' },
  { id: 'como-funciona', componente: 'HowItWorks', audiencia: 'pacientes', etapa: 'consideracion', patron: 'Reducción de fricción cognitiva', kpi: 'Scroll a Servicios' },
  { id: 'servicios', componente: 'Services', audiencia: 'pacientes', etapa: 'consideracion', patron: 'Mensaje directo + precio "desde"', kpi: 'Clics por especialidad' },
  { id: 'ecosistema', componente: 'Ecosystem', audiencia: 'ambos', etapa: 'consideracion', patron: 'Ecosistema de producto (retención y ticket)', kpi: 'Clics a AIda / Farmazon' },
  { id: 'packs', componente: 'Packs', audiencia: 'pacientes', etapa: 'conversion', patron: 'Empaquetamiento de servicios', kpi: 'Ticket promedio / add-to-cart' },
  { id: 'precios', componente: 'Pricing', audiencia: 'pacientes', etapa: 'conversion', patron: 'Transparencia financiera + calculadora de copago', kpi: 'Uso de calculadora → agenda' },
  { id: 'opiniones', componente: 'SocialProof', audiencia: 'pacientes', etapa: 'consideracion', patron: 'Prueba social verificada + autoridad', kpi: 'Tiempo en sección' },
  { id: 'referidos', componente: 'Referral', audiencia: 'pacientes', etapa: 'fidelizacion', patron: 'Programa de referidos (growth)', kpi: 'Códigos compartidos / CAC' },
  { id: 'seguridad', componente: 'Compliance', audiencia: 'ambos', etapa: 'consideracion', patron: 'Compliance como foso defensivo', kpi: 'Clics a detalle técnico' },
  { id: 'empresas', componente: 'Business', audiencia: 'empresas', etapa: 'consideracion', patron: 'Thought leadership + lead magnet (ROI)', kpi: 'MQL generados' },
  { id: 'recursos', componente: 'Resources', audiencia: 'ambos', etapa: 'atraccion', patron: 'Hub editorial por audiencia', kpi: 'Lecturas → pack / descarga' },
  { id: 'preguntas', componente: 'Faq', audiencia: 'ambos', etapa: 'conversion', patron: 'Resolución de objeciones', kpi: 'Aperturas por pregunta' },
  { id: 'agendar', componente: 'FinalCta', audiencia: 'ambos', etapa: 'conversion', patron: 'CTA dual por audiencia', kpi: 'Conversión final' },
];

/**
 * Copy de cada sección. Clave = id de la sección.
 * ---------------------------------------------------------------------------
 * Criterios de redacción (neuromarketing aplicado, ver docs/guia-de-edicion.md §6):
 * - Segunda persona y presente ("tú", "hoy"): activa la autorreferencia.
 * - CTA en primera persona ("Atenderme ahora", "Quiero este pack").
 * - Nombrar la pérdida que se evita (filas, cobros sorpresa, ausentismo): la
 *   aversión a la pérdida mueve más que una ganancia equivalente.
 * - Titulares cortos en dos tiempos (tensión y alivio): SectionHeader pinta la
 *   segunda frase en gris automáticamente.
 * - Solo cifras reales o marcadas como ejemplo. Nada de números inventados.
 */
export const copy = {
  inicio: {
    eyebrow: '24/7, con Fonasa e Isapre',
    titulo: 'Tu médico, hoy mismo.',
    tituloAcento: 'Sin salir de casa.',
    // Máx. ~20 palabras: el hero debe leerse de un vistazo.
    bajada:
      'Videoconsulta 24/7 en más de 25 especialidades, receta en tu celular y remedios a domicilio con Farmazon.',
    ctaPrimario: { label: 'Atenderme ahora', href: '#agendar' },
    ctaSecundario: { label: 'Ver packs y precios', href: '#packs' },
    // Se muestran en la franja de sellos, bajo el hero (prueba social + autoridad).
    pruebas: ['+7 millones de personas ya se atienden con Medismart', 'Profesionales verificables en la Superintendencia', 'Telemedicina certificada por CENS'],
    puertaB2B: { label: '¿Lideras un equipo? Dales un beneficio de salud que sí van a usar.', cta: 'Ver solución para empresas', href: '#empresas' },
    // Tarjeta de profesional que aparece sobre la foto del hero.
    tarjeta: { medico: 'Dra. Fernanda Soto', especialidad: 'Medicina familiar', estado: 'Disponible ahora', espera: '24/7' },
    // Conversación de ejemplo con AIda que se muestra sobre la foto del hero.
    conversacion: {
      paciente: { nombre: 'Camila', hora: '21:40', texto: 'Tengo fiebre y dolor de garganta desde ayer. ¿Me pueden atender ahora?' },
      aida: { hora: '21:40', titulo: 'Videoconsulta confirmada', filas: [['Especialidad', 'Medicina general'], ['Inicio', 'En minutos'], ['Previsión', 'Fonasa']] },
    },
  },
  sellos: {
    // Título accesible (lectores de pantalla) de la franja de sellos.
    titulo: 'Regulados y certificados para cuidar tu salud y tus datos',
  },
  'como-funciona': {
    eyebrow: 'Así de simple',
    titulo: 'Tres pasos. Cero salas de espera.',
    pasos: [
      { n: '01', titulo: 'Cuéntale a AIda qué sientes', texto: 'Escríbele como se lo dirías a un amigo. AIda te lleva al especialista indicado entre más de 25.' },
      { n: '02', titulo: 'Habla con tu médico por video', texto: 'Desde el celular o el computador, a la hora que te acomode. Si quieres, mide antes tus signos vitales con Triage.' },
      { n: '03', titulo: 'Recibe receta y remedios en casa', texto: 'Receta, órdenes y licencia con la misma validez legal que una consulta presencial. Tus remedios llegan con Farmazon.' },
    ],
  },
  servicios: {
    eyebrow: 'Especialidades',
    titulo: 'Cuando algo duele, no quieres esperar.',
    bajada: 'Elige entre más de 25 especialidades por video. El precio lo ves antes de agendar, no después.',
  },
  ecosistema: {
    eyebrow: 'Ecosistema Medismart',
    titulo: 'Tu salud no termina cuando cortas la llamada.',
    bajada: 'AIda te orienta antes, tu médico te atiende durante y Farmazon te lleva los remedios después. Todo en una sola cuenta.',
  },
  packs: {
    eyebrow: 'Packs de salud',
    titulo: 'No tienes que saber qué exámenes pedir.',
    bajada: 'Elige tu pack y nosotros armamos el resto. Todo incluido, en una sola compra y más barato que por separado.',
  },
  precios: {
    eyebrow: 'Transparencia total',
    titulo: '¿Cuánto vas a pagar? Lo sabes en segundos.',
    bajada: 'Elige tu previsión y la atención. Tu copago aparece al instante, sin letra chica ni cobros sorpresa.',
    nota: 'Valores referenciales. El copago final depende de tu plan de salud y se confirma antes de pagar.',
  },
  opiniones: {
    eyebrow: 'Opiniones verificadas',
    titulo: 'Personas reales, atenciones reales.',
    bajada: 'Solo publicamos opiniones de pacientes que completaron su atención.',
    // TODO: reemplazar por datos reales (ratings de App Store / Google Play).
    alcance: { valor: '+7M', detalle: 'personas ya se atienden con Medismart', paises: ['Chile', 'Perú', 'Colombia', 'México', 'Ecuador', 'Bolivia', 'Brasil', 'Costa Rica'] },
  },
  referidos: {
    eyebrow: 'Invita y gana',
    titulo: 'Regala salud. Gana $5.000 por cada amigo.',
    bajada: 'Tu amigo recibe $5.000 de descuento en su primera consulta y tú ganas $5.000 en créditos cuando se atienda. Sin límite de amigos.',
    codigo: 'MEDISMART-CAMI5K',
  },
  seguridad: {
    eyebrow: 'Seguridad y cumplimiento',
    titulo: 'La confianza no se promete. Se certifica.',
    bajada: 'Tu información médica es tuya. Estos sellos lo respaldan, seas paciente o empresa.',
  },
  empresas: {
    eyebrow: 'Para empresas y RR.HH.',
    titulo: 'Equipos más sanos. Menos ausentismo y rotación.',
    bajada:
      'Telemedicina, salud mental y bienestar en un beneficio que tu equipo sí usa. RR.HH. ve indicadores agregados, nunca diagnósticos.',
    ctaPrimario: { label: 'Agendar demo', href: '#contacto-empresas' },
    ctaSecundario: { label: 'Calcular mi ahorro', href: '#roi' },
    roi: {
      // Encuadre de pérdida: primero el costo actual, luego el ahorro.
      titulo: '¿Cuánto le cuesta hoy el ausentismo a tu empresa?',
      bajada: 'Ingresa 4 datos. Estimamos tu ahorro con los resultados promedio del sector.',
    },
    pilares: [
      { titulo: 'Listo en 2 a 4 semanas', texto: 'Cargamos la nómina, lanzamos la campaña interna y hacemos el onboarding. RR.HH. no suma trabajo.' },
      { titulo: 'Un tablero para RR.HH.', texto: 'Uso, satisfacción y alertas de riesgo psicosocial. Siempre agregado y anónimo.' },
      { titulo: 'Un solo beneficio en 8 países', texto: 'La misma experiencia para tus equipos en Latinoamérica, integrada a tus sistemas vía API.' },
    ],
    leadMagnet: {
      titulo: 'Informe 2026: el costo oculto del ausentismo',
      // TODO: validar cifras del informe real antes de publicar.
      texto: 'Datos de 40 empresas chilenas y un plan de mitigación de riesgos psicosociales en 90 días.',
      cta: 'Descargar informe gratis',
    },
  },
  recursos: {
    eyebrow: 'Recursos',
    titulo: 'Aprende a cuidarte. Aprende a cuidar a tu equipo.',
    columnas: {
      pacientes: { titulo: 'Para cuidarte', bajada: 'Guías claras y reels cortos para decidir con confianza.' },
      empresas: { titulo: 'Para líderes', bajada: 'Informes, datos y eventos para quienes lideran personas.' },
    },
  },
  preguntas: {
    eyebrow: 'Preguntas frecuentes',
    titulo: 'Lo que todos preguntan antes de empezar',
  },
  agendar: {
    // Cierre (regla pico-final): pérdida que se evita + reversión de riesgo.
    pacientes: { titulo: 'Deja de postergar esa consulta.', texto: 'Te atiende un médico 24/7, sin filas. Paga con Fonasa, Isapre o tarjeta y conoce tu copago antes de pagar.', cta: 'Atenderme ahora' },
    empresas: { titulo: 'Un beneficio que tu equipo sí va a usar.', texto: 'En 30 minutos te mostramos cómo funcionaría en tu empresa, con un caso de tu industria.', cta: 'Agendar demo' },
  },
};

export type HomeCopy = typeof copy;
