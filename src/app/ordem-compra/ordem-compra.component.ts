import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {

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
