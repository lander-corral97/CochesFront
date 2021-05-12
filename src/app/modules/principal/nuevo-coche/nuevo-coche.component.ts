import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/service/service.service';
import { Marca } from 'src/app/shared/clase/marca';

@Component({
  selector: 'app-nuevo-coche',
  templateUrl: './nuevo-coche.component.html',
  styleUrls: ['./nuevo-coche.component.css']
})
export class NuevoCocheComponent implements OnInit {

  marcas: Marca[] = [];
  linkSelf: string[] = [];
  id: number = 0;
  nombre: string = '';

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getMarcas().subscribe(
      (datos: any) => {
        datos._embedded.marcas.forEach((marcaAny:any) => {
          this.linkSelf = marcaAny._links.self.href.split('/');
          this.id = +this.linkSelf[this.linkSelf.length - 1];
          this.nombre = marcaAny.nombre;

          this.marcas.push(new Marca(this.id, this.nombre));
        });
      }
    )
  }

}
