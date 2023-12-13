import { Component,OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userData: any = {};

  getData2(data: NgForm) {
    this.userData = data
    this.router.navigate(['/Login']);
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToRegister() {
    this.router.navigate(['/Register']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }
}
