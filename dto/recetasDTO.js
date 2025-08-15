import { body } from "express-validator";

export const recetaDTO = [
  body("id").isInt().notEmpty().withMessage("Invalid ID"),
  body("nombre").notEmpty().withMessage("Invalid Nombre"),
  body("descripcion").notEmpty().withMessage("Invalid Descripcion"),
  body("userId").isInt().notEmpty().withMessage("Invalid User ID")
];