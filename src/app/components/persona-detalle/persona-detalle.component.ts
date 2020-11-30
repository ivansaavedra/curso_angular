import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/_models/persona';
import { PersonaService } from 'src/app/_services/persona.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {
  persona: Persona;
  id_persona: any;

  constructor(private persona_service: PersonaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_persona = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot);
    console.log(this.id_persona);
    this.getPersona(this.id_persona);
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

}
