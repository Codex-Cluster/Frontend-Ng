import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  BASE_URL: string = 'https://localhost:44391/admin';

  user: User;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  isAdmin(): boolean {
    let user:User = JSON.parse(localStorage.getItem('user')!);
    this.user = user;
    if (user!=null && user.Roles!.includes('Admin')) {
      return true;
    } else {
      return false;
    }
  }
}
