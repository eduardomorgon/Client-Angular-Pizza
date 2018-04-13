import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';

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

    {
        path:'login', 
        component: LoginComponent
    },
    {
        path:'bordas', 
        loadChildren: 'app/borda/borda.module#BordaModule',
        canLoad: [AuthGuard]
        
    },
    {
        path:'home', 
        loadChildren: 'app/home/home.module#HomeModule', 
        canActivate: [AuthGuard]
    },
    
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule { }