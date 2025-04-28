import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-view',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css'
})
export class CustomerViewComponent {
  resources: { [key: string]: string } = {};
  resourceKeys: string[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources() {
    this.CustomerService.getResources().subscribe({
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