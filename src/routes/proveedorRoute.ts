import express,{ Router } from "express";
import { getAll, getById, insertProveedor, modifyProveedor, removeProveedor } from "../controllers/proveedorController";

const router: Router = express.Router();

router.get('/', getAll);
router.post('/', insertProveedor);
router.get('/:id', getById);
router.put('/:id', modifyProveedor);
router.delete('/:id', removeProveedor);


export default router;