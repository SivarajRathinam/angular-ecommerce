import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
})
export class ImagePreviewComponent implements OnInit,OnChanges {
  @Input() images?: string[];
  currentIndex:number;
  currentImage?: string;
  constructor() {
    this.currentIndex = 0;
  }
  setInitialImage(images?:string[]): void {
    if ((images?.length ?? 0) > 0) {
      this.currentIndex = 0
    }
  }
  ngOnInit(): void {
    this.setInitialImage(this.images);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setInitialImage(changes['images'].currentValue)
  }
  handleImageChange(index:number){
    this.currentIndex=index;
  }
}
