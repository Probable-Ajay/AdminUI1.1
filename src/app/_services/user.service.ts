import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSettings } from "../_configurations/AppSettings";
import { UserModel, UsersListing } from "../_models/user-management";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getallsubusers(parentEmailId: string) {
    const apiUrl =
      AppSettings.API_ENDPOINT +
      "customer/fetchAllSubusers?userId='" +
      parentEmailId +
      "'";
    return this.http.get<any[]>(apiUrl);
  }

  getuserconfiguration(parentEmailId: string) {
    const apiUrl =
      AppSettings.API_ENDPOINT +
      "customer/fetchConfiguration?userId='" +
      parentEmailId +
      "'";
    return this.http.get<any[]>(apiUrl);
  }

  public createSubUser(user: UserModel) {
    const apiUrl = AppSettings.API_ENDPOINT + "customer/newSetup";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl, user, { headers });
  }
}
