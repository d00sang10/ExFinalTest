import { PrismaClient, Venta } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constans";

const prisma = new PrismaClient;

export const getVentas = async() => {

    return await prisma.venta.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_venta: 'asc'
        }
    });
}

export const getVentasById = async(id: number) => {

    return await prisma.venta.findUnique({
        where: {
            id_venta: id
        }
    });
}

export const createVenta = async(shop: Venta) => {

    await prisma.venta.create({
        data: shop
    });

    return RESPONSE_INSERT_OK;
}

export const updateVenta = async(id: number, shop: Venta) => {
    
    await prisma.venta.update({
        where: {
            id_venta: id 
        },
        data: {
            ...shop,
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const deleteVenta = async (id: number) => {

    await prisma.venta.update({
        where: {
            id_venta: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_DELETE_OK;
}