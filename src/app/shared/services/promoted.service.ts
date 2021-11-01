import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promoted } from '../models/promoted';

@Injectable({
  providedIn: 'root',
})
export class PromotedService {
  BASE_URL: string = 'https://localhost:44391/api/promoted';
  constructor(private http: HttpClient) {}

  getPromoted(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
  postPromoted(p: Promoted): Observable<any> {
    return this.http.post(this.BASE_URL, p);
  }
  putPromoted(p: Promoted): Observable<any> {
    return this.http.put(this.BASE_URL, p);
  }
  deletePromoted(p: Promoted): Observable<any> {
    return this.http.delete(this.BASE_URL, { body: p });
  }
}
