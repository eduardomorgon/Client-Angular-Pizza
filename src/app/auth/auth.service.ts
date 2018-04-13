import { Injectable, EventEmitter } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable()
export class AuthService {

  private jwtHelper: JwtHelperService;
  eventNav = new EventEmitter<boolean>();

  constructor() { 
    this.jwtHelper = new JwtHelperService();
  }

  public getToken(): string {

    return localStorage.getItem('token');
  }

  public addToken(token: string) :void {

    localStorage.setItem('token', token.split(' ')[1]);
    this.eventNav.emit(true);
  }

  public removeToken() :void {
    
    localStorage.removeItem('token');
    this.eventNav.emit(false);
  }

  public decodificar() :any {

    return this.jwtHelper.decodeToken(this.getToken());
  }

  public isExpirado() :boolean {

    return this.jwtHelper.isTokenExpired(this.getToken());
  }

  public isLogado() :boolean {

    return !this.isExpirado() && this.getToken() !== null;
  }


}
