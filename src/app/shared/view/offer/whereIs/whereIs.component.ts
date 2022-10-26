import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from 'src/app/shared/services/offers.services';
import { first } from 'rxjs/operators';
import { OfferModelChild } from 'src/app/shared/model/offerChild.model';

@Component({
  selector: 'app-whereIs',
  templateUrl: './whereIs.component.html',
})
export class WhereIsComponent implements OnInit {
  private whereIs!: string;
  get _whereIs() {
    return this.whereIs;
  }
  set _whereIs(value: string) {
    this.whereIs = value;
  }
  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) {}
  ngOnInit() {
    this.route.parent?.params.pipe(first()).subscribe((params: Params) => {
      this.offersService
        .getWhereIsOfferById(params['id'])
        .pipe(first())
        .subscribe((sub: OfferModelChild[]) => {
          this._whereIs = sub[0].description;
        });
    });
  }
}
