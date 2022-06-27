import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {categoriesApi} from '../../constants/api'
import {category} from './category.interface'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  headerText:string;
  categories:category[] = [];
  constructor(private http: HttpClient) {
    this.headerText = ''
   }

  ngOnInit(): void {
    this.headerText = 'Categories'
    this.http.get<category[]>(categoriesApi).subscribe(resp=>{
      this.categories = resp
    })
  }
}
