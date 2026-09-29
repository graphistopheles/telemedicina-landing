/**
 * ===========================================================================
 * MANIFIESTO DE IMÁGENES
 * ===========================================================================
 * Todas las imágenes del sitio se declaran AQUÍ. Los componentes solo piden un
 * "slot" por su clave (ej. <Media slot="hero" />), así que para cambiar una
 * foto nunca hay que tocar un componente.
 *
 * CÓMO REEMPLAZAR UNA IMAGEN
 *   1. Exporta el asset final en el tamaño indicado en `tamano` (JPG o WebP,
 *      calidad ~80, idealmente < 250 KB).
 *   2. Guárdalo en la ruta indicada en `archivo` (carpeta /public/img/…).
 *   3. Cambia `estado` de 'placeholder' a 'final'.
 *   Listo: el componente mostrará tu archivo en lugar del placeholder.
 *
 * CAMPOS
 *   archivo     Ruta pública donde debe quedar el asset definitivo.
 *   referencia  Foto de referencia (Unsplash, licencia libre) que muestra el
 *               tipo de imagen buscada. NO es el asset final.
 *   tamano      Dimensiones recomendadas de exportación (ancho × alto px).
 *   alt         Texto alternativo (accesibilidad y SEO). Describe la escena.
 *   ubicacion   Dónde aparece en la landing.
 *   direccion   Brief para fotografía / diseño.
 *   estado      'placeholder' → muestra el marco con los datos del asset.
 *               'final'       → muestra /public + `archivo`.
 *
 * VISTA PREVIA CON REFERENCIAS
 *   Para revisar la composición con las fotos de referencia (sin publicarlas),
 *   cambia MOSTRAR_REFERENCIAS a true. Déjalo en false en producción.
 * ===========================================================================
 */

export const MOSTRAR_REFERENCIAS = false;

export type SlotImagen = {
  archivo: string;
  referencia: string;
  tamano: string;
  alt: string;
  ubicacion: string;
  direccion: string;
  estado: 'placeholder' | 'final';
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=1600&q=80&auto=format&fit=crop`;

export const imagenes = {
  hero: {
    archivo: '/img/hero/paciente-en-casa.jpg',
    referencia: unsplash('1713865469952-ab0c56bbddd7'),
    tamano: '1400 × 1750',
    alt: 'Mujer sonriendo en el sofá de su casa mientras saluda a su médico por videollamada',
    ubicacion: 'Hero · columna derecha, detrás de las tarjetas de conversación',
    direccion: 'Paciente real en su hogar, luz natural, gesto cercano. Formato vertical. Dejar aire en el tercio inferior para las tarjetas.',
    estado: 'placeholder',
  },
  'servicio-medicina-general': {
    archivo: '/img/servicios/medicina-general.jpg',
    referencia: unsplash('1758691462743-f9fc9e430d39'),
    tamano: '1200 × 900',
    alt: 'Médica atendiendo a una paciente por videoconsulta desde su escritorio',
    ubicacion: 'Servicios · tarjeta grande (Medicina general)',
    direccion: 'Profesional Medismart en videoconsulta, pantalla visible, ambiente clínico cálido.',
    estado: 'placeholder',
  },
  'servicio-pediatria': {
    archivo: '/img/servicios/pediatria.jpg',
    referencia: unsplash('1758691463331-2ac00e6f676f'),
    tamano: '900 × 900',
    alt: 'Pediatra examinando a un niño junto a su madre',
    ubicacion: 'Servicios · tarjeta Pediatría',
    direccion: 'Familia y pediatra, tono tranquilizador. Formato cuadrado.',
    estado: 'placeholder',
  },
  'pack-destacado': {
    archivo: '/img/packs/chequeo-preventivo.jpg',
    referencia: unsplash('1780461159687-281752b8a85a'),
    tamano: '1200 × 600',
    alt: 'Control de presión arterial en casa con un monitor digital',
    ubicacion: 'Packs · tarjeta del pack destacado',
    direccion: 'Detalle de prevención en el hogar (toma de presión, muestra a domicilio). Puede ir en blanco y negro.',
    estado: 'placeholder',
  },
  'opiniones-profesional': {
    archivo: '/img/opiniones/profesional.jpg',
    referencia: unsplash('1758691463606-1493d79cc577'),
    tamano: '1200 × 960',
    alt: 'Médico de Medismart conversando con un paciente por videollamada',
    ubicacion: 'Opiniones · columna de autoridad junto a los profesionales',
    direccion: 'Retrato de un profesional real de la red (con autorización de uso de imagen).',
    estado: 'placeholder',
  },
  'empresas-equipo': {
    archivo: '/img/empresas/equipo.jpg',
    referencia: unsplash('1758691737124-05c5bffe46f0'),
    tamano: '1600 × 1200',
    alt: 'Equipo de trabajo conversando alrededor de un computador en una oficina luminosa',
    ubicacion: 'Empresas · junto al testimonio corporativo',
    direccion: 'Equipo diverso de un cliente corporativo, ambiente real de oficina.',
    estado: 'placeholder',
  },
  'recurso-destacado': {
    archivo: '/img/recursos/destacado.jpg',
    referencia: unsplash('1758273241086-f3585ef8c2f8'),
    tamano: '1200 × 750',
    alt: 'Psicóloga escuchando a una paciente durante una sesión',
    ubicacion: 'Recursos · portada del primer recurso de cada pestaña',
    direccion: 'Imagen editorial del tema del artículo destacado. Cambiar junto con el recurso.',
    estado: 'placeholder',
  },
} satisfies Record<string, SlotImagen>;

export type ClaveImagen = keyof typeof imagenes;
