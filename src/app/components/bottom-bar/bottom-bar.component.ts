import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home()
  {
    this.router.navigate(['/home']);
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

}
