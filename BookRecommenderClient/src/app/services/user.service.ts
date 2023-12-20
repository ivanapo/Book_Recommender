import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private _router: Router) { }
  
  
  // user: string = localStorage.getItem('currentUser');
  // private userSub = new BehaviorSubject<string>(this.user)
  // currentUser = this.userSub.asObservable().subscribe
  
  userLogin(request:any):Observable<object> {
  {
    return this.http.post("https://localhost:7161/account/login",request) 
  }
}

isLoggedIn(){
  return localStorage.getItem("currentUser") !== null;
}

logOut(){
  localStorage.removeItem('currentUser');
  //this._router.navigate(['/login']);
}

getUser(id:string):Observable<User> {
 return this.http.get<User>(`https://localhost:7161/User?id=${id}`)
}




}


