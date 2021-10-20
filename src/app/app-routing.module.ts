import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BookDetailsComponent } from './components/Content/book-details/book-details.component';
import { DashboardComponent } from './components/Content/dashboard/dashboard.component';
import { BooksdisplayComponent } from './components/Content/booksdisplay/booksdisplay.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "books/:catID", component: BooksdisplayComponent },
  { path: "book/:id", component: BookDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
