import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  imports: [ FormsModule ],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) { }

  onLogin() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.auth.setToken(res.access_token);
          this.router.navigate(['/header']);
        },
        error: (error) => {
          alert(error.error.message);
          console.log(error)
        }
      });
  }
}
