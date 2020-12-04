import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/_models/persona';
import { PersonaService } from 'src/app/_services/persona.service';

import { Delegacion } from 'src/app/_models/delegacion';
import { DelegacionService } from 'src/app/_services/delegacion.service';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[];
  persona: Persona;

  delegaciones: Delegacion[];

  formulario: FormGroup;
  submitted = false;

  update = false;

  constructor(private delegacion_service: DelegacionService, private persona_service: PersonaService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      domicilio: ['', Validators.required],
      rfc: ['', Validators.required],
    });

    this.getPersonas();

    this.getDelegaciones();
  }

  // List delegaciones
  getDelegaciones(){
    this.delegaciones = [];
    this.delegacion_service.getDelegaciones().subscribe(
      res => {
        this.delegaciones = res;
        console.log(this.delegaciones);
      },
      err => console.error(err)
    );
  }

  // List
  getPersonas(){
    this.personas = [];
    this.persona_service.getPersonas().subscribe(
      res => {
        this.personas = res;
        console.log(this.personas);
      },
      err => console.error(err)
    );
  }

  // Read
  getPersona(id: number){
    this.persona = null;
    this.persona_service.getPersona(id).subscribe(
      res =>{
        this.persona = res;
        console.log(this.persona);
      },
      err => console.error(err)
    )
  }

  // Delete
  deletePersona(id: number){
    Swal.fire({
      title: 'Estás seguro que deseas eliminar?',
      text: "Esta acción no podra deshacerse!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.persona_service.deletePersona(id).subscribe(
          res =>{
            this.getPersonas();
          },
          err => console.error(err)
        )

        Swal.fire(
          'Eliminada!',
          'La persona ha sido eliminada exitosamente.',
          'success'
        )
      }
    })
    
  }

  ngSubmit(){
    this.submitted = true;

    if(this.formulario.invalid){
      console.log("Formulario inválido");
      return;
    }

    if(this.update){
      this.updatePersona();
    }else{
      this.createPersona();
    }
  }

  // Create
  createPersona(){
    this.persona_service.createPersona(this.formulario.value).subscribe(
      res =>{
        console.log("Persona registrada!");
        // alert("Persona registrada!")

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La persona fue registrada exitosamente!',
          showConfirmButton: false,
          timer: 1500
        })
        
        this.getPersonas();
        this.submitted = false;
        this.formulario.reset();
        $("#personaModal").modal("hide");
      },
      err => console.error(err)
    )
  }

  // Update
  updatePersona(){
    this.persona_service.updatePersona(this.formulario.value).subscribe(
      res =>{
        console.log("Persona actualizada!");
        // alert("Persona actualizada!");

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La persona fue actualizada exitosamente!',
          showConfirmButton: false,
          timer: 2500
        })

        this.getPersonas();
        this.submitted = false;
        this.formulario.reset();
        this.update = false;
        $("#personaModal").modal("hide");
      },
      err => console.error(err)
    )
  }

  llenarFormulario(persona: Persona){
    this.formulario.controls['id'].setValue(persona.id);
    this.formulario.controls['nombre'].setValue(persona.nombre);
    this.formulario.controls['apellidos'].setValue(persona.apellidos);

    var y = persona.fecha_nacimiento.toString().substring(0,4);
    var m = persona.fecha_nacimiento.toString().substring(5,7);
    var d = persona.fecha_nacimiento.toString().substring(8,10);
    this.formulario.controls['fecha_nacimiento'].setValue(y + "-" + m + "-" + d);
    this.formulario.controls['domicilio'].setValue(persona.domicilio);
    this.formulario.controls['rfc'].setValue(persona.rfc);

    this.update = true;
    this.openModal();
  }

  get f(){ return this.formulario.controls }

  openModal(){
    $("#personaModal").modal("show");
    $("#nombre").focus();
  }

  verDetallePersona(id){
    this.router.navigate(['persona/'+id]);
  }
  
}
