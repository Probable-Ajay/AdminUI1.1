import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";
import { Router, ROUTES } from "@angular/router";
import { AppSettings } from "../_configurations/AppSettings";
import { User, userRegistration, Login, RegisterDemo } from "../_models";
import { debug } from "util";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {
    // this.currentUserSubject = new BehaviorSubject<User>(
    //   JSON.parse(localStorage.getItem("currentUser"))
    // );
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  populate() {
    // If token detected, attempt to get & store user's info
    if (this.tokenService.getToken()) {
      // this.apiService
      //   .get("/user")
      //   .subscribe(data => this.setAuth(data.user), err => this.purgeAuth());
      this.router.navigate(["/dashboard/admin"]);
    } else {
      this.purgeAuth();
      this.router.navigate(["/login"]);
    }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public setuserdetails(loginname: string) {
    this.tokenService.setLocalStorage("loginname", loginname);
  }

  login(user: any) {
    this.setuserdetails(user.username);
    const apiUrl = AppSettings.API_ENDPOINT + "login";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http
      .post<any>(apiUrl, user, { headers })
      .pipe(
        map(user => {
          if (user.status == "success" && user["data"]["token"]) {
            this.setAuth(user);
            return user;
          } else {
            this.purgeAuth();
            return user;
          }
        })
      );
  }

  setAuth(user: User) {
    this.tokenService.saveToken(user["data"]["token"]);
    //localStorage.setItem("currentUser", JSON.stringify(user["data"]["token"]));
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }
  purgeAuth() {
    this.tokenService.destroyToken();
    //window.localStorage.removeItem("currentUser");
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  register(user: userRegistration) {
    debugger;
    console.log(JSON.stringify(user));
    const apiUrl = AppSettings.API_ENDPOINT + "admin/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl, user, { headers });
  }

  logout() {
    this.purgeAuth();
  }
}
