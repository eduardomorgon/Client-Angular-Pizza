import { Injectable } from '@angular/core';
import { CrudService } from '../shared/service/crud.service';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientesService extends CrudService<Cliente> {

  constructor(http: HttpClient) {
    super(http);
  }
  
  url(): string {
    return 'http://localhost:8080/api/clientes/';
  }
}
