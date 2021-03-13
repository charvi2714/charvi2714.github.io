import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private cartService: CartService) { }
  productIdFromRoute: any;
  size = 'undefined';
  serverResponse: any = 0;
  imageObject: any = 0;
  selectedRadioGroup: any = {value: undefined};
  selectedRadioItem: any;
  name = 'Angular';
  loading = true;
  // imageObject = [{
  //     image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
  //     thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
  //     title: 'Hummingbirds are amazing creatures'
  // }]
  ngOnInit() {
    this.productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    console.log(this.productIdFromRoute);
    this.getProductDetails();
  }



  async getProductDetails(){
    const data = { productId: this.productIdFromRoute };
    const response =  await fetch('https://www.mpranay.tech/get/product', {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    this.serverResponse = await response.json();
    console.log(this.serverResponse);
    this.imageObject = this.serverResponse.urls;
    this.loading = false;
  }

  radioGroupChange(event) {
    // console.log('radioGroupChange', event.detail);
    this.selectedRadioGroup = event.detail;
    console.log(this.selectedRadioGroup.value);
  }

  radioSelect(event) {
    console.log('radioSelect', event.detail);
    this.selectedRadioItem = event.detail;
  }

  cart()
  {
    this.router.navigate(['/cart']);
  }

  addtocart()
  {
    if (this.size === 'undefined'){
      alert('Please select size');
    }
    else {
      this.cartService.addToCart(this.productIdFromRoute, this.size);
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');

    window.location.reload();
  }

}
