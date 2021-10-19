import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private categoryService : CategoryService,
    private bookService : BookService,
    private router : Router
  ) { }

  GetAllCategories() {
      this.categoryService.getCategories().subscribe(
        (response) => {
          this.categories = response
        },
        (error) => {
          alert("Failed to fetch books by category")
        }
      )
  }

  navigateToCategory(catID:string){
    this.router.navigate(['',catID])
  }

  categories: Category[] = []
  ngOnInit(): void {
    this.GetAllCategories()
  }

}
