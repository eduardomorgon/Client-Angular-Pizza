import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private service: ClientesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.configuraValidacao();

    this.route.data.subscribe(data => {
      let cliente: Cliente = data.cliente;
      if(cliente)
        this.clienteForm.setValue(cliente);
    });
  }

  private configuraValidacao(): void {

    this.clienteForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: this.formBuilder.group({
        id: [''],
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        referencia: ['']
      })
    });
  }

  public salvar(): void {

    if(this.clienteForm.valid) {

      let cliente: Cliente = this.clienteForm.value;
      
      if(!cliente.id) {
        this.service.save(cliente)
          .subscribe(res => {
            if(res.status === 201) {
              this.router.navigate(['clientes']);
            }
          }, (err: HttpErrorResponse) => {
            // this.validacoesServer = err.error.messages;
          });
      }else{
        this.service.edit(cliente.id, cliente)
          .subscribe(res => {
            if(res.status === 200) {
              this.router.navigate(['clientes']);
            }
          }, erro => {
            console.log(erro);
          });
      }
    }else{
      this.dispararValidacoes(this.clienteForm);
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

    return !this.clienteForm.get(field).valid && this.clienteForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    
    return {
      'is-invalid': this.isFieldValid(field)
    };
  }

}
