import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ListaLinksComponent } from './core/lista-links/lista-links.component';

import { PrincipalModule } from './modules/principal/principal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }