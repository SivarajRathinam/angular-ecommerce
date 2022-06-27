import { product } from './../category/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:product;
  constructor() {
    this.productData = {}
   }
  
  public setProduct(data : product) {
    this.productData = data;
  }
  public getProduct():product{
    return this.productData
  }
  
}
