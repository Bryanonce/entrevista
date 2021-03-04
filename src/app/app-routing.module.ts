import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { SingleProductComponent } from './components/single-product/single-product.component';



const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:LandingComponent, canActivate: ['canActivateTeam']},
  {path: 'producto/:id', component: SingleProductComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'pasarela', component: PasarelaPagoComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
