# Assets de imagen

Guarda aquí las imágenes definitivas. Cada archivo corresponde a un **slot** declarado en
`src/data/imagenes.ts`. Después de subir un archivo, cambia el `estado` de ese slot a `'final'`.

| Slot | Ruta destino | Tamaño | Dónde aparece | Foto de referencia (no usar como final) |
|------|--------------|--------|---------------|------------------------------------------|
| `hero` | `public/img/hero/paciente-en-casa.jpg` | 1400 × 1750 px | Hero · columna derecha, detrás de las tarjetas de conversación | https://images.unsplash.com/photo-1713865469952-ab0c56bbddd7 |
| `servicio-medicina-general` | `public/img/servicios/medicina-general.jpg` | 1200 × 900 px | Servicios · tarjeta grande (Medicina general) | https://images.unsplash.com/photo-1758691462743-f9fc9e430d39 |
| `servicio-pediatria` | `public/img/servicios/pediatria.jpg` | 900 × 900 px | Servicios · tarjeta Pediatría | https://images.unsplash.com/photo-1758691463331-2ac00e6f676f |
| `pack-destacado` | `public/img/packs/chequeo-preventivo.jpg` | 1200 × 600 px | Packs · tarjeta del pack destacado | https://images.unsplash.com/photo-1780461159687-281752b8a85a |
| `opiniones-profesional` | `public/img/opiniones/profesional.jpg` | 1200 × 960 px | Opiniones · columna de autoridad junto a los profesionales | https://images.unsplash.com/photo-1758691463606-1493d79cc577 |
| `empresas-equipo` | `public/img/empresas/equipo.jpg` | 1600 × 1200 px | Empresas · junto al testimonio corporativo | https://images.unsplash.com/photo-1758691737124-05c5bffe46f0 |
| `recurso-destacado` | `public/img/recursos/destacado.jpg` | 1200 × 750 px | Recursos · portada del primer recurso de cada pestaña | https://images.unsplash.com/photo-1758273241086-f3585ef8c2f8 |
| `logo` | `public/img/marca/logo.svg` | SVG | Header y footer (ya aplicado, vía `Logo.astro`) | - |
| `informe` | `public/img/empresas/informe-2026.jpg` | 600 × 800 px | Portada del informe descargable (`Business.astro`) | - |

**Formato recomendado:** JPG o WebP, calidad ~80, menos de 250 KB.
Las fotos de referencia son de Unsplash (licencia libre) y solo muestran el tipo de imagen buscada.
