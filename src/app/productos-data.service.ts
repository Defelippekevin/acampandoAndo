import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import Productos from './productos-list/productos';

const URL = 'https://63892c834eccb986e88d96f2.mockapi.io/api/v1/productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosDataService {

  constructor(private http:HttpClient) { }

    public getAll(): Observable<Productos[]>{
       return this.http.get<Productos[]>(URL)
       .pipe(
        tap((productos:Productos[]) =>productos.forEach(product => product.cantidad = 0))
        
        );
    }
  }

