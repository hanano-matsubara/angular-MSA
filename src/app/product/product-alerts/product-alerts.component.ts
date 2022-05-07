import { Component, OnInit, Input, Output, EventEmitter, ErrorHandler } from '@angular/core';
import { Product } from 'src/app/products';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
@Injectable({ providedIn: 'root' })
export class ProductAlertsComponent implements ErrorHandler {
  message: string = "";
  visible = false;
  handleError(e: any) {
    
    // do something with the exception
    if(e.status == 504){
      // タイムアウトエラー
      this.message = "通信に失敗しました。";
    }else{
      this.message = "予期せぬエラーが発生しました。";
    }
    console.log('An error occurred:', e.error);
    this.visible = true;
    debugger
  }
}
