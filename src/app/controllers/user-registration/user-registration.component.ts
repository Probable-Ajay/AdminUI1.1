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

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  registrationDetails: userRegistration = new userRegistration();

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: LoginService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.maxLength(60)]],
      lastName: ["", [Validators.required, Validators.maxLength(60)]],
      userId: ["", Validators.required],
      contactNumber: ["", [Validators.required, Validators.minLength(10)]],
      companyName: ["", [Validators.required, Validators.maxLength(60)]],
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
    this.authenticationService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success("Registration successful", true);
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );

    // this.authenticationService
    //   .register(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   );
    // else {
    //   this.LoginService.userSignup(this.registerForm.value).subscribe(res => {
    //     alert("Succesfully Registered the Request..");
    //   });
    // }
  }
}
