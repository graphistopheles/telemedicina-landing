/**
 * SINGLETON "Configuración del sitio"
 * Marca, navegación global y datos de contacto. En el CMS es un documento único.
 * Cambiar el nombre de marca aquí la actualiza en todo el sitio.
 */
export const site = {
  marca: 'Medismart',
  marcaCompleta: 'Medismart',
  claim: 'Salud, bienestar y protección integral al alcance de todos',
  lema: 'Con respeto, cuidamos mejor',
  url: 'https://www.medismart.live',
  telefono: '+56 9 4804 2543', // WhatsApp de atención (medismart.live)
  horario: 'Lun a vie 8:00-22:00 · Sáb y dom 8:00-20:00',
  whatsapp: 'https://wa.me/56948042543',
  email: 'contacto@medismart.live',
  emailEmpresas: 'contacto@medismart.live',
  presencia: '+7 millones de usuarios en 8 países de Latinoamérica',
  appUrl: '/#agendar',
  // CTA principal B2C: mismo texto en header, menú, hero y cierre (una etiqueta por intención).
  ctaPaciente: 'Atenderme ahora',
  // Barra fija móvil: titular, apoyo y botón corto.
  barraMovil: { titulo: 'Un médico hoy, 24/7', apoyo: 'Con Fonasa e Isapre', cta: 'Atenderme' },
  redes: [
    // TODO: reemplazar por las URLs oficiales de cada perfil.
    { nombre: 'Instagram', url: 'https://www.instagram.com/', handle: 'Medismart' },
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/', handle: 'Medismart' },
    { nombre: 'YouTube', url: 'https://www.youtube.com/', handle: 'Medismart' },
    { nombre: 'Spotify', url: 'https://open.spotify.com/', handle: 'Podcast Medismart' },
    { nombre: 'Facebook', url: 'https://www.facebook.com/', handle: 'Medismart' },
  ],
};

/**
 * Navegación primaria. Ordenada por la ruta del paciente (tarea → precio → confianza)
 * y cerrada con la puerta B2B. Máximo 6 ítems (ley de Hick).
 */
export const navPrincipal = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Ecosistema', href: '/#ecosistema' },
  { label: 'Packs', href: '/#packs' },
  { label: 'Precios', href: '/#precios' },
  { label: 'Seguridad', href: '/#seguridad' },
  { label: 'Recursos', href: '/#recursos' },
];

/** Selector de audiencia: bifurca la arquitectura en dos rutas desde el header. */
export const rutasAudiencia = [
  { id: 'pacientes', label: 'Personas', href: '/#inicio' },
  { id: 'empresas', label: 'Empresas', href: '/#empresas' },
] as const;

/** Footer: mapa del sitio completo (incluye páginas de 2º nivel previstas). */
export const navFooter = [
  {
    titulo: 'Personas',
    links: [
      { label: 'Consulta inmediata', href: '/#agendar' },
      { label: 'Especialidades', href: '/#servicios' },
      { label: 'Farmazon, AIda y Triage', href: '/#ecosistema' },
      { label: 'Packs de salud', href: '/#packs' },
      { label: 'Calculadora de copago', href: '/#precios' },
      { label: 'Invita y gana', href: '/#referidos' },
    ],
  },
  {
    titulo: 'Empresas',
    links: [
      { label: 'Beneficio de salud', href: '/#empresas' },
      { label: 'Calculadora de ROI', href: '/#roi' },
      { label: 'Informe 2026', href: '/#recursos' },
      { label: 'Integraciones', href: '/#seguridad' },
      { label: 'Hablar con ventas', href: '/#contacto-empresas' },
    ],
  },
  {
    titulo: 'Confianza',
    links: [
      { label: 'Seguridad y cumplimiento', href: '/#seguridad' },
      { label: 'Nuestros profesionales', href: '/#opiniones' },
      { label: 'Política de privacidad', href: '/privacidad' },
      { label: 'Términos y condiciones', href: '/terminos' },
      { label: 'Derechos del paciente', href: '/derechos-del-paciente' },
    ],
  },
];
