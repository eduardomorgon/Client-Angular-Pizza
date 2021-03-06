import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  collapse: boolean = true;
  mostrarNav: boolean = false;

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.mostrarNav = this.auth.eventNav.subscribe(nav => this.mostrarNav = nav);
  }

  public logout(): void {

    this.auth.removeToken();
    this.router.navigate(['login'],  {queryParams: {logout: ''} });
  }

}
