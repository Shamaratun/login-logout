import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../core/service/cart.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItemService } from '../../core/service/cartItem.service';


@Component({
  selector: 'app-cart',
  imports: [NgIf, FormsModule,NgFor ],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {}
//implements OnInit {
  // carts: CartItem[] = [];
  // totalPrice: number = 0;

  // order = {
  //   customerName: ''
  // };

  // constructor(private cartItemService: CartItemService) {}

  // ngOnInit(): void {
  //   this.loadCartItems();
  // }

  // loadCartItems(): void {
  //   this.cartItemService.getCartItems().subscribe({
  //     next: (data: CartItem[]) => {
  //       this.carts = data;
  //       this.calculateTotalPrice();
  //     },
  //     error: (err) => {
  //       console.error('Failed to load cart items:', err);
  //     }
  //   });
  // }

  // calculateTotalPrice(): void {
  //   this.totalPrice = this.carts.reduce((sum, item) => {
  //     return sum + (item.quantity * item.priceAt);
  //   }, 0);
  // }

  // removeFromCart(cartItemID: number): void {
  //   this.cartItemService.removeCartItem(cartItemID).subscribe({
  //     next: () => {
  //       this.carts = this.carts.filter(item => item.cartItemID !== cartItemID);
  //       this.calculateTotalPrice();
  //     },
  //     error: (err) => {
  //       console.error('Failed to remove item:', err);
  //     }
  //   });
  // }

//   purchase(): void {
//     if (!this.order.customerName) {
//       alert('Please enter your name.');
//       return;
//     }

//     this.cartItemService.checkoutCartItem(this.order.customerName).subscribe({
//       next: () => {
//         alert('Purchase completed successfully!');
//         this.carts = [];
//         this.totalPrice = 0;
//       },
//       error: (err) => {
//         console.error('Checkout failed:', err);
//         alert('Something went wrong during checkout.');
//       }
//     });
//   }
// }
