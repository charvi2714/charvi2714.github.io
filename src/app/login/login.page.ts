import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSignedin = false;
  email: "";
  password: "";
  constructor(public firebaseservice: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.firebaseservice.isAuthenticated();
  }

  register_new_user()
  {
    this.router.navigate(['/register']);
  }

  

  async resetpassword() {
    // tslint:disable-next-line: prefer-const
    const emailAddress = 'mpranay2018@gmail.com';

    await this.firebaseservice.reset(emailAddress);
  }

  async onsignin(email: string, password: string) {
    await this.firebaseservice.signin(email, password);
    if (this.firebaseservice.isLoggedIn) {
      this.isSignedin = true;
      this.router.navigate(['/profile']);
    }
    else {
      window.alert("Wrong Credentials");
    }
  }
}
