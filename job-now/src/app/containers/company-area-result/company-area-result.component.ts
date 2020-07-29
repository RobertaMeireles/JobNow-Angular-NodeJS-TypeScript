import { Component, OnInit } from '@angular/core';
import { Resume } from './../../models-project/resume';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-area-result',
  templateUrl: './company-area-result.component.html',
  styleUrls: ['./company-area-result.component.css']
})
export class CompanyAreaResultComponent implements OnInit {

  //VARIABLE TO NGFor
  listCurriculum:Resume[]

  constructor(private route:ActivatedRoute) { }

  // SHOW LISTCURRICULUM 
  ngOnInit(): void {
  this.route.data.subscribe(data =>{
    this.listCurriculum = data['consultApplyInterestResolver']['resumes']
    })
  }
}
