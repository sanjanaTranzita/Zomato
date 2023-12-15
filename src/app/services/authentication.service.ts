import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      alert('You are now logged in!');
      this.router.navigate(['']);
    }, err => {
      alert('You have not entered your data correctly!');
      this.router.navigate(['Login']);
    });
  }

  register(username: string, email: string, password: string, phone: number, address: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['Login']);
    }).catch(err => {
      alert(err.message);
      this.router.navigate(['Register']);
    });
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['Login']);
    }).catch(err => {
      alert(err.message);
    });
  }
  // forgot password
  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['verify-email']);
    }, err => {
      alert('Something went wrong');
    })
  }

  // email verification
  sendEmailForVerification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['verify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

}
