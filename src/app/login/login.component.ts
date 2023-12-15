
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;

  constructor(private router: Router, private authService: AuthenticationService,  private afAuth:AngularFireAuth) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onLogin() {
    if (this.login.valid) {
      const {email, password } = this.login.value;
      this.authService.login(email, password);
    } else {
      alert('Please fill the required fields with valid data.');
    }
  }
  signInWithGoogle() {
    this.authService.googleSignIn();
  }

}
