import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prueba } from '../model/prueba';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private baseUrl = 'http://localhost:8080/api/prueba';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Prueba Funcionando');
  }

  getPruebas(): Observable<Prueba[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Prueba[])
    );
  }

  getPrueba(id: number): Observable<Prueba> {
    return this.http.get<Prueba>(`${this.baseUrl}/${id}`);
  }

  createPrueba(prueba: Prueba): Observable<Prueba> {
    return this.http.post<Prueba>(this.baseUrl, prueba, {headers: this.httpHeaders});
  }

  updatePrueba(prueba: Prueba): Observable<Prueba> {
    return this.http.put<Prueba>(this.baseUrl, prueba, {headers: this.httpHeaders});
  }

  deletePrueba(id: number): Observable<Prueba> {
    return this.http.delete<Prueba>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}