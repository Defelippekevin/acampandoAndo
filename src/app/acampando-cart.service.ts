import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Productos from './productos-list/productos';

@Injectable({
  providedIn: 'root'
})
export class AcampandoCartService {

  private _lista: Productos[] = [];

  lista: BehaviorSubject<Productos[]> = new BehaviorSubject(this._lista);

  constructor() { }
  addToCart(producto:Productos){
  let item =  this._lista.find((v1)=> v1.name == producto.name)
  if(!item){
    this._lista.push({ ... producto});
  }else{
    item.cantidad +=producto.cantidad;
  }
   console.log(this._lista);
      this.lista.next(this._lista);
  }
}
