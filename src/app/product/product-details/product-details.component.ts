import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/service/product.service'
import { Product } from '../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  item!: Product;
  constructor(
    // productIdによって渡す情報を変えられる
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct()
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
        debugger
      
      })
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
