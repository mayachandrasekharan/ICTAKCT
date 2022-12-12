import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  result:any=[];
  searchText:any;
  page:any;
  constructor(public apiservice : ApiserviceService) { }
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.apiservice.getcurrfac().subscribe(res=>{
      this.result=res
      console.log(this.result)
     })
  }
}
