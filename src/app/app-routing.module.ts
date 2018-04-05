import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './borda/lista/lista.component';
import { HomeComponent } from './home/home.component';
// import { Error404Component } from './pages/error404/error404.component';


// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'about/:id', component: AboutComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   {
//     path: '**', component: Error404Component
//   }

// ];
const appRoutes: Routes = [

    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
    {
        path:'login', 
        component: LoginComponent
    },
    {
        path:'borda', 
        component: ListaComponent, 
        canActivate: [AuthGuard], 
        data: { 
            expectedRole: 'admin'}
        },
    {
        path:'**', 
        redirectTo: '', 
        canActivate: [AuthGuard]
    }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})

export class AppRoutingModule { }