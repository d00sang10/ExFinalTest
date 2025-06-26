// export interface Proveedor {
//     id_proveedor: number;

import { Producto } from "@prisma/client";

//     nombre: string;
//     contacto: string;
//     telefono: string;
//     email: string;

//     estado_auditoria?: string | null;
//     fecha_creacion?: Date | null;
//     fecha_actualizacion?: Date | null;
// }

export interface Proveedor {
    id_proveedor?: number;

    nombre: string ;
    contacto: string | null;
    telefono: string | null;
    email: string;

    estado_auditoria: string | null;
    fecha_creacion: Date | null;
    fecha_actualizacion: Date | null;

    producto?: Producto[];
}