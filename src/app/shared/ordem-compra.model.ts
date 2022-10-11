import { CarrinhoOfertas } from 'app/shared/carrinho.model';

export class ordemCompra {

  id: number
  constructor(
    public endereco: string,
    public numero: string,
    public complemento: string,
    public formaDePagamento: string,
    public carrinho: CarrinhoOfertas[]
    ){}
}
