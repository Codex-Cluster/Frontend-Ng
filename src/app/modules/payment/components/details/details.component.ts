import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  order: any;
  appliedValidCoupon: boolean;
  constructor(private router: Router, private orderService: OrderService) {
    this.order = router.getCurrentNavigation()!.extras.state;
    if (this.order.Coupon != undefined) {
      this.appliedValidCoupon = true;
    } else {
      this.appliedValidCoupon = false;
    }
  }

  makeOrder() {
    this.orderService.makeOrder(this.order).subscribe(
      (response) => {},
      (error) => {},
      () => {
        this.router.navigate(['']);
      }
    );
  }

  readonly paymentFormGroup: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16),
    ]),
    expiryMonth: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
      Validators.minLength(2),
    ]),
    expiryYear: new FormControl('', [
      Validators.required,
      Validators.maxLength(2),
      Validators.minLength(2),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3),
    ]),
    nameOnCard: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
}
