import { NgModule } from "@angular/core";
import { BordasRouting } from "./bordas.routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../auth/auth.interceptor";
import { BordasService } from "./bordas.service";
import { ListaComponent } from "./lista/lista.component";
import { FormComponent } from "./form/form.component";
import { CommonModule } from "@angular/common";
import { BordasResolve } from "./bordas.resolve.guard";
import { ModalModule } from "ngx-bootstrap/modal/modal.module";
import { ModalExcluirModule } from "../modal-excluir/modal-excluir.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BordasRouting,
        ModalExcluirModule
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
                BordasService,
                { 
                  provide: HTTP_INTERCEPTORS, 
                  useClass: AuthInterceptor, 
                  multi: true 
                },
                BordasResolve 
                ]
  })
  export class BordasModule { }