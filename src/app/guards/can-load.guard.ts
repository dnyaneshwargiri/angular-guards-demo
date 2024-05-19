// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanMatch, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanLoadAuthGuard implements CanMatch {
  constructor(private authService: AuthService, private router: Router) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      return true; // User is logged in, allow loading the feature component
    } else {
      // User is not logged in, redirect to login or any other page
      this.router.navigate(['/login']);
      return false; // Prevent lazy loading of the feature component
    }
  }
}
