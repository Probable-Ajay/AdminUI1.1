import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSettings } from "../_configurations/AppSettings";
import { UserManagement, Functionality } from "../_models";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor(private http: HttpClient) {}

  // public getCountries(): Observable<Country[]> {
  //   const apiUrl = AppSettings.API_ENDPOINT + "admin/getCountries";
  //   return this.http.get<Country[]>(apiUrl);
  // }

  // public getFunctionalities(): Observable<Functionality[]> {
  //   const apiUrl = AppSettings.API_ENDPOINT + "admin/getFunctionalities";
  //   return this.http.get<Functionality[]>(apiUrl);
  // }
  public createUser(user: UserManagement) {
    const apiUrl = AppSettings.API_ENDPOINT + "admin/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl, user, { headers });
  }
}
