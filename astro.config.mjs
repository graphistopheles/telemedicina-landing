// @ts-check
import { defineConfig } from 'astro/config';

// Salida 100% estática: se despliega en S3 + CloudFront (ver propuesta ejecutiva).
export default defineConfig({
  site: 'https://www.nuviasalud.cl',
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
