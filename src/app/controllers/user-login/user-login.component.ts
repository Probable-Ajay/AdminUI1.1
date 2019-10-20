import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AlertService, AuthenticationService } from "../../_services";
import { User } from "../../_models";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/dashboard/admin"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
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
    if (this.loginForm.invalid) {
      return;
    }

    this.spinnerService.show();

    this.authenticationService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.spinnerService.hide();
        },
        error => {
          this.alertService.error(error);
          this.spinnerService.hide();
        }
      );
  }
}
