import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  getToken(): String {
    if (window.localStorage["accessToken"])
      return window.localStorage["accessToken"];
  }

  saveToken(token: String) {
    window.localStorage["accessToken"] = token;
  }

  destroyToken() {
    window.localStorage.removeItem("accessToken");
  }
  setLocalStorage(key: string, value: string) {
    window.localStorage[key] = value;
  }
  getlocalStorage(key: string) {
    if (window.localStorage[key]) return window.localStorage[key];
  }
}
