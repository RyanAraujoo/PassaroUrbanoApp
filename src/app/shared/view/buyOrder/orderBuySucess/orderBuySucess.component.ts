import { Component, Input, OnInit } from '@angular/core'
import { ShoppingCartService } from 'src/app/shared/services/shoppingcart.service'

@Component({
  selector: 'app-orderbuysucess',
  templateUrl: './orderBuySucess.component.html',
})
export class OrderBuySucessComponent implements OnInit {
 @Input('idNumber') idPedido?: number

constructor(private cart: ShoppingCartService) {}
 ngOnInit() {
    this.cart.removeOfferShoppingCartAfterEffective()
 }
}
