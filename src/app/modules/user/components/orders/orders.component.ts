import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderDetails } from 'src/app/shared/models/order';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';

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
    private auth: AuthService,
    private userService: UserService
  ) {
    this.orderDetails = new OrderDetails();
  }

  CancelOrder(order: any[]) {
    let orderTmp: Order = new Order();
    orderTmp.Books = {};
    orderTmp.Datetime = order[0].datetime
      .toString()
      .split(' ')[0]
      .split('-')
      .reverse()
      .join('-');
    orderTmp.UserID = this.userService.getUserData().UserID;
    for (var _order of order) {
      orderTmp.Books[_order.BookID!] = _order.qty!;
    }
    this.orderService.removeOrder(orderTmp).subscribe(
      (response) => {},
      (error) => {
        console.log(error);
      },
      () => {
        this.getOrders();
      }
    );
  }

  getOrders() {
    this.orderService.getOrders(this.auth.getUserID()).subscribe(
      (response) => {
        this.orderDetails = response;
        this.orders = [];
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
      },
      () => {}
    );
  }

  ngOnInit(): void {
    this.getOrders();
  }
}
