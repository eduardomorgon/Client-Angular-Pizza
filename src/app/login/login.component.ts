import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';
import { MensagemLogin } from '../model/mensagem.login.enum';
import { AuthService } from '../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new LoginModel();
  erro: MensagemLogin;
  
  constructor(private service: LoginService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private auth: AuthService) { }

  public ngOnInit(): void {

    let houveErro: string;
    this.activatedRoute
            .queryParams
            .subscribe(params => houveErro = Object.keys(params)[0]);
    if(houveErro) {
      this.erro = MensagemLogin[houveErro];
    }
  }

  public logar(event): void {

    event.preventDefault();
    this.service.login(this.login)
      .subscribe(res => {
        let token = res.headers.get('Authorization');
        this.auth.addToken(token);
        this.router.navigate(['/']);
      },
      (erro: HttpErrorResponse) => {
        if(erro.status === 0) {
          this.erro = MensagemLogin.servidornotfound;
        }else{
          this.erro = MensagemLogin.error;
        }
      });
  }

}
