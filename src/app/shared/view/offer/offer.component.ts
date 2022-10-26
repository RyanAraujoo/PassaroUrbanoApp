import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { take } from 'rxjs/operators';
import { Offer } from '../../model/offer.model';
import { OffersService } from '../../services/offers.services';
import { ShoppingCartService } from '../../services/shoppingcart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  public offer?: Offer

  get _offer() {
    return this.offer
  }
  set __offer(offer: Offer) {
    this.offer = offer
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private offerService: OffersService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((parametros: Params) => {
      this.offerService
        .getOffersById(parametros['id'])
        .pipe(take(1))
        .subscribe((ob: Offer[]) => {
          this.__offer = ob[0]
        });
    });
  }

  addPurchaseToCart(offer: Offer) {
    this.shoppingCartService.convertOfferToCartItem(offer);
    this.router.navigate(["/carrinho"]);
  }
}
