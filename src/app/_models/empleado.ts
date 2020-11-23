import { Persona } from './persona';

export class Empleado extends Persona{
    no_empleado: number;
    fecha_ingreso: Date;
    area: string;
    puesto: string;
    sueldo: number;
    fotografia: string;
    contrato: string;

    constructor(nombre:string, apellidos:string, no_empleado: number){
        super(nombre, apellidos);
        this.no_empleado = no_empleado;
    }
}