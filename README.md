# Landing Medismart — AstroJS

Landing B2B2C de telemedicina para Medismart, con salida 100 % estática lista para S3 + CloudFront.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Estructura

```
src/
├── content.config.ts     Modelo de contenidos (content types con Zod)
├── content/              Datos de cada colección (JSON / Markdown) → luego vendrán del Headless CMS
├── data/                 Singletons: site, home (composición + copy), imagenes, coberturas, roi
├── components/
│   ├── ui/               Section, SectionHeader, Icon (Phosphor), Media (placeholders), LeadForm
│   └── sections/         Una sección de la landing por archivo
├── pages/
│   ├── index.astro       Arma la home a partir de data/home.ts
│   └── recursos/[id].astro
└── styles/global.css     Tokens de marca Medismart
docs/arquitectura-informacion.md   ← Arquitectura de información y de contenidos
docs/guia-de-edicion.md            ← Cómo editar textos, imágenes y diseño
public/img/README.md               ← Lista de imágenes pendientes (slots, tamaños, referencias)
```

**Reordenar u ocultar secciones:** edita `secciones` en `src/data/home.ts` (`visible: false` para ocultar una).

⚠️ Revisa la **§9 de `docs/arquitectura-informacion.md`** antes de publicar: precios, testimonios y algunos sellos son placeholders.

**Editar textos e imágenes:** ver [docs/guia-de-edicion.md](docs/guia-de-edicion.md). Las imágenes se muestran como placeholders hasta que se suban los assets finales (ver `src/data/imagenes.ts`).

## Requisitos

- Node.js 22.12 o superior (ver `.nvmrc`; con nvm: `nvm use`).

## Subir a GitHub

```bash
git init
git add .
git commit -m "Landing Medismart en AstroJS"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

`node_modules/`, `dist/`, `.astro/`, archivos `.env` y la configuración local de herramientas quedan fuera del repositorio (`.gitignore`).

## Integración y despliegue (GitHub Actions)

| Workflow | Cuándo corre | Qué hace |
|---|---|---|
| `.github/workflows/ci.yml` | En cada push a `main` y en cada pull request | Instala dependencias y compila el sitio. Deja el `dist/` como artefacto descargable por 7 días. |
| `.github/workflows/deploy-aws.yml` | Solo a mano (Actions → Deploy AWS → Run workflow) | Compila, sube a Amazon S3 y limpia la caché de CloudFront. |

Para activar el despliegue, configura en el repositorio (**Settings → Secrets and variables → Actions**):

- Secret `AWS_ROLE_ARN`: rol IAM con confianza OIDC para GitHub Actions (no se guardan claves de AWS).
- Variables `AWS_REGION`, `S3_BUCKET` y `CLOUDFRONT_DISTRIBUTION_ID`.

Cuando la infraestructura esté lista, descomenta el bloque `push` en `deploy-aws.yml` para publicar automáticamente en cada push a `main`.
