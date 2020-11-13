import { Persona } from './persona';

export class Empleado extends Persona{
    no_empleado: string;

    constructor(nombre:string, apellidos:string, no_empleado: string){
        super(nombre, apellidos);
        this.no_empleado = no_empleado;
    }
}