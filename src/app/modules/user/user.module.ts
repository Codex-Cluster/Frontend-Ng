import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { AdminService } from '../../shared/services/admin.service';
import { OrderService } from '../../shared/services/order.service';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppModule } from 'src/app/app.module';
import { MakeDatePipe } from 'src/app/shared/pipes/make-date.pipe';

@NgModule({
  declarations: [
    CartComponent,
    OrdersComponent,
    ProfileComponent,
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, AuthService, AdminService, OrderService],
})
export class UserModule {}
