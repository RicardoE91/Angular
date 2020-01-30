import { ModuleWithProviders} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importar nuestros componentes

import { PeliculaComponent } from "./component/peliculas/app.peliculas.component";
import { SerieComponent } from "./component/series/app.series.component";
import { VideojuegoComponent } from "./component/videojuegos/app.videojuegos.component";
import { VacioComponent } from "./component/vacio/app.vacio.component";
import { InicioComponent } from "./component/inicio/app.inicio.component";
import { UsuariosComponent } from './component/usuarios/app.usuarios.component';
import { PadreComponent } from './component/padre/app.padre.component';
import { HijoComponent } from './component/hijo/app.hijo.component';
import { FormularioComponent } from './component/formulario/app.formulario.component';

const appRoutes: Routes = [
    {path: "", component: InicioComponent},
    {path: "peliculas", component: PeliculaComponent},
    {path: "series", component: SerieComponent},
    {path: "videojuegos", component: VideojuegoComponent},
    {path: "usuarios", component: UsuariosComponent},
    {path: "padre", component: PadreComponent},
    {path: "hijo", component: HijoComponent},
    {path: "calculadora", component: FormularioComponent},
    {path: "**", component: VacioComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);