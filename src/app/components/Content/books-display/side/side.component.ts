import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  @Input() presentCategory:string
  @Output() categoryEmitter = new EventEmitter()

  changeCategory(category:string){
    this.categoryEmitter.emit(category)
  }
  categories: Category[] = []

  ifHighlightCategory(category:string):boolean{
    if(this.presentCategory == category){
      return true
    }else{
      return false
    }
  }

  constructor(private categoryService : CategoryService, private activatedRoute : ActivatedRoute) { 
    this.presentCategory = ''
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (response) =>{
        this.categories = response
      },
      (error) => {
        alert('Failed to fetch categories!')
      }
    )
  }

}
