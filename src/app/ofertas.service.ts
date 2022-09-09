import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ofertas } from './shared/Ofertas.model';

import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertasService {
  constructor(private http: Http) { }

  getOfertas(): Promise<Array<Ofertas>> {
      return this.http.get("http://localhost:3000/ofertas?destaque=true").toPromise()
      .then((res: any) => {return res.json()})
  }

}
