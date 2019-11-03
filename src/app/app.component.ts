import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./_services";
import { User } from "./_models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "PriceTalk-App";
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    // this.authService.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    this.authService.populate();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
