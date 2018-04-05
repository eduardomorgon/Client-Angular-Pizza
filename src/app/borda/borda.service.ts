import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Borda } from './borda.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BordaService {

  url: string = 'http://localhost:8080/api/bordas';

  constructor(private http: HttpClient) {
    this.http = http;  
  }

  listar(): Observable<Borda[]>  {
    
    return this.http.get<Borda[]>(this.url);
      // .map((res: Response, t) => res.json());
  }

}
