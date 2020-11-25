import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/_models/persona';
import { PersonaService } from 'src/app/_services/persona.service';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[];
  persona: Persona;

  formulario: FormGroup;
  submitted = false;

  constructor(private persona_service: PersonaService, private formBuilder: FormBuilder) { }

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

    this.getPersona(2);
  }

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

  deletePersona(id: number){
    this.persona_service.deletePersona(id).subscribe(
      res =>{
        console.log("Persona eliminada!")
        this.getPersonas();
      },
      err => console.error(err)
    )
  }

  createPersona(){
    this.submitted = true;

    if(this.formulario.invalid){
      console.log("Formulario inválido");
      return;
    }

    this.persona_service.createPersona(this.formulario.value).subscribe(
      res =>{
        console.log("Persona registrada!");
        this.getPersonas();
      },
      err => console.error(err)
    )
  }
  
}
