import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { appRouterModule } from './app.router.module';

import { AppComponent } from './app.component';
import { TopoComponent } from './views/topo/topo.component';
import { HomeComponent } from './views/home/home.component';
import { RodapeComponent } from './views/rodape/rodape.component';
import { RestaurantesComponent } from './views/restaurantes/restaurantes.component';
import { DiversaoComponent } from './views/diversao/diversao.component';
import { OfertasComponent } from './views/ofertas/ofertas.component';
import { ComoFicaComponent } from './views/ofertas/como-fica/como-fica.component';
import { OndeFicaComponent } from './views/ofertas/onde-fica/onde-fica.component';

import { descricaoReduzida } from './util/pipes/descricaoReduzida.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertasComponent,
    ComoFicaComponent,
    OndeFicaComponent,
    descricaoReduzida
  ],
  imports: [
  BrowserModule,
    HttpModule,
    appRouterModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
