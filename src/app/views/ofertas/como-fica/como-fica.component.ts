import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'app/services/ofertas.service';
import { Ofertas } from 'app/shared/Ofertas.model';

@Component({
  selector: 'app-como-fica',
  templateUrl: './como-fica.component.html',
  styleUrls: ['./como-fica.component.css'],
  providers: [OfertasService]
})
export class ComoFicaComponent implements OnInit {
    ofertas: Ofertas
  constructor(private router: ActivatedRoute, private ofertasService: OfertasService) {}

  ngOnInit() {
    this.ofertasService.getComoFicaToId(this.router.parent.snapshot.params['id'])
    .then((res: Ofertas) => {
      return this.ofertas = res
    })
  }
}
