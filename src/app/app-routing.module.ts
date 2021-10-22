import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BookDetailsComponent } from './components/Content/book-details/book-details.component';
import { DashboardComponent } from './components/Content/dashboard/dashboard.component';
import { BooksdisplayComponent } from './components/Content/books-display/books-display.component';
import { AddBookComponent } from './components/Content/books-display/add-book/add-book.component';
import { AddCategoryComponent } from './components/Content/dashboard/add-category/add-category.component';
import { OrdersComponent } from './components/Content/user/orders/orders.component';
import { WishlistComponent } from './components/Content/user/wishlist/wishlist.component';
import { CartComponent } from './components/Content/user/cart/cart.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "books/:catID", component: BooksdisplayComponent },
  { path: "book/:id", component: BookDetailsComponent },
  { path: "admin/addBook", component: AddBookComponent },
  { path: "admin/addCategory", component: AddCategoryComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user/orders", component: OrdersComponent },
  { path: "user/wishlist", component: WishlistComponent },
  { path: "user/cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
