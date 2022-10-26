import { Injectable } from '@angular/core'
import { URL_API } from '../../util/app.api'
import { HttpClient } from '@angular/common/http'
import { Offer } from '../model/offer.model'
import { OfferModelChild } from './../model/offerChild.model';
@Injectable({
  providedIn: 'root'
})
export class OffersService {
    constructor(private http: HttpClient) { }
    public getOffers() {
        return this.http.get<Offer[]>(`${URL_API}/ofertas?emphasys=true`)
    }
    public getOffersByCategory(category: string) {
        return this.http.get<Offer[]>(`${URL_API}/ofertas?category=${category}`)
    }
    public getOffersById(id: number) {
        return this.http.get<Offer[]>(`${URL_API}/ofertas?id=${id}`)
    }
    public getHowUserOfferById(id: number) {
        return this.http.get<OfferModelChild[]>(`${URL_API}/como-usar?id=${id}`)
    }
    public getWhereIsOfferById(id: number) {
        return this.http.get<OfferModelChild[]>(`${URL_API}/onde-fica?id=${id}`)
    }
    public searchOffer(randomStr: string) {
        return this.http.get<Offer[]>(`${URL_API}/ofertas?offer_description_like=${randomStr}`)
    }
}
