import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {category} from '../category.interface'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
@Input() category:category;
  id:number = 0;
  name:string = '';
  image:string = ''

  constructor(private router:Router) {
    this.category={id:1,name:'',image:''}
   }

  ngOnInit(): void {
    this.id = this.category.id;
    this.name = this.category.name;
    this.image = this.category.image;
  }
  handleClick(){
    this.router.navigate([`category/${this.id}`],)
  }
}
