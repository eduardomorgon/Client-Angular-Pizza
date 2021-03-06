import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { BordasResolve } from './bordas.resolve.guard';

const bordasRoutes: Routes = [

   
    {
        path:'', 
        component: ListaComponent, 
        data: 
            { 
                expectedRole: 'admin'
            }, 
        children: [
            // renderizar o component junto com o pai
        ]
    },
    {
        path: 'novo', 
        component: FormComponent
    },
    {
        path: ':id', 
        component: FormComponent, 
        resolve: {borda: BordasResolve}
    }
    
];


@NgModule({
    imports: [RouterModule.forChild(bordasRoutes)],
    exports: [RouterModule]
})

export class BordasRouting { }