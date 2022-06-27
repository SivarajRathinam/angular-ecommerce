import { CartService } from './../shared/cart.service';
import { Component, OnInit } from '@angular/core';
import { cartProduct } from '../shared/cartProduct.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartProducts:cartProduct[];
  constructor(private cartService:CartService) {
    this.cartProducts = []
   }

  ngOnInit(): void {
    this.cartProducts = this.cartService.cart;
    this.cartService.cartData.subscribe(data=>{
      this.cartProducts = data
    })
  }

}
