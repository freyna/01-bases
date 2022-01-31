import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersonaje } from '../../interfaces/interfaces';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {
  
  @Input() personaje: IPersonaje = {
    Nombre:"",
    Poder: 0
  }

  @Output() onAgregarPersonaje: EventEmitter<IPersonaje> = new EventEmitter();

  public agregar():void {
    console.log(this.personaje);
    if(this.personaje.Nombre.length > 0 && this.personaje.Poder > 0){
      
      this.onAgregarPersonaje.emit(this.personaje);

      this.personaje = {
        Nombre: "",
        Poder: 0
      }
    }
  }

}
