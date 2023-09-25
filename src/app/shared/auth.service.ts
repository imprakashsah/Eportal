import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) { }


  userLogin(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
    }, error => {
      alert("Something went wrong")
    })
  }

  userRegister(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then((data) => {
      console.log(data);

      localStorage.setItem('userD',  JSON.stringify(data.user));
      this.router.navigate(['']);
    }, err => {
      alert(err.message)
    })
  }

  logoutFunction(){
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['']);
    }, err => {
      alert(err.message)
    })
  }


}
