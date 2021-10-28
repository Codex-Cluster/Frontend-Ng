import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AdminService } from '../../shared/services/admin.service';
import { FirestorageService } from '../../shared/services/firestorage.service';
import { CategoryService } from '../../shared/services/category.service';
import { BookService } from '../../shared/services/book.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CouponComponent } from './components/coupon/coupon.component';
import { UsersComponent } from './components/users/users.component';
import { ControlsComponent } from './components/controls/controls.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AdminComponent,
    AddBookComponent,
    AddCategoryComponent,
    CouponComponent,
    UsersComponent,
    ControlsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [AdminService, FirestorageService, CategoryService, BookService],
})
export class AdminModule {}
