import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { BookDetailsComponent } from './components/Content/books-display/book-details/book-details.component';
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
import { OrdersComponent } from './components/user/orders/orders.component';
import { WishlistComponent } from './components/user/wishlist/wishlist.component';
import { CartComponent } from './components/user/cart/cart.component';
import { DetailsComponent } from './components/payments/details/details.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AdminComponent,
    ProfileComponent,
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
    MatChipsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
