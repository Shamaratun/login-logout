import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  /**
   * Fetches all books from the backend.
   * @returns An Observable containing a list of BookResponse objects.
   */
  getBooks(): Observable<BookResponse[]> {
    const url = `${this.baseUrl}/api/books`;
    return this.http.get<BookResponse[]>(url)
      .pipe(catchError(this.handleError));
  }

  /**
   * Adds a new book to the system.
   * @param bookRequest The data of the book to add.
   * @returns An Observable containing the created BookResponse object.
   */
  addBook(bookRequest: BookRequest): Observable<BookResponse> {
    const url = `${this.baseUrl}/api/books`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<BookResponse>(url, bookRequest, { headers })
      .pipe(catchError(this.handleError));
  }

  /**
   * Error handler for HTTP requests.
   * @param error The error object.
   * @returns An Observable that throws the error message.
   */
  private handleError(error: any): Observable<any> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error?.message || 'Server error'}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
export interface BookRequest {
  classId: number;
  title: string;
  isbn: string;
  price: number;
  stock: number;
  image?: string;
  genre?: string;
  rating?: number;
  createdAt?: string; // use ISO string format
  updatedAt?: string;
}

export interface BookResponse extends BookRequest {
  id: number;
}


