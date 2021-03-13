import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public firebaseservice: FirebaseService, public router: Router) { }

  ngOnInit() {
    console.log(this.firebaseservice.isAuthenticated());
  }

  orders()
  {
    this.router.navigate(['/orders']);
  }

  cancelled_orders()
  {
    this.router.navigate(['/cancelled-orders']);
  }

  Logout()
  {
    this.firebaseservice.logout();
    this.router.navigate(['/home']);
  }
}
