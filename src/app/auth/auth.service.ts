import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

  private jwtHelper: JwtHelperService;
  constructor() { 
    this.jwtHelper = new JwtHelperService();
  }

  public getToken(): string {

    return localStorage.getItem('token');
  }

  public addToken(token: string) :void {

    localStorage.setItem('token', token.split(' ')[1]);
  }

  public removeToken() :void {
    
    localStorage.removeItem('token');
  }

  public decodificar() :any {

    return this.jwtHelper.decodeToken(this.getToken());
  }

  public isExpirado() :boolean {

    return this.jwtHelper.isTokenExpired(this.getToken());
  }

}
