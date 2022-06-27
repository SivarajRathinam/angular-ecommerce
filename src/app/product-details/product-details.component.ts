import { CartService } from './../shared/cart.service';
import { ActivatedRoute } from '@angular/router';
import { getProductById } from './../../constants/api';
import { HttpClient } from '@angular/common/http';
import { product } from './../category/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productData?: product;
  images?: string[];
  name?: string;
  price?: number;
  description?: string;

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private cartService:CartService,
  ) {
    
  }
  updateProductData(){
    this.images = this.productData?.images;
    this.name = this.productData?.title;
    this.price = this.productData?.price;
    this.description = this.productData?.description;
  }
  ngOnInit(): void {
    this.productData = this.productService.productData;
    if (!this.productData?.id) {
      let id = this.route.snapshot.paramMap.get('id');
      this.http.get<product>(getProductById(id)).subscribe((resp) => {
        this.productData = resp;
        this.updateProductData()
      });
    }else{
      this.updateProductData()
    }
  }
  handleAddProductToCart(){
    if(this.productData) this.cartService.addToCart(this.productData);
  }
}
