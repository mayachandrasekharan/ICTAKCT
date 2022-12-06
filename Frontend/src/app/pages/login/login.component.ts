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
    username:"",
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
       localStorage.setItem('userToken',this.id);
      
        this.route.navigate(["/faculty-home"]),
        (    err: { message: any; error: { message: any; }; })=>{
      console.log(err.message);
      this.message = err.error.message;
    }
  })
}
}
