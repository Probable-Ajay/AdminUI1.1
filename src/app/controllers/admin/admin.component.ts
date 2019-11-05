import { Component, OnInit, ViewChild } from "@angular/core";
import {
  UserModel,
  OriginDestinations,
  Functionality
} from "../../_models/user-management";

import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import {
  AuthenticationService,
  AlertService,
  AdminService,
  TokenService
} from "../../_services";
import {
  MatSlideToggleChange,
  MatSlideToggle
} from "@angular/material/slide-toggle";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { NgForm } from "@angular/forms";

const OND_DATA: OriginDestinations[] = [
  {
    origin: "DEL",
    destination: "BLR"
  },
  {
    origin: "DEL",
    destination: "IXR"
  },
  {
    origin: "BOM",
    destination: "IXR"
  },
  {
    origin: "BOM",
    destination: "BBI"
  }
];
export interface FunctionalityDetails {
  funcid: string;
  name: string;
  isSubscribed: boolean;
  readaccess: boolean;
  writeaccess: boolean;
  reportview: string[];
}
const ACCESS_DATA: FunctionalityDetails[] = [
  {
    funcid: "SP",
    name: "Shop Price",
    isSubscribed: false,
    readaccess: false,
    writeaccess: false,
    reportview: ["Own View", "No View"]
  },
  {
    funcid: "PT",
    name: "Price Trend",
    isSubscribed: false,
    readaccess: false,
    writeaccess: false,
    reportview: ["Own View", "No View"]
  },
  {
    funcid: "SS",
    name: "Shop Status",
    isSubscribed: false,
    readaccess: false,
    writeaccess: false,
    reportview: ["Own View", "No View"]
  }
];

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  user: UserModel = new UserModel();
  loading = false;
  isValidFormSubmitted = false;
  @ViewChild("userForm", { static: false }) formValues;
  validateEmail = true;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  public countries: any[];
  public companyType: any[];
  public businessTypes: any[];
  public onds: OriginDestinations[];
  loginemailid: string;
  //dataSourceONDs: any;

  displayedColumns: string[] = [
    "name",
    "isSubscribed",
    "readaccess",
    "writeaccess"
  ];
  dataSourceAccess = new MatTableDataSource<FunctionalityDetails>(ACCESS_DATA);

  displayedColumnsONDs: string[] = ["select", "origin", "destination"];
  //OND_DATA = this.onds;
  public dataSourceONDs = new MatTableDataSource<OriginDestinations>();

  selection = new SelectionModel<OriginDestinations>(true, []);
  selectedONDs: OriginDestinations[] = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private spinnerService: Ng4LoadingSpinnerService,
    private adminService: AdminService,
    private tokenService: TokenService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(["/dashboard/"]);
    // } else {
    //   this.router.navigate(["/login/"]);
    // }
  }

  ngOnInit(): void {
    this.getcountries();
    this.getcompanytypes();
    this.getbusinesstypes();
    this.getonds();
    this.loginemailid = this.tokenService.getlocalStorage("loginname");
    console.log(this.loginemailid);
    for (let i = 0; i < ACCESS_DATA.length; i++) {
      let access = new Functionality();
      //access.isSubscribed = false;
      switch (i) {
        case 0:
          access.funcid = "SP";
          access.name = "Shop Price";
          break;
        case 1:
          access.funcid = "PT";
          access.name = "Price Trend";
          break;
        case 2:
          access.funcid = "SS";
          access.name = "Shop Status";
          break;
        default:
          break;
      }
      this.user.useraccess.functionalities[i] = access;
    }
  }

  getcountries() {
    this.adminService.getCountries().subscribe(res => {
      if (res) {
        this.countries = res;
      }
    });
  }
  getcompanytypes() {
    this.adminService.getcompanytypes().subscribe(res => {
      if (res) {
        this.companyType = res;
      }
    });
  }
  getbusinesstypes() {
    this.adminService.getbusinesstypes().subscribe(res => {
      if (res) {
        this.businessTypes = res;
      }
    });
  }
  getonds() {
    this.adminService.getonds().subscribe(res => {
      if (res) {
        this.dataSourceONDs.data = res as OriginDestinations[];
        this.onds = res as OriginDestinations[];
        for (let index = 0; index < this.onds.length; index++) {
          let ond = new OriginDestinations();
          this.user.originanddestinations[index] = ond;
        }
      }
    });
  }
  getfunctionalities() {
    this.adminService.getfunctionalities().subscribe(res => {
      if (res) {
        console.log(res);
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceONDs.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSourceONDs.data.forEach(row => this.selection.select(row));
    }
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: OriginDestinations): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.origin + 1}`;
  }

  OnSelect(event, index, row) {
    event ? this.selection.toggle(row) : null;
    if (event.checked) {
      this.selectedONDs.push(row);
    } else {
      this.removeSelectedONDs(this.selectedONDs, row);
      console.log(this.selectedONDs);
    }
  }

  removeSelectedONDs(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }
  OnSelectAll(event, index, row) {
    event ? this.masterToggle() : null;
    if (event.checked) {
      this.selectedONDs = OND_DATA;
    } else {
      this.selectedONDs = [];
    }
  }

  onFormSubmit() {
    console.log(this.user);

    debugger;
    this.isValidFormSubmitted = false;
    // if (form.invalid) {
    //   return;
    // }
    this.isValidFormSubmitted = true;

    this.spinnerService.show();

    this.user.originanddestinations = this.selectedONDs;
    //this.user.issubuser = true;
    // console.log(form.value);

    this.adminService
      .createUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          debugger;
          this.spinnerService.hide();
          this.reset();
        },
        error => {
          this.spinnerService.hide();
          this.reset();
        }
      );

    this.reset();
  }

  reset() {
    this.formValues.resetForm(); // Added this
    this.selection.clear();
  }
  onMatChange(ob: MatSlideToggleChange) {
    console.log(ob.checked);
    let matSlideToggle: MatSlideToggle = ob.source;
    console.log(matSlideToggle.color);
    console.log(matSlideToggle.required);
  }
}
