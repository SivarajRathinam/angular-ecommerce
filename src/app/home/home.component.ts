import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerImages:string[] = [] ;
  constructor() {

   }
  getImages():string[]{
    let imageNames = ['banner1.jpg','banner2.webp','banner3.jpg','banner4.jpg']
    return imageNames.map(imageUrl =>`assets/banners/${imageUrl}`)
  }
  ngOnInit(): void {
    this.bannerImages = this.getImages()
  }

}
