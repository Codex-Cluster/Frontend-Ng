import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/shared/services/book.service';
import { AdminService } from 'src/app/shared/services/admin.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  bookID: string = '';
  book: Book = new Book();
  newBook: Book = new Book();
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private route: Router,
    private auth: AuthService,
    private admin: AdminService,
    private userService: UserService,
    private location: Location
  ) {
    this.bookID = this.activatedRoute.snapshot.paramMap.get('id')!.toString();
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  isAdmin() {
    return this.admin.isAdmin();
  }

  goBack() {
    this.location.back();
  }

  editModeToggle: boolean = false;
  toggleEditMode() {
    this.editModeToggle = !this.editModeToggle;
    if (this.editModeToggle === true) {
      this.newBook = new Book();
      this.newBook = {
        Title: this.book.Title,
        Author: this.book.Author,
        Format: this.book.Format,
        ISBN: this.book.ISBN,
        Rating: this.book.Rating,
        Price: this.book.Price,
        OldPrice: this.book.OldPrice,
        Image: this.book.Image,
        CatID: this.book.CatID,
        BookID: this.book.BookID,
        Position: this.book.Position,
        Status: this.book.Status,
        Description: this.book.Description,
        Year: this.book.Year,
      };
    } else {
      this.newBook = new Book();
    }
  }
  updateBookDetails() {
    this.newBook.OldPrice = this.book.Price;
    this.bookService.updateBook(this.newBook).subscribe(
      (response) => {
        console.log('Updating record');
      },
      (error) => {
        alert('Failed to update record');
      },
      () => {
        alert('Successfully updated record');
        this.route.navigate(['']);
      }
    );
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.BookID!).subscribe(
      (response) => {
        console.log('Deleting record');
      },
      (error) => {
        alert('Failed to delete record');
      },
      () => {
        alert('Successfully deleted record');
        this.route.navigate(['']);
      }
    );
  }

  AddToWishlist() {
    this.userService
      .addToWishList(this.auth.getUserID(), this.book.BookID!)
      .subscribe(
        (response) => {
          console.log('Adding to wishlist');
        },
        (error) => {
          console.log('Error');
        },
        () => {
          console.log('Complete');
        }
      );
  }
  AddToCart() {
    this.userService
      .addToCart(this.auth.getUserID(), this.book.BookID!)
      .subscribe(
        (response) => {
          console.log(this.auth.getUserID());
          console.log(response);
          console.log('Adding to wishlist');
        },
        (error) => {
          console.log('Error');
        },
        () => {
          console.log('Complete');
        }
      );
  }
  GoToCheckOutPage() {
    this.AddToCart();
    this.route.navigate(['payment', 'checkout']);
  }

  ngOnInit(): void {
    this.bookService.getBookByID(this.bookID).subscribe(
      (response) => {
        this.book = response;
      },
      (error) => {
        alert('Failed to fetch details for book with ISBN: ' + this.bookID);
      }
    );
  }
}
