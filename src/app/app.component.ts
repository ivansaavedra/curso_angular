import { Component } from '@angular/core';

import { Numeros } from './_models/numeros';
import { IPersona } from './_models/ipersona';
import { Persona } from './_models/persona';
import { Empleado } from './_models/empleado';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cursoangular'; // variable con el nombre del proyecto

  ngOnInit(){
    var message: string = "Hello World 2";
    console.log(message);

    /*
    var 2message;
    var message dos;
    */

    // variables
    var nombre: string = "John";
    var score1: number = 50;
    var score2: number = 42.50;
    var sum = score1 + score2;

    console.log(nombre);
    console.log(score1);
    console.log(score2);
    console.log(sum);

    // Alcance de variables
    console.log(this.title);
    console.log("Estatica: " + Numeros.sval);
    console.log("Clase " + new Numeros().num_val);

    // Operadores condicionales
    var num: number = 2;
    var res = num > 0 ? "positivo":"negativo";
    console.log(res);

    // Operadores de cadena
    var msg:string = "operador " + "cadena";
    console.log(msg);

    // Operadores de tipo
    var num = 12;
    console.log(typeof num);

    var num1 = 15;
    var num2 = 5;

    var opAnd = num1>10 && num2>=5;
    console.log(opAnd);

    // if
    var x:number = 10, y =20;

    if(x>y)
      console.log("x es mayor que y");
    else
      console.log("x es menor o igual a y");

    //for 
    for(var i=0; i<3; i++){
      console.log("bloque: "+i);
    }

    // while
    var n:number=5;
    while(n>5){
      console.log("Entro al while");
    }

    do{
      console.log("Entro al do while");
    }while(n>5);

    // break

    //console.log(1%5);

    var i:number =1;
    while(i<10){
      if(i%5 == 0){
        console.log("El primer múltiplo de 5 entre 1 es: " +i);
        break;
      }
      i++;
    }

    // continue
    var num:number = 0, count: number = 0;

    for(num = 0; num<=20; num++){
      if(num % 2 == 0){
        continue;
      }
      count++;
    }

    console.log("Números impares: " + count);

    // arreglos
    var array1: string[];
    array1 = ["1","2","3","4"];

    console.log(array1[0]);
    console.log(array1[1]);

    var array2:number[] = new Array(4);
    for(var i=0; i<array2.length; i++){
      array2[i] = i * 2;
      console.log(array2[i]);
    }

    var j: any;
    var array3: number[] =  [1001,1002,1003,1004];

    for(j in array3){
      console.log(array3[j]);
    }

    // Tuplas
    var tuple1 = [10,"Hello"];
    console.log(tuple1);

    var tuple2 = [];
    tuple2[0]=120;
    tuple2[1]=234;
    console.log(tuple2[0]);

    // Interfaces
    var ipersona: IPersona ={
      nombre: "Tom",
      apellidos: "Hanks",

      saluda: ():string => {return "Hi"}
    }

    console.log("Objeto IPersona");
    console.log(ipersona.nombre);
    console.log(ipersona.apellidos);
    console.log(ipersona.saluda());

    // Objetos y clases
    var persona1 = new Persona("Tom", "Hanks");
    console.log("Nombre: " + persona1.nombre + ", apellidos: " + persona1.apellidos);
    persona1.saluda();

    // Herencia
    var empleado1 = new Empleado("Tom", "Hanks", "1234");
    console.log(empleado1);

    // Funciones
    this.foo(123,"John");
    this.foo(123,"Mary","mary@xyz.com");

    this.addNumbers(1,2,3);
    this.addNumbers(10,10,10,10);

    var result = function(a:number, b:number){
      return a*b;
    }
    console.log(result(12,2));

    var myFoo = new Function("a", "b", "return a+b");
    var res2 = myFoo(4,3);
    console.log(res2);

    var foo = (x:number) => 10+x;
    console.log(foo(100));

    //Ejercicio 2
    var p1 = new Persona("Alan", "Pérez");
    var p2 = new Persona("María", "Hernández");
    var p3 = new Persona("Valeria", "Araujo");
    var p4 = new Persona("Jorge", "Domínguez");
    var p5 = new Persona("Pablo", "Martínez");

    p1.setDirecciones(["Insurgentes sur 1441","Av. Universidad 3000"])
    p1.fecha_nacimiento = new Date("1990-01-01");

    p4.setDirecciones(["Insurgentes sur 311","Av. Universidad 4000"])
    p4.fecha_nacimiento = new Date("1970-01-01");

    var personas = [p1,p2,p3,p4,p5];

    this.foo_personas(personas);
    
  }

  foo_personas(personas){
    var mayor_edad = new Date();
    mayor_edad.setFullYear(mayor_edad.getFullYear()-18);

    for(var p in personas){
      if(personas[p].getDirecciones()!=undefined && personas[p].fecha_nacimiento != undefined){
        if(personas[p].getDirecciones().length>1 && personas[p].fecha_nacimiento < mayor_edad){
          console.log(personas[p]);
        }
      }
        
    }
  }

  foo(id:number, nombre:string, mail?:string):void{
    console.log("ID: " + id);
    console.log("Nombre: " + nombre);

    if(mail!=undefined)
      console.log("Mail: " + mail);
  }

  addNumbers(...nums:number[]){
    var i;
    var sum = 0;
    for(i=0;i<nums.length;i++){
      sum += nums[i];
    }
    console.log("La suma de los números es: " + sum);
  }

  disp(...args: [s1: string]): void {
    console.log("");
  }

}
