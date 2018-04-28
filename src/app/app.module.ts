import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
// import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { MenuModule } from './menu/menu.module';
import { AppRoutingModule } from './app.routing.module';
import { Erro404Component } from './erro404/erro404.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Erro404Component,
    // ErroServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    MenuModule,
    AppRoutingModule,
    
  ],
  providers: [
              LoginService, 
              AuthGuard,
              AuthService,
              { 
                provide: HTTP_INTERCEPTORS, 
                useClass: AuthInterceptor, 
                multi: true 
              } 
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
