import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, ],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent implements OnInit{
  resources: { [key: string]: string } = {};
  resourceKeys: string[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources() {
    this.customerService.getResources().subscribe({
      next: (data) => {
        this.resources = data;
        this.resourceKeys = Object.keys(data); // <== create keys here
      },
      error: (err) => {
        console.error('Failed to load resources:', err);
      }
    });
  }
}