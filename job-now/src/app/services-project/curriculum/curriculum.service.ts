import { Injectable } from '@angular/core';

import { Resume, Experience } from './../../models-project/resume';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http:HttpClient){ 

  }

  url = 'http://localhost:3000/';


    //GET RESUME BY IDUSER
    getById(id:Number){
      return this.http.get<Resume>(this.url +"resumes/idUser/"+id)
    }

    //GET RESUME BY IDRESUME
    getByIdResume(id:Number){
      return this.http.get<Resume>(this.url +"resumes/idResume/"+id)
    }

    //GET ALL RESUMES
    getAll(){
      return this.http.get<Resume[]>(this.url +"resumes")
    }

    // GET RESUME BY INTEREST 
    getByInterest(interest:string){
      return this.http.get<Resume[]>(this.url +"resumes/interest"+"?interest="+interest)
    }
       
    //POST RESUME
    addCurriculum(inputCurriculum:Resume){
     return this.http.post(this.url + "resumes",
        {
          email: inputCurriculum.email,
          name: inputCurriculum.name,
          address: inputCurriculum.address,
          birthday: inputCurriculum.birthday,
          children: inputCurriculum.children,
          civil: inputCurriculum.civil,
          interest: inputCurriculum.interest,
          education: inputCurriculum.education,
          language: inputCurriculum.language,
          userId: inputCurriculum.userId
        })
      }


      //POST EXPERIENCE
      addExperience(idCurriculum:Number,inputExperience:Experience){
        return this.http.post(this.url + "resumes/experiences",
          {
            companyname: inputExperience.companyname,
            functioncompany: inputExperience.functioncompany,
            work: inputExperience.work,
            datestart: inputExperience.datestart,
            dateend: inputExperience.dateend,
            resume: inputExperience.resume,
            curriculumid: idCurriculum
          })
      }


    //PUT CURRICULUM 
    updateCurriculum(inputCurriculum:Resume){
      return this.http.put(this.url + "resumes/update/resume/"+inputCurriculum.id,
        {
          email: inputCurriculum.email,
          name: inputCurriculum.name,
          address: inputCurriculum.address,
          birthday: inputCurriculum.birthday,
          children: inputCurriculum.children,
          civil: inputCurriculum.civil,
          interest: inputCurriculum.interest,
          education: inputCurriculum.education,
          language: inputCurriculum.language,
          userId: inputCurriculum.userId
        })
    } 

    //PUT EXPERIENCE
    updateExperience(idCurriculum:Number,inputExperience:Experience){
      return this.http.put(this.url + "resumes/update/experience/" + inputExperience.id,
      {
        companyname: inputExperience.companyname,
        functioncompany: inputExperience.functioncompany,
        work: inputExperience.work,
        datestart: inputExperience.datestart,
        dateend: inputExperience.dateend,
        resume: inputExperience.resume,
        curriculumid: idCurriculum
      })
    }
}
