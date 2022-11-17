import { Component, OnInit } from '@angular/core';
import { OffersService } from '../shared/services/offers.services';
import { Offer } from '../shared/model/offer.model';
import { distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private offer?: Observable<Offer[]>;
  private loop: boolean = true;
  private stringSeach: Subject<string> = new Subject<string>();
  private offersSeach: Offer[] = [];

  constructor(private offersService: OffersService) {}

  get _offer() {
    return this.offer;
  }

  get _offerSeach() {
    return this.offersSeach;
  }
  set _offerSeach(offer: Offer[]) {
    this.offersSeach = offer;
  }

  ngOnInit() {
    this.offer = this.stringSeach.pipe(distinctUntilChanged()).pipe(
      switchMap((str: string) => {
        if (str.trim() === '') {
          return of<Offer[]>([]);
        }
        return this.offersService.searchOffer(str);
      })
    );
  }

  seach(arg: string) {
    this.stringSeach.next(arg);
  }

  cleanSeacher(): void {
    this.stringSeach.next('');
  }
}
