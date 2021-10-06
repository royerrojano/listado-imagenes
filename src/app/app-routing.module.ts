import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagenUnicaComponent } from './components/imagen-unica/imagen-unica.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  {path:'',component: ListadoComponent},
  {path:'imagen_unica/:id',component: ImagenUnicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
