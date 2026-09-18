// Node.js (Express)
import { query } from "../db.js";

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 */

const getmarcador = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
    const result = await query("SELECT m.id AS marcador_id, m.ancho_cm, m.alto_cm, m.pared, n.id AS nodo_id, n.nombre AS nombre_lugar, n.posicion_x, n.posicion_y FROM marcadores m JOIN nodos n ON m.nodo_id = n.id WHERE m.id = $1", [req.params.id]);
    res.json(result.rows);
  };

  const marcadores = {
    getmarcador
  };
  
  export default marcadores;