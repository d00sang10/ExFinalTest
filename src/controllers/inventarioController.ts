import { Request, Response } from "express";
import * as inventarioService from "../services/inventarioService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constans";

export const getAll = async (req: Request, res: Response) => {

    try {
        const result = await inventarioService.getInventarios();
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const getById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await inventarioService.getInventarioById(Number(id));
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertInventario = async (req: Request, res: Response) => {
    
    try {
        const result = await inventarioService.createInventario(req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modifyInventario = async (req: Request, res: Response) => {
    
    try {
        const { id } = req.params;
        const result = await inventarioService.updateInventario(Number(id), req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const removeInventario = async (req: Request, res: Response) => {
    
    try {
        const {id} = req.params;
        const result = await inventarioService.deleteInventario(Number(id));
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}