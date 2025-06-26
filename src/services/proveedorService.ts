import { PrismaClient } from "@prisma/client";
import { Proveedor } from "../interfaces/proveedor";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constans";

const prisma = new PrismaClient;

export const getProveedores = async () => {

    const result: Proveedor[] = await prisma.proveedor.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_proveedor: 'asc'
        }
    });

    return result;
}

export const getProvedorById = async (id: number) => {

    const result: Proveedor | null = await prisma.proveedor.findUnique({
        where: {
            id_proveedor: id
        }
    });

    return result;
}

export const createProveedor = async (proveedor: Proveedor) => {

    await prisma.proveedor.create({
        data: proveedor
    });

    return RESPONSE_INSERT_OK;
}

export const updateProveedor = async (id: number, proveedor: Proveedor) => {

    await prisma.proveedor.update({
        where: {
            id_proveedor: id
        },
        data: {
            ...proveedor,
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const deleteProveedor = async (id: number) => {

    await prisma.proveedor.update({
        where: {
            id_proveedor: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_DELETE_OK;
}