import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { Category } from 'src/app/shared/models/category';
import { BookService } from 'src/app/shared/services/book.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css'],
})
export class BooksdisplayComponent implements OnInit {
  catID: string;
  catName: string;
  Books: Book[] = [];
  query: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private catService: CategoryService,
    private router: Router,
    private bookService: BookService,
    private searchService: SearchService
  ) {
    this.catID = this.activatedRoute.snapshot.paramMap.get('catID')!;
    this.catName = '';
    this.searchService.query = '';
  }

  ngOnInit(): void {
    this.getBooks(this.catID);
    this.getCatName();
    this.searchService.queryUpdated.subscribe((query) => {
      this.query = this.searchService.getQuery();
    });
  }

  getCatName() {
    this.catService.getCategories().forEach((e: Category[]) => {
      e.forEach((category) => {
        if (this.catID == category.CatID) {
          this.catName = category.CatName!;
        }
      });
    });
  }

  getBooks(catID: string) {
    this.catService.getBooksByCategory(catID).subscribe(
      (response) => {
        this.Books = response;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.Books.sort((a: Book, b: Book) => {
          if (a.Position! > b.Position!) {
            return 1;
          } else {
            return -1;
          }
          return 0;
        });
      }
    );
  }

  applySortBy(event: any) {
    console.log(event);
    this.Books.sort((a: Book, b: Book) => {
      if (event == 'Default') {
        if (a.Position! > b.Position!) {
          return 1;
        } else {
          return -1;
        }
      } else if (event == 'Year') {
        if (a.Year! > b.Year!) {
          return 1;
        } else {
          return -1;
        }
      } else if (event == 'Rating') {
        if (a.Rating! > b.Rating!) {
          return -1;
        } else {
          return 1;
        }
      } else if (event == 'Title') {
        if (a.Title! > b.Title!) {
          return 1;
        } else {
          return -1;
        }
      } else if (event == 'Author') {
        if (a.Author! > b.Author!) {
          return 1;
        } else {
          return -1;
        }
      }
      return 0;
    });
  }

  changeCategory(category: string) {
    this.catID = category;
    this.getCatName();
    this.router.navigate(['category', this.catID]);
    this.getBooks(this.catID);
  }

  getQuery() {
    return this.query;
  }
}
