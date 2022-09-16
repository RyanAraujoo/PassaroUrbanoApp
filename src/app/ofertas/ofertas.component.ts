import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ofertas } from 'app/shared/Ofertas.model';
import { OfertasService } from 'app/ofertas.service';

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
  }
}
