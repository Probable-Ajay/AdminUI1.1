import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSettings } from "../_configurations/AppSettings";
import { User, RegisterDemo } from "../_models";

@Injectable({
  providedIn: "root"
})
export class RequestDemoService {
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<User>(
    //   JSON.parse(localStorage.getItem("currentUser"))
    // );
    // this.currentUser = this.currentUserSubject.asObservable();
  }
  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }
  requestDemo(params: RegisterDemo) {
    const apiUrl = AppSettings.API_ENDPOINT + "demo/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(apiUrl, params, { headers });
  }
}
