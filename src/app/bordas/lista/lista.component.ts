import { Component, OnInit, ViewChild } from '@angular/core';
import { BordasService } from '../bordas.service';
import { Borda } from '../borda.model';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public bordas: Borda[];
  public bordaSelecionada: Borda;
  @ViewChild('childModal') childModal: ModalDirective;
  
  constructor(private bordaService: BordasService) { }

  public ngOnInit(): void {

    this.bordaService.listar()
      .subscribe(bordas => this.bordas = bordas);
  }

  public excluir(borda: Borda): void {
    
    this.bordaService.excluir(borda)
      .subscribe(res => {
        if(res.status === 204) {
          this.childModal.hide();
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

  public teste(borda: Borda) {

    this.bordaSelecionada = borda;
    console.log(this.bordaSelecionada);
    this.childModal.show();
  }

}
