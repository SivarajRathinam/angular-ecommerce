import { ActivatedRoute } from '@angular/router';
import { singleCategoryApi } from './../../constants/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {product} from './product.interface'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  param:string|null = '';
  products:product[];
  categoryName?:string;
  constructor(private http: HttpClient,private route:ActivatedRoute) { 
    this.products = []
  }
  getProducts(){
    this.http.get<product[]>(singleCategoryApi(this.param)).subscribe(resp=>{
      this.products = resp
      this.categoryName = resp?.[0]?.category?.name ??''
    })
  }
  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id')
    // this.route.queryParams.subscribe(params => {
    //   this.param = params['id'];
    //   this.getProducts()
    // });
    this.getProducts()
  }

}
