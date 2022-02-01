import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseURL = "http://localhost:8081/api/auth/";

  constructor(private http:HttpClient) { }
  
  registerUser(user: User):Observable<object>{
    const registerURL = this.baseURL+"signup";
  
    return this.http.post(`${registerURL}`, user);
  }

  loginUser(user: User):Observable<object>{
    const registerURL = this.baseURL+"signin";
    return this.http.post(`${this.baseURL}signin`, user);
  }
}
