import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import {
  AuthenticationService,
  AlertService,
  RequestDemoService
} from "../../_services";
import { User } from "../../_models";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";

@Component({
  selector: "app-request-demo",
  templateUrl: "./request-demo.component.html",
  styleUrls: ["./request-demo.component.css"]
})
export class RequestDemoComponent implements OnInit {
  userObject: User = new User();
  requestDemoForm: FormGroup;
  loading = false;
  submitted = false;
  responseMessage: string;
  response = false;
  public Locations: any[] = [
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur"
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private requestDemoService: RequestDemoService,
    private alertService: AlertService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.requestDemoForm = this.formBuilder.group({
      companyName: ["", Validators.required],
      name: ["", [Validators.required, Validators.maxLength(60)]],
      email: ["", Validators.email],
      contactNo: ["", [Validators.required, Validators.minLength(10)]],
      location: ["", Validators.required],
      notes: ""
    });
  }

  get f() {
    return this.requestDemoForm.controls;
  }

  RequestDemo() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.requestDemoForm.invalid) {
      return;
    }
    this.loading = true;
    this.spinnerService.show();

    this.requestDemoService
      .requestDemo(this.requestDemoForm.value)
      .pipe(first())
      .subscribe(
        data => {
          //setTimeout(() => this.spinnerService.hide(), 300000)
          this.spinnerService.hide();
          this.responseMessage =
            "We have received your demo request with reference no : " +
            data[0][0]["id"];
          this.response = true;
          //this.router.navigate(["/login"]);
          this.reset();
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          this.reset();
        }
      );
  }
  reset() {
    this.requestDemoForm.reset();
  }
}
