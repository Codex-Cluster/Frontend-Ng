import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { Category } from 'src/app/shared/models/category';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BookService } from 'src/app/shared/services/book.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  orders: any;
  query: string = '';
  constructor(
    private categoryService: CategoryService,
    private bookService: BookService,
    private router: Router,
    private admin: AdminService,
    private auth: AuthService,
    private searchService: SearchService
  ) {
    this.searchService.query = '';
    this.auth.loadLoggedInData();
  }

  isAdmin() {
    return this.admin.isAdmin();
  }
  GetAllCategories() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        alert('Failed to fetch books by category');
      }
    );
  }
  highlightedIndex: number = -1;
  highlightCategoryInfo(idx: number) {
    if (this.highlightedIndex == idx) {
      this.highlightedIndex = -1;
    } else {
      this.highlightedIndex = idx;
    }
  }
  ifHighlighted(idx: number) {
    if (this.highlightedIndex == idx) {
      return true;
    } else {
      return false;
    }
  }

  navigateToCategory(catID: string) {
    this.router.navigate(['category', catID]);
  }

  DeleteCategory(category: Category) {
    this.categoryService.DeleteCategory(category).subscribe(
      (response) => {
        this.GetAllCategories();
        if (response == true) {
          console.log('Successfully deleted category');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  categories: Category[] = [];
  ngOnInit(): void {
    this.GetAllCategories();
    this.auth.loadLoggedInData();
    this.searchService.queryUpdated.subscribe((query) => {
      this.query = this.searchService.getQuery();
    });
  }

  goToAddCategory() {
    this.router.navigate(['admin/addCategory']);
  }
}
