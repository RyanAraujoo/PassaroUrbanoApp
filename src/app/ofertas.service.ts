import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ofertas } from './shared/Ofertas.model';

import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertasService {
  constructor(private http: Http) { }

  async getOfertas(): Promise<Array<Ofertas>> {
      const res = await this.http.get("http://localhost:3000/ofertas?destaque=true").toPromise()
    return res.json();
  }

  async getOfertasToCategoria(categoria: string): Promise<Ofertas[]> {
    const res = await this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`).toPromise()
    return res.json()
  }
  
  async getOfertasToId(id: number): Promise<Ofertas> {
    const res = await this.http.get(`http://localhost:3000/ofertas?id=${id}`).toPromise()
    return res.json()[0]
  }


  

}
