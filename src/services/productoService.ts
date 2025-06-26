import { PrismaClient, Producto } from "@prisma/client";
// import { Product } from "../interfaces/producto";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constans";

const prisma = new PrismaClient;

export const getProducts = async () => {

    return await prisma.producto.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_producto: 'asc'
        }
    });
}

export const getProductById = async (id: number) => {

    return await prisma.producto.findUnique({
        where: {
            id_producto: id
        }
    });
}

export const createProduct = async (product: Producto) => { //📌

    await prisma.producto.create({
        data: product
    });

    return RESPONSE_INSERT_OK;
}

export const updateProduct = async (id: number, product: Producto) => {

    await prisma.producto.update({
        where: {
            id_producto: id
        },
        data: {
            ...product,
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const deleteProduct = async (id: number) => {

    await prisma.producto.update({
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