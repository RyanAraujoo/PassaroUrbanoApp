import { Injectable } from '@angular/core'
import { ShoppingCartModel } from '../model/shoppingCart.model'
import { Offer } from '../model/offer.model'
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart: ShoppingCartModel[] = []

  get _shoppingCartGet(): ShoppingCartModel[] {
    return this.shoppingCart
  }
  set _shoppingCartSet(cartItem: ShoppingCartModel) {
    this.shoppingCart.push(cartItem)
  }
  convertOfferToCartItem(offer: Offer) {
    let cartItem = new ShoppingCartModel(
      offer.id,
      offer.title,
      offer.offer_description,
      offer.value,
      offer.image[0].url
    )
    let foundItemInCart = this._shoppingCartGet.find(
      (value: ShoppingCartModel) => {
        return cartItem.id === value.id;
      }
    );
    if (foundItemInCart) {
      foundItemInCart.amount++
    } else {
      this._shoppingCartSet = cartItem
    }
  }
  calculateTotalShoppingCart() {
    return this._shoppingCartGet.reduce((result, amount) => {
      return (result += amount.value * amount.amount)
    }, 0);
  }
  adjustAmountCartItem(cartItem: ShoppingCartModel, operation: string) {
    if (operation === '+') {
      cartItem.amount++
    } else {
      if (cartItem.amount == 1) {
        return;
      }
      cartItem.amount--
    }
  }
  removeOfferShoppingCartAfterEffective() {
    this.shoppingCart = []
  }
}
