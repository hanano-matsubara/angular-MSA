import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// 外部APIからデータを取得し、ストリームとしてアプリケーションに提供
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductModule } from './product/product.module'
import { ProductService } from './service/product.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    // inportすべきなのか定かではない
    ProductModule,

    BrowserAnimationsModule,
    MatDialogModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CartComponent,
    // ShippingComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductService
  ],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
