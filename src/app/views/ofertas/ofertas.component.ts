import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Ofertas } from 'app/shared/Ofertas.model';
import { OfertasService } from 'app/services/ofertas.service';
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
    this.route.params.subscribe((res: Params) => {
        this.ofertasService.getOfertasToId(res.id)
          .then((res: Ofertas) => {this.ofertas = res})
        })

    }

    /* this.ofertasService.getOfertasToId(this.route.snapshot.params['id'])
      .then((res: Ofertas) => {
        return this.ofertas = res
      }) */
  }

