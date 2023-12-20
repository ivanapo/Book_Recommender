import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {  Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent implements OnInit {

  constructor(private userService: UserService, private router: Router){}



  user: User;


  ngOnInit() {
    
    if(!this.userService.isLoggedIn()) { 
      this.router.navigate(["/"]);
    }

    const id = localStorage.getItem('currentUser');



    if (id) {
      this.userService.getUser(id).subscribe({
        next: (res) => this.user = res, 
       error: (err) => console.log(err),
      });
    }
  

  }
}

