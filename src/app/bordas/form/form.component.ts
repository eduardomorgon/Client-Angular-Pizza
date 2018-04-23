import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borda } from '../borda.model';
import { BordasService } from '../bordas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  bordaForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private service: BordasService,
              private router: Router,
              private formBuilder: FormBuilder) { 
  }
  
  ngOnInit() {

    this.configuraValidacao();

    this.route.data.subscribe(data => {
      let borda: Borda = data.borda;
      if(borda)
        this.bordaForm.setValue(borda)
    });
    
    // this.route.params.subscribe(params => {
    //   let id = params['id'];
    //   if(id) {
    //     this.service.buscarPor(id)
    //       .subscribe(borda => {
    //         this.bordaForm.setValue(borda);
    //       });
    //   }
    // });
  }

  private configuraValidacao(): void {
    this.bordaForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  isFieldValid(field: string) {

    return !this.bordaForm.get(field).valid && this.bordaForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    
    return {
      'is-invalid': this.isFieldValid(field)
    };
  }

  public salvar(event: Event): void {
    
    // https://getmdl.io/ material design google
    // https://github.com/loiane/angular-reactive-forms-validate-submit/blob/master/src/app/validate-fields-submit-form/validate-fields-submit-form.component.ts
    // event.preventDefault();
    // let b: Borda;
    // this.bordaForm.valueChanges
    //     .map(borda => borda)
    //     .subscribe(borda => console.log(borda));

    if(this.bordaForm.valid) {

      let borda: Borda = this.bordaForm.value;
      
      if(!borda.id) {
        this.service.salvar(borda)
          .subscribe(res => {
            if(res.status === 201) {
              this.router.navigate(['bordas']);
            }
          }, (erro: HttpErrorResponse) => {
            erro.error.errors.forEach(e => {
              console.log(e.campo);
              console.log(e.mensagem);
            })
          });
      }else{
        this.service.editar(borda)
          .subscribe(res => {
            if(res.status === 204) {
              this.router.navigate(['bordas']);
            }
          }, erro => {
            console.log(erro);
          });
      }
    }else{
      this.dispararValidacoes();
    }
  }

  private dispararValidacoes(): void {

    Object.keys(this.bordaForm.controls).forEach(field => {
      const control = this.bordaForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
