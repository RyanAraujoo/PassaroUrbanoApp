import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Offer } from '../../model/offer.model';
import { OffersService } from '../../services/offers.services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private offer: Offer[] = [];

  get _offer() {
    return this.offer
  }
  set _offer(offer: Offer[]) {
    this.offer = offer
  }
  constructor(private offerService: OffersService) {}
  ngOnInit() {
    this.offerService.getOffersByCategory("diversao")
      .pipe(take(1))
      .subscribe((sub: Offer[]) => {
        this._offer = sub
      })
  }
}
