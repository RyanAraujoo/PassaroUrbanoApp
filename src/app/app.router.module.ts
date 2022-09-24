import { NgModule } from "@angular/core";

import { HomeComponent } from "./views/home/home.component";
import { RestaurantesComponent } from "./views/restaurantes/restaurantes.component";
import { DiversaoComponent } from "./views/diversao/diversao.component";
import { RouterModule, Routes } from "@angular/router";
import { OfertasComponent } from './views/ofertas/ofertas.component';
import { ComoFicaComponent } from './views/ofertas/como-fica/como-fica.component';
import { OndeFicaComponent } from './views/ofertas/onde-fica/onde-fica.component';



 const ROUTER: Routes = [
    {path: "", component: HomeComponent}, 
    {path: "restaurantes", component: RestaurantesComponent}, 
    {path: "diversao", component: DiversaoComponent},
    {path: "ofertas", component: OfertasComponent},
    {path: "ofertas/:id", component: OfertasComponent, children: [
        {path: '', component: OndeFicaComponent},
        {path: 'onde-fica', component: ComoFicaComponent },
        {path: 'como-fica', component: OndeFicaComponent}
    ]
}
] 

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTER)
    ],
    exports: [RouterModule]
})
export class appRouterModule {}
