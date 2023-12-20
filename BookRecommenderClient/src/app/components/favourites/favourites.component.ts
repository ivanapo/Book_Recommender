import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  constructor(private userService: UserService, private router: Router) { }
  user: User;

  ngOnInit() {

    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/"]);
    }

    const id = localStorage.getItem('currentUser');

    this.userService.getUser(id).subscribe({
      next: (res) => this.user = res,
      error: (err) => console.log(err),
    });



  }
}

