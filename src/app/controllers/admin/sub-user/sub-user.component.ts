import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/_models/sub-user";
import { HttpErrorResponse } from "@angular/common/http";
import { DataSource } from "@angular/cdk/table";
import { Observable } from "rxjs";

export interface Users {
  firstName: string;
  lastName: string;
  loginName: string;
  Status: string;
  creationDate: string;
  lastLogin: string;
}
const ELEMENT_DATA: Users[] = [
  {
    firstName: "Ajay",
    lastName: "Verma",
    loginName: "ajay.verma@gmail.com",
    Status: "Active",
    creationDate: "10-19-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Anuj",
    lastName: "Varshney",
    loginName: "anuj.verma@gmail.com",
    Status: "Active",
    creationDate: "10-20-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Sandhya",
    lastName: "Verma",
    loginName: "pandhya.verma@ymail.com",
    Status: "InActive",
    creationDate: "10-21-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Sanjeev",
    lastName: "Verma",
    loginName: "sanjeev.verma@hotmail.com",
    Status: "InActive",
    creationDate: "10-23-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Deepak",
    lastName: "Verma",
    loginName: "deepak.verma@gmail.com",
    Status: "Active",
    creationDate: "10-24-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Vivek",
    lastName: "Kumar",
    loginName: "vivek.verma@gmail.com",
    Status: "Active",
    creationDate: "10-25-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Vinay",
    lastName: "Singh",
    loginName: "vinay.verma@gmail.com",
    Status: "Active",
    creationDate: "10-26-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Ashish",
    lastName: "Verma",
    loginName: "ashish.verma@gmail.com",
    Status: "Active",
    creationDate: "10-29-2019",
    lastLogin: "10-19-2019"
  },
  {
    firstName: "Ajay",
    lastName: "Verma",
    loginName: "ajay.verma@gmail.com",
    Status: "InActive",
    creationDate: "10-19-2019",
    lastLogin: "10-19-2019"
  }
];

@Component({
  selector: "app-sub-user",
  templateUrl: "./sub-user.component.html",
  styleUrls: ["./sub-user.component.css"]
})
export class SubUserComponent implements OnInit {
  users: Users[] = [];
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "loginName",
    "Status",
    "creationDate",
    "lastLogin"
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }
  constructor(private http: HttpClient) {}
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.http.get("./assets/dummy/subusers.json").subscribe(
      data => {
        this.users = data as Users[];
        console.log(this.users);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    // this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
}

// export class UserDataSource extends DataSource<any> {
//   constructor(private http: HttpClient) {
//     super();
//   }
//   connect(): Observable<Users[]> {
//     return this.userService.getUser("anuj.varshney@outlook.com");
//   }
//   disconnect() {}
// }
