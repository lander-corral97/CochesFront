import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-links',
  templateUrl: './lista-links.component.html',
  styleUrls: ['./lista-links.component.css']
})
export class ListaLinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
