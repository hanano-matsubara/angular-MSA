import { Component, OnInit } from '@angular/core'
import { ProductService } from 'src/app/service/product.service'
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component'

import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Product } from '../../products';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {

  items : any;
  selectedProduct: Product|undefined;

  constructor(
    private productService: ProductService,
    private errorMessage: ProductAlertsComponent,
    private dialog: MatDialog,
    ) {
  }
  ngOnInit(): void {
    // this.getItems();
    const productsObservable = this.productService.getItems()
    productsObservable.subscribe(
      (data) => {
        this.items = data
        // console.log('次のデータが出力されました：' + data);
        // debugger
      },

      (err) => {
        console.log('次のエラーが出力されました：' + err);
        this.errorMessage.handleError(err)
      },
      () => { console.log('完了しました！'); }
    )
  }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('お知らせを受け取ります');
  }

  onSelect(product: Product):void {
    this.selectedProduct = product;
    this.dialog.open(
      ProductDetailsComponent,
      {data:
        // this.productService.findById(this.selectedProduct.id)
        this.selectedProduct
      }).
    afterClosed().subscribe(result =>{
      console.log("dialog:", result);
    });
  }



}
