import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ImagenUnicaComponent } from './components/imagen-unica/imagen-unica.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ImagenUnicaComponent,
    NavbarComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
