import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RegisterRequest, UserResponse } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  /**
   * Registers a new user.
   */
  registerUser(registerRequest: RegisterRequest): Observable<UserResponse> {
    const url = 'http://localhost:8080/api/auth/register';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<UserResponse>(url, registerRequest, { headers })
      .pipe(catchError(this.handleError));
  }

  /**
   * Retrieves all users.
   */
  getUsers(): Observable<UserResponse[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((item) => {
          const user: UserResponse = {
            id: item.id,
            email: item.email,
            password: item.password,
            role: item.role,
            address: item.address,
            nid: item.nid,
            phoneNumber: item.phoneNumber,
            fullName: item.fullName,
            username: item.username,createdAt: item.createdAt,
            updatedAt: item.updatedAt
          };
          return user;
        })
      ),
      catchError(this.handleError)
    );
  }

  /**
   * Updates a user by ID.
   */
  updateUser(id: number, user: Partial<RegisterRequest>): Observable<UserResponse> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put<UserResponse>(url, user, { headers })
      .pipe(catchError(this.handleError));
  }

  /**
   * Deletes a user by ID.
   */
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Common error handler.
   */
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
export { RegisterRequest };

