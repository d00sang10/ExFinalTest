import { Request, Response } from "express";
import * as ventaService from "../services/ventaService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constans";

export const getAll = async (req: Request, res: Response) => {

    try {
        const result = await ventaService.getVentas();
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const getById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await ventaService.getVentasById(Number(id));
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertVenta = async (req: Request, res: Response) => {

    try {
        const result = await ventaService.createVenta(req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modifyVenta = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await ventaService.updateVenta(Number(id), req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const removeVenta = async (req: Request, res: Response) => {
    
    try {
        const {id } = req.params;
        const result = await ventaService.deleteVenta(Number(id));
        res.json(ResponseModel.success(null, result));       
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}