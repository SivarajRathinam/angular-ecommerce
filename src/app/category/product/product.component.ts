import { ProductService } from './../../product-details/product.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { product } from '../product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() data:product;
image?:string;
name?:string;
price?:number;

  constructor(private router:Router,private productService:ProductService) {
   this.data = {}
   }

  ngOnInit(): void {
    this.image = this.data?.images?.[0]??'';
    this.name = this.data?.title;
    this.price = this.data?.price;
  }
  handleClick(){
    this.productService.setProduct(this.data)
    this.router.navigate(['product',this.data.id])
  }
}
