import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {

  login(username: string, password: string): Observable<any> {
    if (username === 'test' && password === '1234') {
      return of({ token: 'mock-token-abc123' }).pipe(delay(500));  // simulate network delay
    } else {
      return throwError(() => new Error('Invalid username or password')).pipe(delay(500));
    }
  }

  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
