import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  BASE_URL: string = 'https://localhost:44391/admin';

  user: User;
  constructor(private http: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  isAdmin(): boolean {
    let user: User = JSON.parse(localStorage.getItem('user')!);
    this.user = user;
    if (user != null && user.Roles!.includes('Admin')) {
      return true;
    } else {
      return false;
    }
  }

  getCoupons(userID: string): Observable<any> {
    return this.http.get(this.BASE_URL + `/coupon?userID=${userID}`);
  }
}
