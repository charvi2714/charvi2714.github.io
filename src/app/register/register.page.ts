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

  constructor(public firebaseservice: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  async onsignup(email: string, password: string) {
    this.loading = true;
    await this.firebaseservice.signup(email, password);
    if (this.firebaseservice.isLoggedIn) {
      this.loading = false;
      this.router.navigate(['/home']);
    }
  }

}
