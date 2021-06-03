import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/core/service/service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Coche } from 'src/app/shared/clase/coche';
import { Marca } from 'src/app/shared/clase/marca';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista-coches',
  templateUrl: './lista-coches.component.html',
  styleUrls: ['./lista-coches.component.css'],
})
export class ListaCochesComponent implements OnInit {
  modificar = faPencilAlt;
  borrar = faTrash;

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

  constructor(
    private ruta: ActivatedRoute,
    private service: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    //Reutilizar la ruta. En este caso, con otro parámetro.
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.service
      .getCochesMarca(this.ruta.snapshot.params.id)
      .subscribe((datos: Coche[]) => {
        datos.forEach((coche: Coche) => {
          this.coches.push(
            new Coche(
              coche.id,
              coche.modelo,
              coche.matricula,
              new Marca(coche.marca.id, coche.marca.nombre)
            )
          );
        });
      });

    this.service.getMarcas().subscribe((datos: Marca[]) => {
      datos.forEach((marca: Marca) => {
        this.marcas.push(new Marca(marca.id, marca.nombre));
      });
    });

    this.marcaForm = this.formBuilder.group({
      marcas: [this.ruta.snapshot.params.id],
    });
  }

  redirigir() {
    this.router.navigate(['/principal/lista', this.marcaForm.value.marcas]);
  }

  subirFilenet() {
    this.service.subirFilenet().subscribe();
  }

  borrarCoche(coche: Coche) {
    if (
      confirm(
        '¿Quieres borrar el siguiente coche?\nId: ' +
          coche.id +
          '\nMarca: ' +
          coche.marca.nombre +
          '\nModelo: ' +
          coche.modelo +
          '\nMatrícula: ' +
          coche.matricula
      )
    ) {
      this.service.deleteCoches(coche.id).subscribe();
      window.location.reload();
    }
  }
}
