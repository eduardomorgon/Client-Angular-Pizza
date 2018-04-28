import { HttpHeaders, HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

export abstract class CrudService < T > {

  headers: HttpHeaders;

  constructor(protected http: HttpClient) {
    this.http = http;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  abstract url(): string;


  public all(): Observable < T[] > {

    return this.http.get < T[] > (this.url());
  }

  public findBy(id: number): Observable < T > {

    return this.http.get < T > (this.url() + id);
  }

  public edit(id: number, entity: T): Observable < HttpResponse < Response >> {

    return this.http.put < Response > (this.url() + id, entity, {
      headers: this.headers,
      observe: 'response'
    });
  }

  public remove(id: number): Observable < HttpResponse < Response >> {

    return this.http.delete < Response > (this.url() + id, {
      observe: 'response'
    });
  }

  public save(entity: T): Observable < HttpResponse < Response >> {

    return this.http.post < Response > (this.url(), entity, {
      headers: this.headers,
      observe: 'response'
    });
  }


}
