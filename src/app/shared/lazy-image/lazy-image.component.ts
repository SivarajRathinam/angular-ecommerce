import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent implements OnInit {
  @Input() src?:string;
  isLoaded:Boolean;
  constructor() {
    this.src = ''
    this.isLoaded = false;
   }

  ngOnInit(): void {
  
  }
  onImgLoaded(){
    this.isLoaded = true
  }
}
