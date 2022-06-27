import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})
export class LazyImageComponent implements OnInit {
  @Input() src?:string;
  @Input() disableLoader?:string;
  isLoaded:Boolean;
  constructor() {
    this.src = ''
    this.isLoaded = false;
   }

  ngOnInit(): void {
    if(this.disableLoader==='true'){
      this.isLoaded = true
    }
  }
  onImgLoaded(){
    this.isLoaded = true
  }
}
