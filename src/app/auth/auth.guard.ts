import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Injectable, Output } from '@angular/core';

import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    canLoad(route: Route): boolean  {
        
        return this.isUsuarioAutenticavel();
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        
        return this.isUsuarioAutenticavel();
    }
   
    constructor(private router: Router, private auth: AuthService){ }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
        return this.isUsuarioAutenticavel();
    }

    private isUsuarioAutenticavel(): boolean {
        if(this.auth.isExpirado()) {
            this.router.navigate(['login'],  {queryParams: {notlogged: ''} });
            return false;
        }
        return true;
    }
    
    // https://codecraft.tv/courses/angular/routing/router-guards/
    // https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
    // https://ryanchenkie.com/angular-authentication-using-route-guards
}