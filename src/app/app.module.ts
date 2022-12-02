import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { CarritoComponent } from './carrito/carrito.component';

import { FormsModule } from '@angular/forms';
import { AcampandoAboutComponent } from './acampando-about/acampando-about.component';
import { AcampandoProductosComponent } from './acampando-productos/acampando-productos.component';
import { InputNumerosComponent } from './input-cantidadComprada/input-numeros.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductosListComponent,
    CarritoComponent,
    AcampandoAboutComponent,
    AcampandoProductosComponent,
    InputNumerosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
