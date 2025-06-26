import express, { Router } from "express";
import { getAll, getById, insertCliente, modifyCliente, removeCliente } from "../controllers/clienteController";

const router: Router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', insertCliente);
router.put('/:id', modifyCliente);
router.delete('/:id', removeCliente);

export default router;