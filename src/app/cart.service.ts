import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor() { }
items = [];
diff: any;
  addToCart(product, size) {
     this.diff = 3 - size.length;
     for (let i = 0; i < this.diff; i++){
       size += '_';
     }
     size = product + size;
     console.log(size.slice(size.length - 3));
     if (localStorage.getItem('cart') === null){
       this.items.push(size);
       localStorage.setItem('cart', JSON.stringify(this.items));
       this.items = [];
     }
     else{
       this.items = JSON.parse(localStorage.getItem('cart'));
       this.items.push(size);
       localStorage.setItem('cart', JSON.stringify(this.items));
       this.items = [];
     }
     console.log(localStorage.getItem('cart'));
     console.log(this.items);
     alert('Product added to cart successfully');
     window.location.reload();
  }
  getItems() {
    console.log('before json thing' + JSON.stringify(this.items));
    return this.items;
  }

  removeitems(productId, size){
    const index = this.items.indexOf(23, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    console.log('after json thing' + JSON.stringify(this.items));
  }

  getitemcount(){
    if (localStorage.getItem('cart') !== null){
      this.items = JSON.parse(localStorage.getItem('cart'));
    }
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
