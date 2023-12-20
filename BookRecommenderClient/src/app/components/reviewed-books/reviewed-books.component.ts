import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-reviewed-books',
  templateUrl: './reviewed-books.component.html',
  styleUrls: ['./reviewed-books.component.css']
})
export class ReviewedBooksComponent {

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