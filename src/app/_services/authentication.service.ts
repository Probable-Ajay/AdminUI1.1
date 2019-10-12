import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSettings } from "../_configurations/AppSettings";
import { User, userRegistration, Login, RegisterDemo } from "../_models";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // login(username: string, password: string) {
  //   return this.http
  //     .post<any>(`/users/authenticate`, { username, password })
  //     .pipe(
  //       map(user => {
  //         // login successful if there's a jwt token in the response
  //         if (user && user.token) {
  //           // store user details and jwt token in local storage to keep user logged in between page refreshes
  //           localStorage.setItem("currentUser", JSON.stringify(user));
  //           this.currentUserSubject.next(user);
  //         }

  //         return user;
  //       })
  //     );
  // }

  // register(user: userRegistration) {
  //   return this.http.post<any>(`/users/create`, { user }).pipe(
  //     map(user => {
  //       // login successful if there's a jwt token in the response
  //       if (user && user.token) {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem("currentUser", JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //       }

  //       return user;
  //     })
  //   );
  // }

  login(params: Login) {
    const apiUrl = AppSettings.API_ENDPOINT + "users/authenticate";
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(apiUrl, params, { headers });
  }

  register(user: userRegistration) {
    const apiUrl = AppSettings.API_ENDPOINT + "users/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl, user, { headers });

    //return this.httpClient.post(`/users/register`, user);
  }

  requestDemo(params: RegisterDemo) {
    debugger;
    const apiUrl = AppSettings.API_ENDPOINT + "demo/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(apiUrl, params, { headers });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
