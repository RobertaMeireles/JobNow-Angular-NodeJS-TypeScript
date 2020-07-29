import { Component } from '@angular/core';
import { LoginService } from './services-project/login/login.service';

import { NoNavbarService } from './services-project/no-navbar/no-navbar.service';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { User } from './models-project/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'job-now';  
  //VARIABLE TO TOKEN
  jwtHelper = new JwtHelperService();

  //VARIABLE TO NAVBAR
  showNavbar: boolean = false

  constructor(private noNavbarService: NoNavbarService,
              private loginService:LoginService){
  }

  /* VERIFIES IF LOCAL STORAGE HAS A TOKEN AND A USER. IF YES, UPDATE THIS VALUES ~
  ON LOGIN SERVICE TO BE USED IN THE ENTIRE SYSTEM (USER IS STILL LOGGED IN SYSTEM)*/
  ngOnInit(){
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (token) {
      this.loginService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.loginService.loggedUser= user;
    }
      
    this.noNavbarService.showNavBarEmitter.subscribe(
      show => this.showNavbar = show
    );
  }
}
