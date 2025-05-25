import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Books } from '../../models/book.model';
import { Author } from '../../models/author';



@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Books[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const book = new Books();
          book.bookId = item.bookId;
          book.authorName = item.authorName;
          book.title = item.title;
          book.isbn = item.isbn;
          book.price = item.price;
          book.stock = item.stock;
          book.image = item.image;
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

  createBook(book: Books): Observable<Books> {
    const payload = {
      bookId: book.bookId,  // Use correct keys as backend expects
      title: book.title,
      authorName: book.authorName,
      isbn: book.isbn,
      price: book.price,     
      image: book.image,
      genre: book.genre,
      rating: book.rating,
       warehouseLocation: book.warehouseLocation,
       stock: book.stock,
    };
  return this.http.post<Books>(this.apiUrl, payload, {
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
  getAvailableBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.apiUrl);
  }
  getBookById(bookId: number): Observable<Books> {
    return this.http.get<Books>(`${this.apiUrl}/${bookId}`).pipe(
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
