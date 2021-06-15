import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: any, next: any) {
    let authService = this.injector.get(UserService)
    let tokanizedRequest = req.clone({
      setHeaders: {
        token: authService.getToken()
      }
    })
    return next.handle(tokanizedRequest)
  }
}
