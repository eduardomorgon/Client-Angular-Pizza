import { NgModule } from "@angular/core";
import { BordaRouting } from "./borda.routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../auth/auth.interceptor";
import { BordaService } from "./borda.service";
import { ListaComponent } from "./lista/lista.component";
import { FormComponent } from "./form/form.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BordaRouting
    ],
    declarations: [
      ListaComponent,
      FormComponent
    ],
    exports: [
        ListaComponent,
        FormComponent
    ],
    providers: [
                BordaService,
                { 
                  provide: HTTP_INTERCEPTORS, 
                  useClass: AuthInterceptor, 
                  multi: true 
                } 
                ]
  })
  export class BordaModule { }