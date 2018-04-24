import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.css']
})
export class ModalExcluirComponent implements OnInit {

  objeto: any;
  propriedade: string;
  eventoExclusao = new EventEmitter<any>();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  executar(): void {
    this.eventoExclusao.emit(this.objeto);
    this.bsModalRef.hide();
  }

}
