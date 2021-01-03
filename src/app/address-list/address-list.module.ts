import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from './../components/component.module';
import { IonicModule } from '@ionic/angular';

import { AddressListPageRoutingModule } from './address-list-routing.module';

import { AddressListPage } from './address-list.page';

@NgModule({
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddressListPageRoutingModule
  ],
  declarations: [AddressListPage]
})
export class AddressListPageModule {}
