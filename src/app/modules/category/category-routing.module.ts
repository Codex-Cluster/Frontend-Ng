import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksdisplayComponent } from './components/book-display/books-display.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  { path: ':catID', component: BooksdisplayComponent },
  { path: ':catID/book/:id', component: BookDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
