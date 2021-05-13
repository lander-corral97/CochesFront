import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/core/service/service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Coche } from 'src/app/shared/clase/coche';
import { Marca } from 'src/app/shared/clase/marca';

@Component({
  selector: 'app-lista-coches',
  templateUrl: './lista-coches.component.html',
  styleUrls: ['./lista-coches.component.css']
})
export class ListaCochesComponent implements OnInit {

  coches: Coche[] = [];
  // atributos de coche
  modelo: string = '';
  matricula: string = '';
  marca: number = 0;

  // lista de todas las marcas
  marcas: Marca[] = [];
  // link para sacar el id de la marca
  linkSelf: string[] = [];
  // propiedades de la marca
  id: number = 0;
  nombre: string = '';

  marcaForm: FormGroup = new FormGroup({});

  constructor(private ruta: ActivatedRoute,
    private service: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder) {
      //Reutilizar la ruta. En este caso, con otro parámetro.
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    }

  ngOnInit(): void {
    this.service.getCochesMarca(this.ruta.snapshot.params.id).subscribe(
      (datos: any) => {
        datos._embedded.coches.forEach((coche: any) => {
          this.marca = this.ruta.snapshot.params.id;
          this.modelo = coche.modelo;
          this.matricula = coche.matricula;

          this.coches.push(new Coche(this.modelo, this.matricula, this.marca));
        })

      }
    );
    
    this.service.getMarcas().subscribe(
      (datos: any) => {
        datos._embedded.marcas.forEach((marcaAny:any) => {
          this.linkSelf = marcaAny._links.self.href.split('/');
          this.id = +this.linkSelf[this.linkSelf.length - 1];
          this.nombre = marcaAny.nombre;

          this.marcas.push(new Marca(this.id, this.nombre));
        });
      }
    );

    this.marcaForm = this.formBuilder.group({
      marcas: [this.ruta.snapshot.params.id]
    });
  }

  redirigir() {
    this.router.navigate(['/principal/lista', this.marcaForm.value.marcas]);
  }

}
