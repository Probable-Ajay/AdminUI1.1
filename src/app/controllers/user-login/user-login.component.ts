import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { LoginService } from "../../services/login.service";
import { userParam } from "../../models/user";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent implements OnInit {
  userObject: userParam = new userParam();
  _encrypteduser: string;
  _encryptedpassword: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private LoginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if (!this.f.username.value || !this.f.password.value) {
      alert("Please enter proper details...");
    } else {
      if (
        this.f.username.value == "admin" &&
        this.f.password.value == "admin"
      ) {
        this.router.navigate(["dashboard"]);
      } else {
        alert("Please input proper credentials..");
      }
      this.LoginService.authenticateUser(this.userObject).subscribe(res => {
        try {
          if (res !== null && res.hasOwnProperty("data")) {
            localStorage.setItem("usermanagementToken", res["data"]["token"]);
            this.router.navigate(["dashboard"]);
          }
          //           let base64Url = res['access_token'].split('.')[1];
          //           let base64 = base64Url.replace('-', '+').replace('_', '/');
          //           let parsedObj =  JSON.stringify(JSON.parse(window.atob(base64)));
          //           console.log(parsedObj);
          //           if (parsedObj['role'] === 'admin') {
          //               this.global.role = 'admin';
          //             } else {
          //                   this.global.role = 'normal';
          //                 }
          //           this.global.currentUser = this.username;
          //           this.router.navigate(['main']);
          //         }  else {
          //               alert('Please input proper credentials..');
          //             }
        } catch (ex) {
          alert("Please input proper credentials..");
        }
      });
    }
  }
}
