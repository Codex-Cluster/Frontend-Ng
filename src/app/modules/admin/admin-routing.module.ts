import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { UsersComponent } from './components/users/users.component';
import { ControlsComponent } from './components/controls/controls.component';
import { PromotedComponent } from 'src/app/components/promoted/promoted.component';
import { PromoteComponent } from './components/promote/promote.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'controls', component: ControlsComponent },
      { path: 'addBook', component: AddBookComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'coupon', component: CouponComponent },
      { path: 'users', component: UsersComponent },
      { path: 'promote', component: PromoteComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
