import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="fixed-bottom">
      <div class="row">
        <div class="container">
          <span>Termos de uso | Política de Privacidade</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      span {
        color: #fff;
      }

      .row {
        background: #0057a6;
        padding: 10px;
      }
    `,
  ],
})
export class FooterComponent {}
