import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'app/ofertas.service';
import { Ofertas } from './../../shared/Ofertas.model';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
  ofertas: Ofertas
  constructor(private router: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOndeFicaToId(this.router.parent.snapshot.params['id'])
    .then((res: Ofertas) => {
        this.ofertas = res 
    })
  }

}
