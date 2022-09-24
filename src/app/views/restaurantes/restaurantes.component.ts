import { Component, OnInit } from '@angular/core';
import { Ofertas } from 'app/shared/Ofertas.model';
import { OfertasService } from 'app/services/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {
  ofertas: Ofertas[] 
  constructor(public ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService.getOfertasToCategoria('restaurante')
    .then((res:Ofertas[]) => { 
      return this.ofertas = res
    })

  }

}
