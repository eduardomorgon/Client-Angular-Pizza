import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../pizzas.service';
import { Pizza } from '../pizza.model';
import { ModalExcluirComponent } from '../../modal-excluir/modal-excluir.component';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public pizzas: Array<Pizza>;

  constructor(private service: PizzasService,
              private modalService: BsModalService) { }

  ngOnInit() {

    this.service.all().subscribe(pizzas => this.pizzas = pizzas);
    
  }

  private excluir(pizza: Pizza): void {
    
    this.service.remove(pizza.id)
      .subscribe(res => {
        if(res.status === 204) {
          this.removerDaLista(pizza);
        }
      }, erro => {
        console.log(erro);
      });
  }

  private removerDaLista(pizza: Pizza): void {
    
    let index = this.pizzas.findIndex(b => b.id === pizza.id);
    let lista = this.pizzas.slice(0);
    lista.splice(index, 1);
    this.pizzas = lista;
  }

  public modalExcluir(pizza: Pizza) {

    const initialState = {
      objeto: pizza,
      propriedade: 'nome'
    };

    let bsModalRef = this.modalService.show(ModalExcluirComponent, {initialState});
    bsModalRef.content.eventoExclusao.subscribe((pizza: Pizza) => this.excluir(pizza));
    
    // https://ngx-bootstrap-latest.surge.sh/#/modals#directive-section
    // https://github.com/valor-software/ngx-bootstrap/issues/624
    // https://stackoverflow.com/questions/46698126/ngx-bootstrap-how-to-open-a-modal-from-another-component
    
  }
}
