import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-pastcurriculum',
  templateUrl: './pastcurriculum.component.html',
  styleUrls: ['./pastcurriculum.component.css']
})
export class PastcurriculumComponent implements OnInit {
  responses:any=[]
  constructor( public apiservice :ApiserviceService, private router :Router) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiservice.getResponse().subscribe(res=>{
      this.responses = res;
    })
  }

  editResponse(id: any){
    this.router.navigate(['/editresponse'],
    {queryParams:{selected:id}}
    )
  }
}
