import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { DataSource } from "@angular/cdk/table";
import { Observable } from "rxjs";
import { TokenService } from "src/app/_services";
import { UsersListing } from "../../../_models/user-management";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-sub-user",
  templateUrl: "./sub-user.component.html",
  styleUrls: ["./sub-user.component.css"]
})
export class SubUserComponent implements OnInit {
  users: UsersListing[] = [];
  parentemailid: string;
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "subuserId",
    "isActive",
    "createdAt"
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
    private userService: UserService
  ) {}
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    debugger;
    this.parentemailid = this.tokenService.getlocalStorage("loginname");

    this.getallsubusers();

    // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  getallsubusers() {
    this.userService.getallsubusers(this.parentemailid).subscribe(res => {
      if (res) {
        this.dataSource.data = res[0] as UsersListing[];
      }
    });
  }
}
