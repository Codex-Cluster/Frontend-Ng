import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Coupon } from 'src/app/shared/models/coupon';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent implements OnInit {
  constructor(
    private admin: AdminService,
    private auth: AuthService,
    private location: Location
  ) {
    this.couponSelected = new Coupon();
  }

  couponList: Coupon[] = [];
  couponSelected: Coupon;

  setSelectedCoupon(coupon: Coupon) {
    console.log(coupon);
    this.couponSelected = { ...coupon };
  }

  goBack() {
    this.location.back();
  }
  ngOnInit(): void {
    this.admin.getCoupons(this.auth.getUserID()).subscribe(
      (response) => {
        this.couponList = response;
        console.log(this.couponList);
      },
      (error) => {
        console.log('Failed to fetch coupons');
      },
      () => {
        console.log('Successfully fetched coupons');
      }
    );
  }
}
