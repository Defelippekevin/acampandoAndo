import { Component, OnInit } from '@angular/core';
import { AcampandoCartService } from '../acampando-cart.service';
import { ProductosDataService } from '../productos-data.service';
import Producto from './productos';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss']
})
export class ProductosListComponent implements OnInit {


  apiproductos: Producto[]= [
    /*
    {
    "nombre": "Termo Stanley",
    "precio": 15000, 
    "stock": 0,
    "image": "assets/img/TermoS2.jpg",
    "oferta":true,
    "cantidad":0,
  },
  {
    "nombre": "Mate Stanley",
    "precio": 4500,
    "stock": 15,
    "image":"assets/img/mateS.jpg",
    "oferta":false,
    "cantidad":0,
  },
  {
    "nombre": "Bombilla Stanley",
    "precio": 4500,
    "stock2: 15,
    "image":"assets/img/bombillaS.jpg",
    "oferta2:false,
    "cantidad":0,
  }
    */
  ];

 
  constructor(
    private cart: AcampandoCartService,
    public productos:ProductosDataService ) { 
  }

  ngOnInit(): void {
    this.productos.getAll().
    subscribe(prod => this.apiproductos = prod)
  }

  addToCart(prod: Producto):void{
    this.cart.addToCart(prod);
    prod.stock -= prod.cantidad;
    prod.cantidad=0;
  }

}
