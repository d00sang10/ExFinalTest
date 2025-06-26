import { DetalleVenta, PrismaClient } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constans";

const prisma = new PrismaClient;

/* Me olvide el '()' en el controller cuando llame a una funcion y por eso nom e cargarba nada*/

export const getDetallesVentas = async () => {

    return await prisma.detalleVenta.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_detalle: 'asc'
        }
    });
}

export const getDetalleVentaById = async (id: number) => {

    return await prisma.detalleVenta.findUnique({
        where: {
            id_detalle: id
        }
    });
}

export const createDetalleVenta = async (detalleVenta: DetalleVenta) => {

    await prisma.detalleVenta.create({
        data: detalleVenta
    });

    return RESPONSE_INSERT_OK;
}

export const updateDetalleVenta = async (id: number, newInformation: DetalleVenta) => {

    await prisma.detalleVenta.update({
        where: {
            id_detalle: id
        },
        data: {
            ...newInformation,
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_UPDATE_OK;
}

export const deleteDetalleVenta = async (id: number) => {

    await prisma.detalleVenta.update({
        where: {
            id_detalle: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });

    return RESPONSE_DELETE_OK;
}