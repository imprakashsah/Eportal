import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private auth: AuthService
  ) { }


  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  loginStatus = false;
  ngOnInit() {
    let checkingLocalStorage = localStorage.getItem('token');
    if (checkingLocalStorage == 'true') {
      this.loginStatus = true;
    }
  }

  logFunction() {
    console.log(this.profileForm.value)
    const email: string = this.profileForm.value.email as string;
    const pass: string = this.profileForm.value.password as string;
    this.auth.userRegister(email, pass);
    let checkingLocalStorage = localStorage.getItem('token');
    if (checkingLocalStorage == 'true') {
      this.loginStatus = true;
    }
  }
}
