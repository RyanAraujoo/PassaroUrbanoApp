import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/ofertas.service';
import { Ofertas } from '../shared/Ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  ofertas: Ofertas[]

  constructor(public ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas()
    console.log(this.ofertas)
  }

}
