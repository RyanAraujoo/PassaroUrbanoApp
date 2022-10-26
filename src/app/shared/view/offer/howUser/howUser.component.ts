import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { first } from 'rxjs/operators';
import { OffersService } from 'src/app/shared/services/offers.services';
import { OfferModelChild } from './../../../model/offerChild.model';

@Component({
  selector: 'app-howUser',
  templateUrl: './howUser.component.html',
})
export class HowUseComponent implements OnInit {
  private howUser!: string;
  get _howUser() {
    return this.howUser;
  }
  set _howUser(value: string) {
    this.howUser = value;
  }
  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) {}
  ngOnInit() {
    this.route.parent?.params.pipe(first()).subscribe((params: Params) => {
      this.offersService
        .getHowUserOfferById(params['id'])
        .pipe(first())
        .subscribe((sub: OfferModelChild[]) => {
          this._howUser = sub[0].description;
        });
    });
  }
}
