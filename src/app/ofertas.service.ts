import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Ofertas } from './shared/Ofertas.model';

import { API_URL } from './app-api';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class OfertasService {

  // private API_URL: string = "http://localhost:3000/ofertas"
  constructor(private http: Http) { }

  async getOfertas(): Promise<Array<Ofertas>> {
      const res: Response = await this.http.get(`${API_URL}/ofertas?destaque=true`).toPromise()
    return res.json();
  }

  async getOfertasToCategoria(categoria: string): Promise<Ofertas[]> {
    const res: Response = await this.http.get(`${API_URL}/ofertas?categoria=${categoria}`).toPromise()
    return res.json()
  }
  
  async getOfertasToId(id: number): Promise<Ofertas> {
    const res: Response = await this.http.get(`${API_URL}/ofertas?id=${id}`).toPromise()
    return res.json()[0]
  }

  async getComoFicaToId(id: number): Promise<Ofertas> {
    const res: Response = await this.http.get(`${API_URL}/como-usar?id=${id}`).toPromise()
    return res.json()[0]
  }

  async getOndeFicaToId(id: number): Promise<Ofertas> {
    const res: Response = await this.http.get(`${API_URL}/onde-fica?id=${id}`).toPromise()
    return res.json()[0]
  }

  getOfertaToPesquisa(termoDeAssinatura: string): Observable<Ofertas[]> {
      return this.http.get(`${API_URL}/ofertas?descricao_oferta_like=${termoDeAssinatura}`)
        .retry(3)
         .map((res: any) => {  return res.json() })
  }

}
 