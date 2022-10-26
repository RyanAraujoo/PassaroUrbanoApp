import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OffersService } from './shared/services/offers.services';
import { RouterModule } from '@angular/router';
import { ViewModule } from './shared/view/view.module';
import { ReduceDescription } from './util/reduceDescription.pipe';
@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      ReduceDescription
   ],
  imports: [
  HttpClientModule,
    BrowserModule,
    RouterModule,
    ViewModule
  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
