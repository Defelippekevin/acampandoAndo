import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Producto from '../productos-list/productos';

@Component({
  selector: 'app-input-numeros',
  templateUrl: './input-numeros.component.html',
  styleUrls: ['./input-numeros.component.scss']
})
export class InputNumerosComponent implements OnInit {
  constructor() { }
  
  
  @Input()
  quantity!: number;

  @Input()
  max!:number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  

  ngOnInit(): void {
  }

  aumentarCantidad():void{
    if( this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  disminuirCantidad():void{
    if(this.quantity>0){
     this.quantity--;
     this.quantityChange.emit(this.quantity);
    }
  }
  
  cambiosCantidad(event:Event):void{
    console.log(event);
    this.quantityChange.emit(this.quantity);
    
  }

}
