import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,  } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // console.log(this.auth.getToken());
        const token = this.auth.getToken();
        if (token) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", 'Bearer '+token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}