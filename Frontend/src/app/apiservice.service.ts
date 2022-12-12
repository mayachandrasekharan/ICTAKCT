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
 getRequirement=(id:any)=>{
    return this.http.get<any>(`${this.apiUrl}/singlerequirement/${id}`)
  }
  editRequirement(id:any,data:any){
      return this.http.put(`${this.apiUrl}/editrequirements/${id}`,data)
  }

  addResponse(data:any){
    return this.http.post<any>(`${this.apiUrl}/addresponse`, data)
  }
  editResponse(id:any,data:any)
  {
    return this.http.put(`${this.apiUrl}/editresponse/${id}`,data)
  }
  getResponse(){
    return this.http.get(`${this.apiUrl}/listresponse`)
  }
  getSingleResponse(id:any){
    return this.http.get<any>(`${this.apiUrl}/singleresponse/${id}`)
  }

  deleteResponse(id:any)
  {
    return this.http.delete(`${this.apiUrl}/deleteResponse/${id}`)
  }

  editAdmin(id:any,data:any){
    return this.http.put(`${this.apiUrl}/adminedit/${id}`,data)
  }

  editstatus(data:any){
    return this.http.put(`${this.apiUrl}/statusupdate`,data)
  }
}
