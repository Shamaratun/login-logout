import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order, Writer } from '../../app.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  orders: Order[] = [];
  carts: Writer[] = [];
  totalPrice: number = 0;
  order: Order = new Order('', [], 0);  // Initialized with empty values

  ngOnInit(): void {
    // Retrieve cart data from localStorage and parse it
    const allCarts = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Ensure the parsed data is an array and assign it to the carts array
    this.carts = Array.isArray(allCarts) ? allCarts : [];

    // Calculate the total price using reduce
    this.calculateTotalPrice();

    // Retrieve orders data from localStorage
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    this.orders = Array.isArray(allOrders) ? allOrders : [];
  }

  // Method to calculate the total price
  private calculateTotalPrice(): void {
    this.totalPrice = this.carts.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.price || 0);
    }, 0);
  }

  // Method to purchase the cart
  purchase(): void {
    // Save orders to localStorage
    this.order.writer = this.carts;
    this.order.total = this.totalPrice;
    this.orders.push(this.order);
    localStorage.setItem('orders', JSON.stringify(this.orders));

    // Clear the cart and update localStorage
    this.carts = [];
    localStorage.setItem('cart', JSON.stringify(this.carts));

    // Reset the total price
    this.totalPrice = 0;

    // Create a new order (this can be modified to reflect user details, etc.)
    this.order = new Order('', this.carts, this.totalPrice);

    // Alert the user that the purchase was successful
    alert('Purchase successfully completed!');
  }

  // Method to remove an item from the cart
  removeFromCart(index: number): void {
    this.carts.splice(index, 1);  // Remove item by index
    localStorage.setItem('cart', JSON.stringify(this.carts));  // Update localStorage

    // Recalculate the total price
    this.calculateTotalPrice();
  }
}