import { Injectable } from '@angular/core';
import { env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/shared/clase/marca';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getMarcas() : Observable<any> {
    return this.http.get(env.urlBase + 'marcas');
  }

  postCoche(body: any) : Observable<any> {
    return this.http.post(env.urlBase + 'coches', body);
  }

  getCochesMarca(id: number): Observable<any> {
    return this.http.get(env.urlBase + 'coches/' + id);
  }
}
