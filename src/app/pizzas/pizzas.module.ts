import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { ListaComponent } from './lista/lista.component';
import { PizzaService } from './pizza.service';
import { FormComponent } from './form/form.component';
import { ModalExcluirModule } from '../modal-excluir/modal-excluir.module';

@NgModule({
  imports: [
    CommonModule,
    PizzasRoutingModule,
    ModalExcluirModule
  ],
  declarations: [ListaComponent, FormComponent],
  exports: [ListaComponent],
  providers: [PizzaService]
})
export class PizzasModule { }
