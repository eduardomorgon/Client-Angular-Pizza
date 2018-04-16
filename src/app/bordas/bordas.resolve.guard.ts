import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Borda } from "./borda.model";
import { Observable } from "rxjs/Observable";
import { BordasService } from "./bordas.service";
import { Injectable } from "@angular/core";

@Injectable()
export class BordasResolve implements Resolve<Borda> {
 
    constructor(private bordasService: BordasService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Borda | Observable<Borda> {
        
        let id:number = route.params.id;
        return this.bordasService.buscarPor(id);
    }
}