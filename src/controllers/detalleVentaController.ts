import { Request, Response } from "express";
import * as detalleVentaService from "../services/detalleVentaService";
import { ResponseModel } from "../shared/responseModel";
import { STATUS_INTERNAL_SERVER_ERROR } from "../shared/constans";

export const getAll = async (req: Request, res: Response) => {

    try {
        const result = await detalleVentaService.getDetallesVentas();
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const getById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await detalleVentaService.getDetalleVentaById(Number(id));
        res.json(ResponseModel.success(result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const insertDetalleVenta = async (req: Request, res: Response) => {

    try {
        const result = await detalleVentaService.createDetalleVenta(req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const modifyDetalleVenta = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await detalleVentaService.updateDetalleVenta(Number(id), req.body);
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}

export const removeDetalleVenta = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        const result = await detalleVentaService.deleteDetalleVenta(Number(id));
        res.json(ResponseModel.success(null, result));
    } catch (error: any) {
        console.error(error.message);
        res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
    }
}




