import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router,public loginservice:LoginService) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.removeItem("userToken");
    this.route.navigate(["/home"])
  }

}
