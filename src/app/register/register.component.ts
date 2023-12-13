import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  userData:any={};
  getData2(data:NgForm){
    console.warn(data)
    this.userData=data
    this.router.navigate(['/Register']);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToHome() {
    this.router.navigate(['']);
  }
}
