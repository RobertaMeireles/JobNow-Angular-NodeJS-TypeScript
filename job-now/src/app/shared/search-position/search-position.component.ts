import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PositionService } from './../../services-project/position/position.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-position',
  templateUrl: './search-position.component.html',
  styleUrls: ['./search-position.component.css']
})
export class SearchPositionComponent implements OnInit {

  //SEND EVENT
  @Output() searchHit = new EventEmitter();

  constructor(private positionService:PositionService, 
             private router:Router) { }
  
  //RECEIVE POSITION LIKE FILTER
  ngOnInit(): void {
    if(this.router.url === 'search-position'){
      this.positionService.getPositions(history.state.data.job,history.state.data.category,history.state.data.districs).subscribe(result=>
        {
          this.positionService.setPositions(result)
          this.searchHit.emit(result); 
          
        })
    }
  }

  //RECEIVE POSITION LIKE FILTER
  info(job:string,districs:string,category:string){
    this.positionService.getPositions(job,category,districs).subscribe(result=>
      {
        this.positionService.setPositions(result)
        this.searchHit.emit(result);
        
      })
  }
    
}

