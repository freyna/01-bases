import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './contadores/contador/contador.component';
import { DBZModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    DBZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
