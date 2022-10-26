import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { BuyOrderModel } from '../../model/buyOrder.model';
import { ShoppingCartModel } from '../../model/shoppingCart.model';
import { ShoppingCartService } from '../../services/shoppingcart.service';
import { BuyOrderService } from './../../services/buyOrder.service';

@Component({
  selector: 'app-buyOrder',
  templateUrl: './buyOrder.component.html',
  styleUrls: ['./buyOrder.component.scss'],
})
export class BuyOrderComponent implements OnInit {
  private forms: FormGroup = new FormGroup({
    adress: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    numberHouse: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(5),
      Validators.pattern('[0-9]+$'),
    ]),
    complement: new FormControl(null),
    formPayment: new FormControl(null, [Validators.required]),
  });

  get _forms () {
    return this.forms;
  }

  public idNumber!: number
  public cart: ShoppingCartModel[] = []
  public totalityCarItem: number = 0;

  constructor(
    public shoppingCartService: ShoppingCartService,
    private buyOrderService: BuyOrderService
  ) {}

  ngOnInit() {
    this.cart = this.shoppingCartService._shoppingCartGet;
  }

  public desactiveActivateButtonSetCartForm(): string {
    if (this.forms.valid && this.cart.length) {
      return '';
    } else {
      return 'disabled';
    }
  }

  public confirmBuy(): void {
    let pedido: BuyOrderModel = new BuyOrderModel(
      this._forms.value.adress,
      this._forms.value.numberHouse,
      this._forms.value.complement,
      this._forms.value.formPayment,
      this.shoppingCartService._shoppingCartGet
    );

    this.buyOrderService
      .effectivePurchase(pedido)
      .pipe(first())
      .subscribe((res: BuyOrderModel) => {
        this.idNumber = res.id;
      });
  }

  incrementing(cartItem: ShoppingCartModel) {
    this.shoppingCartService.adjustAmountCartItem(cartItem, '+');
  }

  decreasing(cartItem: ShoppingCartModel) {
    this.shoppingCartService.adjustAmountCartItem(cartItem, '-');
  }

  cartClean() {
    this.cart = [];
  }
}
