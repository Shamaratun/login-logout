// import { Injectable } from '@angular/core';
// import { Writer } from '../../app.component';


// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private items: any[] = [];

//   constructor() { }

//   getItems(): any {
//     localStorage.setItem('cartItems', JSON.stringify(this.items));
//     return this.items;
//   }

//   addToCart(writer: Writer) {
//     this.items.push({ ...writer, quantity: 1 });
//     localStorage.setItem('cartItems', JSON.stringify(this.items));
//   }

//   decrementQuantity(id: number) {
//     let item = this.items.find((i) => i.id === id);
//     if (item && item.quantity > 0) {
//       item.quantity--;
//       localStorage.setItem('cartItems', JSON.stringify(this.items));
//     }
//   }

//   incrementQuantity(id: number) {
//     let item = this.items.find((i) => i.id === id);
//     if (item) {
//       item.quantity++;
//       localStorage.setItem('cartItems', JSON.stringify(this.items));
//     }
//   }

//   deleteFromCart(item: any) {
//     this.items = this.items.filter((i) => i.id !== item.id);
//     localStorage.setItem('cartItems', JSON.stringify(this.items));
//   }

//   getTotalPrice() {
//     return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   }
// }
