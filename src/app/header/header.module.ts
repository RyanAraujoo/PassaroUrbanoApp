import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduceDescription } from '../util/reduceDescription.pipe';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    ReduceDescription
  ],
  imports: [
  CommonModule,
  RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
