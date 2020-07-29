import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models-project/positions';

@Component({
  selector: 'app-applicant-area',
  templateUrl: './applicant-area.component.html',
  styleUrls: ['./applicant-area.component.css']
})
export class ApplicantAreaComponent implements OnInit {

  //VARIABLE TO NGFOR
  positions:Position[];

  constructor() { }

  ngOnInit(): void {
  }
  
  // Apply by position SHOW ALL POSITIONS
  receiveSearchResults(searchResults){
    this.positions = null;
    this.positions = searchResults['positions'];
  }
}
