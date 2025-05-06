import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080';
  private apiUrl = 'http://localhost:8080/api/users';  // Adjust the URL if needed

  constructor(private http: HttpClient) {}



  /**
   * Registers a new user.
   * @param registerRequest The registration data.
   * @returns An Observable containing the UserResponse on success, or an error on failure.
   */
  registerUser(registerRequest: RegisterRequest): Observable<UserResponse> {
    const url = `${this.baseUrl}/api/auth/register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Set content type

    return this.http.post<UserResponse>(url, registerRequest, { headers })
      .pipe(
        catchError(this.handleError) // Handle errors
      );
  }

  /**
   * Error handler for HTTP requests.
   * @param error The error object.
   * @returns An Observable that throws the error.
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
    return throwError(() => new Error(errorMessage)); // Use throwError
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);  // Make sure this endpoint returns a list of users
  }
}

export interface RegisterRequest {
  email: string;
  password: string;
  role: string;
  address?:String; //  Use string, or create an Enum/Type for Role if needed
  nid?:number;
  phoneNumber?: string; // or Integer phoneNumber if you kept that 
  fullName?: string;
  username?: string;
  
}

interface UserResponse {
  id: number;
  email: string;
  role: string;
  address?:String; //  Use string, or create an Enum/Type for Role if needed
  nid?:number;
  phoneNumber?: string; // or Integer phoneNumber if you kept that 
  fullName?: string;
  username?: string;
}
