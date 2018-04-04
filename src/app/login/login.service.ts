import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs/Observable';
// import {Observable} from 'rxjs/Rx';


import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  url: string = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {
    this.http = http;  
  }

  login(login: LoginModel) : Observable<HttpResponse<Response>>  {
    
    return this.http.post<Response>
      (
        this.url, 
        JSON.stringify(login), 
        {observe: 'response'}
      );
  }

}
