import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  BASE_URL: string = 'https://localhost:44391/api/category';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
  getBooksByCategory(category: string): Observable<any> {
    return this.http.get(this.BASE_URL + '?catID=' + category);
  }
  createCategory(category: Category): Observable<any> {
    return this.http.post(this.BASE_URL, category);
  }
  DeleteCategory(category: Category): Observable<any> {
    return this.http.delete(this.BASE_URL, { body: category });
  }
}
