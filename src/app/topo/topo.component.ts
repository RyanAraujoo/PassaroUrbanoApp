import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Ofertas } from 'app/shared/Ofertas.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// import 'rxjs/add/operator/of'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

// import { of } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
  ofertasTo: Observable<Ofertas[]> | undefined;
  subjectOfertas: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) {} 

  ngOnInit() {
    this.ofertasTo = this.subjectOfertas // retorna a oferta []
    .distinctUntilChanged() // se o event ( parametro ) for o mesmo, não trazer. 
    .debounceTime(2000) // 2 segundos para realizar a ação do Subject
    .switchMap((event: string) => { // metodo de fazer a observaçao
      //  if (event.trim() === '') return of<Ofertas[]>([])
        console.log("requisição http")
        return this.ofertasService.getOfertaToPesquisa(event)
    })

    this.ofertasTo.subscribe((res: Ofertas[]) => { // metodo de ser observado
      console.log(res)
    }) 
  }


  InputValueCaractere(event: string) { 
    console.log("pedido feito: " + event)
    // subjectOferta aceite esse parametro e obserse o mais recente
      this.subjectOfertas.next(event)
  }
  
  
}
