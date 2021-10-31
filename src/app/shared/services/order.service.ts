import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  BASE_URL: string = 'https://localhost:44391/api/orders';
  constructor(private http: HttpClient) {}

  getOrders(userID: string) {
    return this.http.get(this.BASE_URL + '?userID=' + userID);
  }
  makeOrder(order: Order) {
    return this.http.post(this.BASE_URL, order);
  }

  removeOrder(order: Order) {
    return this.http.delete(this.BASE_URL, { body: order });
  }
}
