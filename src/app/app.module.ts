import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ListaLinksComponent } from './core/lista-links/lista-links.component';

import { PrincipalModule } from './modules/principal/principal.module';
import { LoginModule } from './modules/login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InterceptorService } from './core/service/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    LoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
