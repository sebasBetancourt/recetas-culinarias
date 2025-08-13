// imports
import { Router } from "express";
import { getDB } from "../db/config.js";

const router = Router();

router.get("/list", async function (req, res) {
  try {
    const usuarios = await getDB().collection("usuarios").find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    res.error(500).json({ error: "Internal server error" });
  }
});

router.get("/get/:id", async function (req, res) {
  try {
    const idPokemon = parseInt(req.params.id);
    const pokemon = await getDB()
      .collection("pokemones")
      .findOne({ id: idPokemon });
    if (!pokemon) {
      res.status(404).json({ error: "Pokemon doesn't exists!" });
    }
    res.status(200).json(pokemon);
  } catch (er) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/create", async function (req, res) {
  try {
    const { id, nombre, habilidad, debilitado } = req.body;
    if (!id || !nombre || !habilidad || debilitado === undefined) {
      res.status(400).json({ error: "Invalid input!" });
    }
    const pokemon = {
      id,
      nombre,
      habilidad,
      debilitado,
    };
    await getDB().collection("usuarios").insertOne(pokemon);
    res.status(201).json({ message: "Pokemon created!!" });
  } catch (error) {
    res.error(500).json({ error: "Internal server error" });
  }
});

export default router;