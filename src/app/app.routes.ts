import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './borda/lista/lista.component';

const appRoutes: Routes = [
    // {path:'', component: ListagemComponent},
    {path:'borda', component: ListaComponent},
    {path:'**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);