import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Coupon } from 'src/app/shared/models/coupon';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
})
export class CouponComponent implements OnInit {
  constructor(
    private admin: AdminService,
    private auth: AuthService,
    private location: Location,
    private router: Router
  ) {
    this.couponNew = new Coupon();
  }

  couponList: Coupon[] = [];
  couponNew: Coupon;
  modify: boolean = true;

  setSelectedCoupon(coupon: Coupon) {
    this.modify = true;
    this.CouponEditFormGroup.get('id')?.setValue(coupon.id);
    this.CouponEditFormGroup.get('code')?.setValue(coupon.code);
    this.CouponEditFormGroup.get('creator')?.setValue(coupon.creator);
    this.CouponEditFormGroup.get('discount')?.setValue(coupon.discount);
    this.CouponEditFormGroup.get('status')?.setValue(coupon.status);
  }

  goBack() {
    this.location.back();
  }

  readonly CouponEditFormGroup: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
    creator: new FormControl('', Validators.required),
    discount: new FormControl('', Validators.required),
    status: new FormControl(null),
  });

  saveChanges() {
    let id = this.CouponEditFormGroup.get('id')!.value!;
    let idx = this.couponList.findIndex((c) => c.id == id);
    this.admin.modifyCoupon(this.couponList[idx]).subscribe(
      (response) => {
        console.log('Modifying coupon');
      },
      (error) => {
        console.log('Failed to modify coupon');
      },
      () => {
        console.log('Successfully modified coupon');
      }
    );
  }

  deleteCoupon() {
    let id = this.CouponEditFormGroup.get('id')!.value!;
    let idx = this.couponList.findIndex((c) => c.id == id);
    this.admin.removeCoupon(this.couponList[idx]).subscribe(
      (response) => {
        console.log('Removing coupon');
        this.getCoupons();
      },
      (error) => {
        console.log('Failed to remove coupon');
      },
      () => {
        console.log('Successfully removed coupon');
      }
    );
  }

  AddNewCoupon() {
    this.modify = false;
    this.CouponEditFormGroup.get('id')?.setValue('');
    this.CouponEditFormGroup.get('code')?.setValue('');
    this.CouponEditFormGroup.get('creator')?.setValue('');
    this.CouponEditFormGroup.get('discount')?.setValue('');
    this.CouponEditFormGroup.get('status')?.setValue('');
  }
  addCoupon() {
    this.admin.addCoupon({ ...this.CouponEditFormGroup.value }).subscribe(
      (response) => {
        console.log('Adding coupon');
        this.getCoupons();
      },
      (error) => {
        console.log('Failed to add coupon');
      },
      () => {
        console.log('Successfully added coupon');
      }
    );
  }

  getCoupons() {
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
  ngOnInit(): void {
    this.getCoupons();
  }
}
