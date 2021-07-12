import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { OrdersComponent } from './sales/pages/orders/orders.component';

const routes: Routes = [

  { path: '', component: BasicsComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersComponent },
  { path: 'not-commons', component: NotCommonsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
