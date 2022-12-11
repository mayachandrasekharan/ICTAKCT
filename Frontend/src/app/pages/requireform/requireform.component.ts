<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
=======
import { Component } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthInterceptorService } from 'src/app/auth-interceptor.service';
import { ApiService } from 'src/app/api.service';

>>>>>>> Stashed changes
@Component({
  selector: 'app-requireform',
  templateUrl: './requireform.component.html',
  styleUrls: ['./requireform.component.css']
})
export class RequireformComponent implements OnInit{
  
  requireform: any = new FormGroup({
    'name': new FormControl(''),
    'area': new FormControl(''),
    'ic': new FormControl(''),
    'category': new FormControl(''),
    'hour': new FormControl('')
  
  })
 
  ngOnInit(): void {
   
  }
  constructor(private api: ApiserviceService, private router: Router) { }
  file: any;
  fd = new FormData();


  onFileSelected(event : any){
    if(event.target.files.length > 0){
       this.file = event.target.files[0];
    }
  }

 
  refresh(): void {
    window.location.reload();
  }

  onSubmit() {
    let requireData =this.requireform.value;
    for (const prop in requireData) {
      this.fd.append(prop, requireData[prop])
    }
    this.fd.append('ref',this.file)
    this.api.addRequirements(this.fd).subscribe(res => {
      console.log(res);
      this.refresh();
    })
    this.router.navigate(['/viewrequirements'])
  }

  constructor(private apiservice:ApiService ,
    private router:Router,
    private route:ActivatedRoute) { }
    data={
      name:'',
      area:'',
      institution:'',
     category:'',
     no_of_hours:'',
     reference:'',
      }
  ngOnInit(): void {
}
file: any;
requirements:any=[];
onFileSelected(event : any){
  if(event.target.files.length > 0){
     this.file = event.target.files[0];
  }
}
onSubmit() {
 
    this.apiservice.addBook(this.data).subscribe(res=>{
      this.requirements=res;
      alert('successfully added');
      this.router.navigate(['/requireform'])
    })
  }  
}  
