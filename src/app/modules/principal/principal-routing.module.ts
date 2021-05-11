import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCochesComponent } from './lista-coches/lista-coches.component';
import { NuevoCocheComponent } from './nuevo-coche/nuevo-coche.component';


const routes: Routes = [
  {path:'lista', component:ListaCochesComponent},
  {path:'nuevo', component:NuevoCocheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }