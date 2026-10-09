import express from "express";
const app = express();
const port = 3000;

import marcadores from "./controllers/controlMarcador.js";


app.use(express.json());

app.get("/", (_, res) => {
  res.send("SpoTICfy API working!");
});


app.use("/marcador", marcadores);

const server = app.listen(port, () => {
  console.log(`SpoTICfy API listening at http://localhost:${port}`);
});

export { app, server };