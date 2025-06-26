import express,{ Router } from "express";
import { getAll, getById, insertDetalleVenta, modifyDetalleVenta, removeDetalleVenta } from "../controllers/detalleVentaController";

const router: Router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', insertDetalleVenta);
router.put('/:id', modifyDetalleVenta);
router.delete('/:id', removeDetalleVenta);

export default router;