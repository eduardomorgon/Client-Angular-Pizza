import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
import { ListaComponent } from './borda/lista/lista.component';
// import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthService } from './auth/auth.service';
import { BordaService } from './borda/borda.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { MenuModule } from './menu/menu.module';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './borda/form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    LoginComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    AppRoutingModule
    
  ],
  providers: [LoginService, 
              AuthGuard,
              AuthService,
              BordaService,
              { 
                provide: HTTP_INTERCEPTORS, 
                useClass: AuthInterceptor, 
                multi: true 
              } 
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
