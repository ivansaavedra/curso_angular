import { ThrowStmt } from '@angular/compiler';

export class Persona{
    id: number;
    nombre: string;
    apellidos: string;
    fecha_nacimiento: Date;
    domicilio: string;
    // direcciones: string[];
    rfc: string;

    constructor(nombre:string, apellidos:string){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    saluda(){
        console.log("Hola");
    }

    setDirecciones(direcciones: string[]){
        // this.direcciones = direcciones;
    }

    getDirecciones(){
        // return this.direcciones;
    }
}