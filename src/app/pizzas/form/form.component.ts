import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidacaoServer } from '../../model/validacao.server';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzasService } from '../pizzas.service';
import { Pizza } from '../pizza.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pizzaForm: FormGroup;
  validacoesServer: Array<ValidacaoServer>;

  constructor(private route: ActivatedRoute, 
              private service: PizzasService,
              private router: Router,
              private formBuilder: FormBuilder) { 
  }
  
  ngOnInit() {

    this.configuraValidacao();

    this.route.data.subscribe(data => {
      let pizza: Pizza = data.pizza;
      if(pizza)
        this.pizzaForm.setValue(pizza);
        console.log(this.pizzaForm.value);
    });
    
  }

  private configuraValidacao(): void {
    this.pizzaForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      precos: this.formBuilder.group({
        broto: ['', Validators.required],
        media: ['', Validators.required],
        grande: ['', Validators.required]
      })
    });
  }

  public salvar(): void {
    
    if(this.pizzaForm.valid) {

      let pizza: Pizza = this.pizzaForm.value;
      
      if(!pizza.id) {
        this.service.salvar(pizza)
          .subscribe(res => {
            if(res.status === 201) {
              this.router.navigate(['pizzas']);
            }
          }, (err: HttpErrorResponse) => {
            console.log(err.error);
            this.validacoesServer = err.error.messages;
          });
      }else{
        this.service.editar(pizza)
          .subscribe(res => {
            if(res.status === 200) {
              this.router.navigate(['pizzas']);
            }
          }, erro => {
            console.log(erro);
          });
      }
    }else{
      this.dispararValidacoes(this.pizzaForm);
      console.log(this.pizzaForm)
    }
  }

  private dispararValidacoes(formGroup: FormGroup): void {

    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
      if (control instanceof FormGroup) {
        this.dispararValidacoes(control);
      }
    });
  }

  

  isFieldValid(field: string) {

    return !this.pizzaForm.get(field).valid && this.pizzaForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    
    return {
      'is-invalid': this.isFieldValid(field)
    };
  }

}
