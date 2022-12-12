import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-facultyhome',
  templateUrl: './facultyhome.component.html',
  styleUrls: ['./facultyhome.component.css']
})
export class FacultyhomeComponent implements OnInit {
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
