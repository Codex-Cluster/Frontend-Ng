import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Order[] = [];
  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthService
  ) {}

  moveToWishlist(item: string, qty: number) {
    this.userService
      .MoveToWishlist(this.auth.getUserID(), item, qty)
      .subscribe((response) => {
        console.log(`Successfully moved ${item}:${qty} to wishlist`);
        this.getCart();
      });
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
  ngOnInit(): void {
    this.getCart();
  }
}
