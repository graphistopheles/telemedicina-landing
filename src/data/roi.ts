/**
 * SINGLETON "Supuestos de la calculadora de ROI" (editables por negocio).
 * Los impactos provienen de las métricas publicadas en la colección `metricas`.
 */
export const roi = {
  reduccionAusentismo: 0.25,
  reduccionRotacion: 0.23,
  costoReemplazo: 0.3, // % del sueldo anual que cuesta reemplazar a una persona
  diasLaborales: 22,
  precioPorColaborador: 4990, // CLP / mes
  defaults: { colaboradores: 250, sueldo: 1200000, dias: 6, rotacion: 18 },
};
