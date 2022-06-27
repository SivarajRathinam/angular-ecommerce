import { CartService } from './../shared/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { cartProduct } from '../shared/cartProduct.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit,OnDestroy {
  cartProducts:cartProduct[];
  cartSubscription?: Subscription;
  constructor(private cartService:CartService) {
    this.cartProducts = []
   }

  ngOnInit(): void {
    this.cartProducts = this.cartService.cart;
    this.cartSubscription = this.cartService.cartData.subscribe(data=>{
      this.cartProducts = data
    })
  }
  ngOnDestroy(): void {
      this.cartSubscription?.unsubscribe?.()
  }
}
