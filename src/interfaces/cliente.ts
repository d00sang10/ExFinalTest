export interface Cliente {
    id_cliente: number;

    nombre: string;
    email: string;
    telefono: string;

    estado_auditoria?: string;
    fecha_creacion?: Date;
    fecha_actualizacion?: Date;
}