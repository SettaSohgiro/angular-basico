import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    //se especifica el template dentro de la comillas para mostrar
    template: `   
    
<h1>{{titulo}}</h1>

<button (click)="acumular(+1)"> + 1</button>

<span>{{numero}}</span>

<button (click)="acumular(-1)"> - 1</button>

<h1>la base es <strong>{{base}}</strong> </h1>

<button (click)="acumularBase(5)"> + 5</button>

<span>{{base}}</span>

<button (click)="acumularBase(- 5)"> - 5</button>
    `
    
    
})

// para mostrar la funcionalidades de la clase se agrega en app.modules.ts
export class ContadorComponent{
    titulo:string = 'Contador APP';  // se puede mostrar en component html con llaves dobles y el nombre {{title}}
    numero:number = 10;
    base:number = 5;
    
  
    acumular(valor:number){
      this.numero += valor;
    }
  
    acumularBase(valor:number){
      this.base += valor;
    }
  
}