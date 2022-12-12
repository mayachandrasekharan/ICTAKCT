import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-addresponse',
  templateUrl: './addresponse.component.html',
  styleUrls: ['./addresponse.component.css']
})
export class AddresponseComponent implements OnInit {

  responseForm:any = new FormGroup({
    'name': new FormControl(''),
    'area': new FormControl(''),
    'ic': new FormControl(''),
    'category': new FormControl(''),
    'hour': new FormControl('')
  })
  id:any;
  constructor(private api :  ApiserviceService,private router : Router,private routeActivated:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeActivated.queryParams
      .subscribe(params => {
        console.log(params); // { id: "price" }
       this.id = params['selected']
       console.log(this.id); // price
      }
    );
    this.editRequireById();
  }

  editRequireById(){
    this.api.getRequirement(this.id).subscribe(res=>{
      this.responseForm.setValue({
        name:res.name,
        area:res.area,
        ic:res.ic,
        category: res.category,
        hour: res.hour
      })
    })
  }
  
  file: any;
  comment: any ;
  fd = new FormData();
  onChangeFile(event : any){
    if(event.target.files.length > 0){
       this.file = event.target.files[0];
    }
  }

  
  onSubmit(){
    let editreponseData =this.responseForm.value;
    for (const prop in editreponseData) {
      this.fd.append(prop, editreponseData[prop])
    }
    this.fd.append('comment',this.comment)
    this.fd.append('resfile',this.file);
    // this.apiservice.editResponse(this.id,this.editResponseForm.value).subscribe(res=>{
      this.api.addResponse(this.fd).subscribe(res=>{
        console.log(res);
      this.router.navigate(['/viewrequirements'])
    })
  }

  // file: any;
  // fd = new FormData();
  // onChangeFile(event : any){
  //   if(event.target.files.length > 0){
  //      this.file = event.target.files[0];
  //   }
  // }

  // refresh(): void {
  //   window.location.reload();
  // }

//   onSubmit(){
//     let reponseData =this.responseForm.value;
//     for (const prop in reponseData) {
//       this.fd.append(prop, reponseData[prop])
//     }
//     this.fd.append('resfile',this.file)
//     this.api.addResponse(this.fd).subscribe(res => {
//       console.log(res);
//       this.refresh();
//     })
//     this.router.navigate(['/pastcurriculum'])
//   }
}



