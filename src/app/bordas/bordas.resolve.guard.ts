import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Borda } from "./borda.model";
import { Observable } from "rxjs/Observable";
import { BordasService } from "./bordas.service";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class BordasResolve implements Resolve<Borda> {
 
    constructor(private bordasService: BordasService,
                private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Borda | Observable<Borda> {
        
        let id:number = route.params.id;
        return this.bordasService.buscarPor(id)
            .catch(err => {
                console.log(err.error);
                this.router.navigate(["/404"]);
                return Observable.empty();
            });;
    }
}