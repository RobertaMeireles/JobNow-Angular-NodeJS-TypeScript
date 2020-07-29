import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSearchResults:boolean = false;
  positions:Position[];

  constructor() { }

  ngOnInit(): void {
  }

  receiveSearchResults(searchResults){
    this.positions = null;
    this.positions = searchResults['positions'];
    this.showSearchResults = true;
  }

}
