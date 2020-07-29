import { Component, OnInit } from '@angular/core';
import { User } from '../../models-project/users';
import { NoNavbarService } from './../../services-project/no-navbar/no-navbar.service';
import { LoginService } from './../../services-project/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private noNavbarService:NoNavbarService, 
              private loginService: LoginService,
              private router:Router)  { }

  // VARIABLES
  loginData: any = {};
  errorMessage: string;
  users:User[]=null;

  // SHOW NAVBAR IN VIEW
  ngOnInit(): void {
    this.noNavbarService.changeShowNavbar()
  }

  // SHOW CORRECT NAVIBAR TO USER
  showNavbarCorrect(){
    if(this.loginService.decodedToken['type'] === "company"){
      this.noNavbarService.changeShowNavbar()
      this.router.navigate(['search-applicant'])
    }else if(this.loginService.decodedToken['type'] === "applicant"){
      this.noNavbarService.changeShowNavbar()
      this.router.navigate(['search-position'])
    }else{
      this.errorMessage = 'Informations are not correct!';
    }
  }

  // LOGIN
  doLogin(){
    this.loginService.login(this.loginData).subscribe(() => {this.showNavbarCorrect()})
  }
}
