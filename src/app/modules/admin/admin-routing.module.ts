import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

const routes: Routes = [
  { path: 'controls', component: AdminComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'addCategory', component: AddCategoryComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
