import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {categoriesApi} from '../../constants/api'
import {category} from './category.interface'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit,OnDestroy {
  headerText:string;
  categories:category[] = [];
  apiSubscription?: Subscription;
  constructor(private http: HttpClient) {
    this.headerText = ''
   }

  ngOnInit(): void {
    this.headerText = 'Categories'
   this.apiSubscription = this.http.get<category[]>(categoriesApi).subscribe(resp=>{
      this.categories = resp
    })
  }
  ngOnDestroy(): void {
    this.apiSubscription?.unsubscribe?.()
  }
}
