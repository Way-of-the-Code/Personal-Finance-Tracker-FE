import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        const token = response?.token;
        if (token) {
          this.authService.storeToken(token);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Token missing from response';
        }
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }

}


  

  

  

