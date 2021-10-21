import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BookDetailsComponent } from './components/Content/book-details/book-details.component';
import { DashboardComponent } from './components/Content/dashboard/dashboard.component';
import { BooksdisplayComponent } from './components/Content/books-display/books-display.component';
import { AddBookComponent } from './components/Content/books-display/add-book/add-book.component';
import { AddCategoryComponent } from './components/Content/dashboard/add-category/add-category.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "books/:catID", component: BooksdisplayComponent },
  { path: "book/:id", component: BookDetailsComponent },
  { path: "admin/addBook", component: AddBookComponent },
  { path: "admin/addCategory", component: AddCategoryComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
