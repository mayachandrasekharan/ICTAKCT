import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
constructor(private http:HttpClient) { }
  fileAddress="http://localhost:3000/upload"
  apiUrl:String="http://localhost:3000/response";
  
  addRequirements=(data:any)=>{
    return this.http.post<any>(`${this.apiUrl}/addrequirements`,data)
  }
  viewRequirements=()=>{
    return this.http.get(`${this.apiUrl}/viewrequirements`)
  }
 getRequirement=(data:any)=>{
    return this.http.put(`${this.apiUrl}/singlerequirement/:id`,data)
  }
}
