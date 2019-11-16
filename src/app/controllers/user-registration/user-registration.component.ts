import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import {
  LoginService,
  AuthenticationService,
  AlertService
} from "../../_services";
import { userRegistration } from "../../_models";
import { validateBasis } from "@angular/flex-layout";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  reg: userRegistration = new userRegistration();

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: LoginService,
    private alertService: AlertService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.maxLength(60)]],
      lastName: ["", [Validators.required, Validators.maxLength(60)]],
      middleName: ["", [Validators.required, Validators.maxLength(60)]],
      givenName: [""],
      userId: ["", Validators.required],
      contactNumber: ["", [Validators.required, Validators.minLength(10)]],
      userDesignation: "Admin",
      password: ["", [Validators.required, Validators.minLength(8)]],
      isActive: 0,
      isSubUser: 0
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  SignUp() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.spinnerService.show();

    console.log(JSON.stringify(this.registerForm.value));

    this.authenticationService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          debugger;
          this.spinnerService.hide();
          this.alertService.success(data[0][0].TextMessage, true);
          // this.router.navigate(["/login"]);
          this.registerForm.reset();
        },
        error => {
          this.spinnerService.hide();
          this.alertService.error(error);
        }
      );
  }
}
