import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  server_address: string = 'http://localhost:3000/api';
  
 

  signup(user:any){
    console.log(user)
    return this.http.post(`${this.server_address}/signup`,user)
     }

  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user);
  }
  loggedIn(){
    return !! localStorage.getItem('userToken');
  }
  

  getUserToken(){
    return  localStorage.getItem('userToken');
  }


}
