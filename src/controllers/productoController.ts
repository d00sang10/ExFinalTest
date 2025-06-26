import { Request, Response } from "express";
import * as productoService from "../services/productoService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constans";

export const getAll = async (req: Request, res: Response) => {

    try {
        const result = await productoService.getProducts();
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const getById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await productoService.getProductById(Number(id));
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertProduct = async (req: Request, res: Response) => {

    try {
        const result = await productoService.createProduct(req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modifyProduct = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await productoService.updateProduct(Number(id), req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const removeProduct = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await productoService.deleteProduct(Number(id));
        res.json(ResponseModel.success(null, result));
    } catch (error: any) { 
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}