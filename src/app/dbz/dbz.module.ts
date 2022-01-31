import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz/dbz.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes/personajes.component';
import { AgregarPersonajeComponent } from './personajes/agregar-personaje/agregar-personaje.component';



@NgModule({
  declarations: [
    DbzComponent,
    PersonajesComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DbzComponent
  ]
})
export class DBZModule { }
