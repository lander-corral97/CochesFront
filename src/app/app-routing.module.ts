import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'principal', loadChildren:() => import('src/app/modules/principal/principal.module').then(m => m.PrincipalModule)},
  {path:'**', redirectTo:'principal/nuevo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
