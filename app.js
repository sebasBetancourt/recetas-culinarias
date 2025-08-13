// imports
import dotenv from "dotenv";
import express from "express";
import usuariosRouter from "./routers/usuariosRouter.js";
import { connect } from "./db/config.js";
import { ObjectId } from "bson";

//configs
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()); //Middleware de interpretacion de JSON

// Rutas
app.use("/usuarios", usuariosRouter);

//endpoints
app.get("/api", function (req, res) {
  res.send("Api OK!");
});

connect().then(() => {
  app.listen(port, () => {
    console.log("http://localhost:" + port + "/api");
  });
});
