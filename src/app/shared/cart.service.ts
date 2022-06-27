import { cartProduct } from './cartProduct.interface';
import { product } from './../category/product.interface';
import { EventEmitter, Injectable, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() cartData:EventEmitter<cartProduct[]> = new EventEmitter();
  private snakbar?:any;
  cart: cartProduct[];
  private message:string;
  constructor( private _snackBar: MatSnackBar) {
    this.cart  = []
    this.message = ''
   }
   emitData(){
    this.openSnackBar()
    this.cartData.emit(this.cart)
   }
   addToCart(product:cartProduct){
     let isProductAlreadyAvailable = false
     this.cart.map((item)=>{
      if(product.id===item.id){
        item.itemCount = (item?.itemCount??0) + 1
        isProductAlreadyAvailable = true
      }
      return item
     })
     if(!isProductAlreadyAvailable){
      this.cart.push({...product,itemCount:1})
      this.message= 'Product added to cart'
     }
     this.emitData()
   }
   removeFromCard(productId:string){
     this.cart = this.cart.filter(item=>item.id !== productId)
     this.message= 'Product removed from cart';
     this.emitData()
   }
   addProductCount(productId:string){
     this.cart = this.cart.map(item=>{
       if(item.id===productId && item.itemCount){
         item.itemCount += 1;
       }
       return item;
     })
     this.message= 'Product update on cart';
    this.emitData()
   }
   removeProductCount(productId:string){
    this.cart = this.cart.map(item=>{
      if(item.id===productId && item.itemCount){
        item.itemCount -= 1;
      }
      return item;
    }).filter(item=>item.itemCount)
    this.message= 'Product removed from cart';
    this.emitData()

   }
   openSnackBar() {
    this._snackBar.open(this.message, 'close')
  }
}
