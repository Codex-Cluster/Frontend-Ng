import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderDetails } from 'src/app/models/order';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orderDetails: OrderDetails;
  orders: any = [];
  constructor(
    private router: Router,
    private orderService: OrderService,
    private auth: AuthService
  ) {
    this.orderDetails = new OrderDetails();
  }

  ngOnInit(): void {
    this.orderService.getOrders(this.auth.getUserID()).subscribe(
      (response) => {
        this.orderDetails = response;
        for (let order of this.orderDetails.orderDetails!) {
          let orders_tmp: any = [];
          for (let key in order) {
            orders_tmp.push(order[key]);
          }
          this.orders.push(orders_tmp);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
