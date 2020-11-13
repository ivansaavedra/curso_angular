import { ThrowStmt } from '@angular/compiler';

export class Persona{
    nombre: string;
    apellidos: string;
    direcciones: string[];
    fecha_nacimiento: Date;
    rfc: string;

    constructor(nombre:string, apellidos:string){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    saluda(){
        console.log("Hola");
    }

    setDirecciones(direcciones: string[]){
        this.direcciones = direcciones;
    }

    getDirecciones(){
        return this.direcciones;
    }
}