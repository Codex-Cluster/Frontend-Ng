import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  newBook: Book;
  categories: Category[] = [];
  formats: string[] = [];
  category: string = '';
  constructor(
    private admin: AdminService,
    private categoryService: CategoryService,
    private bookService: BookService
  ) {
    this.newBook = {
      Title: '',
      Author: '',
      Format: '',
      ISBN: '',
      Rating: '0.0',
      Price: 0,
      OldPrice: undefined,
      Image: '',
      CatID: '',
      BookID: '',
      Status: 'Available',
      Position: undefined,
      Description: '',
      Year: '',
    };
  }

  AddBook(){
    const catID = this.categories.filter(cat=>
      cat.CatName === this.category
    )[0].CatID!
    console.log(catID)
    this.newBook.CatID = catID
    // this.bookService.createBook(this.newBook)
  }


  isAdmin() {
    return this.admin.isAdmin();
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
    this.bookService.getBooks().subscribe((response: Book[]) => {
      this.formats = [...new Set(response.map(item => item.Format!))];
    });
  }
}
