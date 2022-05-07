import { Location } from '@angular/common';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/service/product.service'
import { Product } from '../../products';
import { switchMap } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  item!: Product;
  // @Input() item: Product|undefined;
  constructor(
    // productIdによって渡す情報を変えられる
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private location: Location,
    public dialogref: MatDialogRef<ProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data:Product
  ) {
    this.item = data;
  }

  ngOnInit(): void {
    // this.getProduct()
    // this.route.paramMap.subscribe((params) => {
    //   // this.product = products[+params.get('productId')!];
    //   const id = params.get('productId')
    //   const productsObservable = this.productService.findById(id)
    //   productsObservable.subscribe(
    //     (data) => {
    //       this.item = data
    //       // console.log('次のデータが出力されました：' + data);
    //       // debugger
    //     },

    //     (err) => { console.log('次のエラーが出力されました：' + err); },
    //     () => { console.log('完了しました！'); }
    //   )
    // })
  }
  // // First get the product id from the current route.
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productService.findById(id).subscribe(
      (data) => {
        this.item = data
        console.log('次のデータが出力されました：' + data);
        // debugger

      })


  }
  public Save() {
    this.dialogref.close(this.item)
  }

    // const productIdFromRoute = Number(routeParams.get('productId'));

    // // Find the product that correspond with the id provided in route.
    // this.product = products.find(
    //   (product) => product.id === productIdFromRoute
    // );



  // addToCart(product: Product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }
}
