import { buscarMarcador } from "./marcadoresService.js";

const getmarcador = async (req, res) => {
  try {
    const marcador = await buscarMarcador(req.params.id);
    if (!marcador) return res.status(404).json({ error: "Marcador no encontrado" });
    res.json({ resultado: marcador });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno" });
  }
};

const marcadores = {
  getmarcador
};

export default marcadores;