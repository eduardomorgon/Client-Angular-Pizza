import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { ClientesResolve } from './clientes.resolve.guard';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {
    path: 'novo', component:FormComponent
  },
  {
    path: ':id', component:FormComponent, resolve: {cliente: ClientesResolve}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
