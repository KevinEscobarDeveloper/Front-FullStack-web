import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormComponent } from './form/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: CartViewComponent},
  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),    CarouselModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
