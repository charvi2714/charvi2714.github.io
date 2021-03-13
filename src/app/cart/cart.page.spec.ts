import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import { CartPage } from './cart.page';
import 'zone.js/dist/zone-testing';
import 'zone.js/dist/async-test.js';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
// tslint:disable-next-line: import-spacing
}
  from '@angular/platform-browser-dynamic/testing';
import { FormsModule } from '@angular/forms';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.address_list();
  });

});
