import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // optional: redirect default page
    { path: '**', redirectTo: 'login' }                   // fallback for unknown URLs
  ];

  