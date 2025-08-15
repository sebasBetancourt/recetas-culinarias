// imports
import { Router } from "express";
import { getDB } from "../db/config.js";
import { recetaDTO } from "../dto/recetasDTO.js";
import { validatorFieldsDTO } from "../middleware/validatorFieldsDTO.js";

const router = Router();

// Listar todas las recetas
// GET /recetas/list
router.get("/list", async (req, res) => {
  try {
    const recetas = await getDB().collection("recetas").find().toArray();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Obtener una receta por ID con ingredientes
// GET /recetas/get/:id
router.get("/get/:id", async (req, res) => {
  try {
    const idReceta = parseInt(req.params.id);
    const receta = await getDB().collection("recetas").findOne({ id: idReceta });
    if (!receta) {
      return res.status(404).json({ error: "Receta no existe" });
    }
    res.status(200).json(receta);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Crear una nueva receta
// POST /recetas/create
router.post("/create", recetaDTO, validatorFieldsDTO, async (req, res) => {
  try {
    const { id, nombre, descripcion, userId } = req.body;
    const existingReceta = await getDB().collection("recetas").findOne({ id });
    if (existingReceta) {
      return res.status(400).json({ error: "Receta ID ya existe" });
    }
    const user = await getDB().collection("usuarios").findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ error: "Usuario no existe" });
    }
    const receta = {
      id,
      nombre,
      descripcion,
      ingredientes: []
    };
    const result = await getDB().collection("recetas").insertOne(receta);
    await getDB().collection("usuarios").updateOne(
      { id: userId },
      { $push: { recetas: result.insertedId } }
    );
    res.status(201).json({ message: "Receta creada", id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Actualizar título o descripción de una receta
// PATCH /recetas/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const idReceta = parseInt(req.params.id);
    const receta = await getDB().collection("recetas").findOne({ id: idReceta });
    if (!receta) {
      return res.status(404).json({ error: "Receta no existe" });
    }
    const updates = {};
    if (req.body.nombre) updates.nombre = req.body.nombre;
    if (req.body.descripcion) updates.descripcion = req.body.descripcion;
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: "No hay campos para actualizar" });
    }
    await getDB().collection("recetas").updateOne(
      { id: idReceta },
      { $set: updates }
    );
    res.status(200).json({ message: "Receta actualizada" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Eliminar una receta
// DELETE /recetas/del/:id
router.delete("/del/:id", async (req, res) => {
  try {
    const idReceta = parseInt(req.params.id);
    const receta = await getDB().collection("recetas").findOne({ id: idReceta });
    if (!receta) {
      return res.status(404).json({ error: "Receta no existe" });
    }
    await getDB().collection("recetas").deleteOne({ id: idReceta });
    await getDB().collection("usuarios").updateMany(
      {},
      { $pull: { recetas: receta._id } }
    );
    res.status(200).json({ message: "Receta eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Listar recetas por usuario
// GET /recetas/user/:userId
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await getDB().collection("usuarios").findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ error: "Usuario no existe" });
    }
    const recetas = await getDB().collection("recetas").find({ _id: { $in: user.recetas } }).toArray();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Agregar ingrediente a receta
// POST /recetas/add-ingrediente/:id
router.post("/add-ingrediente/:id", async (req, res) => {
  try {
    const idReceta = parseInt(req.params.id);
    const { nombre } = req.body;
    if (!nombre) {
      return res.status(400).json({ error: "Nombre de ingrediente requerido" });
    }
    const receta = await getDB().collection("recetas").findOne({ id: idReceta });
    if (!receta) {
      return res.status(404).json({ error: "Receta no existe" });
    }
    let ingredient = await getDB().collection("ingredientes").findOne({ nombre });
    if (!ingredient) {
      const result = await getDB().collection("ingredientes").insertOne({ nombre });
      ingredient = { _id: result.insertedId, nombre };
    }
    const ingredientObj = { _id: ingredient._id, nombre: ingredient.nombre };
    await getDB().collection("recetas").updateOne(
      { id: idReceta },
      { $addToSet: { ingredientes: ingredientObj } }
    );
    res.status(200).json({ message: "Ingrediente agregado" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Eliminar ingrediente de receta
// DELETE /recetas/del-ingrediente/:id
router.delete("/del-ingrediente/:id", async (req, res) => {
  try {
    const idReceta = parseInt(req.params.id);
    const { nombre } = req.body;
    if (!nombre) {
      return res.status(400).json({ error: "Nombre de ingrediente requerido" });
    }
    const receta = await getDB().collection("recetas").findOne({ id: idReceta });
    if (!receta) {
      return res.status(404).json({ error: "Receta no existe" });
    }
    await getDB().collection("recetas").updateOne(
      { id: idReceta },
      { $pull: { ingredientes: { nombre } } }
    );
    res.status(200).json({ message: "Ingrediente eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Buscar recetas por ingrediente
// GET /recetas/search/:ingrediente
router.get("/search/:ingrediente", async (req, res) => {
  try {
    const ingrediente = req.params.ingrediente;
    const recetas = await getDB().collection("recetas").find({ "ingredientes.nombre": ingrediente }).toArray();
    res.status(200).json(recetas);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;