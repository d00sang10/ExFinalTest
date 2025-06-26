import { Inventario, PrismaClient } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constans";

const prisma = new PrismaClient;

export const getInventarios = async () => {

    return await prisma.inventario.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_producto: 'asc'
        }
    });

}

export const getInventarioById = async (id: number) => {

    return await prisma.inventario.findUnique({
        where: {
            id_producto: id
        }
    });

}

export const createInventario = async (inventario: Inventario) => {

    await prisma.inventario.create({
        data: inventario
    });

    return RESPONSE_INSERT_OK;
}

export const updateInventario = async (id: number, inventario: Inventario) => {

    await prisma.inventario.update({
        where: {
            id_producto: id
        },
        data: {
            ...inventario,
            fecha_actualizacion: new Date()
        }
    })

    return RESPONSE_UPDATE_OK
}

export const deleteInventario = async (id: number) => {

    await prisma.inventario.update({
        where: {
            id_producto: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    
    return RESPONSE_DELETE_OK;

}