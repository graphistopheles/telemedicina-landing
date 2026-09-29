const fmt = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });

/** Formatea pesos chilenos: 39990 → "$39.990". */
export const clp = (n: number) => fmt.format(Math.round(n));
