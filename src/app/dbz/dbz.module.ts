import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz/dbz.component';



@NgModule({
  declarations: [
    DbzComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzComponent
  ]
})
export class DBZModule { }
