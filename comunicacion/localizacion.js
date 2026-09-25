// Node.js (Express)
import { query } from "./db.js";
import fs from "fs";

/**
 * Devuelve un artista por su ID.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
  const getmarcador = async (req, res) => {
    const result = await query(
        "SELECT m.id AS marcador_id, m.ancho_cm, m.alto_cm, m.pared, n.id AS nodo_id, n.numero AS numero_lugar, n.nombre AS nombre_lugar, n.posicion_x, n.posicion_y FROM marcadores m JOIN nodos n ON m.nodo_id = n.id WHERE m.id = $1",
        [req.params.id]
    );
    const datatosave = {resultado: result.rows[0]};
    fs.writeFileSync("resultado.json", JSON.stringify(datatosave, null, 2), "utf-8"); 

    res.json(datatosave);
  }

  const marcadores = {
    getmarcador
  };
  
  export default marcadores;