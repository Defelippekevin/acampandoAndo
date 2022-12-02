import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { AcampandoCartService } from '../acampando-cart.service';
import Productos from '../productos-list/productos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  
  cartList!: Observable< Productos[]>;

  constructor(private cart: AcampandoCartService ) {

    this.cartList = cart.lista.asObservable();
  }

  ngOnInit(): void {
  }

}
