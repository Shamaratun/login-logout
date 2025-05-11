import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Author } from '../../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = 'http://localhost:8080/api/authors';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Fetch all authors
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Get a single author by ID
  getAuthorById(authorID: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${authorID}`)
      .pipe(catchError(this.handleError));
  }

  // Add a new author
  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, author, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Update an existing author
  updateAuthor(authorID: number, author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${authorID}`, author, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Delete an author
  deleteAuthor(authorID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${authorID}`)
      .pipe(catchError(this.handleError));
  }

  // Common error handling
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server Error - Code: ${error.status}, Message: ${error.error?.message || error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
