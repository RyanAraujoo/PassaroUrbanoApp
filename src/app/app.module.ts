import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { OffersService } from './shared/services/offers.services';
import { RouterModule } from '@angular/router';
import { ViewModule } from './shared/view/view.module';
import { HeaderModule } from './header/header.module';
@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    HeaderModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    ViewModule,
  ],
  providers: [OffersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
