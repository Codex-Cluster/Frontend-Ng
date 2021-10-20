import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  
  @Input() Books: Book[] = [];
  @Input() presentCategory: string = ''
  constructor(private route: Router) {}

  p: number = 1;

  ngOnInit(): void {}

  navigateToBook(book: Book) {
    this.route.navigate(['book', book.BookID]).catch((error) => {
      console.log('Failed to navigate to ' + book.BookID);
    });
  }
}
