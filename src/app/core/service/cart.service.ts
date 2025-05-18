import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';
import { CartItem } from '../../models/cartItem';
import { Books } from '../../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/carts'; // API URL to interact with backend

  constructor(private http: HttpClient) {}


  addToCart(book: Books): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, book);
  }
  // Get the cart for a specific user
  getCartByUserId(userId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/user/${userId}`);
  }

  // Create a new cart (e.g., when the user first registers or when there's no existing cart)
  createCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cart);
  }

  // Update an existing cart (e.g., modifying the items in the cart)
  updateCart(cartId: number, cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${cartId}`, cart);
  }

  // Delete a cart (e.g., when the user deletes their cart)
  deleteCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cartId}`);
  }

  // Add an item to the cart (or update the item quantity)
  addItem(cartId: number, cartItem: CartItem): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/${cartId}/items`, cartItem);
  }

  // Remove an item from the cart
  removeItem(cartId: number, cartItemId: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/${cartId}/items/${cartItemId}`);
  }
}
