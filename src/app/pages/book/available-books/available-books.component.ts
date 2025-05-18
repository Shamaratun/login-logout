import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { Catagory, Writer } from '../../../app.component';
import { Books } from '../../../models/book.model';
import { Author } from '../../../models/author';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'app-available-books',
  imports: [NgFor],
  templateUrl: './available-books.component.html',
  styleUrl: './available-books.component.css'
})
 export class AvailableBooksComponent {}
// implements OnInit {
//    book: Books = new Books();
//    author: Author = new Author();
//    cartItem: CartItem = new CartItem();
//     carts: CartItem[] = [];
  
  
  
//   ngOnInit(): void {
//     this.book = new Books();
//     this.author = new Author();
//     this.cartItem = new CartItem();
//   }
//   addToCart(book: Books): void {
//     this.cartItem.book = book;
//     this.cartItem.quantity = 1;
//     this.cartItem.priceAt = book.price;
//     this.cartItem.addedAt = new Date().toISOString();
//     this.carts.push(this.cartItem);
//     localStorage.setItem('cartItems', JSON.stringify(this.carts));
//   }
 
    