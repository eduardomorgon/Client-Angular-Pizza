import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ClientesService } from './clientes.service';
import { ModalExcluirModule } from '../modal-excluir/modal-excluir.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesResolve } from './clientes.resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ModalExcluirModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ListaComponent, 
    FormComponent
  ],
  providers: [
    ClientesService,
    ClientesResolve
  ]
})
export class ClientesModule { }
