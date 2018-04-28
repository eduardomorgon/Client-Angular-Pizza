import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Pizza } from "./pizza.model";
import { Observable } from "rxjs/Observable";
import { PizzasService } from "./pizzas.service";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class PizzaResolve implements Resolve<Pizza> {
 
    constructor(private pizzaService: PizzasService,
                private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Pizza | Observable<Pizza> {
        
        let id:number = route.params.id;
        return this.pizzaService.findBy(id)
            .catch(err => {
                console.log(err.error);
                this.router.navigate(["/404"]);
                return Observable.empty();
            });;
    }
}