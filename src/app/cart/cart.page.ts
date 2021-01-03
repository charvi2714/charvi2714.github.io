import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  serverResponse: any = 0;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getCartList();
  }

  async getCartList(){
    const data = {cartlist: JSON.parse(localStorage.getItem('cart'))};
    const response =  await fetch('https://www.mpranay.tech/get/cartlist', {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    this.serverResponse = await response.json();
    console.log(this.serverResponse.cart);
    return null;
  }

  address_list()
  {
    this.router.navigate(['/address-list']);
  }
}
