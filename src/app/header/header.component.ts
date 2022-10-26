import { Component, OnInit } from '@angular/core';
import { OffersService } from '../shared/services/offers.services';
import { Offer } from '../shared/model/offer.model';
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private offer!: Observable<Offer[]>
  private loop: boolean = true;

  get _offer() {
    return this.offer;
  }

  private stringSeach: Subject<string> = new Subject<string>();

  private offersSeach!: Offer[];

  get _offerSeach() {
    return this.offersSeach;
  }
  set _offerSeach(offer: Offer[]) {
    this.offersSeach = offer;
  }

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offer = this.stringSeach
        .pipe(distinctUntilChanged())
        .pipe(switchMap((str: string) => {
          if (str.trim() === '') {
            //retornar um observable de array de ofertas vazio caso preencha um campo vazio na pesquisa
            return of<Offer[]>([])
        }
        return this.offersService.searchOffer(str)
      }))
  }

  seach(arg: string) {
    this.stringSeach.next(arg);
  }

  cleanSeacher(): void {
    this.stringSeach.next('');
  }
}
