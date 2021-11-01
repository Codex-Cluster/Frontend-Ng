import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { BooksdisplayComponent } from './components/book-display/books-display.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MainComponent } from './components/main/main.component';
import { SideComponent } from './components/side/side.component';
import { CategoryService } from '../../shared/services/category.service';
import { BookService } from '../../shared/services/book.service';
import { AdminService } from '../../shared/services/admin.service';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MakeDatePipe } from 'src/app/shared/pipes/make-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BooksdisplayComponent,
    BookDetailsComponent,
    MainComponent,
    SideComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    // MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule,
  ],
  providers: [
    CategoryService,
    BookService,
    AdminService,
    UserService,
    AuthService,
  ],
})
export class CategoryModule {}
