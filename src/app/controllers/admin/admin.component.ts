import { Component, OnInit, ViewChild } from "@angular/core";
import {
  User,
  AccessDetails,
  OriginDestinations
} from "../../_models/user-management";

import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import {
  AuthenticationService,
  AlertService,
  AdminService
} from "../../_services";
import {
  MatSlideToggleChange,
  MatSlideToggle
} from "@angular/material/slide-toggle";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";

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
export interface FunctionalityDetails {
  funcId: string;
  name: string;
  isSubscribed: boolean;
  readAccess: boolean;
  writeAccess: boolean;
  reportView: string[];
}
const ACCESS_DATA: FunctionalityDetails[] = [
  {
    funcId: "SP",
    name: "Shop Price",
    isSubscribed: false,
    readAccess: false,
    writeAccess: false,
    reportView: ["Own View", "No View"]
  },
  {
    funcId: "PT",
    name: "Price Trend",
    isSubscribed: false,
    readAccess: false,
    writeAccess: false,
    reportView: ["Own View", "No View"]
  },
  {
    funcId: "SS",
    name: "Shop Status",
    isSubscribed: false,
    readAccess: false,
    writeAccess: false,
    reportView: ["Own View", "No View"]
  }
];

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  user: User = new User();
  loading = false;
  isValidFormSubmitted = false;
  @ViewChild("myForm", { static: false }) formValues;
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

  displayedColumns: string[] = [
    "name",
    "isSubscribed",
    "readAccess",
    "writeAccess"
  ];
  dataSourceAccess = new MatTableDataSource<FunctionalityDetails>(ACCESS_DATA);

  displayedColumnsONDs: string[] = ["select", "Origin", "Destination"];
  dataSourceONDs = new MatTableDataSource<OriginDestinations>(OND_DATA);

  selection = new SelectionModel<OriginDestinations>(true, []);
  selectedONDs: OriginDestinations[] = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private spinnerService: Ng4LoadingSpinnerService,
    private adminService: AdminService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/dashboard/"]);
    } else {
      this.router.navigate(["/login/"]);
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < ACCESS_DATA.length; i++) {
      let access = new AccessDetails();
      //access.isSubscribed = false;
      this.user.userAccess.accessInfo[i] = access;
    }

    for (let index = 0; index < OND_DATA.length; index++) {
      let ond = new OriginDestinations();
      this.user.originAndDestinations[index] = ond;
    }
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
    } row ${row.Origin + 1}`;
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
    this.isValidFormSubmitted = true;

    this.spinnerService.show();

    this.user.originAndDestinations = this.selectedONDs;
    this.user.userAccess.isSubUser = true;
    console.log(this.user);

    this.adminService
      .createUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.spinnerService.hide();

          this.reset();
        },
        error => {
          this.spinnerService.hide();
          this.reset();
        }
      );
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
