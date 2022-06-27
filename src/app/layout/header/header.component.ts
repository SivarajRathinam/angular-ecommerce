import { product } from './../../category/product.interface';
import { CartService } from './../../shared/cart.service';
import { Component, OnInit, Renderer2,ViewChild,ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount:number;
  cartData: product[];
  showCart:Boolean = false;
  @ContentChild('cartButton') cartButton?: ElementRef;
  @ContentChild('cartDetails') cartDetails?: ElementRef;

  constructor(private cartService:CartService,private renderer:Renderer2) {
    this.cartCount = 0
    this.cartData = []
   }

  ngOnInit(): void {
    this.cartService.cartData.subscribe(data=>{
      this.cartCount = data?.length;
      this.cartData = data
    })
    this.renderer.listen('window','click',(e:Event)=>{
      if(this.cartButton && e.target !== this.cartButton?.nativeElement && e.target!==this.cartDetails?.nativeElement){
        this.showCart=false
      }
    })
    
  }
  onClickOutside(){
    this.showCart=false
  }
  onCartClick(){
    this.showCart = !this.showCart;
  }
}
