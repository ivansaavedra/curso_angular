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

  constructor(private persona_service: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
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
}
