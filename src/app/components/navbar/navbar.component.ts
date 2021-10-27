import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categories: string[] = [];
  constructor(
    private categoryService: CategoryService,
    private route: Router,
    private auth: AuthService,
    private admin: AdminService
  ) {}

  navigate(loc: string) {
    this.route.navigate([loc]);
  }

  isAdmin(): boolean {
    return this.admin.isAdmin();
  }
  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  getUsername() {
    return this.auth.getUsername();
  }

  GoToAdmin() {
    this.route.navigate(['admin/controls']);
  }
  GoToOrders() {
    this.route.navigate(['user/orders']);
  }
  GoToWishlist() {
    this.route.navigate(['user/wishlist']);
  }
  GoToCart() {
    this.route.navigate(['user/cart']);
  }
  GoToProfile() {
    this.route.navigate(['user/profile']);
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        alert('Failed to fetch categories!');
      }
    );
  }
}
