import { Injectable } from "@angular/core"
import { CarrinhoOfertas } from "./shared/carrinho.model"
import { Oferta } from "./shared/oferta.model"

@Injectable()
export class CarrinhoService {
  private carrinhoOfertas: CarrinhoOfertas[] = []

  constructor() {}

  get _carrinhoComprasGet(): CarrinhoOfertas[] {
    return this.carrinhoOfertas;
  }

  transformarOfertaEmCarrinhoItem(x: Oferta) {
    let carrinhoItem = new CarrinhoOfertas(
      x.id,
      x.titulo,
      x.descricao_oferta,
      x.valor,
      x.imagens[0]
    );
    let itemEncontradoNoCarrinho = this._carrinhoComprasGet.find(
      (value: CarrinhoOfertas) => {
        return carrinhoItem.id === value.id
      }
    );
    if (itemEncontradoNoCarrinho) {
      itemEncontradoNoCarrinho.quantidade++
    } else {
      this._carrinhoComprasSet = carrinhoItem
    }
  }

  set _carrinhoComprasSet(y: CarrinhoOfertas) {
    this.carrinhoOfertas.push(y)
  }

  calcularTotalCarrinhoDeCompra() {
    return this._carrinhoComprasGet.reduce((resultado, quantidade) => {
      return (resultado += quantidade.valor * quantidade.quantidade)
    }, 0)
  }

  ajustarQuantidadeCarrinhoItem(
    carrinhoItem: CarrinhoOfertas,
    operacao: string
  ) {
    if (operacao === "+") {
      carrinhoItem.quantidade++
    } else {
      if (carrinhoItem.quantidade == 1) {
        return;
      }
      carrinhoItem.quantidade--
    }
  }

  removerOfertasCarrinhoDeCompraApósEfetivação() {
    this.carrinhoOfertas = []
  }
}
