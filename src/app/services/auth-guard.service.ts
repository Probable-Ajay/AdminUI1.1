import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
 
  isAuthenticated: boolean;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('usermanagementToken')) {
            this.isAuthenticated = true;
    } else {
        this.router.navigate(['/login']);
    }
    return this.isAuthenticated;
}
}
