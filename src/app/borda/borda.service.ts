import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Borda } from './borda.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BordaService {

  url: string = 'http://localhost:8080/api/bordas/';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.http = http;  
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type','application/json');
  }

  public listar(): Observable<Borda[]>  {
    
    return this.http.get<Borda[]>(this.url);
      // .map((res: Response, t) => res.json());
  }

  public buscarPor(id: number): Observable<Borda> {

    return this.http.get(this.url + id);
  }

  public editar(borda: Borda): Observable<HttpResponse<Response>> {

    return this.http.put<Response>(this.url + borda.id, JSON.stringify(borda), 
    { 
      headers: {'Content-Type': 'application/json'}, observe: 'response'
    });
  }

  public excluir(borda: Borda): Observable<HttpResponse<Response>> {

    return this.http.delete<Response>(this.url + borda.id, {observe: 'response'});
  }

  public salvar(borda: Borda): Observable<HttpResponse<Response>> {

    return this.http.post<Response>(this.url, JSON.stringify(borda), 
      { 
        headers: {'Content-Type': 'application/json'}, observe: 'response'
      });
  }

}
