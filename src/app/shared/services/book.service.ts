import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BASE_URL: string = "https://localhost:44391/api/book"
  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<any> {
    return this.http.get(this.BASE_URL)
  }
  getBookByID(id: string): Observable<any> {
    return this.http.get(this.BASE_URL + '?bookID=' + id)
  }
  updateBook(book: Book): Observable<any> {
    return this.http.put(this.BASE_URL, book);
  }
  createBook(book: Book): Observable<any> {
    console.log(book)
    return this.http.post(this.BASE_URL, book)
  }
  deleteBook(id: string): Observable<any> {
    return this.http.delete(this.BASE_URL + '?bookID=' + id);
  }
}
