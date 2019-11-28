import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { DataSource } from "@angular/cdk/table";
import { Observable } from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material";
import { TokenService } from "src/app/_services";
import { UsersListing } from "../../../_models/user-management";
import { UserService } from "src/app/_services/user.service";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { DialogModalComponent } from '../../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  users: UsersListing[] = [];
  parentemailid: string;
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "subuserId",
    "isActive",
    "createdAt",
    "action"
  ];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  public dataSource = new MatTableDataSource<UsersListing>();
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router,
    private spinner: Ng4LoadingSpinnerService,
    private dialog: MatDialog
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.spinner.show();
    this.parentemailid = this.tokenService.getlocalStorage("loginname");

    this.getallsubusers();

    // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  getallsubusers() {
    this.userService.getallsubusers(this.parentemailid).subscribe(res => {
      if (res) {
        this.dataSource.data = res[0] as UsersListing[];
        this.spinner.hide();
      }
    });
  }

  public redirectToUpdate = (id: string) => {
    this.tokenService.setLocalStorage('edusrid', id);
    this.router.navigate(["/dashboard/editcustomer"]);
  };

  public openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogModalComponent, dialogConfig);
    
    // const dialogRef = this.dialog.open(DialogModalComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(
    //     data => console.log("Dialog output:", data)
    // );    
}

}
