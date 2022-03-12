import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductModule } from './product/product.module';
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: '', component: ProductModule },
  // { path: 'topber', component: TopBarComponent },
  { path: 'cart', component: CartComponent },
  // { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
