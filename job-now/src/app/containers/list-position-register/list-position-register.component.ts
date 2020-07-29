import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/models-project/positions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-position-register',
  templateUrl: './list-position-register.component.html',
  styleUrls: ['./list-position-register.component.css']
})
export class ListPositionRegisterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  // VARIABLE TO NGFOR
  allPositions:Position[]; 

  // SHOW ALL POSITIONS REGISTER FOR COMPANY
    ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.allPositions = data['listPositionsResolver']['positions']
    })
  }

}

