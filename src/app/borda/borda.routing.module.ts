import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [

   
    {
        path:'', 
        component: ListaComponent, 
        // canActivate: [AuthGuard], 
        data: { 
            expectedRole: 'admin'}
    }
    ,
    {
        path: 'novo', 
        component: FormComponent, 
        // canActivate: [AuthGuard]
    },
    {
        path: ':id', 
        component: FormComponent, 
        // canActivate: [AuthGuard]
    },
    // {
    //     path:'**', 
    //     redirectTo: '', 
    //     canActivate: [AuthGuard]
    // }
];


@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class BordaRouting { }