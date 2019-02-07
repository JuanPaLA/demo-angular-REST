import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cobro } from '../model/cobro';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CobroService {

  private baseUrl = 'http://localhost:8080/api/cobros';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Cobro Funcionando');
  }

  getCobros(): Observable<Cobro[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Cobro[])
    );
  }

  getCobro(id: number): Observable<Cobro> {
    return this.http.get<Cobro>(`${this.baseUrl}/${id}`);
  }

  createCobro(cobro: Cobro): Observable<Cobro> {
    return this.http.post<Cobro>(this.baseUrl, cobro, {headers: this.httpHeaders});
  }

  updateCobro(cobro: Cobro): Observable<Cobro> {
    return this.http.put<Cobro>(this.baseUrl, cobro, {headers: this.httpHeaders});
  }

  deleteCobro(id: number): Observable<Cobro> {
    return this.http.delete<Cobro>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}