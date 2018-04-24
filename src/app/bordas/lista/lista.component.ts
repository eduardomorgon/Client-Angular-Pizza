import { Component, OnInit, ViewChild } from '@angular/core';
import { BordasService } from '../bordas.service';
import { Borda } from '../borda.model';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { ModalExcluirComponent } from '../../modal-excluir/modal-excluir.component';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public bordas: Borda[];
  public bordaSelecionada: Borda;
  
  constructor(private bordaService: BordasService,
              private modalService: BsModalService) { }

  public ngOnInit(): void {
    
    this.bordaService.listar()
      .subscribe(bordas => this.bordas = bordas);
  }

  private excluir(borda: Borda): void {
    
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

  public modalExcluir(borda: Borda) {

    const initialState = {
      objeto: borda,
      propriedade: 'nome'
    };

    let bsModalRef = this.modalService.show(ModalExcluirComponent, {initialState});
    bsModalRef.content.eventoExclusao.subscribe((borda: Borda) => this.excluir(borda));
    
    // https://ngx-bootstrap-latest.surge.sh/#/modals#directive-section
    // https://github.com/valor-software/ngx-bootstrap/issues/624
    // https://stackoverflow.com/questions/46698126/ngx-bootstrap-how-to-open-a-modal-from-another-component
    
  }

}
