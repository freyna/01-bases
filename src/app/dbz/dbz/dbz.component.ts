import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from '../interfaces/interfaces';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent implements OnInit {

  Personajes: IPersonaje[] = [
    {
      Nombre: "Goku" ,
      Poder: 15000
    },
    {
      Nombre: "Vegeta",
      Poder: 7500
    }
  ];

  personaje: IPersonaje = {
    Nombre:"",
    Poder: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  public agregarPersonaje(personajeParam:IPersonaje) {
    this.Personajes.push(personajeParam);
  }
}
