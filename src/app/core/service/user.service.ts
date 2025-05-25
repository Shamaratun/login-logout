import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RegisterRequest, User, UserResponse } from '../../models/user';

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

  
  getUsers(): Observable<UserResponse[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data) =>
        data.map((u) => {
          const user: UserResponse = {
            id: u.id,
            email: u.email,
            password: u.password,
            role: u.role,
            address: u.address,
            nid: u.nid,
            phoneNumber: u.phoneNumber,
            fullName: u.fullName,
            username: u.username,
            createdAt: u.createdAt,
            updatedAt: u.updatedAt
          };
          return user;
        })
      ),
      catchError(this.handleError)
    );
  }

    getUserByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/role`, {
      params: { role }
    });
  }


  /**
   * Updates a user by ID.
  //  updateUserByEmail(email: string, user: Partial<RegisterRequest>): Observable<UserResponse> {
  //   const url = `${this.apiUrl}/email/${email}`;*/
  updateUser(id: number, user: Partial<RegisterRequest>): Observable<UserResponse> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put<UserResponse>(url, user, { headers })
      .pipe(catchError(this.handleError));
  }


  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
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
export { RegisterRequest };

