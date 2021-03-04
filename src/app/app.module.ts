import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { CardsComponent } from './components/ui/cards/cards.component';
import { ProductsGenericsComponent } from './components/products-generics/products-generics.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { TotalPagoPanelComponent } from './components/total-pago-panel/total-pago-panel.component';
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { PlanesPagoComponent } from './components/planes-pago/planes-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    ProductsGenericsComponent,
    LandingComponent,
    LoginComponent,
    SingleProductComponent,
    CarritoComponent,
    TotalPagoPanelComponent,
    PasarelaPagoComponent,
    PlanesPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
