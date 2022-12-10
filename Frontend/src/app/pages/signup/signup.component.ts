import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    'name':"",
    'email':"",
    'phonenumber':"",
    'password': "",
  }
 message:any;
  
  constructor(private loginservice:LoginService,private route:Router) { }
  
  ngOnInit(): void {
   
  }
 
  //only number will be add (keypress)="keyPress($event)"
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
 
  onSubmit() {
    try{
      console.log(this.user)
      this.loginservice.signup(this.user).subscribe(res=>{
        
        if(res.message){
          alert(res.message);
          this.route.navigate(['/signup']);
  
        }else{
          alert("registered successfully");
          this.route.navigate(['/login']);
        }
      })
    }
        catch(error){
          console.log(error);
        }     
  
    }

 

}

