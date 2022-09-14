import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { DiversaoComponent } from "./diversao/diversao.component";
import { Routes } from "@angular/router";
import { OfertasComponent } from './ofertas/ofertas.component';


export const ROUTER: Routes = [
    {path: "", component: HomeComponent}, 
    {path: "restaurantes", component: RestaurantesComponent}, 
    {path: "diversao", component: DiversaoComponent},
    {path: "ofertas", component: OfertasComponent},
    {path: "ofertas/:id", component: OfertasComponent}
] 
    

