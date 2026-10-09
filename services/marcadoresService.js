import { query } from "./db.js";

export async function buscarMarcador(id) {
  const result = await query(
    `SELECT m.id AS marcador_id, m.ancho_cm, m.alto_cm, m.pared,
            n.id AS nodo_id, n.numero AS numero_lugar, n.nombre AS nombre_lugar,
            n.posicion_x, n.posicion_y
     FROM marcadores m JOIN nodos n ON m.nodo_id = n.id
     WHERE m.id = $1`,
    [id]
  );
  return result.rows[0] ?? null;
}