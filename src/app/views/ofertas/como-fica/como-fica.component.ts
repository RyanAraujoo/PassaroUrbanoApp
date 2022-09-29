import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
        this.router.parent.params.subscribe((params: Params)=> {
              this.ofertasService.getComoFicaToId(params.id)
                .then((res: Ofertas) => {
                    this.ofertas = res
                })
        })
  }
}
