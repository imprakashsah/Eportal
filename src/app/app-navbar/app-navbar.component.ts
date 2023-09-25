import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {
  constructor(
    public router : Router
  ){}


  loginStatus: boolean = false;
  ngOnInit() {
    let checkingLocalStorage = localStorage.getItem('token');
    if (checkingLocalStorage == 'true') {
      this.loginStatus = true;
    }
  }

  gotoLoginPage(){
    console.log(this.router.navigate(['login']));
    this.router.navigate(['login'])
  }
}
