import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any = {};
  login: FormGroup |any;
  loginuser:any;
  constructor(private router: Router, private authService:AuthenticationService) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  logindata(login:FormGroup) {
    if (this.login.valid) {
      return;
    }
    const {email,password} = this.login.value;
    this.authService.login(email,password).subscribe(() => {
      this.router.navigate(['/']);
    });
    }
    }


