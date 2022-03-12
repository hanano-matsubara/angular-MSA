import { Component } from '@angular/core';

import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { Product} from 'src/app/products';
// import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  number: number = 5;
  products: any;

  // フィールド値ではなく、コンストラクターにサービスを定義しないと使えていない
  constructor(
    private cartService: CartService,
    private configService: ProductService
    ) {}

  ngOnInit(): void {
    // this.getItems();
    const productsObservable = this.configService.getItems()
    productsObservable.subscribe(
      (data) => { 
        this.products = data
        // console.log('次のデータが出力されました：' + data); 
        // debugger
      },

      (err) => { console.log('次のエラーが出力されました：' + err); },
      () => { console.log('完了しました！'); }
    )
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('お知らせを受け取ります');
  }
  addToCart(products: Product) {
    this.cartService.addToCart(products);
    window.alert('Your product has been added to the cart!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
