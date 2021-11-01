import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Order } from 'src/app/shared/models/order';

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
  removeItem(bookID: string) {
    this.userService.RemoveFromCart(this.auth.getUserID(), bookID).subscribe(
      (response) => {},
      (error) => {
        console.log(error);
      },
      () => {
        this.getCart();
      }
    );
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

  GoToCheckOutPage() {
    this.router.navigate(['payment', 'checkout']);
  }
  ngOnInit(): void {
    this.getCart();
  }
}
