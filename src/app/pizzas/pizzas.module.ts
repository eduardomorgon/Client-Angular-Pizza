import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { ListaComponent } from './lista/lista.component';
import { PizzasService } from './pizzas.service';
import { FormComponent } from './form/form.component';
import { ModalExcluirModule } from '../modal-excluir/modal-excluir.module';
import { ErroServerComponent } from '../erro-server/erro-server.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaResolve } from './pizzas.resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    PizzasRoutingModule,
    ModalExcluirModule,
    ReactiveFormsModule
  ],
  declarations: [ListaComponent, FormComponent,ErroServerComponent],
  exports: [ListaComponent, FormComponent],
  providers: [PizzasService, PizzaResolve]
})
export class PizzasModule { }
