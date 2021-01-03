import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from './../components/component.module';
import { IonicModule } from '@ionic/angular';

import { CancelledOrdersPageRoutingModule } from './cancelled-orders-routing.module';

import { CancelledOrdersPage } from './cancelled-orders.page';

@NgModule({
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CancelledOrdersPageRoutingModule
  ],
  declarations: [CancelledOrdersPage]
})
export class CancelledOrdersPageModule {}
