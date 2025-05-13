import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Author } from '../../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = 'http://localhost:8080/api/authors';

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<Author[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const author = new Author();

          // Explicitly map all author fields
      author.authorId = item.authorId;
          author.name = item.name;
          author.bio = item.bio;
          author.country = item.country;
          author.dob = item.dob;
         

          return author;
        })
      ),
      catchError(this.handleError)
    );
  }

 createAuthor(author: Author): Observable<Author> {
  const payload = {
    authorId: author.authorId,  // Use correct keys as backend expects
    name: author.name,
    bio: author.bio,
    dob: author.dob,
    country: author.country
  };
  return this.http.post<Author>(this.apiUrl, payload, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }).pipe(catchError(this.handleError));
}

  updateAuthor(authorId: number, author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.apiUrl}/${authorId}`, author, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }).pipe(catchError(this.handleError));
  }

  deleteAuthor(authorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${authorId}`).pipe(
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
