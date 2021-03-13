import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  loading: any = false;
  Name: any;
  number: number;
  email: any;
  password: any;
  rpassword: any;

  constructor(public firebaseservice: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: variable-name
  async onsignup(Name, number, email, password, rpassword) {
    if (password === rpassword) {
      await this.firebaseservice.signup(email, password, Name, number);
      if (this.firebaseservice.isLoggedIn) {
        this.router.navigate(['/home']);
      }
    }
    else{
      // tslint:disable-next-line: quotemark
      window.alert("Password didn't matched please try again");
    }
  }

}
