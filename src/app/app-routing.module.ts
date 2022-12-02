import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcampandoAboutComponent } from './acampando-about/acampando-about.component';
import { AcampandoProductosComponent } from './acampando-productos/acampando-productos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
  path: 'productos',
  component: AcampandoProductosComponent
  },
  {
    path: 'contactenos',
    component: AcampandoAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
