import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  orders:any
  constructor(
    private categoryService : CategoryService,
    private bookService : BookService,
    private router : Router,
    private admin: AdminService
  ) { }

  isAdmin(){
    return this.admin.isAdmin()
  }
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
  highlightedIndex:number = -1;
  highlightCategoryInfo(idx: number){
    if(this.highlightedIndex == idx ){
      this.highlightedIndex = -1
    }
    else{
      this.highlightedIndex = idx
    }
  }
  ifHighlighted(idx:number){
    if(this.highlightedIndex == idx){
      return true
    }
    else{
      return false
    }
  }

  navigateToCategory(catID:string){
    this.router.navigate(['books',catID])
  }

  DeleteCategory(category:Category){
    this.categoryService.DeleteCategory(category).subscribe(
      (response)=>{
        this.GetAllCategories()
        if(response == true){
          console.log('Successfully deleted category')
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  categories: Category[] = []
  ngOnInit(): void {
    this.GetAllCategories()
  }

  goToAddCategory(){
    this.router.navigate(['admin/addCategory'])
  }

}
