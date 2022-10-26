import { ShoppingCartModel } from './shoppingCart.model';
export class BuyOrderModel {
  id!: number
  constructor(
    public address: string,
    public number: string,
    public complement: string,
    public formOfPayment: string,
    public cart: ShoppingCartModel[]
    ){}
}
