import { Component, OnInit,Input } from '@angular/core';


import { Position } from './../../../models-project/positions';
import { PositionService } from './../../../services-project/position/position.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-comp-list-register',
  templateUrl: './comp-list-register.component.html',
  styleUrls: ['./comp-list-register.component.css']
})
export class CompListRegisterComponent implements OnInit {

  constructor(private positionService:PositionService,
              private router:Router) { }

  // DELETE POSITION
    deletePos(){
    this.positionService.delete(this.inputPosition).subscribe();
    this.router.navigate(['search-applicant'])
  }

  // VARIABLE TO INFOR
  @Input() inputPosition:Position = null; 

  ngOnInit(): void {
    
  }
 
}
