import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  server_address: string = 'http://localhost:3000/api';
  
  constructor(private http:HttpClient) { }


  signup(user:any){
    console.log(user)
    return this.http.post<any>(`${this.server_address}/signup`,user)
     }

  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user);
  }
  loggedIn(){
    return !! localStorage.getItem('token');
  }
  

  getUserToken(){
    return  localStorage.getItem('token');
  }


}
