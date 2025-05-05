import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title1 = 'App-Auth';
  title = 'bookstore';
}
  export class Book {
    id:number;
    title:string;
    author:string;
    genre:string;
    publisher:string;
    publicationDate:Date;
    price:number; 
    targetAudience:string;
    
  
  
    constructor(id:number,title:string,author:string,genre:string,publisher:string,publicationDate:Date,price:number,targetAudience:string) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.publisher = publisher;
      this.publicationDate = publicationDate;
      this.price = price;
      this.targetAudience = targetAudience;
  
    }
  }

  export class Customer {
    customername: string;
    email: string;
    password: string;
    nid: number;
    phone: string;
    address: string;

    constructor(customername: string,  email: string, password: string, nid: number, phone: string, address: string
    ) {
      this.customername = customername;
      this.email = email;
      this.password = password;
      this.nid = nid;
      this.phone = phone;
      this.address = address;
    }
  }

  export class Writer {
    id: number;
    writerName: string;
    bookName: string;
    quantity: number;
    price: number;
    imageUrl: string;
  
  constructor(id: number, writerName: string,  bookName: string, quantity: number, price: number, imageUrl: string
  ) {
    this.id = id;
    this.writerName = writerName;
    this.bookName = bookName;
    this.quantity = quantity;
    this.price = price;
    this.imageUrl = imageUrl;
  }
  }
  export class Catagory {
    id: number;
    name: string;
    description: string;
   
    price: number;
    imageUrl: string;
    constructor(id: number, name: string, description: string, quantity: number, price: number, imageUrl: string) {
      this.id = id;
      this.name = name;
      this.description = description;
     
      this.price = price;
      this.imageUrl = imageUrl;
    }
  }
  

  export class Order{
    customerName: string;
    writer: Writer[];
    total: number;

    constructor(customerName: string, writer: Writer[], total: number){
      this.customerName = customerName;
      this.writer = writer;
      this.total = total;
    }
  }

