import dotenv from "dotenv";
import express from "express";
import usuariosRouter from "./routers/usuariosRouter.js";
import recetasRouter from "./routers/recetasRouter.js";
import { connect } from "./db/config.js";
import { ObjectId } from "mongodb";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Rutas
app.use("/usuarios", usuariosRouter);
app.use("/recetas", recetasRouter);
//endpoints
app.get("/api", function (req, res) {
  res.send("Api OK!");
});

connect().then(() => {
  app.listen(port, () => {
    console.log("http://localhost:" + port + "/api");
  });
});