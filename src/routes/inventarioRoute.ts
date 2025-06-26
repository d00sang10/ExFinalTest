import express, { Router } from "express";
import { getAll, getById, insertInventario, modifyInventario, removeInventario } from "../controllers/inventarioController";

const router: Router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', insertInventario);
router.put('/:id', modifyInventario);
router.delete('/:id', removeInventario);

export default router;