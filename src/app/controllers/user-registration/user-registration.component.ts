import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { userRegistration } from "../../models/user-registration";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {
  registrationDetails: userRegistration = new userRegistration();

  constructor(private LoginService: LoginService) { }

  ngOnInit() { }

  SignUp() {
    if (
      !this.registrationDetails.firstName ||
      !this.registrationDetails.lastName ||
      !this.registrationDetails.userId ||
      !this.registrationDetails.contactNumber ||
      !this.registrationDetails.companyName ||
      !this.registrationDetails.password
    ) {
      alert("Please enter proper details...");
    } else {
      this.LoginService.userSignup(this.registrationDetails).subscribe(res => {
        alert("Succesfully Registered the Request..");
      });
    }
  }
}
