import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlist: Order[] = [];
  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthService
  ) {}

  username() {
    return this.auth.getUsername();
  }
  moveToCart(item: string, qty: number) {
    this.userService
      .MoveToCart(this.auth.getUserID(), item, qty)
      .subscribe((response) => {
        console.log(`Successfully moved ${item}:${qty} to cart`);
        this.getWishlist();
      });
  }

  getWishlist() {
    this.userService.getWishlist(this.auth.getUserID()).subscribe(
      (response) => {
        this.wishlist = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  removeItem(bookID: string) {
    this.userService
      .RemoveFromWishList(this.auth.getUserID(), bookID)
      .subscribe(
        (response) => {
          console.log('Removing book');
        },
        (error) => {
          console.log('Error removing book');
        },
        () => {
          console.log('Successfully removed book');
          this.getWishlist();
        }
      );
  }

  ngOnInit(): void {
    this.getWishlist();
  }
}
