import express, { Router } from "express";
import { getAll, getById, insertProduct, modifyProduct, removeProduct} from "../controllers/productoController";

const router: Router = express.Router();

router.get('/', getAll);
router.post('/', insertProduct);

router.get('/:id', getById);
router.put('/:id', modifyProduct);
router.delete('/:id', removeProduct);

export default router;