import { Component, OnInit, Input } from '@angular/core';
import { ValidacaoServer } from '../model/validacao.server';

@Component({
  selector: 'app-erro-server',
  templateUrl: './erro-server.component.html',
  styleUrls: ['./erro-server.component.css']
})
export class ErroServerComponent implements OnInit {

  @Input()validacoes: Array<ValidacaoServer>;

  constructor() { }

  ngOnInit() {
    console.log(this.validacoes);
  }

}
