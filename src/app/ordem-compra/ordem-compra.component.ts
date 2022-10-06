import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { NgForm } from '@angular/forms';
import { ordemCompra } from 'app/shared/ordem-compra.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
  @ViewChild('formulario') public f: NgForm
  public idCompra: number

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }
  confirmarCompra() {
    this.ordemCompraService.efetivarCompra(this.f.value).subscribe(
    (res: ordemCompra) => {
      console.log("Pedido feito com sucesso!")
      this.idCompra = res.id },
    (error: any) => { throw new Error(`Infelizmente! não conseguimos efetivar sua compra! ${error}`)}
    )
  }
  botaoConfirmarEstadoDisabled(): string {
     return this.f.invalid == true ? 'disabled' : ''
  }
}
