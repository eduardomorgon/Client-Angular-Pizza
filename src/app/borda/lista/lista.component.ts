import { Component, OnInit } from '@angular/core';
import { BordaService } from '../borda.service';
import { Borda } from '../borda.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public bordas: Borda[];
  
  constructor(private bordaService: BordaService) { }

  public ngOnInit(): void {

    this.bordaService.listar()
      .subscribe(bordas => this.bordas = bordas);
  }

}
