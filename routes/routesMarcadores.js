import Router from "express";
import marcadores from "./controllers/controlMarcador.js";

const router = Router()

router.get("/:id", marcadores);

export default router;