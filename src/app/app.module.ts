import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BookDetailsComponent } from './components/Content/book-details/book-details.component';
import { DashboardComponent } from './components/Content/dashboard/dashboard.component';
import { MainComponent } from './components/Content/books-display/main/main.component';
import { SideComponent } from './components/Content/books-display/side/side.component';
import { NavbarComponent } from './components/Content/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { MakeDatePipe } from './pipes/make-date.pipe';
import { BooksdisplayComponent } from './components/Content/books-display/books-display.component';
import { AddBookComponent } from './components/Content/books-display/add-book/add-book.component';
import { AddCategoryComponent } from './components/Content/dashboard/add-category/add-category.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { OrdersComponent } from './components/Content/user/orders/orders.component';
import { WishlistComponent } from './components/Content/user/wishlist/wishlist.component';
import { CartComponent } from './components/Content/user/cart/cart.component';
import { DetailsComponent } from './components/payments/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    MainComponent,
    SideComponent,
    BookDetailsComponent,
    LoginComponent,
    RegisterComponent,
    MakeDatePipe,
    BooksdisplayComponent,
    AddBookComponent,
    AddCategoryComponent,
    OrdersComponent,
    WishlistComponent,
    CartComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
