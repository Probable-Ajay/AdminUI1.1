import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router, ROUTES } from "@angular/router";
import { AppSettings } from "../_configurations/AppSettings";
import { User, userRegistration, Login, RegisterDemo } from "../_models";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: userRegistration) {
    const apiUrl = AppSettings.API_ENDPOINT + "login";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>(apiUrl, user, { headers }).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user && user["data"]["token"]) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(
            "currentUser",
            JSON.stringify(user["data"]["token"])
          );
          this.currentUserSubject.next(user);
          debugger;
          this.router.navigate(["/dashboard/"]);
        } else {
          localStorage.removeItem("currentUser");
          this.router.navigate(["/login"]);
        }
      })
    );
  }

  register(user: userRegistration) {
    const apiUrl = AppSettings.API_ENDPOINT + "users/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post<any>(apiUrl, { user }, { headers }).pipe(
      map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // // store user details and jwt token in local storage to keep user logged in between page refreshes
          // localStorage.setItem("auth-token", JSON.stringify(user));
          // this.currentUserSubject.next(user);
        }

        return user;
      })
    );
  }

  // register(user: userRegistration) {
  //   const apiUrl = AppSettings.API_ENDPOINT + "users/create";
  //   const headers = new HttpHeaders().set("Content-Type", "application/json");
  //   return this.http.post(apiUrl, user, { headers });
  // }

  // requestDemo(params: RegisterDemo) {
  //   debugger;
  //   const apiUrl = AppSettings.API_ENDPOINT + "demo/create";
  //   const headers = new HttpHeaders().set("Content-Type", "application/json");

  //   return this.http.post(apiUrl, params, { headers });
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
