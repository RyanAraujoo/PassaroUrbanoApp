import { Component, OnInit } from '@angular/core';
import { Ofertas } from 'app/shared/Ofertas.model';
import { OfertasService } from 'app/services/ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {
  ofertas: Ofertas[] 
  constructor(public ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService.getOfertasToCategoria('diversao')
    .then((res:Ofertas[]) => { 
      return this.ofertas = res
    })
  }

}
