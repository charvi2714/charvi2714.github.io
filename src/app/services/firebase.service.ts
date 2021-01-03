import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  authState: any = null;

  constructor(public firebaseAuth: AngularFireAuth)  {
    this.firebaseAuth.authState.subscribe( authState => {
      this.authState = authState;
    });
  }

  isAuthenticated(): boolean {
    console.log(this.authState);
    return this.authState !== null;
}

async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    }
      // tslint:disable-next-line: only-arrow-functions
      ).catch(function(error) {
        // Handle error.
        console.log('hello', error.code, error.message);
      });
  }

async reset(email: string){
    await this.firebaseAuth.sendPasswordResetEmail(email).then(res => {
      console.log('mail_sent');
    }
    // tslint:disable-next-line: only-arrow-functions
    ).catch(function(error) {
      console.log('error', error.code, error.message);
    });
  }

async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    }
      // tslint:disable-next-line: only-arrow-functions
      ).catch(function(error) {
        // Handle error.
        console.log(error.code, error.message);
      });
  }

logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
