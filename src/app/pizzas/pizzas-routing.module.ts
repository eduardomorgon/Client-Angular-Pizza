import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { PizzaResolve } from './pizzas.resolve.guard';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'', component: ListaComponent
  },
  {
    path:'novo', component: FormComponent
  },
  {
    path:':id', component: FormComponent, resolve: {pizza: PizzaResolve}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
