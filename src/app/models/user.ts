import { Customer } from "../app.component";

export enum Role {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  VIEWER = 'VIEWER',
}
export class User {
    constructor(
      public id: number = 0,
      public email: string = '',
      public password: string = '',
      public role: string = '',
      public address: string = '',
      public nid: number = 0,
      public phoneNumber: string = '',
      public fullName: string = '',
      public username: string = '',
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ) {}
}
                                                                                       
export class RegisterRequest {
    constructor(
      public email: string = '',
      public password: string = '',
      public role: string = '',
      public address: string = '',
      public nid: number = 0,
      public phoneNumber: string = '',
      public fullName: string = '',
      public username: string = ''
    ) {}
}
export class UserResponse {
    constructor(
      public id: number = 0,
      public email: string = '',
      public password: string = '',
      public role: string = '',
      public address: string = '',
      public nid: number = 0,
      public phoneNumber: string = '',
      public fullName: string = '',
      public username: string = '',
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
    ) {}
}


export interface UserInfo {
  id: number;
  email: string;
  role: String;
  address: string;
  nid: number;
  phoneNumber: string;
  fullName: string;
  username: string;
  createdAt: string;  // use string for ISO date-time from backend
  updatedAt: string;
}
     