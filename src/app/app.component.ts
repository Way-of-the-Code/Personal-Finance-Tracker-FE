import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MockAuthService } from './services/mock.auth.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  providers: [
    { 
      provide: AuthService, 
      useClass: environment.useMockAuth ? MockAuthService : AuthService 
    }
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-finance-tracker-fe';
}
