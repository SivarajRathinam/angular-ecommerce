import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
