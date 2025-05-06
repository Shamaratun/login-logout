import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 role = '';

  constructor(private auth: AuthService) {
    this.role = auth.getUserRole();
  }

  logout() {
    this.auth.logout();
  }
}

