import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { Promoted } from 'src/app/shared/models/promoted';
import { BookService } from 'src/app/shared/services/book.service';
import { PromotedService } from 'src/app/shared/services/promoted.service';

@Component({
  selector: 'app-promoted',
  templateUrl: './promoted.component.html',
  styleUrls: ['./promoted.component.css'],
})
export class PromotedComponent implements OnInit {
  promoted: Promoted[] = [];
  books: Book[] = [];
  show: boolean = false;
  constructor(
    private promotedService: PromotedService,
    private bookService: BookService,
    private router: Router
  ) {}

  GoToBook(b: Book) {
    this.router.navigate(['category', b.CatID, 'book', b.BookID]);
  }

  getPromotedBooks() {
    this.promotedService.getPromoted().subscribe(
      (response) => {
        this.promoted = response;
        if (this.promoted.length === 0) {
          this.show = false;
        } else {
          this.show = true;
        }
      },
      (error) => {},
      () => {
        this.promoted.forEach((element) => {
          this.bookService
            .getBookByID(element.bookID!)
            .subscribe((response) => {
              this.books.push(response);
            });
        });
      }
    );
  }
  ngOnInit(): void {
    this.getPromotedBooks();
  }
}
