import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/service/service.service';
import { Marca } from 'src/app/shared/clase/marca';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Coche } from 'src/app/shared/clase/coche';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-coche',
  templateUrl: './nuevo-coche.component.html',
  styleUrls: ['./nuevo-coche.component.css']
})
export class NuevoCocheComponent implements OnInit {

  // lista de todas las marcas
  marcas: Marca[] = [];
  // link para sacar el id de la marca
  linkSelf: string[] = [];
  // propiedades de la marca
  id: number = 0;
  nombre: string = '';
  // coche nuevo a meter en la bbdd
  coche: Coche = new Coche(0, '', '', new Marca(0, ''));

 
  nuevoCoche: FormGroup = new FormGroup({});
  constructor(private service: ServiceService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.service.getMarcas().subscribe(
      (datos: Marca[]) => {
        datos.forEach((marca:Marca) => {
          this.marcas.push(new Marca(marca.id, marca.nombre));
        });
      }
    );
    this.nuevoCoche = this.formBuilder.group({
      marcas: [1],
      modelo: ['', Validators.required],
      matricula: ['', [Validators.required,Validators.pattern('[0-9]{1,4}( )[BCDFGHJKLMNPRSTVWXYZ]{2,3}')]]
    });
  }

  get f() { return this.nuevoCoche.controls; }

  nuevo() {
    if (this.nuevoCoche.invalid) {
      this.router.navigate(['/principal/nuevo']);
    } else {
      this.coche.marca = this.nuevoCoche.value.marcas;
      this.coche.matricula = this.nuevoCoche.value.matricula;
      this.coche.modelo = this.nuevoCoche.value.modelo;

      this.service.postCoche({modelo: this.coche.modelo, matricula: this.coche.matricula, marca: {id: this.coche.marca}}). subscribe();

      this.router.navigate(['/principal/lista/' + this.coche.marca]);
    }
  }

}
