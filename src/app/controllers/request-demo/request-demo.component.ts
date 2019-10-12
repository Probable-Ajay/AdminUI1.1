import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../_services/login.service";
import { User } from "../../_models";

@Component({
  selector: "app-request-demo",
  templateUrl: "./request-demo.component.html",
  styleUrls: ["./request-demo.component.css"]
})
export class RequestDemoComponent implements OnInit {
  userObject: User = new User();

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

  constructor(private LoginService: LoginService) {}

  ngOnInit() {}

  NewUserRegistration() {
    debugger;
    if (
      !this.userObject.companyName ||
      !this.userObject.email ||
      !this.userObject.name ||
      !this.userObject.contactNumber ||
      !this.userObject.location
    ) {
      alert("Please enter proper details...");
    } else {
      this.LoginService.requestDemo(this.userObject).subscribe(res => {
        alert("Succesfully Registered the Request..");
      });
    }
  }
}
