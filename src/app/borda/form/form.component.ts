import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borda } from '../borda.model';
import { BordaService } from '../borda.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  borda: Borda;

  constructor(private route: ActivatedRoute, 
              private service: BordaService,
              private router: Router) { 
    
    this.borda = new Borda();
  }
  
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id) {
        this.service.buscarPor(id)
          .subscribe(borda => this.borda = borda);
      }
    });
  }

  public salvar(event: Event): void {

    event.preventDefault();
    if(this.borda.id) {
      this.service.editar(this.borda)
      .subscribe(res => {
        if(res.status === 204) {
          this.router.navigate(['borda']);
        }
      }, erro => {
        console.log(erro);
      });
    }else{
      this.service.salvar(this.borda)
        .subscribe(res => {
          if(res.status === 201) {
            this.router.navigate(['borda']);
          }
        }, erro => {
          console.log(erro);
        });
    }
  }


}
