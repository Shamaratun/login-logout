import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [NgIf],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
subtotal = 830;
  discount = 0;
  shippingCharge = 65;
  starDiscount = 0;
  redeemPointsAmount = 0;
  userPoints = 100;
  requireMessage = '';
  earnedPoints = Math.floor(this.subtotal * 0.1);

  get grandTotal() {
    return this.subtotal + this.shippingCharge - this.discount - this.starDiscount;
  }

  get payableTotal() {
    return this.grandTotal - this.redeemPointsAmount;
  }

  removeRedeemPoints() {
    this.redeemPointsAmount = 0;
  }

  continueToGift() {
    // Route to gift shipping
    console.log('Continue to gift checkout');
  }

  continueToShipping() {
    // Route to normal shipping
    console.log('Continue to shipping');
  }
}