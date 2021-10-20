import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBook:Book
  constructor(
    private admin: AdminService
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
    }
  }

  isAdmin(){
    return this.admin.isAdmin()
  }
  ngOnInit(): void {
  }

}
