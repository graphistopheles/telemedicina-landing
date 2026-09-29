/**
 * SINGLETON "Reglas de cobertura" (valores REFERENCIALES, editables por negocio).
 * Alimenta la calculadora de copago y la tabla de precios.
 * `bonifica` = porcentaje que cubre la previsión sobre el precio publicado.
 */
export const previsiones = [
  { id: 'fonasa', label: 'Fonasa', detalle: 'Modalidad Libre Elección', bonifica: 0.5, ajustable: false },
  { id: 'isapre', label: 'Isapre', detalle: 'Según tu plan', bonifica: 0.7, ajustable: true },
  { id: 'empresa', label: 'Por mi empresa', detalle: 'Beneficio corporativo Medismart', bonifica: 1, ajustable: false },
  { id: 'particular', label: 'Particular', detalle: 'Sin previsión', bonifica: 0, ajustable: false },
] as const;
