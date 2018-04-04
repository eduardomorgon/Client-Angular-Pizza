import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './borda/lista/lista.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [

    {path:'login', component: LoginComponent},
    {
        path:'borda', 
        component: ListaComponent, 
        canActivate: [AuthGuard], 
        data: { 
            expectedRole: 'admin'
            } 
    },
    {path:'', redirectTo: 'login', pathMatch:'full'}
    // {path:'**', redirectTo: '', canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);