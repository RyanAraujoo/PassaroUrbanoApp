import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OfferComponent } from './offer.component'
import { WhereIsComponent } from './whereIs/whereIs.component'
import { HowUseComponent } from './howUser/howUser.component'
import { RouterModule, Routes } from '@angular/router'
import { ShoppingCartService } from '../../services/shoppingcart.service'
import { HomeComponent } from '../home/home.component'
import { BuyOrderComponent } from './../buyOrder/buyOrder.component'
import { OrderBuySucessComponent } from '../buyOrder/orderBuySucess/orderBuySucess.component'
import { ReactiveFormsModule } from '@angular/forms'

const ROUTES: Routes = [
  { path: 'oferta', component: HomeComponent },
  {
    path: 'oferta/:id',
    component: OfferComponent,
    children: [
      { path: '', component: WhereIsComponent },
      { path: 'comoUsar', component: WhereIsComponent },
      { path: 'ondeFica', component: HowUseComponent },
    ],
  },
  { path: 'carrinho', component: BuyOrderComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES), ReactiveFormsModule],
  declarations: [
    OfferComponent,
    WhereIsComponent,
    HowUseComponent,
    BuyOrderComponent,
    OrderBuySucessComponent,
  ],
  exports: [
    OfferComponent,
    WhereIsComponent,
    HowUseComponent,
    RouterModule,
    BuyOrderComponent,
    OrderBuySucessComponent,
  ],
  providers: [ShoppingCartService],
})
export class OfferModule {}
