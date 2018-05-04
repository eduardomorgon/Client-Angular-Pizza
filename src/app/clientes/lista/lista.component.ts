import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';
import { ModalExcluirComponent } from '../../modal-excluir/modal-excluir.component';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private service: ClientesService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.service.all()
      .subscribe(clientes => this.clientes = clientes);
  }

  public modalExcluir(cliente: Cliente): void {

    const initialState = {
      objeto: cliente,
      propriedade: 'nome'
    };

    let bsModalRef = this.modalService.show(ModalExcluirComponent, {initialState});
    bsModalRef.content.eventoExclusao.subscribe((cliente: Cliente) => this.excluir(cliente));
  }


  private excluir(cliente: Cliente): void {
    
    this.service.remove(cliente.id)
      .subscribe(res => {
        if(res.status === 204) {
          this.removerDaLista(cliente);
        }
      }, erro => {
        console.log(erro);
      });
  }

  private removerDaLista(cliente: Cliente): void {
    
    let index = this.clientes.findIndex(b => b.id === cliente.id);
    let listaClientes = this.clientes.slice(0);
    listaClientes.splice(index, 1);
    this.clientes = listaClientes;
  }

}
