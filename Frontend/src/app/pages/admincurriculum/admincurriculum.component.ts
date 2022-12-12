import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-admincurriculum',
  templateUrl: './admincurriculum.component.html',
  styleUrls: ['./admincurriculum.component.css']
})
export class AdmincurriculumComponent implements OnInit {

  constructor(public apiservice :ApiserviceService,private router: Router) { }

  responses:any=[];
  responseForm:any = new FormGroup({
    'name': new FormControl(''),
    'area': new FormControl(''),
    'ic': new FormControl(''),
    'category': new FormControl(''),
    'hour': new FormControl(''),
    'comment': new FormControl(''),
    'status':new FormControl('approved')
  })
  id:any;
  data:any=[];


  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiservice.getResponse().subscribe(res=>{
      this.responses = res;
    })
  }

  refresh(): void {
    window.location.reload();
  }

  submitData(id:any){
    let data ={"_id":id,"status":"approved"}
    this.apiservice.editstatus(data).subscribe(res=>{
      alert('Curriculum Approved')
      
    })
  }

  editData(id:any){
    this.router.navigate(['/adminedit'],
    {queryParams:{selected:id}}
    )
  }

  deleteData(id:any){
    this.apiservice.deleteResponse(id).subscribe(res=>{
      this.responses=res;
      alert('Succesfully Deleted')
      this.refresh(); 
    })
  }

}
