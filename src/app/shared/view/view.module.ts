import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DiversionComponent } from './diversion/diversion.component'
import { RouterModule, Routes } from '@angular/router'
import { RestaurantComponent } from './restaurant/restaurant.component'
import { HomeComponent } from './home/home.component'
import { OfferModule } from './offer/offer.module'

const ROUTES: Routes = [
  { path: 'restaurantes', component: RestaurantComponent },
  { path: 'diversao', component: DiversionComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [CommonModule, OfferModule, RouterModule.forRoot(ROUTES)],
  declarations: [DiversionComponent, RestaurantComponent, HomeComponent],
  exports: [
    DiversionComponent,
    RestaurantComponent,
    HomeComponent,
    RouterModule,
    OfferModule,
  ]
})
export class ViewModule {}
