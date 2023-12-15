import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm,Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  userData:any={};
  register:FormGroup|any;
  registeruser:any;
  getData2(data:NgForm){
    console.warn(data)
    this.userData=data
    this.router.navigate(['/Register']);
  }
  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.register = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.pattern(/[A-Za-z]+/)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(/[0-9]{10}/)]),
      'address': new FormControl('', [Validators.required]),
    });
  }

registerdata(register: FormGroup) {
  if (register.valid) {
    this.registeruser = this.register.value.username;
    this.http.post<any>("http://localhost:3000/register", this.register.value).subscribe(
      res => {
        console.warn(this.registeruser);
        alert('You are successfully registered!');
        this.register.reset();
      },
      err => {
        alert('Something went wrong!');
      }
    );
  } else {
    alert('Please fill in the required fields with valid data.');
  }
}
}

