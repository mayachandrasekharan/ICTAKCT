import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:"",
    password:""
  }
  message:any
  id:any
  constructor(private loginservice:LoginService, private route:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.loginservice.login(this.user).subscribe(res=>{
       this.id = JSON.parse(JSON.stringify(res.token));
       if(res.message){
        alert(res.message)
      }
     else  if (res.email == "admin1234@gmail.com" && res.password =="Admin@1234" ){
      localStorage.setItem('userToken',this.id);
  
        alert("Admin has successfully logged in")
        this.route.navigate(['/admin'])
  
       }
       else{
        localStorage.setItem('userToken',this.id);
  
        alert("Faculty has successfully logged in")
  
        this.route.navigate(['/faculty-home'])
  
       }
   })
}
}
