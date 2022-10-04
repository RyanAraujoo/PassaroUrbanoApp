import { Injectable } from '@angular/core';
import { ordemCompra } from './shared/ordem-compra.model';
import { Http, RequestOptions,Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL_API } from './app.api';

@Injectable() // apto a receber serviços externos
export class OrdemCompraService {

constructor(private http: Http) { }


efetivarCompra(pedido: ordemCompra): Observable<ordemCompra> {
       let headers: Headers = new Headers()
      headers.append('Content-type','application/json')

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers: headers})
      )
      .map((resposta: Response) => {
          return resposta.json()
      })
}

}
