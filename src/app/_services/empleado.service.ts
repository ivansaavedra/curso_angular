import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado} from '../_models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  // API_URI = 'http://localhost:8080';
  API_URI = 'https://cursoangularapi2020.herokuapp.com';

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get<Empleado[]>(this.API_URI+'/empleado');
  }

  getEmpleado(id: number){
    return this.http.get<Empleado>(this.API_URI+'/empleado/'+id);
  }

  creatEmpleado(empleado: Empleado){
    console.log(empleado);
    return this.http.post(this.API_URI+'/empleado',empleado);
  }

  updateEmpleado(empleado: Empleado){
    return this.http.put(this.API_URI+'/empleado/'+empleado.id,empleado);
  }

  deleteEmpleado(id: number){
    return this.http.delete(this.API_URI+'/empleado/'+id);
  }
}