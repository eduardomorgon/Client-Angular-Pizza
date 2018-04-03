import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  service: LoginService;
  router: Router;

  constructor(service: LoginService, router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  public logar(event): void {
    event.preventDefault();
    console.log(this.login); 
    this.service.login(this.login)
    .subscribe(res => {
      let token = res.headers.get('Authorization');
      if(!token) {
        console.log('redirecionar para login com erro');
      }
      localStorage.setItem('token', token);
      this.router.navigate(['/borda']);
    },
    erro => {
      console.log(erro.status)
      // let bodyErro = JSON.parse(erro._body);
      // console.log(bodyErro)
    });
    ;
  }

}
