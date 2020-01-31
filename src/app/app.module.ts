import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/app.footer.component';
import { NavbarComponent } from './component/navbar/app.navbar.component';
import { PeliculaComponent } from './component/peliculas/app.peliculas.component';
import { SerieComponent } from './component/series/app.series.component';
import { VideojuegoComponent } from './component/videojuegos/app.videojuegos.component';
import { appRoutingProviders, routing } from './app.routing';
import { VacioComponent } from './component/vacio/app.vacio.component';
import { InicioComponent } from './component/inicio/app.inicio.component';
import { UsuarioService } from "./services/usuarios/usuarios.service";
import { HttpClientModule } from "@angular/common/http";
import { UsuariosComponent } from './component/usuarios/app.usuarios.component';
import { HijoComponent } from './component/hijo/app.hijo.component';
import { PadreComponent } from './component/padre/app.padre.component';
import { FormularioComponent } from './component/formulario/app.formulario.component';
import { PerrosComponent } from './component/perros/app.perros.component';

@NgModule({
  declarations: [
    AppComponent, FooterComponent, NavbarComponent, PeliculaComponent, SerieComponent, VideojuegoComponent, VacioComponent, InicioComponent, UsuariosComponent, HijoComponent, PadreComponent, FormularioComponent, PerrosComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule, FormsModule
  ],
  providers: [appRoutingProviders, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
