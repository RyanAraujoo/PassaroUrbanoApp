import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from '../ofertas.services'
import { Oferta } from '../shared/oferta.model'
import { CarrinhoService } from './../carrinho.service';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
                this.oferta = oferta
        })
  })
  }

 adicionarCompraNoCarrinho(oferta: Oferta) {

              this.carrinhoService.transformarOfertaEmCarrinhoItem(oferta)
              console.log("Oferta adicionada no carrinho!")
              console.log(this.carrinhoService._carrinhoComprasGet)
  }

}
