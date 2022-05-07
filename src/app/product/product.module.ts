import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { MatDialogModule} from '@angular/material/dialog';
import { Routes, RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductComponent } from './product.component';
import { ProductService } from '../service/product.service'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [{ path: '', component: ProductListComponent }],
  },
  {
    path: 'overview',
    // 原因：以下のコンポーネント名をProductOverviewComponentにしていたこと
    // 現象：ProductDetailComponentに遷移できない
    component: ProductComponent,
    children: [
      { path: '', component: ProductOverviewComponent },
      { path: ':productId', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  // このコンポーネント配下で連結するコンポーネントは全て宣言しておく
  // https://ron-tech.hatenablog.com/entry/2021/05/14/215235
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductOverviewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    // MatDialogModule,
    FormsModule,
    BrowserModule,
    // BrowserAnimationsModule,
  ],
  providers: [ ProductService ],
  bootstrap: [],
})
export class ProductModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
