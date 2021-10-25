import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: string[] = []
  constructor(
    private categoryService: CategoryService,
    private route: Router,
    private auth: AuthService,
  ) { }

  navigate(loc: string) {
    this.route.navigate([loc])
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn()
  }

  getUsername() {
    return this.auth.getUsername();
  }

  GoToOrders(){
    this.route.navigate(['user/orders'])
  }
  GoToWishlist(){
    this.route.navigate(['user/wishlist'])
  }
  GoToCart(){
    this.route.navigate(['user/cart'])
  }

  logout() {
    this.auth.logout()
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response
      },
      (error) => {
        alert('Failed to fetch categories!')
      }
    )
  }

}
