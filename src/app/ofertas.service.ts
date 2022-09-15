import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ofertas } from './shared/Ofertas.model';

import { API_URL } from './app-api';

import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertasService {

  // private API_URL: string = "http://localhost:3000/ofertas"
  constructor(private http: Http) { }

  async getOfertas(): Promise<Array<Ofertas>> {
      const res = await this.http.get(`${API_URL}?destaque=true`).toPromise()
    return res.json();
  }

  async getOfertasToCategoria(categoria: string): Promise<Ofertas[]> {
    const res = await this.http.get(`${API_URL}?categoria=${categoria}`).toPromise()
    return res.json()
  }
  
  async getOfertasToId(id: number): Promise<Ofertas> {
    const res = await this.http.get(`${API_URL}?id=${id}`).toPromise()
    return res.json()[0]
  }


  

}
