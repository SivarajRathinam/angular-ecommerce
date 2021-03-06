import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatGridListModule,} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { SharedComponent } from './shared/shared.component';
import { LazyImageComponent } from './shared/lazy-image/lazy-image.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './category/product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ImagePreviewComponent } from './shared/image-preview/image-preview.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ContactModule } from './contact/contact.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    CategoriesComponent,
    CategoryListComponent,
    SharedComponent,
    LazyImageComponent,
    LoaderComponent,
    NotFoundComponent,
    CategoryComponent,
    ProductComponent,
    ProductDetailsComponent,
    LayoutComponent,
    HeaderComponent,
    ImagePreviewComponent,
    CartListComponent,
    CartItemComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatSnackBarModule,
    ContactModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
