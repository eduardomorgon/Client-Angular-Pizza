import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [

   
    {
        path:'', 
        component: HomeComponent, 
        data: { 
            expectedRole: 'admin'}
    }
    
];


@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class HomeRouting { }