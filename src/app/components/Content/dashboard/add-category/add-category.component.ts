import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';
import { CategoryService } from 'src/app/services/category.service';
import { FirestorageService } from 'src/app/services/firestorage.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  newCategory: Category
  category: string = '';
  image:any = 'https://images.unsplash.com/photo-1576158129799-c4a7a6436de4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  constructor(
    private admin: AdminService,
    private categoryService: CategoryService,
    private fbStorage: FirestorageService,
    private route: Router

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
  imageChanged:boolean = false
  imageFile:any

  async AddCategory(){
    if(this.imageChanged == true){
      this.image = await this.fbStorage.uploadFile(0, this.newCategory.CatID!)
    }
    this.newCategory.Image = this.image
    this.categoryService.createCategory(this.newCategory).subscribe((response)=>{
      console.log(response)
      this.route.navigate([''])
    },(error)=>{
      console.log(error)
    })
  }


  isAdmin() {
    return this.admin.isAdmin();
  }
  ngOnInit(): void {
  }
  setUploadFile(event:any){
    this.imageChanged = true

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
        this.imageFile = reader.result; 
    }

    this.fbStorage.setFile(event.target.files[0])
  }

}
