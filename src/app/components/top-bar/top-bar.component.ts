import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {

  items: any;
  cartCount: any = 0;
  constructor(private router: Router, private cartService: CartService) { }
  ngOnInit() {
    this.cartCount = this.cartService.getitemcount();
  }

}
