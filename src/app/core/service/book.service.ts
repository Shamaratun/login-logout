import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Books } from '../../models/book.model';



@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Books[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const book: Books = {
  bookId: item.bookId,
  title: item.title,
  isbn: item.isbn,
  price: item.price,
  stock: item.stock,
  image: item.image,
  genre: item.genre,
  rating: item.rating,
  createdAt: item.createdAt,
  updatedAt: item.updatedAt,
  author: {
    authorId: item.author?.authorId,
    name: item.author?.name,
    bio: item.author?.bio,
    country: item.author?.country,
    dob: item.author?.dob,
    books: item.author?.books,
  },
  warehouse: {
    warehouseId: item.warehouse?.warehouseId,
    
    location: item.warehouse?.location,
    stockLevel: 0
  },
  reviews: item.reviews || [],
};
          return book;
        })
      ),
      catchError(this.handleError)
    );
  }

  createBook(book: Books): Observable<Books> {
    return this.http.post<Books>(this.apiUrl, book, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }).pipe(catchError(this.handleError));
  }

  updateBook(bookId: number, book: Books): Observable<Books> {
    return this.http.put<Books>(`${this.apiUrl}/${bookId}`, book, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }).pipe(catchError(this.handleError));
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${bookId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error?.message || 'Server error'}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
