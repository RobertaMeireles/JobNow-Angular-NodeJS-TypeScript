import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Resume, Experience } from './../../models-project/resume';
import { LoginService } from './../../services-project/login/login.service';
import { CurriculumService } from './../../services-project/curriculum/curriculum.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(private curriculumService:CurriculumService,
              private loginService:LoginService,
              private router:Router,
              private route:ActivatedRoute) {
               }

// VARIABLES
  errorMessage: string;
  experiencesApplicant:Experience[];
  currentCurriculum:Resume;
  userId:number;
  newCurriculum:Boolean = false;

  // show Resume user
  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.currentCurriculum = data['currentCurriculum']['resume']

    })
  }

  // VALIDATE RESUME
  validate( 
          name: HTMLInputElement, 
          address: HTMLInputElement, 
          birthday: HTMLInputElement,
          children:HTMLInputElement,
          civil: HTMLInputElement,
          interest: HTMLInputElement,
          education: HTMLInputElement,
          idiom:HTMLInputElement): boolean {

            if( 
              name.value === ''|| 
              address.value === ''|| 
              birthday.value === '' ||
              children.value === '' ||
              civil.value === '' ||
              interest.value === '' ||
              education.value === '' ||
              idiom.value === '' ){
                this.errorMessage = 'Required field';
                return false;
            }

            this.save()
  }

  // SAVE RESUME
  save(){
    if (this.newCurriculum) {
      this.curriculumService.addCurriculum(this.currentCurriculum).subscribe()
    }
    else{
      this.curriculumService.updateCurriculum(this.currentCurriculum).subscribe()
    }

    this.currentCurriculum.experiences.forEach(exp => 
      {
        if (exp.id) {
          this.curriculumService.updateExperience(this.currentCurriculum.id,exp).subscribe();
          
        }
        else{
          this.curriculumService.addExperience(this.currentCurriculum.id,exp).subscribe();
        }
      }
    )

    this.router.navigate(["home"]);
  }

  // CREATE EXPERIENCE
  addNewExperience(){
    this.currentCurriculum.experiences.push(new Experience(null,"","","","","","",null))
  }

  // CREATE RESUME
  createNewCurriculum(){
    this.currentCurriculum = new Resume(this.loginService.loggedUser.email,"","","","","","","","",[new Experience(null,"","","","","","",null)],this.loginService.loggedUser[0].id);
    this.newCurriculum = true;
  }
}

