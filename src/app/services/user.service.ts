import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL: string = 'https://localhost:44391/user';
  user: User;
  constructor(private http: HttpClient, private auth: AuthService) {
    if (this.auth.isLoggedIn()) {
      this.user = this.auth.getUser();
    } else {
      this.user = new User();
    }
  }

  // PROFILE
  getUserData(): User {
    return this.user;
  }

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
  MoveToCart(userID: string, item: string, qty: number): Observable<any> {
    return this.http.put(
      this.BASE_URL + `/wishlist?userID=${userID}&item=${item}&qty=${qty}`,
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
  MoveToWishlist(userID: string, item: string, qty: number): Observable<any> {
    return this.http.put(
      this.BASE_URL + `/cart?userID=${userID}&item=${item}&qty=${qty}`,
      {}
    );
  }
}
