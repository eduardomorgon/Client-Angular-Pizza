import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/map';


import { AppComponent } from './app.component';
import { ListaComponent } from './borda/lista/lista.component';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [LoginService, 
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
