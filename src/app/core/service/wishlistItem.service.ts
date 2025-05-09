import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistItem } from '../../models/wishlistItem';
 // Adjust the path as necessary

@Injectable({
  providedIn: 'root',
})
export class WishlistItemService {
  private apiUrl = 'http://localhost:8080/api/wishlist-items'; // Your API endpoint

  constructor(private http: HttpClient) {}

  // Get all wishlist items
  getAllWishlistItems(): Observable<WishlistItem[]> {
    return this.http.get<WishlistItem[]>(this.apiUrl);
  }

  // Get a specific wishlist item by ID
  getWishlistItemById(id: number): Observable<WishlistItem> {
    return this.http.get<WishlistItem>(`${this.apiUrl}/${id}`);
  }

  // Create a new wishlist item
  createWishlistItem(wishlistItem: WishlistItem): Observable<WishlistItem> {
    return this.http.post<WishlistItem>(this.apiUrl, wishlistItem);
  }

  // Update an existing wishlist item by ID
  updateWishlistItem(id: number, wishlistItem: WishlistItem): Observable<WishlistItem> {
    return this.http.put<WishlistItem>(`${this.apiUrl}/${id}`, wishlistItem);
  }

  // Delete a wishlist item by ID
  deleteWishlistItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
