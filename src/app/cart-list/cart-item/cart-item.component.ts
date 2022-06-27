import { CartService } from './../../shared/cart.service';
import { cartProduct } from './../../shared/cartProduct.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product:cartProduct;
  constructor(private cartService:CartService) {
    this.product={}
   }

  ngOnInit(): void {
  }
  handleAddItemCount(){
    this.cartService.addProductCount(this.product.id??'')
  }
  handleRemoveItemCount(){
    this.cartService.removeProductCount(this.product.id ??'')
  }
  handleRemoveFromCart(){
    this.cartService.removeFromCard(this.product.id ??'')
  }
}
