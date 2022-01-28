import { Component, OnInit } from '@angular/core';


interface IPersonaje{
  Nombre: string;
  Poder: number;
}

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent implements OnInit {

  personaje: IPersonaje = {
    Nombre: "",
    Poder: 0
  }

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

  constructor() { }

  ngOnInit(): void {
  }

  public agregar():void {
    console.log(this.personaje);
    if(this.personaje.Nombre.length > 0 && this.personaje.Poder > 0){
      this.Personajes.push(this.personaje);
      this.personaje = {
        Nombre: "",
        Poder: 0
      }
    }
  }

}
