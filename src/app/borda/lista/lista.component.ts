import { Component, OnInit } from '@angular/core';
import { BordaService } from '../borda.service';
import { Borda } from '../borda.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public bordas: Borda[];
  
  constructor(private bordaService: BordaService) { }

  public ngOnInit(): void {

    this.bordaService.listar()
      .subscribe(bordas => this.bordas = bordas);
  }

  public excluir(borda: Borda): void {
    
    this.bordaService.excluir(borda)
      .subscribe(res => {
        if(res.status === 204) {
          this.removerDaLista(borda);
        }
      }, erro => {
        console.log(erro);
      });
  }

  private removerDaLista(borda: Borda): void {
    
    let index = this.bordas.findIndex(b => b.id === borda.id);
    let listaBordas = this.bordas.slice(0);
    listaBordas.splice(index, 1);
    this.bordas = listaBordas;
  }

}
