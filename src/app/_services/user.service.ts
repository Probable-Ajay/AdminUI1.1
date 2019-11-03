import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppSettings } from "../_configurations/AppSettings";
import { User, UserInformation } from "../_models/sub-user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(emailId: string): Observable<User[]> {
    const apiUrl =
      AppSettings.API_ENDPOINT +
      "admin/getUserDetails?parentEmailId=" +
      emailId;
    return this.http.get<User[]>(apiUrl);
  }

  public createSubUser(user: User) {
    const apiUrl = AppSettings.API_ENDPOINT + "admin/createSubUser";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(apiUrl, user, { headers });
  }
}
