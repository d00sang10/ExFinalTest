import { PrismaClient } from "@prisma/client";
import { Cliente } from "../interfaces/cliente";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constans";

const prisma = new PrismaClient;

export const getClientes = async () => {

    const result = await prisma.cliente.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_cliente: 'asc'
        }
    });

    return result;

}

export const getClientesById = async (id: number) => {

    const result = await prisma.cliente.findUnique({
        where: {
            id_cliente: id
        }
    });

    return result;

}

export const createCliente = async (cliente: Cliente) => {

    await prisma.cliente.create({
        data: {
            nombre: cliente.nombre,
            email: cliente.email,
            telefono: cliente.telefono
        }
    });

    return RESPONSE_INSERT_OK;
}

export const updateCliente = async (id: number, cliente: Cliente) => {

    await prisma.cliente.update({
        where: {
            id_cliente: id
        },
        data: {
            ...cliente,
            fecha_actualizacion: new Date(),
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const deleteCliente = async (id: number) => {

    await prisma.cliente.update({
        where: {
            id_cliente: id
        },
        data: {
            estado_auditoria: '0'
        }
    });

    return RESPONSE_DELETE_OK;
}