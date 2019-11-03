import { Injectable } from "@angular/core";
import { AppSettings } from "../_configurations/AppSettings";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User, userRegistration } from "../_models";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<User[]>(`/users`);
  }

  register(user: userRegistration) {
    const apiUrl = AppSettings.API_ENDPOINT + "users/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post(apiUrl, user, { headers });

    //return this.httpClient.post(`/users/register`, user);
  }

  delete(id: number) {
    return this.httpClient.delete(`/users/${id}`);
  }

  //Mock for references...
  apiHealthCheck() {
    const apiUrl = AppSettings.API_ENDPOINT;
    return this.httpClient.get(apiUrl);
  }

  //API Calls..
  userSignup(params: any) {
    const apiUrl = AppSettings.API_ENDPOINT + "users/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.httpClient.post(apiUrl, params, { headers });
  }

  requestDemo(params: any) {
    const apiUrl = AppSettings.API_ENDPOINT + "demo/create";
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.httpClient.post(apiUrl, params, { headers });
  }

  authenticateUser(params: User) {
    const apiUrl = AppSettings.API_ENDPOINT + "users/authenticate";
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.httpClient.post(apiUrl, params, { headers });
  }
}
