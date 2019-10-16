import { Component, OnInit } from "@angular/core";
import {
  UserManagement,
  CompanyInformation,
  ContactInformation,
  UserAccess,
  RequirementSetup,
  Functionality,
  ClassOfService
} from "../../_models";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { first } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import {
  RequestDemoService,
  AuthenticationService,
  AlertService,
  AdminService
} from "../../_services";
import { User } from "../../_models";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  user: UserManagement = new UserManagement();
  adminForm: FormGroup;
  companyInfo: CompanyInformation = new CompanyInformation();
  contactInfo: ContactInformation = new ContactInformation();
  userInfo: UserAccess = new UserAccess();
  requirementSetup: RequirementSetup = new RequirementSetup();

  loading = false;
  isValidFormSubmitted = false;

  // adminForm = new FormGroup({
  //   companyName: new FormControl("", Validators.required),
  //   companyAddress: new FormControl("", Validators.required),
  //   country: new FormControl(false),
  //   companyType: new FormControl("", Validators.required),
  //   businessType: new FormControl("", Validators.required),
  //   companyPhoneNumber: new FormControl("", Validators.required),
  //   emailId: new FormControl("", Validators.required),
  //   firstName: new FormControl("", Validators.required),
  //   middleName: new FormControl("", Validators.required),
  //   lastName: new FormControl("", Validators.required),
  //   customerContactNumber: new FormControl("", Validators.required),
  //   customerEmailID: new FormControl("", Validators.required),
  //   designationRole: new FormControl("", Validators.required),
  //   cloneMainUser: new FormControl(false),
  //   functionalityName: new FormControl("", Validators.required),
  //   readAccess: new FormControl(false),
  //   writeAccess: new FormControl(false),
  //   fullAccess: new FormControl(false),
  //   requirementFirstName: new FormControl("", Validators.required),
  //   classOfServices: new FormControl("", Validators.required),
  //   shoppingSources: new FormControl("", Validators.required)
  // });

  public countries: any[] = [
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan"
  ];
  public companyType: any[] = ["Airline", "OTA", "TA", "META"];
  public natureOfBusiness: any[] = [
    "Airlines",
    "Online",
    "Offline",
    "Search engines"
  ];
  public functionalities: any[] = [
    {
      functionalityName: "Shop Price",
      isToggle: true,
      readAccess: true,
      writeAccess: false,
      fullAccess: false
    },
    {
      functionalityName: "Price Trend",
      isToggle: false,
      readAccess: false,
      writeAccess: true,
      fullAccess: false
    },
    {
      functionalityName: "Shop Status",
      isToggle: false,
      readAccess: false,
      writeAccess: true,
      fullAccess: false
    }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private requestDemoService: RequestDemoService,
    private alertService: AlertService,
    private adminService: AdminService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/dashboard/"]);
    } else {
      this.router.navigate(["/login/"]);
    }
  }

  //form submit

  ddlClassOfServices = [];
  selectedItemsClassOfServices = [];
  ddlShoppingSources = [];
  selectedItemsShoppingSources = [];
  dropdownSettings = {};

  get f() {
    return this.adminForm.controls;
  }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      companyName: ["", Validators.required],
      companyAddress: ["", Validators.required],
      country: new FormControl(false),
      companyType: new FormControl("", Validators.required),
      businessType: new FormControl("", Validators.required),
      companyPhoneNumber: new FormControl("", Validators.required),
      emailId: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      middleName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      customerContactNumber: new FormControl("", Validators.required),
      customerEmailID: new FormControl("", Validators.required),
      designationRole: new FormControl("", Validators.required),
      cloneMainUser: new FormControl(false),
      functionalityName: new FormControl("", Validators.required),
      isToggle: new FormControl(false),
      readAccess: new FormControl(false),
      writeAccess: new FormControl(false),
      fullAccess: new FormControl(false),
      rsfirstName: new FormControl("", Validators.required),
      selectedShoppingSources: new FormControl("", Validators.required),
      selectedClassOfServices: new FormControl("", Validators.required)
    });

    //this.countries = this.adminService.getCountries();
    //this.functionalities = this.adminService.getFunctionalities();

    this.ddlClassOfServices = [
      { id: 1, itemName: "First" },
      { id: 2, itemName: "Business" },
      { id: 3, itemName: "Pre-Economy" },
      { id: 4, itemName: "Economy" }
    ];
    this.selectedItemsClassOfServices = [
      { id: 1, itemName: "First" },
      { id: 3, itemName: "Pre-Economy" }
    ];
    this.ddlShoppingSources = [
      { id: 1, itemName: "Airline" },
      { id: 2, itemName: "OTA" },
      { id: 3, itemName: "TA" },
      { id: 4, itemName: "META" }
    ];
    this.selectedItemsShoppingSources = [
      { id: 1, itemName: "Airline" },
      { id: 3, itemName: "TA" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.adminForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    console.log(this.adminForm.valid);

    //company Information
    this.companyInfo.companyName = this.adminForm.get("companyName").value;
    this.companyInfo.companyAddress = this.adminForm.get(
      "companyAddress"
    ).value;
    this.companyInfo.countries = this.adminForm.get("country").value;
    this.companyInfo.companyType = this.adminForm.get("companyType").value;
    this.companyInfo.natureOfBusiness = this.adminForm.get(
      "businessType"
    ).value;
    this.companyInfo.phone = this.adminForm.get("companyContactNumber").value;
    this.companyInfo.emailID = this.adminForm.get("emailId").value;

    // contact Information

    this.contactInfo.firstName = this.adminForm.get("firstName").value;
    this.contactInfo.middleName = this.adminForm.get("firstName").value;
    this.contactInfo.lastName = this.adminForm.get("firstName").value;
    this.contactInfo.contactNumber = this.adminForm.get(
      "customerContactNumber"
    ).value;
    this.contactInfo.emailID = this.adminForm.get("customerEmailID").value;
    this.contactInfo.designationRole = this.adminForm.get(
      "designationRole"
    ).value;

    this.userInfo.cloneMainUser = this.adminForm.get("cloneMainUser").value;

    // for (let i = 0; i < user.technologies.length; i++) {
    //   console.log("Technology Id: " + user.technologies[i].techId);
    //   console.log("Technology Name: " + user.technologies[i].techName);
    // }

    //this.userInfo.functionalities =

    this.adminService.createUser(this.user);
    this.reset();
  }
  reset() {
    this.adminForm.reset({
      cloneMainUser: false
    });
  }
}
