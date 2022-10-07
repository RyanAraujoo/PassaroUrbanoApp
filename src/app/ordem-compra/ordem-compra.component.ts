import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { ordemCompra } from './../shared/ordem-compra.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {
  public forms: FormGroup = new FormGroup({
    endereco: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    numero: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(5) , Validators.pattern('[0-9]+$')]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [Validators.required])
  })

  public idNumero: number;

  constructor(private ordemCompraService: OrdemCompraService){ }

  ngOnInit() {

  }
public desativarAtivarBotaoForm () {
   return this.forms.valid === true ? '' : 'disabled'
}
  public confirmarCompra(): void {
    this.ordemCompraService.efetivarCompra(this.forms.value).subscribe(
      (res: ordemCompra) => {
          this.idNumero = res.id
      }
    )
  }

}
