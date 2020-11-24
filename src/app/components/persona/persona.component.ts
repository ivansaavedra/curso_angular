import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/_models/persona';
import { PersonaService } from 'src/app/_services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas: Persona[];
  persona: Persona;

  constructor(private persona_service: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();

    this.getPersona(30);
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
}
