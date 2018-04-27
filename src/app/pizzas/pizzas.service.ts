import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pizza } from './pizza.model';

@Injectable()
export class PizzasService {

  url: string = 'http://localhost:8080/api/pizzas/';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.http = http;  
    this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  }

  public listar(): Observable<Pizza[]>  {
    
    return this.http.get<Pizza[]>(this.url);
  }

  public buscarPor(id: number): Observable<Pizza> {

    return this.http.get(this.url + id);
  }

  public editar(pizza: Pizza): Observable<HttpResponse<Response>> {

    return this.http.put<Response>(this.url + pizza.id, pizza, 
    { 
      headers: this.headers, observe: 'response'
    });
  }

  public excluir(pizza: Pizza): Observable<HttpResponse<Response>> {

    return this.http.delete<Response>(this.url + pizza.id, {observe: 'response'});
  }

  public salvar(pizza: Pizza): Observable<HttpResponse<Response>> {

    return this.http.post<Response>(this.url, pizza,
      { 
        headers: this.headers, observe: 'response'
      });
  }

}
