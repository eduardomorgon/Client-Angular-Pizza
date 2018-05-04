import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

import { Cliente } from "./cliente.model";
import { ClientesService } from "./clientes.service";

@Injectable()
export class ClientesResolve implements Resolve<Cliente> {
 
    constructor(private service: ClientesService,
                private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cliente | Observable<Cliente> {
        
        let id:number = route.params.id;
        return this.service.findBy(id)
            .catch(err => {
                console.log(err.error);
                this.router.navigate(["/404"]);
                return Observable.empty();
            });
    }
}