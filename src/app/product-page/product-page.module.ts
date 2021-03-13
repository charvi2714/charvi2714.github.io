import { ComponentModule } from './../components/component.module';

import { NgImageSliderModule } from 'ng-image-slider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductPagePageRoutingModule } from './product-page-routing.module';

import { ProductPagePage } from './product-page.page';

@NgModule({
  imports: [
    NgImageSliderModule,
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPagePageRoutingModule
  ],
  declarations: [ProductPagePage]
})
export class ProductPagePageModule {}
