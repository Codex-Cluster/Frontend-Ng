import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  BASE_URL: string = "https://localhost:44391/admin"
  constructor() { }
}
