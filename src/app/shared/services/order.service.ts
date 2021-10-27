import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  BASE_URL: string = "https://localhost:44391/api/orders"
  constructor(
    private http: HttpClient
  ) { }

  getOrders(userID:string){
    return this.http.get( this.BASE_URL + '?userID=' + userID)
  }
}
