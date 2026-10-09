import Router from "express";
import marcadores from "../controllers/controlMarcador";

const router = Router()

router.get("/:id", marcadores.getmarcador);

export default router;