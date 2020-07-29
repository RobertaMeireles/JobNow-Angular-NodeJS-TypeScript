import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-apply',
  templateUrl: './all-apply.component.html',
  styleUrls: ['./all-apply.component.css']
})
export class AllApplyComponent implements OnInit {

  constructor(private route:ActivatedRoute){ }

  //VARIABLE TO NGFOR
  beResults:any;

  showResults:boolean = false;

  // SHOW ALL APPLY BU POSITION
  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.beResults = data['allApplyResolver']
      if(this.beResults.length != 0){
        this.showResults=true
      }
      console.log(this.beResults)
    })
  }
}
