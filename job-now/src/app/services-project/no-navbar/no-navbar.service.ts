import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoNavbarService {

  // VARIABLE
  showNavbar:boolean = true;

  // CHANGE VARIABLE SHOWNAVBAR (TRUE OR FALSE)
  changeShowNavbar(){
    this.showNavbar = !this.showNavbar
  }

  userAuthenticated: boolean = false;

  showNavBarEmitter = new EventEmitter<boolean>();

  constructor() { 

  }

}
