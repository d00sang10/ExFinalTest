import { Request, Response } from "express";
import * as proveedorService from "../services/proveedorService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constans";

export const getAll = async (req: Request, res: Response) => {

    try {
        const result = await proveedorService.getProveedores();
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const getById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await proveedorService.getProvedorById(Number(id));
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertProveedor = async (req: Request, res: Response) => {

    try {
        const result = await proveedorService.createProveedor(req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modifyProveedor = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await proveedorService.updateProveedor(Number(id), req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const removeProveedor = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await proveedorService.deleteProveedor(Number(id));
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}