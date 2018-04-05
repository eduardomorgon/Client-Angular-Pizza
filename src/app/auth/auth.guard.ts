import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable, Output } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    // @Output() private erro: ErroModel;

    constructor(private router: Router, private auth: AuthService){ }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     
        if(this.auth.isExpirado()) {
            this.router.navigate(['login'],  {queryParams: {notlogged: ''} });
            return false;
        }
        return true;
     
        // https://codecraft.tv/courses/angular/routing/router-guards/
        // https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
        // https://ryanchenkie.com/angular-authentication-using-route-guards
    }
}