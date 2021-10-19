import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  BASE_URL: string = "https://localhost:44391/orders"
  constructor() { }
}
