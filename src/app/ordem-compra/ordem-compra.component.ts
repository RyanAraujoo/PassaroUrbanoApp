import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { OrdemCompraService } from "../ordem-compra.service"
import { ordemCompra } from "./../shared/ordem-compra.model"
import { OfertasService } from "./../ofertas.services"
import { CarrinhoService } from "./../carrinho.service"
import { CarrinhoOfertas } from "app/shared/carrinho.model"

@Component({
  selector: "app-ordem-compra",
  templateUrl: "./ordem-compra.component.html",
  styleUrls: ["./ordem-compra.component.css"],
  providers: [OrdemCompraService, OfertasService],
})
export class OrdemCompraComponent implements OnInit {
  public forms: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(5),
      Validators.pattern("[0-9]+$"),
    ]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [Validators.required]),
  });

  public idNumero: number;
  public carrinho: CarrinhoOfertas[] = [];
  public totalCarrinhoItem: number = 0;

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    this.carrinho = this.carrinhoService._carrinhoComprasGet
  }

  public desativarAtivarBotaoForm(): string {
    if ( this.forms.valid && this.carrinho.length) {
        return ''
    } else {
        return 'disabled'
    }
  }

  public confirmarCompra(): void {
    this.ordemCompraService

      let pedido: ordemCompra =  new ordemCompra(
          this.forms.value.endereco,
          this.forms.value.numero,
          this.forms.value.complemento,
          this.forms.value.formaPagamento,
          this.carrinhoService._carrinhoComprasGet
      )


      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((res: ordemCompra) => {
        this.idNumero = res.id
      });
  }

  incrementando(carrinhoItem: CarrinhoOfertas) {
    this.carrinhoService.ajustarQuantidadeCarrinhoItem(carrinhoItem, "+")
  }

  decrementando(carrinhoItem: CarrinhoOfertas) {
    this.carrinhoService.ajustarQuantidadeCarrinhoItem(carrinhoItem, "-")
  }

  limparCarrinho() {
      this.carrinho = []
  }
}
