import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { FirestorageService } from 'src/app/services/firestorage.service';

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
  image: any =
    'https://images.unsplash.com/photo-1576158129799-c4a7a6436de4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
  constructor(
    private admin: AdminService,
    private categoryService: CategoryService,
    private bookService: BookService,
    private fbStorage: FirestorageService,
    private route: Router
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

  imageChanged: boolean = false;
  imageFile:any

  async AddBook() {
    if (this.imageChanged == true) {
      this.image = await this.fbStorage.uploadFile(0, this.newBook.BookID!);
    }

    this.newBook.Image = this.image;

    const catID = this.categories.filter(
      (cat) => cat.CatName === this.category
    )[0].CatID!;
    this.newBook.CatID = catID;
    this.newBook.OldPrice = this.newBook.Price;
    this.newBook.Position = 0;

    this.bookService.createBook(this.newBook).subscribe(
      (response) => {
        console.log('Book added successfully');
        this.route.navigate(['']);
      },
      (error) => {
        console.log('Failed to add book');
      }
    );
  }

  isAdmin() {
    return this.admin.isAdmin();
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
    this.bookService.getBooks().subscribe((response: Book[]) => {
      this.formats = [...new Set(response.map((item) => item.Format!))];
    });
  }

  setUploadFile(event: any) {
    this.imageChanged = true;

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
        this.imageFile = reader.result; 
    }
    
    this.fbStorage.setFile(event.target.files[0]);
  }
}
