import { Component, OnInit, Input } from '@angular/core';
import { Experience } from './../../../models-project/resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  
  @Input() inputExp:Experience=null;
  @Input() indexCheck: Number;
  @Input() indexLength: Number;

  constructor() { }

  ngOnInit(): void {

  }

}
