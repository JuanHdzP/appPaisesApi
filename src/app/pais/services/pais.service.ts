import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiKey = '38b118d7e7de29145232c175f799ea20';
  private apiUrl = 'http://api.countrylayer.com/v2';

  get httpParams() {
    return new HttpParams().set('filters', 'name;capital;region;alpha3Code');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${termino}?access_key=${this.apiKey}&filters=name;capital;region;`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}?access_key=${this.apiKey}&filters=name;capital;region;`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  getPais(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}?access_key=${this.apiKey}`;
    return this.http.get<Pais>(url);
  }

  buscarRegion(region: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/region/${region}?access_key=${this.apiKey}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }
}
