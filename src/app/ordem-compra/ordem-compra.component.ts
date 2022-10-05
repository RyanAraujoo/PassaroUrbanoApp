import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrdemCompraService } from 'app/ordem-compra.service';
import { Oferta } from 'app/shared/oferta.model';
import { OfertasService } from './../ofertas.services';
import { ordemCompra } from './../shared/ordem-compra.model';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OfertasService,OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit, OnDestroy {
  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  public validaEndereco: boolean
  public validaNumero: boolean
  public validaComplemento: boolean
  public validaFormaDePagamento: boolean

  public validaTipoPrimitivoEndereco: boolean = true
  public validaTipoPrimitivoNumero: boolean = true
  public validaTipoPrimitivoComplemento: boolean = true
  public validaTipoPrimitivoFormaDePagamento: boolean = true

  public botaoConfirmarCompra: string = 'disabled'
  public valorIncrementalOferta: number = 1
  public ofertas: Oferta
  public ofertasList: Oferta[] = new Array<Oferta>()
  public pedido: ordemCompra = new ordemCompra('','','','')
  public totalValorOfertas: number

  public idPedidoCompra: number

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {
   this.route.params.subscribe((parametros: Params) => {
     this.ofertasService.getOfertaPorId(parametros.id)
      .then((res: Oferta) => {
           this.ofertas = res
           this.ofertasList.push(this.ofertas)
           this.totalValorOfertas = this.atualizarValorTotal()
           sessionStorage.setItem('carrinhoOfertas',JSON.stringify(this.ofertasList))
      })
    })
  }

  ngOnDestroy(): void {

  }

  atualizarValorTotal(): number {
    let x: Oferta
    let valorTotal: number = 0
      for (x of this.ofertasList) {
          valorTotal += x.valor
      }
      return valorTotal
  }

  confirmarCompra() {
    this.pedido.endereco = this.endereco
    this.pedido.complemento = this.complemento
    this.pedido.numero = this.numero
    this.pedido.formaDePagamento = this.formaPagamento
      this.ordemCompraService.efetivarCompra(this.pedido).subscribe((res: ordemCompra) => {
        this.idPedidoCompra = res.id
      })


  }

  incrementando() {
      this.valorIncrementalOferta++

  }

  decrementando() {
    if (this.valorIncrementalOferta == 0) { return;}
    this.valorIncrementalOferta--
  }

  public atualizaEndereco(endereco: string): void {
   this.endereco = endereco

    this.validaTipoPrimitivoEndereco = false

   if (this.endereco.length > 3) {
    this.validaEndereco = true
  } else {
    this.validaEndereco = false
  }

  if (this.endereco.length == 0) this.validaTipoPrimitivoEndereco = true
  this.verificarValidacaoDosCampos()
  }

  isNumber(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

  public atualizaNumero(numero: string):void {
    this.numero = numero

    this.validaTipoPrimitivoNumero = false

   if (this.isNumber(numero)) {
    this.validaNumero = true
  } else {
    this.validaNumero = false
  }

  if (this.numero.length == 0) this.validaTipoPrimitivoNumero = true
  this.verificarValidacaoDosCampos()

  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento

    this.validaTipoPrimitivoComplemento = false

   if (this.complemento.length > 3) {
    this.validaComplemento = true
  } else {
    this.validaComplemento = false
  }

  if (this.complemento.length == 0) this.validaTipoPrimitivoComplemento = true
  this.verificarValidacaoDosCampos()
  }

  public atualizaFormaPagamento(formaPagamento: string):void {
    this.formaPagamento = formaPagamento

    if (this.formaPagamento !== '') {
      this.validaFormaDePagamento = true
      this.validaTipoPrimitivoFormaDePagamento = false
    } else {
      this.validaFormaDePagamento = false
    }
    this.verificarValidacaoDosCampos()
  }

    verificarValidacaoDosCampos (): boolean {
      if (this.validaNumero === true && this.validaComplemento === true && this.validaFormaDePagamento === true && this.validaEndereco === true) {
          this.botaoConfirmarCompra = ''
         return true
      } else {
        this.botaoConfirmarCompra = 'disabled'
        return false
      }
    }

}
