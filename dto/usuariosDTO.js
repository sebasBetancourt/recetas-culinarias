import { body } from "express-validator";


export const usuarioDTO = [
    body('id').isInt().notEmpty().withMessage("Invalid ID"),
    body('nombre').notEmpty().withMessage("Invalid Name"),
    body('email').notEmpty().withMessage("Invalid Email")

]