import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = "https://localhost:44391/user"
  constructor() { }
}
