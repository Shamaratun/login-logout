import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wishlist } from '../../models/wishlist';


@Injectable({
  providedIn: 'root',
})
    
export class WishlistService {
  private apiUrl = 'http://localhost:8080/api/wishlists'; // Your API endpoint

  constructor(private http: HttpClient) {}

  // Get all wishlists
  getAllWishlists(): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(this.apiUrl);
  }

  // Get a specific wishlist by ID
  getWishlistById(id: number): Observable<Wishlist> {
    return this.http.get<Wishlist>(`${this.apiUrl}/${id}`);
  }

  // Create a new wishlist
  createWishlist(wishlist: Wishlist): Observable<Wishlist> {
    return this.http.post<Wishlist>(this.apiUrl, wishlist);
  }

  // Update an existing wishlist by ID
  updateWishlist(id: number, wishlist: Wishlist): Observable<Wishlist> {
    return this.http.put<Wishlist>(`${this.apiUrl}/${id}`, wishlist);
  }

  // Delete a wishlist by ID
  deleteWishlist(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
