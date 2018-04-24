import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalExcluirComponent } from './modal-excluir.component';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  entryComponents: [ModalExcluirComponent],
  declarations: [ModalExcluirComponent]
})
export class ModalExcluirModule { }
