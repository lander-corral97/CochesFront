import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoCocheComponent } from './nuevo-coche/nuevo-coche.component';
import { ListaCochesComponent } from './lista-coches/lista-coches.component';
import { PrincipalRoutingModule } from './principal-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NuevoCocheComponent,
    ListaCochesComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class PrincipalModule { }
