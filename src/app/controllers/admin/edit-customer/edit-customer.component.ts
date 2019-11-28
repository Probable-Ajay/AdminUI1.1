import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Router, Route } from "@angular/router";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import {
  OriginDestinations,
  Functionality,
  UserModel
} from "src/app/_models/user-management";
import {
  AdminService,
  AuthenticationService,
  TokenService
} from "src/app/_services";
import { first } from "rxjs/operators";
import { DataSource, SelectionModel } from "@angular/cdk/collections";
import { Observable } from "rxjs";
import { UserService } from "src/app/_services/user.service";
import { SubUser } from "../../../_models/sub-user";

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

export interface Users {
  firstName: string;
  lastName: string;
  loginName: string;
  Status: string;
  creationDate: string;
  lastLogin: string;
}
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  user: UserModel = new UserModel();
  subuser: SubUser[];
  isValidFormSubmitted = false;
  parentemailid: string;
  @ViewChild("userForm", { static: false }) formValues;
  public userRoles: any[] = ["Super User", "Admin", "Analyst"];
  public onds: OriginDestinations[];

  public reportViews: any[] = [
    { id: 1, type: "Own View" },
    { id: 2, type: "No View" }
  ];

  displayedColumns: string[] = [
    "name",
    "readaccess",
    "writeaccess",
    "reportview"
  ];
  //dataSourceAccess = new MatTableDataSource<FunctionalityDetails>(ACCESS_DATA);
  public dataSourceAccess = new MatTableDataSource<Functionality>();
  displayedColumnsONDs: string[] = ["select", "origin", "destination"];
  public dataSourceONDs = new MatTableDataSource<OriginDestinations>();

  selection = new SelectionModel<OriginDestinations>(true, []);
  selectedONDs: OriginDestinations[] = [];

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

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService,
    private authService: AuthenticationService,
    private adminService: AdminService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.getonds();
    this.parentemailid = this.tokenService.getlocalStorage("loginname");
    this.getuserconfiguration();
  }
  getuserconfiguration() {
    this.userService.getuserconfiguration(this.parentemailid).subscribe(res => {
      if (res) {
        this.dataSourceAccess.data = JSON.parse(res[0][0].userConfigJson)
          .useraccess.functionalities as Functionality[];

        for (let i = 0; i < this.dataSourceAccess.data.length; i++) {
          let access = new Functionality();
          this.user.useraccess.functionalities[i] = access;
          switch (i) {
            case 0:
              this.user.useraccess.functionalities[i].funcid = "SP";
              this.user.useraccess.functionalities[i].name = "Shop Price";
              break;
            case 1:
              this.user.useraccess.functionalities[i].funcid = "PT";
              this.user.useraccess.functionalities[i].name = "Price Trend";
              break;
            case 2:
              this.user.useraccess.functionalities[i].funcid = "SS";
              this.user.useraccess.functionalities[i].name = "Shop Status";
              break;
            default:
              break;
          }
        }
      }
    });
  }

  getonds() {
    this.adminService.getonds().subscribe(res => {
      if (res) {
        //this.dataSourceONDs = new MatTableDataSource(res);
        this.dataSourceONDs.data = res as OriginDestinations[];
        this.onds = res as OriginDestinations[];
        for (let index = 0; index < this.onds.length; index++) {
          let ond = new OriginDestinations();
          this.user.originanddestinations[index] = ond;
        }
      }
    });
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
  OnSelectAll(event) {
    event ? this.masterToggle() : null;
    if (event.checked) {
      this.selectedONDs = this.onds;
    } else {
      this.selectedONDs = [];
    }
  }
  onSubmit() {
    this.user.parentuserid = this.parentemailid;
    this.user.originanddestinations = this.selectedONDs;
    debugger;

    this.isValidFormSubmitted = false;

    this.isValidFormSubmitted = true;

    this.user.issubuser = 1;
    //this.spinnerService.show();
    console.log(JSON.stringify(this.user));

    this.userService
      .createSubUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          debugger;
          this.spinnerService.hide();
          this.reset();
          this.router.navigate["/dashboard/manageusers"];
        },
        error => {
          this.spinnerService.hide();
          // reset logic
          this.reset();
        }
      );
  }
  reset() {
    this.formValues.resetForm(); // Added this
    this.selection.clear();
  }

}
