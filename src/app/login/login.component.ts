import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';
import { ErroModel } from '../model/erro.model';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new LoginModel();
  erro: ErroModel;
  
  constructor(private service: LoginService, 
              private router: Router,
              private auth: AuthService) { 
    
  }

  ngOnInit() {
  }

  public logar(event): void {

    event.preventDefault();
    this.service.login(this.login)
      .subscribe(res => {
        let token = res.headers.get('Authorization');
        this.auth.addToken(token);
        this.router.navigate(['/borda']);
      },
      erro => {
        this.erro = new ErroModel('Login não Autorizado', 'Usuário ou senha inválidos!');
      }
      );
  }

}
