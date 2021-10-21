import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  newCategory: Category
  categories: Category[] = [];
  category: string = '';
  constructor(
    private admin: AdminService,
    private categoryService: CategoryService,
  ) {
    this.newCategory = {

      CatID: '',
      CatName: '',
      CatDescription: '',
      Position: -1,
      Status: '',
      Image: '',
      CreatedAt: ''
    };
  }

  AddCategory(){
    const catID = this.categories.filter(cat=>
      cat.CatName === this.category
    )[0].CatID!
    console.log(catID)
    this.newCategory.CatID = catID
    // this.bookService.createBook(this.newBook)
  }


  isAdmin() {
    return this.admin.isAdmin();
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

}
