import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSettings } from "../_configurations/AppSettings";
import {
  UserModel,
  Functionality,
  OriginDestinations
} from "../_models/user-management";
import { countries } from "../_models/user-management";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    const apiUrl = AppSettings.API_ENDPOINT + "appData/countries";
    return this.http.get<any[]>(apiUrl);
  }
  getcompanytypes(): Observable<any[]> {
    const apiUrl = AppSettings.API_ENDPOINT + "appData/companyTypes";
    return this.http.get<any[]>(apiUrl);
  }
  getbusinesstypes(): Observable<any[]> {
    const apiUrl = AppSettings.API_ENDPOINT + "appData/businessTypes";
    return this.http.get<any[]>(apiUrl);
  }
  getonds(): Observable<OriginDestinations[]> {
    const apiUrl = AppSettings.API_ENDPOINT + "appData/OnDs";
    return this.http.get<OriginDestinations[]>(apiUrl);
  }
  getfunctionalities(): Observable<Functionality[]> {
    const apiUrl = AppSettings.API_ENDPOINT + "appData/functionalities";
    return this.http.get<Functionality[]>(apiUrl);
  }
  public createUser(user: UserModel) {
    debugger;
    const apiUrl = AppSettings.API_ENDPOINT + "customer/newSetup";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl, user, { headers });
  }
}
