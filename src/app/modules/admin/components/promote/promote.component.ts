import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/models/book';
import { Promoted } from 'src/app/shared/models/promoted';
import { BookService } from 'src/app/shared/services/book.service';
import { PromotedService } from 'src/app/shared/services/promoted.service';

@Component({
  selector: 'app-promote',
  templateUrl: './promote.component.html',
  styleUrls: ['./promote.component.css'],
})
export class PromoteComponent implements OnInit {
  promoted: Promoted[] = [];
  books: Book[] = [];
  query: any;
  modify: boolean = false;
  constructor(
    private promotedService: PromotedService,
    private bookService: BookService,
    private location: Location
  ) {}

  getPromotedBooks() {
    this.promotedService.getPromoted().subscribe(
      (response) => {
        this.promoted = response;
      },
      (error) => {},
      () => {
        // this.promoted.forEach((element) => {
        //   this.bookService
        //     .getBookByID(element.bookID!)
        //     .subscribe((response) => {
        //       this.books.push(response);
        //     });
        // });
      }
    );
    this.bookService.getBooks().subscribe((response) => {
      this.books = response;
    });
  }

  ngOnInit(): void {
    this.getPromotedBooks();
  }

  readonly promotionEditFormGroup: FormGroup = new FormGroup({
    bookID: new FormControl('', Validators.required),
    expiresOn: new FormControl('', Validators.required),
    id: new FormControl(''),
  });

  AddNewPromotion() {
    this.modify = false;
    this.promotionEditFormGroup.get('bookID')?.setValue('');
    this.promotionEditFormGroup.get('expiresOn')?.setValue('');
  }
  EditSelectedPromotion(p: Promoted) {
    this.modify = true;
    this.promotionEditFormGroup.get('bookID')?.setValue(p.bookID);
    this.promotionEditFormGroup
      .get('expiresOn')
      ?.setValue(p.expiresOn?.split(' ')[0].split('-').reverse().join('-'));
    this.promotionEditFormGroup.get('id')?.setValue(p.id);
  }

  saveChanges() {
    let p = this.promotionEditFormGroup.value;
    this.promotedService.putPromoted(p).subscribe(
      (response) => {},
      (error) => {},
      () => {
        this.getPromotedBooks();
      }
    );
  }
  addPromotion() {
    let p = this.promotionEditFormGroup.value;
    this.promotedService.postPromoted(p).subscribe(
      (response) => {},
      (error) => {},
      () => {
        this.getPromotedBooks();
      }
    );
  }
  deletePromotion() {
    let p = this.promotionEditFormGroup.value;
    this.promotedService.deletePromoted(p).subscribe(
      (response) => {},
      (error) => {},
      () => {
        this.getPromotedBooks();
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
