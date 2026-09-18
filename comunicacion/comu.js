import express from "express";
const app = express();
const port = 3000;

import marcadores from "./Navegacion/localizacion.js";


app.use(express.json());

app.get("/", (_, res) => {
  res.send("SpoTICfy API working!");
});


app.get("/marcador", marcadores.getMarcador);

const server = app.listen(port, () => {
  console.log(`SpoTICfy API listening at http://localhost:${port}`);
});

export { app, server };