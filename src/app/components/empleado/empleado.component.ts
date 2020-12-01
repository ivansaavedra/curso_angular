import { Component, OnInit } from '@angular/core';

import { Empleado } from '../../_models/empleado';
import { EmpleadoService } from '../../_services/empleado.service';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2'; 

declare var $: any;

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[] | any;
  empleado: Empleado | any;
  empleadoForm: FormGroup;
  submitted = false;
  modalTitle: string;
  contrato: string;
  fotografia: string;

  constructor(private empleadoService: EmpleadoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Inicie el formulario vacio
    this.empleadoForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      domicilio: ['', Validators.required],
      no_empleado: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      rfc: ['', Validators.required],
      area: ['', Validators.required],
      puesto: ['', Validators.required],
      sueldo: ['', Validators.required],
      fotografia: [''],
      contrato: ['']
    });

    // Consulte lista personas
    this.getEmpleados();

    this.contrato = "contrato";
    this.fotografia = "fotografia";
  }

  getEmpleados(){
    this.empleados = [];
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
        console.log(this.empleados)
      },
      err => console.error(err)
    )
  }

  // Consultar un empleado
  getEmpleado(id){
    this.empleado = null;
    this.empleadoService.getEmpleado(id).subscribe(
      res => {
        this.empleado = res;
      },
      err => console.error(err)
    )
  }

  // Eliminar un empleado
  deleteEmpleado(id){
    this.empleadoService.deleteEmpleado(id).subscribe(
      res => {
        this.getEmpleados();
      },
      err => console.error(err)
    )
  }

}
