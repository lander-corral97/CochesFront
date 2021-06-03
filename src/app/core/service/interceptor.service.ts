import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.interceptor(req, next));
  }

  constructor(private router:Router) {}

  interceptor(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('login')) {
      let token: string = localStorage.getItem('token') + "";
      let request = req;
      localStorage.setItem("token", token);
      request = req.clone({
        setHeaders: {
          Authorization: token,
          'Access-Control-Allow-Origin': '*'
        },
      });
      return next.handle(request);
    } else {
      return next.handle(req).pipe(catchError(err => {
        if (err.status === 403) {
          this.router.navigate(['login/error']);
        }
        const error = err.error.message || err.statusText;
        return throwError(err);
      }));
    }
  }
}
