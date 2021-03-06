import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationService } from "src/app/_services";

@Component({
  selector: "app-dashboard-routes",
  templateUrl: "./dashboard-routes.component.html",
  styleUrls: ["./dashboard-routes.component.css"]
})
export class DashboardRoutesComponent implements OnInit {
  options: FormGroup;
  showIconsOnly: boolean = false;

  constructor(
    private router: Router,
    fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }
  ngOnInit() {}

  LogOut(): void {
    this.authService.purgeAuth();
    this.router.navigate(["/login/"]);
    //localStorage.removeItem("currentUser");
  }

  toggleRightNav(): void {
    if (this.showIconsOnly) {
      this.showIconsOnly = false;
    } else {
      this.showIconsOnly = true;
    }
    document.getElementById("rtBttn").click();
    setTimeout(function() {
      document.getElementById("rtBttn").click();
    }, 1);
  }
}
