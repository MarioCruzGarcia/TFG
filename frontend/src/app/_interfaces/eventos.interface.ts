import { Time } from "@angular/common";

export interface EventosInterface {
    id: string,
    nombre: string,
    localizacion: string,
    aforo: number,
    descripcion: string, 
    fecha_hora: Date, 
    duracion: number,
    imagen: string,
    organizador_id: string,
    categoria_id: string
}
