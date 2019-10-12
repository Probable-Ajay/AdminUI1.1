import { Component, OnInit } from "@angular/core";
import { UserManagement } from "../../_models";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  user: UserManagement = new UserManagement();

  formGroup: FormGroup;

  constructor() //private formBuilder: FormBuilder
  {}

  ngOnInit() {
    // this.formGroup = this.formBuilder.group({
    //   designationRole: ""
    // });
  }
}
