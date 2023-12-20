import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  user: any;

  request = {
    provisionId: '',
    password: ''
  };


  constructor(private userService: UserService, private router: Router) { }


  userLogin() {
    console.log(this.request);
    this.userService.userLogin(this.request).subscribe({
      next: (res) => {
        this.user = res;
        localStorage.setItem('currentUser', this.user.id);
        console.log("Login successful");
        this.router.navigate(["/"])
      },
      error: (err) => alert("You have entered wrong username or password")
    }
    );
  }
}