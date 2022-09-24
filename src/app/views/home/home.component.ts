import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'app/services/ofertas.service';
import { Ofertas } from '../../shared/Ofertas.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Ofertas[]

  constructor(public ofertasService: OfertasService) { }

  ngOnInit() {
     this.ofertasService.getOfertas()
      .then((res: Ofertas[]) => {
        this.ofertas = res
      })

    }
}
