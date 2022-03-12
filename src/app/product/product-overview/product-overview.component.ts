import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service'

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {
  
  items : any;

  constructor(private productService: ProductService) {
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
  

  
}
