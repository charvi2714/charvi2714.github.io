import { FirebaseService } from './../services/firebase.service';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
declare const myTest: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private iab: InAppBrowser, private webIntent: WebIntent, public firebaseservice: FirebaseService) {}
  payeeVPA: string;
  payeeName: string;
  payAmount: number;
  transactionReference: string;
  transactionNote: string;
  currency: string;
  values: any;
  loading = true;
  // tslint:disable-next-line: member-ordering
  color: string;
  data1: any;
  product: any;
  temp: any;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.getCategory();
    this.getProducts();
  }

  async getProducts() {
    const response = await fetch('https://www.mpranay.tech/get/products');
    const data = await response.json();
    // console.log("Get products: "+data);
    this.product = Object.keys(data);
    this.temp = data;
    // this.product = Object.keys(data).map(key => data[key]);
    console.log(data[1]);
    console.log(data[3]);
    this.loading = false;
  }


  async getCategory() {
    const response = await fetch('https://www.mpranay.tech/get/category');
    const data = await response.json();
    this.values = data;
    console.log(this.values);
  }

  onClick() {
    myTest();
  }

  test()
  {
    this.router.navigate(['/category']);
  }

  product_page()
  {
    this.router.navigate(['/product-page']);
  }

  async test_api() {
    const response = await fetch('https://www.mpranay.tech/');
    const data = await response.json();
    console.log('hello'+ data);
    this.data1 = data.userId;
  }

  Verifylogin(){
    if (localStorage.getItem('user') == null)
    {
      console.log(null);
      this.router.navigate(['/login']);
    }
    else{
      console.log('passed');
      this.router.navigate(['/profile']);
    }
  }

  openbrowser()
  {
    const browser = this.iab.create('https://ionicframework.com/', '_blank');
    browser.on('loadstart').subscribe((e) => {
      console.log(e.url);
      if (e.url === 'https://ionicframework.com/getting-started') {
        browser.close();
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    window.location.reload();
  }


  payment_trail()
  {
  //   const options = {
  //     action: this.webIntent.ACTION_VIEW,
  //     url: 'upi://pay?pa=8919345427@upi&pn=pranay&tid=1215316627sunny&am=3&cu=INR&tn=In app payment',
  //   };
  //   this.webIntent.startActivityForResult(options).then(
  //     onSuccess => {
  //       console.log('sucess hello', onSuccess);
  //       console.log('status', onSuccess.extras.response);
  //       if (onSuccess.extras.Status === undefined)
  //       {
  //           console.log('Yeah it is undefined');
  //       }
  //       else{
  //         console.log(onSuccess.extras.Status);
  //       }
  //       this.router.navigate(['/profile']);
  //     },
  //     onError => {
  //       console.log('error hello', onError);
  //       this.router.navigate(['/login']);
  //     }
  //   );
  const packages = {
    paytm: 'net.one97.paytm',
    google: 'com.google.android.apps.nbu.paisa.user',
    whatsapp: 'com.whatsapp'
};
  this.payeeVPA = '8919345427@upi';
  this.payeeName = 'pranay';
  this.payAmount = 2;
  this.transactionReference = '871489872'; // ORDER ID or Something similar
  this.transactionNote = 'testing';
  this.currency = 'INR';
  // tslint:disable-next-line: max-line-length
  const url = 'upi://pay?pa=' + this.payeeVPA + '&pn=' + this.payeeName + '&tr=' + this.transactionReference + 'tn=' + this.transactionNote + '&am=' + this.payAmount + '&cu=' + this.currency;
  const options = {
    action: this.webIntent.ACTION_VIEW,
    url,
    package: packages.whatsapp
};
  this.webIntent.startActivityForResult(options).then(
  onSuccess => {
  console.log('sucess hello', onSuccess);
  });
   }
  }
