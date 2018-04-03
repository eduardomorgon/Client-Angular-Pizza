import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './borda/lista/lista.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    // {path:'', component: ListagemComponent},
    {path:'borda', component: ListaComponent},
    {path:'login', component: LoginComponent},
    {path:'**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);