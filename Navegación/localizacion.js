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
    const result = await query("SELECT canciones.id, canciones.nombre, canciones.duracion, canciones.reproducciones, albumes.nombre as nombre_album, artistas.nombre as nombre_artista from canciones join albumes on albumes.id = canciones.album join artistas on artistas.id = albumes.artista where album = $1  ", [req.params.id]);
    res.send(result.rows);
  };

  const marcadores = {
    getmarcador
  };
  
  export default marcadores;