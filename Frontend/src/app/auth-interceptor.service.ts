import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private loginservice:LoginService) { }
  intercept(req:HttpRequest<any>,nxt:HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginservice.getUserToken()
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `${token}` }
      })
    }

    return nxt.handle(req);
  }
}