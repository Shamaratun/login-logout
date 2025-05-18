import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/cartItem';
// Import CartItem model
 // Import Book model

@Injectable({
  providedIn: 'root',
})
export class CartItemService {
  private apiUrl = 'http://localhost:8080/api/cart-items'; // The URL to your backend API

  constructor(private http: HttpClient) {}

  // Add a new item to the cart
  addItemToCart(cartId: number, cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(`${this.apiUrl}/cart/${cartId}`, cartItem);
  }

  // Update an existing item in the cart
  updateCartItem(cartItemId: number, cartItem: CartItem): Observable<CartItem> {
    return this.http.put<CartItem>(`${this.apiUrl}/${cartItemId}`, cartItem);
  }

getCartItems(): Observable<CartItem[]> {
  return this.http.get<CartItem[]>(`${this.apiUrl}/items`);
}

removeCartItem(cartItemID: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/items/${cartItemID}`);
}

checkoutCartItem(customerName: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/checkout`, { customerName });
}
}