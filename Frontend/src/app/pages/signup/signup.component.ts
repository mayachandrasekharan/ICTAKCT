import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders: string[] = ['Male','Female','Others'];
  selected!: Date | null;
  registerForm!: FormGroup;
  submitted = false;
  user={
    name:"",
    username:"",
    gender:"",
    dob:"",
    phone:"",
    password: "",
    repassword:""
  }
  Users:any;
  error:any;
  flag:any
  
  constructor(private formBuilder: FormBuilder,private loginservice:LoginService,private route:Router) { }
  
  

  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit(): void {
    try{
    this.loginservice.getusers()
    .subscribe((data: any)=>{
    console.log("🚀 ~ file: signup.component.ts ~  ~ SignupComponent ~ ngOnInit ~ data", data)
      this.Users = JSON.parse(JSON.stringify(data));
    })
  
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]],
      username: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phonenumber: ['', [ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
        },{validator: this.MustMatch('password', 'confirmPassword')} as AbstractControlOptions);
          }
          catch(error){
            console.log(error);
          }
  }
  color(){

  }
 // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    try{
      console.log(this.user);
      if(this.Users.length>=0){
        for(var i=0;i<this.Users.length;i++)
        {
          if(this.Users[i].username==this.user.username)
          {
            this.flag=true;
            this.error = "username already exist";
            break;
          }
          else
          this.flag=false;
          this.loginservice.signup(this.user);
          console.log("signup called");
          this.route.navigate(['/login']);
  
        }
        }
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

