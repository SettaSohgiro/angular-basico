import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component'; //importador de rutas al archivo de component
import { HeroesModules } from './heroes/heroes.module';
import { ContadorModules } from './contador/contador.module';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
/* Tarea 
crear un modulo llamado contadorModule
  declaraciones y exportaciones*/ 
@NgModule({
  declarations: [
    AppComponent,
 //   ContadorComponent // es para traer el componente contador  y sus clase
  //  , HeroeComponent, ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModules,  // son importaciones de heroesModules.ts
  //Importar aqui modulecontador
  ContadorModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
