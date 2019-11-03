import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import {
  AlertService,
  AuthenticationService,
  TokenService
} from "../../_services";
import { User } from "../../_models";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";

import { AlertsService } from "angular-alert-module";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  userObject: User = new User();
  _encrypteduser: string;
  _encryptedpassword: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private spinnerService: Ng4LoadingSpinnerService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.tokenService.getToken()) {
      debugger;
      this.router.navigate(["/dashboard/admin"]);
    }
    //this.authService.populate();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.email],
      password: ["", Validators.required]
      //,rememberMe: [""]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
    }

    this.spinnerService.show();

    this.authService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(data => {
        if (data.status == "success") {
          this.spinnerService.hide();
          this.router.navigateByUrl("/dashboard/admin");
        } else {
          //this.alertService.error(data.message);
          this.alertService.error(data.message, true);
          this.spinnerService.hide();
        }
      });
  }
}
