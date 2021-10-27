import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { OrdersComponent } from './components/orders/orders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
