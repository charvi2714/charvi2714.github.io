import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  authState: any = null;
  constructor(public firebase: FirebaseService, public router: Router, public firebaseAuth: AngularFireAuth) { }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user') !== null)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
