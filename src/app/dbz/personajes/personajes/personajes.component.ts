import { Component, Input, OnInit } from '@angular/core';
import { IPersonaje } from '../../interfaces/interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  @Input() Personajes: IPersonaje[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
