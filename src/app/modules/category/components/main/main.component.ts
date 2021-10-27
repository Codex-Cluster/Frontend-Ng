import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { AdminService } from 'src/app/shared/services/admin.service';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @Input() Books: Book[] = [];
  @Input() presentCategory: string = '';

  catID: any;
  constructor(
    private route: Router,
    private admin: AdminService,
    private activatedRoute: ActivatedRoute
  ) {
    this.catID = this.activatedRoute.snapshot.paramMap.get('catID');
  }

  isAdmin() {
    return this.admin.isAdmin();
  }
  p: number = 1;

  ngOnInit(): void {}

  navigateToBook(book: Book) {
    this.catID = this.activatedRoute.snapshot.paramMap.get('catID');
    this.route
      .navigate(['category', this.catID, 'book', book.BookID])
      .catch((error) => {
        console.log('Failed to navigate to ' + book.BookID);
      });
  }

  goToAddBook() {
    this.route.navigate(['admin/addBook']).catch((error) => {
      console.log('Failed to navigate to Add book page');
    });
  }
}
