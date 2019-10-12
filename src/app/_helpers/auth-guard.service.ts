import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthenticationService } from "../_services";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  isAuthenticated: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   if (localStorage.getItem("usermanagementToken")) {
  //     this.isAuthenticated = true;
  //   } else {
  //     this.router.navigate(["/login"]);
  //   }
  //   return this.isAuthenticated;
  // }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // authorised so return true
      this.router.navigate(["/dashboard/admin"], {
        queryParams: { returnUrl: state.url }
      });
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
