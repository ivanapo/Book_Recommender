import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  islogIn = false;
  isNavCollapsed = true;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.islogIn = true;
    }
  }

  logOut() {
    this.userService.logOut();
    window.location.reload();
  }

  toggleNavbar() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }
  
}