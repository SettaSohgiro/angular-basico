import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['thor', 'ironman', 'spiderman', 'Hulk'];
  borrados:string[] = [];
  borrar:string = "";
  heroeBorrado:string = "";

  borrarHeroe():void{

    this.heroeBorrado = this.heroes.shift() || '';
    //-------------------------------------------------------------------
    if(this.heroes.length > 0){
    //this.borrar = this.heroes.shift() || "";/// elimina el primer elemento y lo retorna
    this.borrados.push(this.borrar);//this.heroes.pop(); // elimina el ultimo elemento no retorna
    }
  };

}
