import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public nombre: string= 'Ironman';
  public edad: number = 45;

  public obtenerNombre (): string {
    return `${this.nombre} - ${this.edad}`
  }



  constructor() { }

  ngOnInit(): void {
  }

}
