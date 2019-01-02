import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prestamo } from '../model/prestamo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private baseUrl = 'http://localhost:8080/api/prestamos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio Prestamo Funcionando');
  }

  getPrestamos(): Observable<Prestamo[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Prestamo[])
    );
  }

  getPrestamo(id: number): Observable<Prestamo> {
    return this.http.get<Prestamo>(`${this.baseUrl}/${id}`);
  }

  createPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.baseUrl, prestamo, {headers: this.httpHeaders});
  }

  updatePrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.put<Prestamo>(this.baseUrl, prestamo, {headers: this.httpHeaders});
  }

  deletePrestamo(id: number): Observable<Prestamo> {
    return this.http.delete<Prestamo>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}