import { Injectable } from '@angular/core';
import { BuyOrderModel } from '../model/buyOrder.model';
import { URL_API } from '../../util/app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BuyOrderService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  effectivePurchase(request: BuyOrderModel) {
    return this.http.post<BuyOrderModel>(
      `${URL_API}/pedidos`,
      JSON.stringify(request),
      this.httpOptions
    );
  }
}
