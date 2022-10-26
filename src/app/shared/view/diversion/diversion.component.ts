import { Component, OnInit } from '@angular/core'
import { take } from 'rxjs/operators';
import { OffersService } from '../../services/offers.services'
import { Offer } from './../../model/offer.model'
@Component({
  selector: 'app-diversion',
  templateUrl: './diversion.component.html',
  styleUrls: ['./diversion.component.scss'],
})
export class DiversionComponent implements OnInit {
  private offer!: Offer[]

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
        this.offer = sub
      })
  }
}
