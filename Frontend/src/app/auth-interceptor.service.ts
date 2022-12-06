import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any)
    {
      let loginservice = this.injector.get(LoginService);
      let tokenizedreq = req.clone(
        {
          setHeaders:{
            Authorization: `Bearer ${loginservice.getUserToken()}`
          }
        }
      );
      return nxt.handle(tokenizedreq);
    }
}
