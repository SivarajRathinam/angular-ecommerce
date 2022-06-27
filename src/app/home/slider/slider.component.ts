import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

const animations = trigger('img-animation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms', style({ opacity: 0 }))
])
]);
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [animations]
})
export class SliderComponent implements OnInit,OnDestroy {
  @Input() images: string[];
  currentImageIndex: number;
  sliderInterval: any;
  imageUrl: string;
  constructor() {
    this.images = [];
    this.imageUrl = '';
    this.currentImageIndex = 0;
  }
  updateImage(){
    console.log('update image')
    if (this.images.length > this.currentImageIndex+1) {
      this.currentImageIndex += 1;
      return;
    }
    this.currentImageIndex = 0;
  }
  startIntervalTimer() :void {
    this.sliderInterval = setInterval(this.updateImage.bind(this), 5000);
  } 
  ngOnInit(): void {
    if (this.images.length > 0) {
      this.imageUrl = this.images[0];
      // this.startIntervalTimer()
    }
  }
  selectIndex(index:number){
    this.currentImageIndex = index
  }
  ngOnDestroy(): void {
    clearInterval(this.sliderInterval)
  }
}
