import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080';

  private getAllUsersUrl = 'http://localhost:8080/api/users/all';

  constructor(private http: HttpClient) { }

  getResources(): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>(`${this.baseUrl}/api/secured/resources`);
  }
getAllUser(): Observable<UserInfo[]> {
  return this.http.get<UserInfo[]>(this.getAllUsersUrl);
}

  // getAllUser(): Observable<any>{
  //   return this.http.get<any>(this.getAllUsersUrl);
  // }
}