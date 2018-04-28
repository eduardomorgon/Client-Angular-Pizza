import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from './pizza.model';
import { CrudService } from '../shared/service/crud.service';

@Injectable()
export class PizzasService extends CrudService<Pizza> {

  constructor(http: HttpClient) {
    super(http);
  }

  url(): string {
    return 'http://localhost:8080/api/pizzas/';
  }


  // url: string = 'http://localhost:8080/api/pizzas/';
  // headers: HttpHeaders;

  // constructor(private http: HttpClient) {
  //   this.http = http;  
  //   this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  // }

  // public listar(): Observable<Pizza[]>  {
    
  //   return this.http.get<Pizza[]>(this.url);
  // }

  // public buscarPor(id: number): Observable<Pizza> {

  //   return this.http.get(this.url + id);
  // }

  // public editar(pizza: Pizza): Observable<HttpResponse<Response>> {

  //   return this.http.put<Response>(this.url + pizza.id, pizza, 
  //   { 
  //     headers: this.headers, observe: 'response'
  //   });
  // }

  // public excluir(pizza: Pizza): Observable<HttpResponse<Response>> {

  //   return this.http.delete<Response>(this.url + pizza.id, {observe: 'response'});
  // }

  // public salvar(pizza: Pizza): Observable<HttpResponse<Response>> {

  //   return this.http.post<Response>(this.url, pizza,
  //     { 
  //       headers: this.headers, observe: 'response'
  //     });
  // }

}
