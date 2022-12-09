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
    'confirmpassword':""
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
      this.loginservice.signup(this.user).subscribe(data=>{
        this.user= JSON.parse(JSON.stringify(data));
          if(data){
          alert("error!!!")
          this.route.navigate(['/signup'])
  
  
        }else{
          alert("registered successfully");
          this.route.navigate(['/login'])
        }
      })
    }
        catch(error){
          console.log(error);
        }     
  
    }

 MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}


}

