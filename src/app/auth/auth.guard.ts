import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService){ }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        let token = this.auth.getToken();
        let dec = this.auth.decodificar();
        console.log(dec);
        // https://codecraft.tv/courses/angular/routing/router-guards/
        // https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
        // https://ryanchenkie.com/angular-authentication-using-route-guards
        return true;
    }
}