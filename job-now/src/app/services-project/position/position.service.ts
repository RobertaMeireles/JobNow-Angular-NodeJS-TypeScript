import { Injectable } from '@angular/core';

import { Position } from './../../models-project/positions';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http:HttpClient) { }


  currentPosition: Position = null; //CURRENT POSITION
  allPositions: Position[]; //ALL POSITIONS

  url = 'http://localhost:3000/';

    //POST POSITION
    add(newPosition:Position){
      return this.http.post(this.url+"positions",newPosition);
    }

    //GET ALL POSITIONS
    getAll(){
      return this.http.get<Position[]>(this.url+"positions");
    }

    // GET POSITIONS BY FILTER
    getPositions(job:string,category:string,district:string){
      let sql:string=""
      let first:boolean=true;
      if(job != ""){
        if(first){
          sql+="?title="+job
          first=false;
        }else{
          sql+="&title="+job
        }
      }
      if(category != "category"){
        if(first){
          sql+="?category="+category
          first=false;
        }else{
          sql+="&category="+category
        }
      }
      if(district != "all"){
        if(first){
          sql+="?city="+district
          first=false;
        }else{
          sql+="&city="+district
        }
      }
      return this.http.get<Position[]>(this.url+"positions/getfiltered"+sql)
    }

    // ALLPOSITIONS = POSITIONS
    setPositions(positions:Position[]){
      this.allPositions=positions
    }
    
    // GET POSITIONS BY LOGIN COMPANY 
    getPositionsByCompanyEmail(email:string){
      return this.http.get<Position[]>(this.url+"positions/email/"+email);
    }

    //GET POSITION BY ID POSITION
    getById(id:number){
      return this.http.get<Position>(this.url+"positions/id/"+id);
    }

    //DELETE POSITION
    delete(position:Position){
      return this.http.delete(this.url+"positions/delete/"+position.id)
    }

    //APPLY
    apply(idUser:number,idJob:number){
      return this.http.post(this.url+"apply",{usersId:idUser,positionsId:idJob})
    }

    // GET LIST APPLICANTS
    getUserAndPosition(idPosition:number){
      return this.http.get(this.url + "apply/list/" + idPosition)
    }


}


