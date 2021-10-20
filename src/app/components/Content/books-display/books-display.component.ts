import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css']
})
export class BooksdisplayComponent implements OnInit {

  catID: string;
  catName: string;
  Books: Book[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private catService: CategoryService,
    private router: Router,
    private bookService: BookService
  ) {
    this.catID = this.activatedRoute.snapshot.paramMap.get('catID')!;
    this.catName = ''
   }

  ngOnInit(): void {
    this.getBooks(this.catID)
    this.getCatName()
  }

  getCatName(){
    this.catService.getCategories().forEach((e:Category[])=>{
      e.forEach(category => {
        if(this.catID == category.CatID){
          this.catName = category.CatName!
        }
      });
      
    })
  }

  getBooks(catID:string){
    this.catService.getBooksByCategory(catID).subscribe((response) => {
      this.Books = response;
    });
  }


  changeCategory(category: string) {
    this.catID = category
    this.getCatName()
    this.router.navigate(['books',this.catID])
    this.getBooks(this.catID)
  }
}
