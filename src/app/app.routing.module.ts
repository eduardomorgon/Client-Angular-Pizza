import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { Erro404Component } from './erro404/erro404.component';

const appRoutes: Routes = [
    { 
        path: '', redirectTo: '/home', pathMatch: 'full' 
    },
    {
        path:'login', 
        component: LoginComponent
    },
    {
        path:'bordas', 
        loadChildren: 'app/bordas/bordas.module#BordasModule',
        canLoad: [AuthGuard]
    },
    {
        path:'pizzas', 
        loadChildren: 'app/pizzas/pizzas.module#PizzasModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule',
        canLoad: [AuthGuard]
    },
    {
        path:'home', 
        loadChildren: 'app/home/home.module#HomeModule', 
        canActivate: [AuthGuard]
    },
    {
        path:'404',
        component: Erro404Component
    }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule { }