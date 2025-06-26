import { Proveedor } from "./proveedor";

export interface ProductInterface {
    id_producto?: number;

    nombre: string;
    descripcion: string;
    precio: string ;
    id_proveedor: number;

    estado_auditoria?: string | null;
    fecha_creacion?: Date | null;
    fecha_actualizacion?: Date | null;

    proveedor?: Proveedor;
}