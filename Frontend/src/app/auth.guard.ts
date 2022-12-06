import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginservice:LoginService, private route:Router){}
  canActivate():boolean{
    if(this.loginservice.loggedIn())
    {
    return true;
  }else
  {
  this.route.navigate(['login'])
    return false;

  }
}
  
}
