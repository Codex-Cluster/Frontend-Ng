import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/shared/models/coupon';
import { Dictionary, Order } from 'src/app/shared/models/order';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [],
})
export class CheckoutComponent implements OnInit {
  cart: Order[] = [];
  order: Order;
  coupon: Coupon;
  couponEntered: boolean;
  couponValid: boolean;
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    this.order = new Order();
    this.coupon = new Coupon();
    this.couponEntered = false;
    this.couponValid = false;
  }

  getCart() {
    this.userService.getCart(this.auth.getUserID()).subscribe(
      (response) => {
        this.cart = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  Proceed() {
    this.order.Amt = 0;
    this.order.Address = this.userService.getUserData().Address;
    this.order.UserID = this.userService.getUserData().UserID;
    this.order.Books = {};
    this.cart.forEach((element) => {
      this.order.Books![element.BookID!.toString()] = element.qty!;

      this.order.Amt! += element.Price!;
    });
    if (this.couponValid) {
      this.order.OldPrice = this.order.Amt;
      this.order.Amt *= (100 - this.coupon.discount!) / 100;
    }
    this.router.navigate(['payment', 'details'], { state: this.order });
  }

  couponControl: FormControl = new FormControl('');

  ValidateCoupon() {
    this.couponEntered = true;
    this.userService.validateCoupon(this.couponControl.value).subscribe(
      (response) => {
        this.coupon = response;
      },
      (error) => {},
      () => {
        if (this.coupon.code != 'N/A') {
          this.order.Coupon = this.coupon.code;
          this.couponValid = true;
        }
      }
    );
  }

  ngOnInit(): void {
    this.getCart();
  }
}
