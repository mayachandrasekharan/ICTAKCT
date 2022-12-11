import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
responseform:FormGroup;
@Component({
  selector: 'app-view-requirements',
  templateUrl: './view-requirements.component.html',
  styleUrls: ['./view-requirements.component.css']
})
export class ViewRequirementsComponent {
  ngOnInit(): void {
    this.getData();
  }
  data:any
  requirements:any=[]
  constructor(public apiservice: ApiserviceService, private router: Router) { }
  
  getData() {
    this.apiservice.viewRequirements().subscribe(res => {
      this.requirements = res
      
    })
   
  }
//   getrequire(id:any){
//     this.apiservice.getRequirement(this.data).subscribe(res=>{
//       this.requirements = res;
// this.router.navigate(['/viewrequirements']);

//     })
// }
}
