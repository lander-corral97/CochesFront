import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CochesFront';
  router: string = '';
  parteRutas: string[] = [];

  constructor(private ruta: Router) {
    ruta.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.router = val.url;
      }
    });
  }
}
