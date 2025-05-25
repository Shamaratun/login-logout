import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Models
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: CartItem[] = [];
  totalPrice: number = 0;
  customerName: string = '';

  ngOnInit(): void {
    this.loadCart();
    this.calculateTotalPrice();
  }

  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    this.carts = storedCart ? JSON.parse(storedCart) : [];
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.carts.reduce((sum, item) => {
      return sum + (item.priceAt * item.quantity);
    }, 0);
  }

  removeFromCart(cartItemID: number): void {
    this.carts = this.carts.filter(item => item.cartItemID !== cartItemID);
    localStorage.setItem('cart', JSON.stringify(this.carts));
    this.calculateTotalPrice();
  }

  checkout(): void {
    if (!this.customerName.trim()) {
      alert('Please enter your name before checking out.');
      return;
    }

    const summary = {
      customer: this.customerName,
      purchasedItems: this.carts,
      totalAmount: this.totalPrice,
      timestamp: new Date().toISOString()
    };

    // Save in localStorage for reference (optional)
    const previous = JSON.parse(localStorage.getItem('checkoutHistory') || '[]');
    previous.push(summary);
    localStorage.setItem('checkoutHistory', JSON.stringify(previous));

    // Clear cart
    this.carts = [];
    this.totalPrice = 0;
    localStorage.setItem('cart', JSON.stringify(this.carts));
    this.customerName = '';

    alert('Purchase successful!');
  }
}
