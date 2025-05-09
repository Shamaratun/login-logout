 
 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Discount } from '../../models/discount';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  private apiUrl = 'http://localhost:8080/api/discounts'; // Backend URL to interact with Discount entity

  constructor(private http: HttpClient) {}

  // Get all discounts
  getAllDiscounts(): Observable<Discount[]> {
    return this.http.get<Discount[]>(this.apiUrl);
  }

  // Get a discount by ID
  getDiscountById(discountId: number): Observable<Discount> {
    return this.http.get<Discount>(`${this.apiUrl}/${discountId}`);
  }

  // Add a new discount
  addDiscount(discount: Discount): Observable<Discount> {
    return this.http.post<Discount>(this.apiUrl, discount);
  }

  // Update an existing discount
  updateDiscount(discountId: number, discount: Discount): Observable<Discount> {
    return this.http.put<Discount>(`${this.apiUrl}/${discountId}`, discount);
  }

  // Delete a discount by ID
  deleteDiscount(discountId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${discountId}`);
  }
}
