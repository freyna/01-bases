import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz/dbz.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzComponent
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
