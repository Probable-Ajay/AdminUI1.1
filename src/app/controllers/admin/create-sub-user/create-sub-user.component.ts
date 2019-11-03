import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  FormGroup
} from "@angular/forms";
import { Router } from "@angular/router";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import {
  User,
  UserInformation,
  OriginDestinations
} from "src/app/_models/sub-user";
import { AccessDetails } from "src/app/_models/sub-user";
import { AdminService } from "src/app/_services";
import { first } from "rxjs/operators";
import { DataSource, SelectionModel } from "@angular/cdk/collections";
import { Observable } from "rxjs";
import { UserService } from "src/app/_services/user.service";
import { Functionality } from "src/app/_models";
import { debug } from "util";

export interface FunctionalityDetails {
  funcId: string;
  name: string;
  readAccess: false;
  writeAccess: false;
  reportView: string[];
}
const ACCESS_DATA: FunctionalityDetails[] = [
  {
    funcId: "SP",
    name: "Shop Price",
    readAccess: false,
    writeAccess: false,
    reportView: ["Own View", "No View"]
  },
  {
    funcId: "PT",
    name: "Price Trend",
    readAccess: false,
    writeAccess: false,
    reportView: ["Own View", "No View"]
  },
  {
    funcId: "SS",
    name: "Shop Status",
    readAccess: false,
    writeAccess: false,
    reportView: ["Own View", "No View"]
  }
];

const OND_DATA: OriginDestinations[] = [
  {
    Origin: "DEL",
    Destination: "BLR"
  },
  {
    Origin: "DEL",
    Destination: "IXR"
  },
  {
    Origin: "BOM",
    Destination: "IXR"
  },
  {
    Origin: "BOM",
    Destination: "BBI"
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
  selector: "app-create-sub-user",
  templateUrl: "./create-sub-user.component.html",
  styleUrls: ["./create-sub-user.component.css"]
})
export class CreateSubUserComponent implements OnInit {
  user: User = new User();
  isValidFormSubmitted = false;
  @ViewChild("myForm", { static: false }) formValues;
  public userRoles: any[] = ["Super User", "Admin", "Analyst"];

  public reportViews: any[] = [
    { id: 1, type: "Own View" },
    { id: 2, type: "No View" }
  ];

  displayedColumns: string[] = [
    "name",
    "readAccess",
    "writeAccess",
    "reportView"
  ];
  dataSourceAccess = new MatTableDataSource<FunctionalityDetails>(ACCESS_DATA);

  displayedColumnsONDs: string[] = ["select", "Origin", "Destination"];
  dataSourceONDs = new MatTableDataSource<OriginDestinations>(OND_DATA);

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
    } row ${row.Origin + 1}`;
  }

  dataSource1 = new UserDataSource(this.userService);

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private userService: UserService
  ) {}

  ngOnInit() {
    for (let i = 0; i < ACCESS_DATA.length; i++) {
      let access = new AccessDetails();
      this.user.accessInfo[i] = access;
    }
    this.user.accessInfo[0].funcId = "SP";
    this.user.accessInfo[0].name = "Shop Price";

    this.user.accessInfo[1].funcId = "PT";
    this.user.accessInfo[1].name = "Price Trend";

    this.user.accessInfo[2].funcId = "SS";
    this.user.accessInfo[2].name = "Shop Status";

    for (let index = 0; index < OND_DATA.length; index++) {
      let ond = new OriginDestinations();
      this.user.originAndDestinations[index] = ond;
    }
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
  onSubmit() {
    this.user.userInfo.parentEmailID = "anuj.varshney@outlook.com";
    this.user.originAndDestinations = this.selectedONDs;
    console.log(JSON.stringify(this.user));

    this.isValidFormSubmitted = false;

    this.isValidFormSubmitted = true;

    this.spinnerService.show();

    this.userService
      .createSubUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.spinnerService.hide();
          // reset logic
          //this.user = null;
        },
        error => {
          this.spinnerService.hide();
          // reset logic
        }
      );
  }
  reset() {
    this.formValues.resetForm(); // Added this
    this.selection.clear();
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUser("anuj.varshney@outlook.com");
  }
  disconnect() {}
}
