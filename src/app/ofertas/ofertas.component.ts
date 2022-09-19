import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ofertas } from 'app/shared/Ofertas.model';
import { OfertasService } from 'app/ofertas.service';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx'


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css'],
  providers: [OfertasService]
})
export class OfertasComponent implements OnInit {
  public ofertas: Ofertas

  constructor(public route: ActivatedRoute, public ofertasService: OfertasService) { }
  /* Snapshot e Subscribe */
  ngOnInit() {
    this.route.snapshot.params['id']

    this.ofertasService.getOfertasToId(this.route.snapshot.params['id'])
      .then((res: Ofertas) => {
        return this.ofertas = res
      })

    // aula 01 
    /*   this.route.params.subscribe((next: any) => {console.log(next)},  
         (error: any) => {console.log(error)},
         () => {console.log("o processamento foi feito com sucesso! ^^" )}
      )
    */
    //aula 02
    /*  let tempo = Observable.interval(2000)
   
      tempo.subscribe((temp: any) => {
       console.log(temp)
      }) */

    // aula 03

    /*  let LeitorDePesquisa = Observable.create((observer: Observer<string>) => {
         observer.next("Ryan Pablo Silva Araujo")
         setTimeout(() => {
           observer.next("Ryan Pablo Silva Araujo 2")
         }, 5000)
      })
   
     LeitorDePesquisa.subscribe((res: string) => {
         console.log(res)
     }) */

  }
}
