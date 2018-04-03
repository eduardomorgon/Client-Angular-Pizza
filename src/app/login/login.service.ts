import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Login } from './login.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  http: Http;
  url: string = 'http://localhost:8080/api/login';

  constructor(http: Http) {
    this.http = http;  
  }

  login(login: Login) : Observable<Response>  {
    return this.http
      .post(this.url, JSON.stringify(login))
      ;
      // .map(res => res);
      // .subscribe(res => {
      //   console.log(res);
      //   // console.log(localStorage.length)
      //   // let token = res.headers.get('Authorization');
      //   // if(token) {
      //   //   console.log('redirecionar para login com erro');
      //   // }
      //   // localStorage.setItem('token', token);
      //   // console.log(localStorage.length);
      //   // console.log(localStorage.getItem('token'));
      // },
      // erro => {
      //   console.log(erro.status)
      //   // let bodyErro = JSON.parse(erro._body);
      //   // console.log(bodyErro)
      // });
  }

}
