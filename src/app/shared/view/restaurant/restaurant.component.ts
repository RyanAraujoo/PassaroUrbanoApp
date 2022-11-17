import { Component, OnInit } from '@angular/core'
import { first } from 'rxjs/operators'
import { Offer } from '../../model/offer.model'
import { OffersService } from '../../services/offers.services'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  private offer!: Offer[]

  constructor(private offerService: OffersService) {}

  get _offer() {
    return this.offer
  }

  set _offer(offer: Offer[]) {
    this.offer = offer
  }

  ngOnInit() {
    this.offerService
      .getOffersByCategory('restaurante')
      .pipe(first())
      .subscribe((sub: Offer[]) => {
        this.offer = sub
      })
  }
}
