import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL: string = 'https://localhost:44391/user';
  constructor(private http: HttpClient) {}

  // WISHLIST
  getWishlist(userID: string): Observable<any> {
    return this.http.get(this.BASE_URL + `/wishlist?userID=${userID}`, {});
  }
  addToWishList(userID: string, item: string): Observable<any> {
    return this.http.post(
      this.BASE_URL + `/wishlist?userID=${userID}&item=${item}&operation=Add`,
      {}
    );
  }
  RemoveFromWishList(userID: string, item: string): Observable<any> {
    return this.http.post(
      this.BASE_URL +
        `/wishlist?userID=${userID}&item=${item}&operation=Remove`,
      {}
    );
  }
  DeleteFromWishList(userID: string, item: string): Observable<any> {
    return this.http.post(
      this.BASE_URL +
        `/wishlist?userID=${userID}&item=${item}&operation=Delete`,
      {}
    );
  }

  //CART
  getCart(userID: string): Observable<any> {
    return this.http.get(this.BASE_URL + `/cart?userID=${userID}`, {});
  }
  addToCart(userID: string, item: string): Observable<any> {
    return this.http.post(
      this.BASE_URL + `/cart?userID=${userID}&item=${item}&operation=Add`,
      {}
    );
  }
  RemoveFromCart(userID: string, item: string): Observable<any> {
    return this.http.post(
      this.BASE_URL + `/cart?userID=${userID}&item=${item}&operation=Remove`,
      {}
    );
  }
  DeleteFromCart(userID: string, item: string): Observable<any> {
    return this.http.post(
      this.BASE_URL + `/cart?userID=${userID}&item=${item}&operation=Delete`,
      {}
    );
  }
}
