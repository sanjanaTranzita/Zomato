// RegisterComponent
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup | any;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.register = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.pattern(/[A-Za-z]+/)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(/[0-9]{10}/)]),
      'address': new FormControl('', [Validators.required]),
    });
  }

  registerdata() {
    if (this.register.valid) {
      const { username, email, password, phone, address } = this.register.value;
      this.authService.register(username, email, password, phone, address);
    } else {
      alert('Please fill the required fields with valid data.');
    }
  }
}
