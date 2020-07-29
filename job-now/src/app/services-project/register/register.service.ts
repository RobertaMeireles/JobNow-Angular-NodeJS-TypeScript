import { Injectable } from '@angular/core';
import { User } from '../../models-project/users';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/';

  // POST NEW USER
  addUser(user:User){
    return this.http.post<User>(this.url+"auth/register",user)
  }

}

