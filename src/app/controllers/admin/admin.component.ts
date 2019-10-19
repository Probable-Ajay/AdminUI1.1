import { Component, OnInit, ViewChild } from "@angular/core";
import {
  UserManagement,
  CompanyInformation,
  ContactInformation,
  UserAccess,
  Functionality
} from "../../_models";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray
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
import {
  MatSlideToggleChange,
  MatSlideToggle
} from "@angular/material/slide-toggle";
import { MatCheckbox, MatCheckboxChange } from "@angular/material/checkbox";
import { debug } from "util";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  user: UserManagement = new UserManagement();
  adminForm: FormGroup;
  // companyInfo: CompanyInformation = new CompanyInformation();
  // contactInfo: ContactInformation = new ContactInformation();
  // userInfo: UserAccess = new UserAccess();

  loading = false;
  isValidFormSubmitted = false;
  selectedCountry: string;
  selectedBusinessType: string;
  selectedCompanyType: string;
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
  public businessTypes: any[] = [
    "Airlines",
    "Online",
    "Offline",
    "Search engines"
  ];
  public functionalities: any[] = [
    {
      funcId: "SP",
      name: "Shop Price",
      selected: false,
      readAccess: false,
      writeAccess: false,
      fullAccess: false
    },
    {
      funcId: "PT",
      name: "Price Trend",
      selected: false,
      readAccess: false,
      writeAccess: false,
      fullAccess: false
    },
    {
      funcId: "SS",
      name: "Shop Status",
      selected: false,
      readAccess: false,
      writeAccess: false,
      fullAccess: false
    }
  ];

  constructor(
    private fb: FormBuilder,
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

  adminSection = this.fb.group({
    companyDetails: this.fb.group({
      companyName: ["", Validators.required],
      companyAddress: ["", Validators.required],
      country: ["", Validators.required],
      companyType: ["", Validators.required],
      businessType: ["", Validators.required],
      companyPhoneNumber: ["", Validators.required],
      emailId: ["", Validators.email]
    }),
    contactDetails: this.fb.group({
      firstName: ["", Validators.required],
      middleName: ["", Validators.required],
      lastName: ["", Validators.required],
      customerContactNumber: ["", Validators.required],
      customerEmailID: ["", Validators.email],
      designationRole: ["", Validators.required],
      cloneMainUser: [""]
    }),
    accessDetails: this.fb.group({
      enableFeature_0: new FormControl(false),
      readAccess_0: new FormControl(false),
      writeAccess_0: new FormControl(false),
      fullAccess_0: new FormControl(false),
      enableFeature_1: new FormControl(false),
      readAccess_1: new FormControl(false),
      writeAccess_1: new FormControl(false),
      fullAccess_1: new FormControl(false),
      enableFeature_2: new FormControl(false),
      readAccess_2: new FormControl(false),
      writeAccess_2: new FormControl(false),
      fullAccess_2: new FormControl(false)
    })
  });

  ngOnInit(): void {
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
    console.log(this.adminSection.value);

    // this.isValidFormSubmitted = false;
    // if (this.adminSection.invalid) {
    //   return;
    // }
    // this.isValidFormSubmitted = true;

    //company Information

    this.user.companyInfo.companyName = this.adminSection.value.companyDetails.companyName;
    this.user.companyInfo.companyAddress = this.adminSection.value.companyDetails.companyAddress;
    this.user.companyInfo.countries = this.adminSection.value.companyDetails.country;
    this.user.companyInfo.companyType = this.adminSection.value.companyDetails.companyType;
    this.user.companyInfo.businessType = this.adminSection.value.companyDetails.businessType;
    this.user.companyInfo.phone = this.adminSection.value.companyDetails.companyContactNumber;
    this.user.companyInfo.emailID = this.adminSection.value.companyDetails.emailId;

    // contact Information

    this.user.contactInfo.firstName = this.adminSection.value.contactDetails.firstName;
    this.user.contactInfo.middleName = this.adminSection.value.contactDetails.middleName;
    this.user.contactInfo.lastName = this.adminSection.value.contactDetails.lastName;
    this.user.contactInfo.contactNumber = this.adminSection.value.contactDetails.customerContactNumber;
    this.user.contactInfo.emailID = this.adminSection.value.contactDetails.customerEmailID;
    this.user.contactInfo.designationRole = this.adminSection.value.contactDetails.designationRole;

    this.user.userAccess.cloneMainUser = this.adminSection.value.contactDetails.cloneMainUser;

    let fun0: Functionality = new Functionality();
    fun0.readAccess = this.adminSection.value.accessDetails.readAccess_0;
    fun0.writeAccess = this.adminSection.value.accessDetails.writeAccess_0;
    fun0.fullAccess = this.adminSection.value.accessDetails.fullAccess_0;
    fun0.isToggle = this.adminSection.value.accessDetails.enableFeature_0;
    this.user.userAccess.functionalities[0] = fun0;

    let fun1: Functionality = new Functionality();
    fun1.readAccess = this.adminSection.value.accessDetails.readAccess_1;
    fun1.writeAccess = this.adminSection.value.accessDetails.writeAccess_1;
    fun1.fullAccess = this.adminSection.value.accessDetails.fullAccess_1;
    fun1.isToggle = this.adminSection.value.accessDetails.enableFeature_1;
    this.user.userAccess.functionalities[1] = fun1;

    let fun2: Functionality = new Functionality();
    fun2.readAccess = this.adminSection.value.accessDetails.readAccess_2;
    fun2.writeAccess = this.adminSection.value.accessDetails.writeAccess_2;
    fun2.fullAccess = this.adminSection.value.accessDetails.fullAccess_2;
    fun2.isToggle = this.adminSection.value.accessDetails.enableFeature_2;
    this.user.userAccess.functionalities[2] = fun2;

    console.log(this.user);
    //this.adminService.createUser(this.user);

    this.reset();
  }

  isToggle = new FormControl();

  selectedFunctionalities: any = [];

  onChange(event, index, item) {
    if (event.checked) {
      if (event.source.id.indexOf("read") > -1) {
        item.readAccess = event.checked;
      }
      if (event.source.id.indexOf("write") > -1) {
        item.writeAccess = event.checked;
      }
      if (event.source.id.indexOf("full") > -1) {
        item.fullAccess = event.checked;
        if (item.fullAccess) {
          item.readAccess = event.checked;
          item.writeAccess = event.checked;
        }
      }
      // if (event.source.id.indexOf("toggle") > -1) {
      //   item.fullAccess = event.checked;
      //   item.readAccess = event.checked;
      //   item.writeAccess = event.checked;
      // }
      if (item.readAccess && item.writeAccess) {
        item.fullAccess = event.checked;
      }
      this.selectedFunctionalities.push(item);
    } else {
      if (event.source.id.indexOf("read") > -1) {
        item.readAccess = event.checked;
      }
      if (event.source.id.indexOf("write") > -1) {
        item.writeAccess = event.checked;
      }
      if (event.source.id.indexOf("full") > -1) {
        item.fullAccess = event.checked;
        if (!item.fullAccess) {
          item.readAccess = event.checked;
          item.writeAccess = event.checked;
        }
      }
      if (event.source.id.indexOf("toggle_0") > -1) {
        item.fullAccess_0 = event.checked;
        item.readAccess_0 = event.checked;
        item.writeAccess_0 = event.checked;
      }
      if (!item.readAccess || !item.writeAccess) {
        item.fullAccess = event.checked;
      }

      let index = this.selectedFunctionalities.indexOf(item);
      if (index > -1) {
        this.selectedFunctionalities.splice(index, 1);
      }
    }
    console.log(JSON.stringify(this.selectedFunctionalities));
  }
  reset() {
    this.adminSection.reset();
    this;
  }
  onMatChange(ob: MatSlideToggleChange) {
    debugger;
    console.log(ob.checked);
    let matSlideToggle: MatSlideToggle = ob.source;
    console.log(matSlideToggle.color);
    console.log(matSlideToggle.required);
  }
}
