import { Router } from "express";
import { getDB } from "../db/config.js";
import { ObjectId } from "bson";
import { usuarioDTO } from "../dto/usuariosDTO.js";
import { validatorFieldsDTO } from "../middleware/validatorFieldsDTO.js";


const router = Router();


// Ver Todos los Usuarios
// GET /usuarios/list
router.get("/list", async function (req, res) {
  try {
    const usuarios = await getDB().collection("usuarios").find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    res.error(500).json({ error: "Internal server error" });
  }
});

// Ver un Usuario por ID
// GET /usuarios/get/:id
router.get("/get/:id", async function (req, res) {
  try {
    const idUsuario = parseInt(req.params.id);
    const usuario = await getDB()
      .collection("usuarios")
      .findOne({ id: idUsuario });
    if (!usuario) {
      res.status(404).json({ error: "Usuario doesn't exists!" });
    }
    res.status(200).json(usuario);
  } catch (er) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// Crear un Usuario
// POST /usuarios/create
router.post("/create", usuarioDTO, validatorFieldsDTO, async function (req, res) {
  try {
    const { id, nombre, email } = req.body;
    if (!id || !nombre || !email) {
      res.status(400).json({ error: "Invalid input!" });
    }
    const usuario = {
      _id: new ObjectId(),
      id,
      nombre,
      email,
      recetas: [],
    };
    await getDB().collection("usuarios").insertOne(usuario);
    res.status(201).json({ message: "User created!!" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});




// Actualizar un Usuario
// PATCH /usuarios/update/:id
router.patch("/update/:id", usuarioDTO, validatorFieldsDTO, async function (req, res) { 
try {
    const idUsuario = parseInt(req.params.id);
    const usuario = await getDB()
      .collection("usuarios")
      .findOne({ id: idUsuario });
    if (!usuario) {
      res.status(404).json({ error: "Usuario doesn't exists!" });
    }
    const { id, nombre, email } = req.body;
    if (!id || !nombre || !email) {
      res.status(400).json({ error: "Invalid input!" });
    }
    const usuarioNew = await getDB().collection("usuarios").updateOne(
      { id: idUsuario },
      { $set: {
        id: id,
        nombre: nombre,
        email: email
      } }
    
    );
    
    res.status(201).json({ message: "User Update!!" });


    } catch (er) {
      res.status(500).json({ error: "Internal server error" });
    }
});




// Actualizar recetas de un Usuario
// PATCH /usuarios/recetas/:id
router.patch("/recetas/:id", async function (req, res) {
  try {
    const idUsuario = parseInt(req.params.id);
    const usuario = await getDB().collection("usuarios").findOne({ id: idUsuario });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario doesn't exists!" });
    }
    const { recetas } = req.body;
    if (!Array.isArray(recetas)) {
      return res.status(400).json({ error: "Invalid input! Recetas must be an array." });
    }
    await getDB().collection("usuarios").updateOne(
      { id: idUsuario },
      { $set: { recetas } }
    );
    res.status(200).json({ message: "User recipes updated!" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// Eliminar un Usuario y sus recetas Asociadas
// DELETE /usuarios/del/:id
router.delete("/del/:id", async function (req, res) { 
  try {
      const idUsuario = parseInt(req.params.id);
      const usuario = await getDB()
        .collection("usuarios")
        .findOne({ id: idUsuario });
      if (!usuario) {
        return res.status(404).json({ error: "Usuario doesn't exists!" });
      }
      await getDB().collection("recetas").deleteMany({ _id: { $in: usuario.recetas } });
      await getDB().collection("usuarios").deleteOne({ id: idUsuario });
      
      res.status(200).json({ message: "User and associated recipes deleted!" });
  
  
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
  });
  




export default router;