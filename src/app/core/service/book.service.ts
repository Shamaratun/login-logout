import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../../models/book.model';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const book = new Book();

          book.id = item.id;
          
          book.title = item.title;
          book.isbn = item.isbn;
          book.price = item.price;
          book.stock = item.stock;
          book.image = item.image;
          book.genre = item.genre;
          book.rating = item.rating;
          book.createdAt = item.createdAt;
          book.updatedAt = item.updatedAt;

          return book;
        })
      ),
      catchError(this.handleError)
    );
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }).pipe(catchError(this.handleError));
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }).pipe(catchError(this.handleError));
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
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
