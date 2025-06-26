import express,{ Router } from "express";
import { getAll, getById, insertVenta, modifyVenta, removeVenta } from "../controllers/ventaController";

const router: Router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', insertVenta);
router.put('/:id', modifyVenta);
router.delete('/:id', removeVenta);

export default router;