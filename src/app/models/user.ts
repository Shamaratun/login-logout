import { Customer } from "../app.component";


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
      public role: string = 'CUSTOMER',
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
     