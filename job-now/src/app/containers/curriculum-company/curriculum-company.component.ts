import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resume } from './../../models-project/resume';

@Component({
  selector: 'app-curriculum-company',
  templateUrl: './curriculum-company.component.html',
  styleUrls: ['./curriculum-company.component.css']
})
export class CurriculumCompanyComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  // VARIABLES
  userId:number;
  currentCurriculum:Resume

  // SHOW RESUME TO COMPANY
  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.currentCurriculum = data['curriculumCompanyResolver']['resume']
    })
  }

}
